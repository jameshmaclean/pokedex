using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PokemonAPI.Controllers.Models;

namespace PokemonAPI.Repositories.Interfaces
{
    public interface IPokemonRepository
    {
        Task<List<PokemonModel>> FindAllPokemons();

        Task<PokemonModel> FindPokemonById(int id);

        Task<PokemonModel> AddNewPokemon(PokemonModel model);

        Task<PokemonModel> UpdatePokemon(PokemonModel model, int id);

        Task<bool> DeletePokemon(int id);

    }
}