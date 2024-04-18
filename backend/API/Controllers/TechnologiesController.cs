using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TechnologiesController : ControllerBase
    {

        [HttpGet(Name = "GetTechnologies", Order = 1)]
        public IEnumerable<Technology> GetTechnologies()
        {
            using (var context = new ProjectDBContext())
            {
                // get all Technologies
                return [.. context.Technologies];
            }
        }
    }
}
