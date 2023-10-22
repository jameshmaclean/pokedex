import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
  width: 90%;
  flex-direction: column;
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  object-fit: contain;
  height: 150px;
`

export const Navbar = styled.ul`
background-color: ${(props) => props.theme["red-500"]};
height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  `
export const NavbarItem = styled.li`
  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["red-700"]};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover{
      color: ${(props) => props.theme["yellow-100"]};
  }

`