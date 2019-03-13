using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Repositories
{
    public class MedicoRepository : IMedicoRepository
    {
        public void Cadastrar(Medicos medicos)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Medicos.Add(medicos);
                ctx.SaveChanges();
            }
        }

        public List<Medicos> Listar()
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Medicos.ToList();
            }
        }

        public Medicos Procurar(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Medicos.FirstOrDefault(user => user.IdUsuario == id);
            }
        }
    }
}
