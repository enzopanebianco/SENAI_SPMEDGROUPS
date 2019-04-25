using Senai_Spmedgroups_Web_Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.ViewModels
{
    public class ConsultaViewModel
    {
        public Pacientes NomePaciente { get; set; }
        public Medicos NomeMedico { get; set; } 
        public Situacao NomeSituacao { get; set; }
    }
}
