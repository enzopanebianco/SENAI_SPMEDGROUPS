﻿using Microsoft.EntityFrameworkCore;
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
        public Pacientes Buscar(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Pacientes.FirstOrDefault(x=> x.Id == id);
            }
        }

        public void Cadastrar(Pacientes pacientes)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Pacientes.Add(pacientes);
                ctx.SaveChanges();
            }
        }

        public void Deletar(Pacientes pacientes)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                ctx.Pacientes.Remove(pacientes);
                ctx.SaveChanges();
            }
        }

        public List<Pacientes> Listar()
        {
            using (SpmedContext ctx  = new SpmedContext())
            {
              return  ctx.Pacientes.Include(x=>x.IdUsuarioNavigation).ToList();
            }
        }

        public List<Pacientes> ListarPeloId(int id)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Pacientes.Where(x => x.Id == id).ToList();
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
