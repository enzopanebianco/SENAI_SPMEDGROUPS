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
    
    internal class SendGridController 
    {
        static public string Email;
        

        static async Task Execute()
        {
            var apiKey = "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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("enzo_panebianco@outlook.com", "Example User");
            var subject = "Sending with SendGrid is Fun";
            var to = new EmailAddress(Email, "Example User");
            var plainTextContent = "and easy to do anywhere, even with C#";
            var Content = "<strong>and easy to do anywhere, even with C#</strong>";
            var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, Content);
            var response = await client.SendEmailAsync(msg);
            
            
        }
        
        public void Enviar(string Email)
        {
           Execute().Wait();

        }

    }
}