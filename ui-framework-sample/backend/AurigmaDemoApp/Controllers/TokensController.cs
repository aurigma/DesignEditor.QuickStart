using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AurigmaDemoApp.Code;
using AurigmaDemoApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AurigmaDemoApp.Controllers
{
    public class TokensController : Controller
    {
        private readonly CustomersCanvasApiClient _apiClient;

        public TokensController(IOptions<CustomersCanvasSettings> canvasOptions)
        {
            _apiClient = new CustomersCanvasApiClient(canvasOptions.Value);
        }

        [Route("api/users/{userId}/[controller]/[action]")]
        [HttpGet]
        public async Task<IActionResult> Generate([FromRoute] string userId)
        {
            var token = await _apiClient.GenerateToken(userId);
            if (token == null)
            {
                return new BadRequestObjectResult("An error occured, please try again later");
            }
            else
            {
                return new OkObjectResult(token);
            }
        }
    }
}
