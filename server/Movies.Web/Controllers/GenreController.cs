using Microsoft.AspNetCore.Mvc;
using Movies.Domain.Entities;
using Movies.Infrastructure.Repositories;

namespace Movies.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {

        private GenreRepository genreRepository;

        public GenreController(GenreRepository genreRepository)
        {
            this.genreRepository = genreRepository;
        }

        [HttpGet]
        public async Task<List<Genre>> Get()
        {
            return await genreRepository.GetGenresAsync();
        }

        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
