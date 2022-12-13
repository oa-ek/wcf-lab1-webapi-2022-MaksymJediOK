using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

 namespace Movies.Domain.Entities

{
    public class Movie
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? PosterPath { get; set; }
        public float? Rating { get; set; }
        public int ReleaseYear { get; set; }
        public PublisherCountry? Country { get; set; }
        public virtual ICollection<Genre>? Genres { get; set; } = new List<Genre>();
        public virtual ICollection<Director>? Directors { get; set; } = new List<Director>();
        public override string ToString()
        {
            return $"{Title}";
        }
    }
}
