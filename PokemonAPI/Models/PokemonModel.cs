
using System.ComponentModel.DataAnnotations;

namespace PokemonAPI.Controllers.Models
{
    public class PokemonModel
    {
        [Key]
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Description { get; set; }
        public string? Type { get; set; }
    }
}