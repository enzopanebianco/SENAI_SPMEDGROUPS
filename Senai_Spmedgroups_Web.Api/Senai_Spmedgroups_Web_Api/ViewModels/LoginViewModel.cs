using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Spmedgroups_Web_Api.ViewModels
{
    public class LoginViewModel
    {
        [Required(ErrorMessage = "Informe o email")]
        public string Email { get; set; }

        [Required(ErrorMessage = "Informe a senha")]
        [StringLength(150, MinimumLength = 3, ErrorMessage = "A senha deve ter entre 3 e 150 caracteres")]
        public string Senha { get; set; }
    }
}
