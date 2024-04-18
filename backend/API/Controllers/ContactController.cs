using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ContactController : ControllerBase
    {

        [HttpGet(Name = "GetContact")]
        public IEnumerable<Contact> Get()
        {
            using (var context = new ProjectDBContext()) 
            {
                // get all Contacts
                return [.. context.Contact];
            }
        }
    }
}
