using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoviesCore;
using Swashbuckle.AspNetCore.Annotations;

namespace MoviesUI.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BookmarkAPIController : ControllerBase
    {
        private readonly MoviesDbContext dbContext;
        public BookmarkAPIController(MoviesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        /// <summary>
        /// Get authorized user bookmarks
        /// </summary>
        [SwaggerResponse(StatusCodes.Status200OK, Type = typeof(List<Movie>))]
        [SwaggerResponse(StatusCodes.Status400BadRequest)]
        [HttpGet]
        public List<Movie> Index()
        {
            var currentUser = dbContext.Users.Include(x => x.Movies).FirstOrDefault(x => x.UserName == User.Identity.Name);
            if (currentUser != null)
            {
                return currentUser.Movies?.ToList();
            }
            return null;
        }
    }
}
