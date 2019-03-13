using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Pacientes
    {
        public Pacientes()
        {
            Agendamentos = new HashSet<Agendamentos>();
        }

        public int Id { get; set; }
        public int? IdUsuario { get; set; }
        public string Cpf { get; set; }
        public string Rg { get; set; }
        public string Endereço { get; set; }
        [Required]
        public DateTime? DtNascimento { get; set; }

        public Usuarios IdUsuarioNavigation { get; set; }
        public ICollection<Agendamentos> Agendamentos { get; set; }
    }
}
