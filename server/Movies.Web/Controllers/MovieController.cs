using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Movies.Domain.Entities;
using Movies.Infrastructure;
using MoviesUI.Dtos.Movies;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Movies.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly AppDbContext dbContext;
        public MovieController(AppDbContext dbContext)
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
            var movies = dbContext.Movies?
                .OrderBy(g => g.Id);

            return movies.Include(x => x.Country).Include(x => x.Genres).ToList();
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
                .Include(x => x.Genres)
                .Include(x => x.Country)
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
        //[HttpGet("dtotest")]
        //public async Task<List<MoviesReadDto>> GetViaDto()
        //{
        //    var config = new MapperConfiguration(cfg =>
        //    {
        //        cfg.CreateMap<Movie, MoviesReadDto>();
        //        cfg.CreateMap<PublisherCountry, CountryDto>();
        //        cfg.CreateMap<Type, TypeDto>();
        //    });
        //    var mapper = new Mapper(config);
        //    var movies = mapper.Map<List<MoviesReadDto>>(await dbContext.Movies.Include(x => x.Country).Include(x => x.Type).ToListAsync());
        //    return movies;
        //} 
        /// <summary>
        /// Creating new movie, including many to many relations
        /// </summary>
        /// <param name="movie"></param>
        [HttpPost]
        public async Task<ActionResult<MovieCreateDto>> CreateMovie(MovieCreateDto movie)
        {
            //TODO Add other movie properties
            var newMovie = new Movie
            {
                Title = movie.Title,
                Description = movie.Description,

                PosterPath = movie.PosterPath,
                Rating = movie.Rating, 
                ReleaseYear = movie.ReleaseYear,

            };
            if (movie.Genres != null)
            {
                newMovie.Genres = new List<Genre>();
                foreach (var g in dbContext.Genres.Where(ge => movie.Genres.Contains(ge.Id)))
                {
                    newMovie.Genres.Add(g);
                }
            }
            if (movie.CountryId != 0) newMovie.Country = dbContext.Countries.FirstOrDefault(x => x.Id == movie.CountryId);

            dbContext.Movies?.Add(newMovie);
            dbContext.SaveChanges();
            return Ok(movie);
        }

        /// <summary>
        /// Edit movie, previously geting it by id
        /// </summary>
        /// <param name="id"></param>
        /// <param name="movie"></param>
        [HttpPut("{id}")]
        public ActionResult<MovieCreateDto> Edit(int id, MovieCreateDto movie)
        {
            var edited = dbContext.Movies?.FirstOrDefault(x => x.Id == id);
            if (edited == null) return Ok("Not found");
            edited.Title = movie.Title;
            edited.Description = movie.Description;
            edited.Rating = movie.Rating;
            edited.PosterPath = movie.PosterPath;
            edited.ReleaseYear = movie.ReleaseYear;
            edited.Genres.Clear(); //issues 
            edited.Genres = new List<Genre>();
            if (movie.Genres != null)
            {
                foreach (var g in dbContext.Genres.Where(ge => movie.Genres.Contains(ge.Id)))
                {
                    edited.Genres.Add(g);
                }
            }
            if (movie.CountryId != 0) edited.Country = dbContext.Countries.FirstOrDefault(x => x.Id == movie.CountryId);
            dbContext.Entry(edited).State = EntityState.Modified;
            dbContext.SaveChanges();
            return Ok("Successfully edited");
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
