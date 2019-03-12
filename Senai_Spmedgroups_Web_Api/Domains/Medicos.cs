using System;
using System.Collections.Generic;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Medicos
    {
        public Medicos()
        {
            Agendamentos = new HashSet<Agendamentos>();
        }

        public int Id { get; set; }
        public int? IdUsuario { get; set; }
        public int? Crm { get; set; }
        public int? IdEspecialidade { get; set; }

        public Especialidades IdEspecialidadeNavigation { get; set; }
        public Usuarios IdUsuarioNavigation { get; set; }
        public ICollection<Agendamentos> Agendamentos { get; set; }
    }
}
