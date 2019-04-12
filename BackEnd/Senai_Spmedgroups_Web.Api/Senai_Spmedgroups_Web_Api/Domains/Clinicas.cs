using System;
using System.Collections.Generic;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Clinicas
    {
        public Clinicas()
        {
            Usuarios = new HashSet<Usuarios>();
        }

        public int Id { get; set; }
        public string NomeFantasia { get; set; }
        public string RazaoSocial { get; set; }
        public string Cnpj { get; set; }
        public string Endereço { get; set; }

        public ICollection<Usuarios> Usuarios { get; set; }
    }
}
