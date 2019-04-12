

-----Conta o n�mero de Usu�rios Cadastrados--------------
select COUNT(ID) as QUANTIDADE_DE_USU�RIOS from Usuarios;
---------------------------------------------------------


 ---TRAZ O PACIENTE E A SITUACAO DO AGENDAMENTO E DATA -----|
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

 -----Retorna o Pacientes que n�o tem Agendamentos---------------------
 select Usuarios.Nome, Agendamentos.ID
  as ID_do_Agendamento,Agendamentos.Descricao,Agendamentos.ID_Situacao
 from Pacientes left join Agendamentos 
 on Pacientes.ID = Agendamentos.ID_Paciente join Usuarios
  on Usuarios.ID = Pacientes.ID_Usuario
  ---------------------------------------------------------------------

  --Retorna o M�dico e sua Especialidade-------------------------------
  select Usuarios.Nome,Especialidades.Nome as Especialidades_
  from Medicos inner join Usuarios 
  on Usuarios.ID = Medicos.ID_Usuario join
  Especialidades on Especialidades.ID = Medicos.ID_Especialidade
  ---------------------------------------------------------------------

  --Retorna o M�dico e sua Cl�nica-------------------------------------
  select Usuarios.Nome,Clinicas.Nome_Fantasia as Cl�nica
  from Usuarios inner join Medicos
  on Usuarios.ID = Medicos.ID_Usuario
  join Clinicas
  on Usuarios.ID_Clinica = Clinicas.ID
  ---------------------------------------------------------------------

  --Retorna o Paciente e sua Cl�nica-----------------------------------
  select Usuarios.Nome,Clinicas.Nome_Fantasia as Cl�nica
  from Usuarios inner join Pacientes
  on Usuarios.ID = Pacientes.ID_Usuario
  join Clinicas
  on Usuarios.ID_Clinica = Clinicas.ID
  ----------------------------------------------------------------------

---------Retorna todos os Usu�rios mesmo que n�o sejam M�dicos----------
  select Usuarios.Nome as Usu�rios , Medicos.ID_Usuario as M�dicos
  from Usuarios left join Medicos
  on Medicos.ID_Usuario = Usuarios.ID 
  ----------------------------------------------------------------------
 
---------Retorna todos os Usu�rios mesmo que n�o sejam Pacientes----------
  Create Procedure Buscas
 as
  begin
	select Usuarios.Nome as Usu�rios , Pacientes.ID_Usuario as Pacientes
	from Usuarios left join Pacientes
	on Pacientes.ID_Usuario = Usuarios.ID
  end
  --------------
   exec Buscas
  ----------------------------------------------------------------------

  -----�ndice Agendamento Clusterizado----------------------------------
  CREATE CLUSTERED INDEX Cluster
    ON dbo.Agendamentos (ID);
------------------------------------------------------------------------
select Agendamentos.DT_Agendamento 
from Agendamentos


-------------------------------------------
CREATE PROCEDURE CALCULAR_IDADE_PACIENTE
	@ID_PACIENTE INT
AS
BEGIN
	DECLARE @DATA_NASCIMENTO DATETIME
	SET @DATA_NASCIMENTO = (SELECT DT_NASCIMENTO FROM PACIENTES WHERE ID = @ID_PACIENTE)

	SELECT FLOOR(DATEDIFF(DAY, @DATA_NASCIMENTO, GETDATE()) / 365.25) AS IDADE_DO_PACIENTE
END
--------------------------------------------
EXEC CALCULAR_IDADE_PACIENTE 11
--------------------------------------------

select * from Pacientes