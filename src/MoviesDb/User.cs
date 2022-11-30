using Microsoft.AspNetCore.Identity;
using System.Text.Json.Serialization;

namespace MoviesCore

{
    public class User : IdentityUser
    {
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        [JsonIgnore]
        public virtual ICollection<Movie>? Movies { get; set; } = new List<Movie>();
    }
}