using Microsoft.EntityFrameworkCore;
using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using SendGrid;
using SendGrid.Helpers.Mail;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
       
        
        public Usuarios Buscar(string email, string senha)
        {
            using (SpmedContext ctx = new SpmedContext())
            {
                return ctx.Usuarios.FirstOrDefault(user => user.Senha == senha && user.Email == email);
            }
        }

        public void Cadastrar(Usuarios usuarios)
        {
            using (SpmedContext ctx =new SpmedContext())
            {
                ctx.Usuarios.Add(usuarios);
                ctx.SaveChanges();
            }
        }

    }
}
