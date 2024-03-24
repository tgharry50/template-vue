using Microsoft.AspNetCore.Mvc;

namespace VueApp1.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class IndexController : Controller
    {
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            return Ok("k");
        }
    }
}
