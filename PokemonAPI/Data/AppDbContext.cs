using Microsoft.EntityFrameworkCore;
using PokemonAPI.Controllers.Models;
using PokemonAPI.Data.Map;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<PokemonModel> Pokemons { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.ApplyConfiguration(new PokemonMap());
        base.OnModelCreating(modelBuilder);
    }
}
