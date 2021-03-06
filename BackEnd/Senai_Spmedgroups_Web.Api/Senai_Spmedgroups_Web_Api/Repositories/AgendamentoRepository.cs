﻿using Microsoft.EntityFrameworkCore;
using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using Senai_Spmedgroups_Web_Api.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Repositories
{
    public class AgendamentoRepository : IAgendamentoRepository
    {
        public void Atualizar(Agendamentos agendamentos)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Update(agendamentos);
                ctx.SaveChanges();
            }
        }

       

        public void Cadastrar(Agendamentos agendamentos)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Agendamentos.Add(agendamentos);
                ctx.SaveChanges();
            }
        }

        public void Deletar(Agendamentos agendamentos)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Agendamentos.Remove(agendamentos);
                ctx.SaveChanges();
            }
        }

        public List<Agendamentos> Listar()
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                
                return ctx.Agendamentos.Include(x => x.IdMedicoNavigation.IdUsuarioNavigation
                ).Include(x => x.IdPacienteNavigation.IdUsuarioNavigation).Include(x => x.IdSituacaoNavigation).ToList();
            }
        }

        public List<Agendamentos> ListarMedico(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                
                
                return ctx.Agendamentos.Include(x => x.IdMedicoNavigation.IdUsuarioNavigation
                ).Include(x => x.IdPacienteNavigation.IdUsuarioNavigation).Include(x => x.IdSituacaoNavigation)
                    .Where(x => x.IdMedico == id).ToList();
            }
           
        }

        public List<Agendamentos> ListarPaciente(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Agendamentos.Include(x => x.IdMedicoNavigation.IdUsuarioNavigation
                ).Include(x => x.IdPacienteNavigation.IdUsuarioNavigation).Include(x => x.IdSituacaoNavigation).Where(x=>x.IdPaciente==id).ToList();
            }
        }

        public List<Agendamentos> ListarPeloId(int id)
        {

            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Agendamentos.Include(x => x.IdMedicoNavigation.IdUsuarioNavigation
                ).Include(x => x.IdPacienteNavigation.IdUsuarioNavigation).Include(x => x.IdSituacaoNavigation).Where(x => x.Id == id).ToList();
            }
        }



        
    }
}
