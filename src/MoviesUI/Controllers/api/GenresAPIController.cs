using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesCore;


// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace MoviesUI.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenresAPIController : ControllerBase
    {
        private readonly MoviesDbContext dbContext;
        public GenresAPIController(MoviesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        // GET: api/<GenresAPIController>
        [HttpGet]
        public async Task<ActionResult<List<Genre>>> Get()
        {

            var genres = await dbContext.Genres.Include(x => x.Movies).ToListAsync();

            return genres;
        }

        // GET api/<GenresAPIController>/5
        [HttpGet("{id}")]
        public async Task<List<Movie>> Get (int id)
        {
            var query = from x in dbContext.Movies
                        where x.Genres.Any(x => x.Id == id)
                        select x;
            return await query.Include(x => x.Genres).Include(x => x.Type).ToListAsync(); 
        }

        // POST api/<GenresAPIController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<GenresAPIController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<GenresAPIController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
