using Senai_Spmedgroups_Web_Api.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Usuarios
    {
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        [Required(ErrorMessage = "n se esqueça")]
        public int TipoUsuario { get; set; }
        [Required(ErrorMessage ="n se esqueça")]
        public int? IdClinica { get; set; }

        public Clinicas IdClinicaNavigation { get; set; }
        public Medicos Medicos { get; set; }
        public Pacientes Pacientes { get; set; }
    }
}
