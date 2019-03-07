create database SENAI_SPRINT1_PROJETO_FINAL

create table Clinicas(
	ID int identity primary key
	,Nome_Fantasia varchar(255) not null unique
	,Razao_Social varchar(255) not null unique
	,CNPJ char(14) not null unique
	,Endereço varchar(255)
);

create table Usuarios(
	ID int identity primary key
	,Nome varchar(255) not null
	,Email varchar(255) not null
	,Senha varchar(255) not null
	,Tipo_Usuario bit not null
	,ID_Clinica int foreign key references Clinicas(ID)
);


create table Especialidades(
	ID int identity primary key
	,Nome varchar(255) not null unique
);

create table Medicos (
	ID int identity primary key 
	,ID_Usuario int foreign key references Usuarios(ID) unique
	,CRM int unique 
	,ID_Especialidade int foreign key references Especialidades(ID)
);

create table Pacientes(
	ID int identity primary key
	,ID_Usuario int foreign key references Usuarios(ID) unique
	,CPF char(11) not null unique
	,RG char(11)  not null unique
	,Endereço varchar(255) not null 
	,DT_Nascimento date not null 
);

create table Situacao(
	ID int identity primary key 
	,Nome varchar(255) not null unique
);

create table Agendamentos(
	ID int identity primary key
	,ID_Paciente int foreign key references Pacientes(ID) not null
	,ID_Medico int foreign key references Medicos(ID) not null
	,DT_Agendamento date not null
	,Descricao text not null
	,ID_Situacao int foreign key references Situacao(ID) not null
);