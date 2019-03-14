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

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class PacientesController : ControllerBase
    {
        public IPacienteRepository PacienteRepository;

        public PacientesController()
        {
            PacienteRepository = new PacienteRepository();
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(PacienteRepository.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        [Authorize(Roles ="0")]
        [HttpPost]
        public IActionResult Post(Pacientes pacientes)
        {
            try
            {
                PacienteRepository.Cadastrar(pacientes);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(new {
                    mensagem="Deu erro"
                });
            }
        }
        
        [Authorize(Roles ="0")]
        [HttpDelete]
         public  IActionResult Delete(Pacientes pacientes)
        {
            try
            {
                PacienteRepository.Deletar(pacientes);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}