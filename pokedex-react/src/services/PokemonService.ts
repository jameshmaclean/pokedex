import { api } from "./api";

type Pokemon = {
  name: string,
  type: string,
  description: string,
}

export const RegisterPokemon = async (data: Pokemon) => {
  const response = await api.post("/Pokemon", data)
  return response.data;
}

export const FetchPokemons = async () => {
  const response = await api.get("/Pokemon");
  return response.data;
}

export const FetchPokemonDetails = async (id: string) => {
  const response = await api.get("/Pokemon/" + id)
  return response.data;
}

export const UpdatePokemon = async (data: Pokemon, id: string) => {
  const response = await api.put(`/Pokemon/${id}`, data);
  return response.data;
}

export const DeletePokemon = async (id: string) => {
  const response = await api.delete(`/Pokemon/${id}`);
  return response.data;
}