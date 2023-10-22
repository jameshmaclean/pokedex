import { Routes, Route } from "react-router-dom";
import { Homepage } from "../pages/Homepage";
import { RegisterPokemonPage } from "../pages/RegisterPokemonPage";
import { EditPokemonPage } from "../pages/EditPokemonPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" Component={Homepage} />
      <Route path="/newPokemon" Component={RegisterPokemonPage} />
      <Route path="/edit/:id" Component={EditPokemonPage} />
    </Routes>
  );
};
