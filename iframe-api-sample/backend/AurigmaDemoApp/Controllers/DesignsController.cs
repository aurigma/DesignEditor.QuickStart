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
    [Route("api/[controller]/[action]")]
    public class DesignsController : Controller
    {
        private readonly CustomersCanvasApiClient _apiClient;

        public DesignsController(IOptions<CustomersCanvasSettings> canvasOptions)
        {
            _apiClient = new CustomersCanvasApiClient(canvasOptions.Value);
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var result = await _apiClient.GetDesigns();

            return result == null
                ? (IActionResult) new BadRequestObjectResult("An error occured, please try again later")
                : new JsonResult(result);
        }
    }
}