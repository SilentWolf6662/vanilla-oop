using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectTechnology : ControllerBase
    {
        [HttpGet(Name = "GetProjectTechnologies", Order = 2)]
        public IEnumerable<Models.ProjectTechnology> GetProjectTechnologies()
        {
            using (var context = new ProjectDBContext())
            {
                // get all Projects
                return [.. context.ProjectTechnologies];
            }
        }
    }
}
