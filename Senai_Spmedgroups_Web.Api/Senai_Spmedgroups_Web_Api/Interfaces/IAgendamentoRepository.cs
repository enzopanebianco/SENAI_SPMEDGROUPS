﻿using Senai_Spmedgroups_Web_Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Interfaces
{
     public interface IAgendamentoRepository
    {
        void Atualizar(Agendamentos agendamentos);
        void Cadastrar(Agendamentos agendamentos);
        List<Agendamentos> ListarPaciente(int id);
        List<Agendamentos> ListarMedico(int id);
        List<Agendamentos> Listar(); 
    }
}