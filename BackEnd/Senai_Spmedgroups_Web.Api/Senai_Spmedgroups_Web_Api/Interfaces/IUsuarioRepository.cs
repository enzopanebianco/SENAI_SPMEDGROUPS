using Senai_Spmedgroups_Web_Api.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.Interfaces
{
    public interface IUsuarioRepository
    {
        void Cadastrar(Usuarios usuarios);
        Usuarios Buscar(string email ,string senha);
        List<Usuarios> ListarPeloId(int id);
    }
}
