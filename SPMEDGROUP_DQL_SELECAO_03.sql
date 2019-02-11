

-----Conta o número de Usuários Cadastrados--------------
select COUNT(ID) as QUANTIDADE_DE_USUÁRIOS from Usuarios;
---------------------------------------------------------


 ---TRAZ O PACIENTE E A SITUACAO DO AGENDAMENTO E DATA ----|
select Usuarios.Nome , Agendamentos.ID_Medico,Situacao.Nome
,Agendamentos.DT_Agendamento							  --|						      
from Agendamentos join Pacientes						  --|
on Pacientes.ID = Agendamentos.ID_Paciente join Usuarios  --|
on Usuarios.ID = Pacientes.ID_Usuario join                --|
situacao on                                               --|  
Situacao.ID = Agendamentos.ID_Situacao					  --| 
------------------------------------------------------------|
----View que retorna o nome do paciente e o ID
alter view vwPacientes
 as select
 Pacientes.ID ,Usuarios.Nome
 from Usuarios join Pacientes
 on Usuarios.ID = Pacientes.ID_Usuario
 ------------------------------------------------
 select * from vwPacientes

 -----Retorna o Pacientes que não tem Agendamentos---------------------
 select Usuarios.Nome, Agendamentos.ID
  as ID_do_Agendamento,Agendamentos.Descricao,Agendamentos.ID_Situacao
 from Pacientes left join Agendamentos 
 on Pacientes.ID = Agendamentos.ID_Paciente join Usuarios
  on Usuarios.ID = Pacientes.ID_Usuario
  ---------------------------------------------------------------------

  --Retorna o Médico e sua Especialidade-------------------------------
  select Usuarios.Nome,Especialidades.Nome as Especialidades_
  from Medicos inner join Usuarios 
  on Usuarios.ID = Medicos.ID_Usuario join
  Especialidades on Especialidades.ID = Medicos.ID_Especialidade
  ---------------------------------------------------------------------

  --Retorna o Médico e sua Clínica-------------------------------------
  select Usuarios.Nome,Clinicas.Nome_Fantasia as Clínica
  from Usuarios inner join Medicos
  on Usuarios.ID = Medicos.ID_Usuario
  join Clinicas
  on Usuarios.ID_Clinica = Clinicas.ID
  ---------------------------------------------------------------------

  --Retorna o Paciente e sua Clínica-----------------------------------
  select Usuarios.Nome,Clinicas.Nome_Fantasia as Clínica
  from Usuarios inner join Pacientes
  on Usuarios.ID = Pacientes.ID_Usuario
  join Clinicas
  on Usuarios.ID_Clinica = Clinicas.ID
  ----------------------------------------------------------------------

  
  
   


