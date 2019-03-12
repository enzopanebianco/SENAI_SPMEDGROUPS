using System;
using System.Collections.Generic;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Especialidades
    {
        public Especialidades()
        {
            Medicos = new HashSet<Medicos>();
        }

        public int Id { get; set; }
        public string Nome { get; set; }

        public ICollection<Medicos> Medicos { get; set; }
    }
}
