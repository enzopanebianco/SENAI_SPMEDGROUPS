using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
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

       

        public List<Agendamentos> Listar()
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Agendamentos.ToList();
            }
        }

        public List<Agendamentos> ListarMedico(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Agendamentos.Where(x => x.IdMedico == id).ToList();
            }

        }

        public List<Agendamentos> ListarPaciente(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Agendamentos.Where(x=>x.IdPaciente==id).ToList();
            }
        }
    }
}
