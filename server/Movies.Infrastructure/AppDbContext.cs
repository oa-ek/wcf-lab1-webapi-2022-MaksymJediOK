using Microsoft.EntityFrameworkCore;
using Movies.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movies.Infrastructure
{
    public class AppDbContext :DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
         : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Movie>()
               .HasMany(x => x.Genres)
               .WithMany(x => x.Movies);

            builder.Entity<Movie>()
                .HasMany(x => x.Directors)
                .WithMany(x => x.Movies);
            // builder.Seed();
            base.OnModelCreating(builder);
        }

        public DbSet<Movie>? Movies { get; set; }
        public DbSet<Genre>? Genres { get; set; }

        public DbSet<Director>? Directors { get; set; }
        public DbSet<PublisherCountry>? Countries { get; set; }
    }
}
