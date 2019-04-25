using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai_Spmedgroups_Web_Api.Domains;
using Senai_Spmedgroups_Web_Api.Interfaces;
using Senai_Spmedgroups_Web_Api.Repositories;
using Senai_Spmedgroups_Web_Api.ViewModels;

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private IUsuarioRepository UsuarioRepository;

        public LoginController()
        {
            UsuarioRepository = new UsuarioRepository();
        }
        [HttpPost]
        public IActionResult Post(LoginViewModel login)
        {
            try
            {
                Usuarios usuario = UsuarioRepository.Buscar(login.Email,login.Senha);
                
                if (usuario == null)
                {
                    return NotFound(new
                    {
                        mensagem = "Usuário não encontrado"
                    });
                }
                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Jti, usuario.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Email, usuario.Email),
                    new Claim("nome",usuario.Nome),
                    new Claim(ClaimTypes.Role, usuario.TipoUsuario.ToString()),
                    new Claim("tipo",usuario.TipoUsuario.ToString())
                    
                };
               
                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("spmedgroup-chave-autenticacao"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "Spmedgroup.WebApi",
                    audience: "Spmedgroup.WebApi",
                    claims: claims,
                    expires: DateTime.Now.AddMinutes(60),
                    signingCredentials: creds);
                    return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch (Exception ex)
            {
                return BadRequest(new
                {
                    mensagem = "Usuário não Encontrado"
                });
            }
        }
    }
}