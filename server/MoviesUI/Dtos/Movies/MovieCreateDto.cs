namespace MoviesUI.Dtos.Movies
{
    public class MovieCreateDto
    {
        //public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public int? Seasons { get; set; }
        public string? PosterPath { get; set; }
        public float? Rating { get; set; }
        public int ReleaseYear { get; set; }
        public int Duration { get; set; }
        public int CountryId { get; set; }
        public int[]? Genres { get; set; }
    }
}
