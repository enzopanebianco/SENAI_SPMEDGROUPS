using Senai_Spmedgroups_Web_Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.ViewModels
{
    public class ConsultaViewModel
    {
        public int ID { get; set; }
        public string PacienteNome { get; set; }
        public string MedicoNome { get; set; } 
        public string Descricao { get; set; }
        public DateTime DataConsulta { get; set; }
        public string SituacaoNome { get; set; }
    }
}
