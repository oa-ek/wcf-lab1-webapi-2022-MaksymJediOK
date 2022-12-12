using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesCore;
using AutoMapper;
using MoviesUI.Dtos;


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
        /// <summary>
        /// Get all available genres from db
        /// </summary>
        /// <returns>List of genres</returns>
        [HttpGet]
        public async Task<ActionResult<List<GenreReadDto>>> Get()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Genre, GenreReadDto>());
            var mapper = new Mapper(config);
            var genres = mapper.Map<List<GenreReadDto>>(await dbContext.Genres.ToListAsync());
            return genres;
        }

        /// <summary>
        /// Get movies that correspond to a certain genre
        /// </summary>
        /// <param name="id"></param>
        /// <returns>Movies List</returns>
        [HttpGet("{id}")]
        public async Task<List<Movie>> Get(int id)
        {
            var query = from x in dbContext.Movies
                        where x.Genres.Any(x => x.Id == id)
                        select x;
            return await query.Include(x => x.Genres).Include(x => x.Type).ToListAsync();
        }


    }
}
