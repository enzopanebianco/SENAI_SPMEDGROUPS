using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using Senai_Spmedgroups_Web_Api.Repositories;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        public IUsuarioRepository UsuarioRepository;

        public UsuariosController()
        {
            UsuarioRepository = new UsuarioRepository();
        }
        [Authorize(Roles = "0")]
        [HttpPost]
        public IActionResult Post(Usuarios usuarios)
        {
            try
            {
                UsuarioRepository.Cadastrar(usuarios);
                
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
                
            }
        }
        [Authorize(Roles = "0")]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
             {
            try
            {
                return Ok(UsuarioRepository.ListarPeloId(id));
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        
    }
}