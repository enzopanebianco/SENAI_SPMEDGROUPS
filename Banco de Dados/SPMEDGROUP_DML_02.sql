select * from Usuarios
select Pacientes.ID_Usuario, Usuarios.Nome from Pacientes inner join Usuarios on Pacientes.ID_Usuario = Usuarios.ID
		
select * from Situacao
select * from Usuarios
select * from Medicos
select * from Agendamentos
select * from Clinicas


insert into Pacientes(ID_Usuario,CPF,RG,Endere�o,DT_Nascimento)
Values  ('2','94839859000','43522543-5','Rua Estado de Israel 240,�S�o Paulo, Estado de S�o Paulo, 04022-000','13/10/1983')
		,('4','16839338002','54636525-3','Av. Ibirapuera - Indian�polis, 2927,  S�o Paulo - SP, 04029-200','10/10/1978')
		,('6','91305348010','t32544444-1','R. Ver. Geraldo de Camargo, 66 - Santa Luzia, Ribeir�o Pires - SP, 09405-380','27/08/1975')
		,('7','79799299004','54566266-8','Alameda dos Arapan�s, 945 - Indian�polis, S�o Paulo - SP, 04524-001','21/03/1972')
		,('8','13771913039','54222126-8','R Sao Antonio, 232 - Vila Universal, Barueri - SP, 06407-140','05/03/2018')
		,(11,'231141910','94322136-8','R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP, 06402-030','23/02/1995')

insert into Usuarios(Nome,Email,Senha,Tipo_Usuario,ID_Clinica)
Values ('Alexandre','Ale@gmail.com','2121112',1,1)



insert into Pacientes(ID_Usuario,CPF,RG,Endere�o,DT_Nascimento)
Values (11,'231141910','94322136-8','R. Vit�ria, 120 - Vila Sao Jorge, Barueri - SP, 06402-030','23/02/1995')

insert into Agendamentos(ID_Paciente,ID_Medico,DT_Agendamento,Descricao,ID_Situacao)
Values (11,3,'20/01/2019 15:00','OK',2)
		,(17,1,'06/01/2018 10:00','OK',3)
		,(12,1,'07/02/2019 11:00','Restam 10 dias de vida',2)
		,(17,1,'06/02/2018  10:00:00','Inst�vel',2)
		,(16,2,'07/02/2019  11:00:45','OK',3)
		,(11,3,'08/02/2019  15:00:00','OK',1)
		,(16,2,'09/02/2019  11:00:45','Inst�vel',1)

select* from Medicos

select* from Usuarios

delete from Usuarios where ID=19 

select Usuarios.Nome,Medicos.CRM from Medicos join Usuarios on Medicos.ID_Usuario =Usuarios.ID  from Usuarios join Pacientes on Pacientes.ID_Usuario=Usuarios.ID   join Agendamentos 
on Agendamentos.ID_Paciente=Pacientes.ID;
