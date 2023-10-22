
using Microsoft.EntityFrameworkCore;
using PokemonAPI.Controllers.Models;
using PokemonAPI.Repositories.Interfaces;

namespace PokemonAPI.Repositories
{
    public class PokemonRepository : IPokemonRepository
    {
        private readonly AppDbContext _dbContext;
        public PokemonRepository(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<PokemonModel> AddNewPokemon(PokemonModel pokemon)
        {
            await _dbContext.Pokemons.AddAsync(pokemon);
            await _dbContext.SaveChangesAsync();
            return pokemon;
        }

        public async Task<bool> DeletePokemon(int id)
        {
            PokemonModel pokemonToEdit = await FindPokemonById(id);
            if (pokemonToEdit == null)
            {
                throw new Exception("Pokemon not found with id " + id);
            }
            _dbContext.Remove(pokemonToEdit);
            await _dbContext.SaveChangesAsync();
            return true;

        }

        public  async Task<List<PokemonModel>> FindAllPokemons()
        {
            return await _dbContext.Pokemons.ToListAsync();
        }

        public async Task<PokemonModel> FindPokemonById(int id)
        {
            PokemonModel? pokemonToReturn = await _dbContext.Pokemons.FirstOrDefaultAsync(x => x.Id == id);
            if (pokemonToReturn == null)
            {
                throw new Exception("Pokemon not found with id " + id);
            }
            return pokemonToReturn;
        }

        public async Task<PokemonModel> UpdatePokemon(PokemonModel model, int id)
        {
            PokemonModel pokemonToEdit = await FindPokemonById(id);
            if (pokemonToEdit == null)
            {
                throw new Exception("Pokemon not found with id " + id);
            }
            pokemonToEdit.Name = model.Name;
            pokemonToEdit.Description = model.Description;
            pokemonToEdit.Type = model.Type;
            _dbContext.Pokemons.Update(pokemonToEdit);
            await _dbContext.SaveChangesAsync();
            return pokemonToEdit;
        }
    }
}