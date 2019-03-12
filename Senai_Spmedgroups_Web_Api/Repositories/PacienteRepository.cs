using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Repositories
{
    public class PacienteRepository : IPacienteRepository
    {
        public List<Pacientes> Listar()
        {
            using (SpmedContext ctx  = new SpmedContext())
            {
              return  ctx.Pacientes.ToList();
            }
        }

        public Pacientes Procurar(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Pacientes.FirstOrDefault(user=>user.IdUsuario==id);
            }
        }
        
    }
}
