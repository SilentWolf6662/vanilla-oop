using API.Models;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json.Serialization;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {

        [HttpGet(Name = "GetProject", Order = 0)]
        public IEnumerable<Project> GetProject()
        {
            using (var context = new ProjectDBContext())
            {
                // get all Projects
                return [.. context.Projects];
            }
        }
    }
}
