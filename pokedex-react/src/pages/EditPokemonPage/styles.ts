import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 90%;
  min-width: 350px;
  background-color: ${(props) => props.theme["white"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.electric};
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans - serif;
`


export const ContentContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: ${(props) => props.theme["gray-100"]};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
      @media (max-width: 960px) { 
    grid-template-columns: 1fr 1fr; 
  }
    @media (max-width: 768px) { 
    grid-template-columns: 1fr; 
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`