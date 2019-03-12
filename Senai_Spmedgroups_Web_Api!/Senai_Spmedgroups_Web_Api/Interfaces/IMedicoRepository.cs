using Senai_Spmedgroups_Web_Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Interfaces
{
    public interface IMedicoRepository
    {
        List<Medicos> Listar();
        Medicos Procurar(int id);
        
    }
}
