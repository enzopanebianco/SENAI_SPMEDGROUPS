using System;
using System.Collections.Generic;

namespace Senai_Spmedgroups_Web_Api.Domains
{
    public partial class Agendamentos
    {
        public int Id { get; set; }
        public int IdPaciente { get; set; }
        public int IdMedico { get; set; }
        public DateTime DtAgendamento { get; set; }
        public string Descricao { get; set; }
        public int IdSituacao { get; set; }

        public Medicos IdMedicoNavigation { get; set; }
        public Pacientes IdPacienteNavigation { get; set; }
        public Situacao IdSituacaoNavigation { get; set; }
    }
}
