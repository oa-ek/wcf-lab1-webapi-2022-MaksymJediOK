using Microsoft.AspNetCore.Mvc;
using MoviesCore;


namespace MoviesUI.Controllers.api
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersAPIController : ControllerBase
    {

        private readonly MoviesDbContext dbContext;
        public UsersAPIController(MoviesDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        /// <summary>
        /// Get List of all users in db
        /// </summary>
        /// <returns>List of User</returns>
        [HttpGet]
        public List<User> Get()
        {
            return dbContext.Users.ToList();
        }
   
    }
}
