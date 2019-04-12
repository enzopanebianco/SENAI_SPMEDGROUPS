using System;
using System.Collections.Generic;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Situacao
    {
        public Situacao()
        {
            Agendamentos = new HashSet<Agendamentos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Agendamentos> Agendamentos { get; set; }
    }
}
