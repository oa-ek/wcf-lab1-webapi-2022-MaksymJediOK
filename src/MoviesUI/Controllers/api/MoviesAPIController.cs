using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesCore;

namespace MoviesUI.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesAPIController : ControllerBase
    {
        private readonly MoviesDbContext dbContext;
        public MoviesAPIController(MoviesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public List<Movie> Get()
        {
            var movies = dbContext.Movies
                .OrderBy(g => g.Id);

            return movies.Include(x => x.Genres).ToList();
        }
    }


}
