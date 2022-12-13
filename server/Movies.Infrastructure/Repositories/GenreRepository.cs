using Microsoft.EntityFrameworkCore;
using Movies.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Movies.Infrastructure.Repositories
{
    public class GenreRepository
    {
        private readonly AppDbContext _ctx;

        public GenreRepository(AppDbContext ctx)
        {
            _ctx = ctx;
        }
        public async Task<List<Genre>> GetGenresAsync()
        {
            return await _ctx.Genres.ToListAsync();
        }
    }
}
