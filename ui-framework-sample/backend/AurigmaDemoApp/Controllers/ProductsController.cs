using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AurigmaDemoApp.Code;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AurigmaDemoApp.Controllers
{
    
    public class ProductsController : Controller
    {
        [HttpGet]
        [Route("api/[controller]/[action]")]
        public IActionResult GetAll()
        {
            return new JsonResult(ProductsHelper.GetProductConfigsList());
        }

        [HttpGet]
        [Route("api/[controller]/{id}")]
        public async Task<IActionResult> Get(string id)
        {
            var file = await ProductsHelper.GetProductConfig(id);
            if (string.IsNullOrEmpty(file))
            {
                return StatusCode(404);
            }
            else
            {
                object jsonObject = JsonConvert.DeserializeObject(file);
                return new JsonResult(jsonObject);
            }
        }
    }
}
