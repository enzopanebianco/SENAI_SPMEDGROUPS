using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace Senai_Spmedgroups_Web_Api.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class SendGridController : ControllerBase
    {

        async Task Execute()
        {
            var apiKey = Environment.GetEnvironmentVariable("spmedgroup");
            var client = new SendGridClient("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");
            var from = new EmailAddress("enzo_panebianco@outlook.com", "Example User");
            var subject = "Sending with SendGrid is Fun";
            var to = new EmailAddress("enzinho983@gmail.com", "Example User");
            var plainTextContent = "and easy to do anywhere, even with C#";
            var Content = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, Content);
            var response = await client.SendEmailAsync(msg);


        }
    }
}