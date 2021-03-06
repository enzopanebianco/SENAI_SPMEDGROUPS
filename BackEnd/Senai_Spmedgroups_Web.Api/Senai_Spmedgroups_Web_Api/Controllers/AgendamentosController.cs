﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using Senai_Spmedgroups_Web_Api.Repositories;

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class AgendamentosController : ControllerBase
    {
        private IAgendamentoRepository AgendamentoRepository;
        private IPacienteRepository PacienteRepository;
        private IMedicoRepository MedicoRepository;

        public AgendamentosController()
        {
            AgendamentoRepository = new AgendamentoRepository();
            PacienteRepository = new PacienteRepository();
            MedicoRepository = new MedicoRepository();
        }

        [Authorize(Roles = "0,2")]
        [Route("/{id}")]
        [HttpPut]
        public IActionResult Put(Agendamentos agendamentos)
        {
            try
            {
                AgendamentoRepository.Atualizar(agendamentos);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        [Authorize(Roles = "0")]
        
        [HttpPost]
        public IActionResult Post(Agendamentos agendamentos)
        {
            try
            {
                AgendamentoRepository.Cadastrar(agendamentos);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        //[Authorize(Roles = "0,1")]
        [HttpGet]

        [Route("pacientes")]
        
        public IActionResult GetById()
        {
            try
            {
                int usuariosId = Convert.ToInt32(HttpContext.User.Claims.First(a => a.Type == JwtRegisteredClaimNames.Jti).Value);
                Pacientes pacientes = PacienteRepository.Procurar(usuariosId);
                Medicos medicos = MedicoRepository.Procurar(usuariosId);
                if (pacientes==null)
                {
                    return NotFound();
                }
                return Ok(AgendamentoRepository.ListarPaciente(pacientes.Id));
            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Paciente não Encontrado"
                });
            }
        }
        [Authorize(Roles = "0,2")]
        [HttpGet]
        [Route("medicos")]
        
        public IActionResult GetByIDMedico()
        {
            try
            {
                int usuariosId = Convert.ToInt32(HttpContext.User.Claims.First(a => a.Type == JwtRegisteredClaimNames.Jti).Value);
                Medicos medicos = MedicoRepository.Procurar(usuariosId);
                
                return Ok(AgendamentoRepository.ListarMedico(medicos.Id));
            }
            catch (Exception ex)
            {

                return BadRequest(new
                {
                    mensagem = "Médico não Encontrado"
                });
            }
        }
        //[Authorize(Roles = "0")]
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(AgendamentoRepository.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        //[Authorize(Roles = "0")]

        [HttpGet("{id}")]
        public IActionResult GetID(int id)
        {
            try
            {
                return Ok(AgendamentoRepository.ListarPeloId(id));
            }
            catch (Exception ex)
            {

                return BadRequest();
            }
        }
        [HttpGet]
        [Authorize]
        [Route("usuarios")]
        public IActionResult GetByIdLogado()
        {
            try
            {
                int usuariosId = Convert.ToInt32(HttpContext.User.Claims.First(a => a.Type == JwtRegisteredClaimNames.Jti).Value);
                string usuariotipo = HttpContext.User.Claims.First(a => a.Type == ClaimTypes.Role).Value;
               
                if (usuariotipo=="1")
                {
                    Pacientes pacientes = PacienteRepository.Procurar(usuariosId);
                    return Ok(AgendamentoRepository.ListarPaciente(pacientes.Id));
                } else if (usuariotipo=="2")
                {
                    Medicos medicos = MedicoRepository.Procurar(usuariosId);
                    return Ok(AgendamentoRepository.ListarMedico(medicos.Id));
                } else
                {
                    return NotFound();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
        [Route("/{id}")]
        [HttpDelete]
        public IActionResult Deletar(Agendamentos agendamentos)
        {
            try
            {
                AgendamentoRepository.Deletar(agendamentos);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

    }
}