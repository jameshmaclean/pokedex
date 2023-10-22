import { Container, Logo, Navbar, NavbarItem } from "./styles";
import AppLogo from "../../assets/pokedex_logo.png";
import { useNavigate } from "react-router-dom";
export const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo src={AppLogo} />
      <Navbar>
        <NavbarItem onClick={() => navigate("/")}>Listar</NavbarItem>
        <NavbarItem onClick={() => navigate("/newPokemon")}>Incluir</NavbarItem>
      </Navbar>
    </Container>
  );
};
