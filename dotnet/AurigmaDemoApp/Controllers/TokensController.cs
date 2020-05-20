using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AurigmaDemoApp.Code;
using AurigmaDemoApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

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

            return token == null
                ? new BadRequestObjectResult("An error occured, please try again later")
                : (IActionResult) new OkObjectResult(token);
        }

    }
}