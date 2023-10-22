using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace PokemonAPI.Migrations
{
    /// <inheritdoc />
    public partial class create_table_pokemons : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pokemons",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false),
                    Type = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pokemons", x => x.Id);
                });
            migrationBuilder.InsertData(
    table: "Pokemons",
    columns: new[] { "Name", "Description", "Type" },
    values: new object[] { "Pikachu", "Pikachu is an Electric-type Pokémon, which stores electricity in its cheeks and releases it when necessary.", "electric" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Charizard", "Charizard is a Fire/Flying-type Pokémon that can breathe fire of such great heat that it melts anything.", "fire" });

            // Adicione mais entradas conforme necessário
            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Squirtle", "Squirtle is a Water-type Pokémon, which uses its shell to shield itself and sprays water at opponents.", "water" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Bulbasaur", "Bulbasaur is a Grass/Poison-type Pokémon, which can be seen napping in bright sunlight.", "grass" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Jigglypuff", "Jigglypuff is a Normal/Fairy-type Pokémon, known for its soothing lullabies that make foes fall asleep.", "fairy" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Gyarados", "Gyarados is a Water/Flying-type Pokémon, often described as the ruler of the seas.", "water" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Alakazam", "Alakazam is a Psychic-type Pokémon, known for its superior intellect and ability to remember everything.", "psychic" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Machamp", "Machamp is a Fighting-type Pokémon, which has the power to hurl opponents over the horizon.", "fighting" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Gengar", "Gengar is a Ghost/Poison-type Pokémon, hiding in the shadows, it is said to be a sinister and mischievous prankster.", "ghost" });

            migrationBuilder.InsertData(
                table: "Pokemons",
                columns: new[] { "Name", "Description", "Type" },
                values: new object[] { "Dragonite", "Dragonite is a Dragon/Flying-type Pokémon, capable of circling the globe in just 16 hours.", "dragon" });

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pokemons");
        }
    }
}
