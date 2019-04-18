using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Spmedgroups_Web_Api.Interfaces;
using Senai_Spmedgroups_Web_Api.Repositories;

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialidadesController : ControllerBase
    {
        private IEspecialidadeRepository EspecialidadeRepository;

        public EspecialidadesController()
        {
            EspecialidadeRepository = new EspecialidadeRepository();
        }
        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                return Ok(EspecialidadeRepository.Listar());
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}