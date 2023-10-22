import {
  Container,
  PokemonDescription,
  PokemonDetailsContainer,
  PokemonName,
  PokemonNumber,
  PokemonType,
} from "./styles";

import { AiOutlineCloseCircle } from "react-icons/ai";

type Pokemon = {
  name: string;
  id: string;
  type: string;
  description: string;
};

type PokemonDataProps = {
  pokemon: Pokemon;
  handleRemovePokemon: (id: string) => void;
  handleEditPokemon: (id: string) => void;
};

export const PokemonCard = ({
  pokemon,
  handleRemovePokemon,
  handleEditPokemon,
}: PokemonDataProps) => (
  <Container type={pokemon.type}>
    <PokemonName onClick={() => handleEditPokemon(pokemon.id)}>
      {pokemon.name}
      <PokemonNumber>#{pokemon.id}</PokemonNumber>
    </PokemonName>
    <PokemonDetailsContainer>
      <PokemonDescription>{pokemon.description}</PokemonDescription>
      <PokemonType type={pokemon.type}>{pokemon.type}</PokemonType>
      <AiOutlineCloseCircle
        size={24}
        color={"black"}
        style={{ cursor: "pointer" }}
        onClick={() => handleRemovePokemon(pokemon.id)}
      />
    </PokemonDetailsContainer>
  </Container>
);
