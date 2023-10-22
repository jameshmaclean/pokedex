import { useEffect, useState } from "react";
import { PokemonCard } from "../../Components/PokemonCard";
import { Container, ContentContainer, Title } from "./styles";
import { DeletePokemon, FetchPokemons } from "../../services/PokemonService";
import { useNavigate } from "react-router-dom";

type Pokemon = {
  id: string;
  name: string;
  description: string;
  type: string;
};
export const Homepage = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const navigate = useNavigate();
  const handleRemovePokemon = async (id: string) => {
    const updatedPokemons = pokemons.filter((pokemon) => pokemon.id !== id);
    const response = await DeletePokemon(id);
    if (response) {
      setPokemons(updatedPokemons);
      alert("Pokemon deletado com sucesso");
    }
  };

  const handleNavigateEditPage = (id: string) => {
    navigate("/edit/" + id);
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await FetchPokemons();
      setPokemons(response);
    };
    fetchPokemons();
  }, []);

  return (
    <Container>
      {pokemons.length <= 0 && <Title>Não há pokemons cadastrados</Title>}
      <ContentContainer>
        {pokemons.map((pokemon) => {
          return (
            <PokemonCard
              pokemon={pokemon}
              key={pokemon.id}
              handleRemovePokemon={handleRemovePokemon}
              handleEditPokemon={handleNavigateEditPage}
            />
          );
        })}
      </ContentContainer>
    </Container>
  );
};
