using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Repositories
{
    public class ClinicaRepository : IClinicaRepository
    {
        public List<Clinicas> Listar()
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Clinicas.ToList();
            }
        }
    }
}
