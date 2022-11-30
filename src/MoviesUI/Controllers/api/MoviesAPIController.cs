using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesCore;
using MoviesUI.Dtos;
using Type = MoviesCore.Type;

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
        /// <summary>
        /// Get all movies including genres
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public List<Movie> Get()
        {
            var movies = dbContext.Movies
                .OrderBy(g => g.Id);

            return movies.Include(x => x.Genres).ToList();
        }
        /// <summary>
        /// Get movie by id, including all related tables
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpGet("{id}")]
        public Movie Get(int id)
        {
            var movie = dbContext.Movies?
                .Include(x => x.Directors)
                .Include(x => x.Actors)
                .Include(x => x.Genres)
                .Include(x => x.Country)
                .Include(x => x.Type)
                .FirstOrDefault(x => x.Id == id);
            if (movie == null) return null;
            return movie;
        }
        /// <summary>
        /// Search using title, that will return list of movies contains query
        /// </summary>
        /// <param name="title"></param>
        [HttpGet("search")]
        public List<Movie> Search(string title)
        {
            IQueryable<Movie> query = dbContext.Movies;

            if (!String.IsNullOrEmpty(title))
            {
                query = query.Where(e => e.Title.Contains(title));
            }
            return query.Include(x => x.Genres).ToList();

        }
        /// <summary>
        /// Get all movies via Dto
        /// </summary>
        /// <returns>Dto movies</returns>
        [HttpGet("dtotest")]
        public async Task<List<MoviesReadDto>> GetViaDto()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Movie, MoviesReadDto>();
                cfg.CreateMap<PublisherCountry, CountryDto>();
                cfg.CreateMap<Type, TypeDto>();
            });
            var mapper = new Mapper(config);
            var movies = mapper.Map<List<MoviesReadDto>>(await dbContext.Movies.Include(x => x.Country).Include(x => x.Type).ToListAsync());
            return movies;
        }
        /// <summary>
        /// Delete movie by id param
        /// </summary>
        /// <param name="id"></param>
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            if (dbContext.Movies != null)
            {
                dbContext.Movies.Remove(dbContext.Movies.Find(id));
                dbContext.SaveChanges();
            }
        }
    }

}
