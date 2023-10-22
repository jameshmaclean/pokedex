import styled from "styled-components";

export const Container = styled.div`
  display: flex ;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
    &:focus-within label{
      transform: translate(0, 9px) scale(0.8);
  }
  & .Active{
    transform: translate(0, 9px) scale(0.8);
  }
  
  & span{
    font-size: 11px;
    color: ${(props) => props.theme["red-500"]};
    margin-left: 5px;
    margin-bottom: 10px;
    position: absolute;
    top: 60px;
  }

`
export const InputLabel = styled.label`
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 8px;
  color: ${(props) => props.theme["yellow-100"]};
  pointer-events: none;
  position: absolute;
  bottom: 35px;
  transform: translate(0, 20px) scale(1.2);
  transform-origin: top left;
  transition: all 0.2s ease-out;
`

export const Input = styled.input`
  width: 100%;
  height: 40px; 
  margin-top: 10px;
  color: ${(props) => props.theme["yellow-100"]};
  outline: 0;
  padding: 0 6px;
  padding-top: 10px;
  border: none;
  border-bottom: 3px solid ${(props) => props.theme["white"]};
  border-radius: 4px;
  background: ${(props) => props.theme["blue-100"]};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;

  &::placeholder{
    font-size: 12px;
    color: ${(props) => props.theme["yellow-200"]};
  }
   &:focus {
    outline: none;
    border-bottom: 3px solid ${(props) => props.theme["yellow-100"]};

  }
`
