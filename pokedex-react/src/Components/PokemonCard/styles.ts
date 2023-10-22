import styled from "styled-components";

type Pokemon = {
  type: string
}
export const Container = styled.div<Pokemon>`
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: space-between;
  margin: 1rem 1rem;
  min-width: 15rem;
min-height: 300px;
background-color: 
    ${(props) => props.theme[`${props.type}`]}
  ;
  align-items: center;
  `
export const PokemonDetailsContainer = styled.div`
  background-color: ${(props) => props.theme.white};
display: flex;
height: 80%;
flex: 0.7;
flex-direction: column;
justify-content: space-around;
width: 100%;
border-radius: 4px;
display: flex;
flex-direction: column;
justify-content: space-around;

  align-items: center;
`
export const PokemonName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 2rem;
  justify-content: center;
  font-weight: bolder;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  &:hover{
    font-size: 2.1rem;
  }
`

export const PokemonNumber = styled.h2`
  font-size: 3rem;
  opacity: 0.4;
  user-select: none;
`
export const PokemonDescription = styled.span`
color: ${(props) => props.theme["gray-900"]};
font-size: 1rem;
`
export const PokemonType = styled.div<Pokemon>`
  border-radius: 4px;
  background-color:
      ${(props) => props.theme[`${props.type}`]}
    ;
  padding:0 0.5rem;
  color: ${(props) => props.theme["white"]};
`