
using Microsoft.AspNetCore.Mvc;
using PokemonAPI.Controllers.Models;
using PokemonAPI.Repositories.Interfaces;

namespace PokemonAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PokemonController : ControllerBase
    {
        private readonly IPokemonRepository _repository;
        public PokemonController(IPokemonRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<List<PokemonModel>>> FindAllPokemons()
        {
            var pokemons = await _repository.FindAllPokemons();
            return Ok(pokemons);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<PokemonModel>> FindPokemonById(int id)
        {
            var pokemon = await _repository.FindPokemonById(id);
            return Ok(pokemon);
        }
        [HttpPost]
        public async Task<ActionResult<PokemonModel>> RegisterPokemon(PokemonModel pokemon)
        {
            var pokemonSaved = await _repository.AddNewPokemon(pokemon);
            return CreatedAtAction(nameof(FindPokemonById), new { id = pokemonSaved.Id }, pokemonSaved);
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<PokemonModel>> UpdatePokemon(PokemonModel pokemon, int id)
        {
            var pokemonEdited = await _repository.UpdatePokemon(pokemon, id);
            return Ok(pokemonEdited);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeletePokemon(int id)
        {
            var result = await _repository.DeletePokemon(id);
            return Ok(result);
        }
    }
}