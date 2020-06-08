using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AurigmaDemoApp.Data;
using AurigmaDemoApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AurigmaDemoApp.Controllers
{
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        [HttpPost]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Create([FromBody] Project project)
        {
            var result = await ProjectsRepository.Save(project);
            return new JsonResult(result);
        }

        [HttpPut]
        [Route("api/[controller]/[action]")]
        public async Task<IActionResult> Update([FromBody] Project project)
        {
            var result = await ProjectsRepository.Update(project);
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("api/users/{userId}/[controller]/[action]")]
        public async Task<IActionResult> GetAll(string userId)
        {
            var result = await ProjectsRepository.GetAllForUser(userId);
            return new JsonResult(result);
        }

        [HttpGet]
        [Route("api/users/{userId}/[controller]/{projectId}")]
        public async Task<IActionResult> Get(string userId, long projectId)
        {
            var result = await ProjectsRepository.Get(userId, projectId);
            if (result == null)
            {
                return StatusCode(404);
            }
            else
            {
                return new JsonResult(result);
            }
        }
    }
}