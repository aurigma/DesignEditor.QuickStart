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
    public class StatesController : Controller
    {
        private readonly CustomersCanvasApiClient _apiClient;

        public StatesController(IOptions<CustomersCanvasSettings> canvasOptions)
        {
            _apiClient = new CustomersCanvasApiClient(canvasOptions.Value);
        }

        [HttpGet]
        [Route("api/users/{userId}/[controller]/[action]/")]
        public async Task<IActionResult> GetAll([FromRoute] string userId)
        {
            var result = await _apiClient.GetStates(userId);

            return result == null
                ? (IActionResult) new BadRequestObjectResult("An error occured, please try again later")
                : new OkObjectResult(result);
        }
    }
}