import { InputHTMLAttributes } from "react";
import { Container, Input, InputLabel } from "./styles";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  errorMessage?: string | null;
  label: string;
  placeholder: string;
};
export const AppInput = ({
  placeholder,
  errorMessage = null,
  label,
  type,
  ...rest
}: Props) => {
  return (
    <Container>
      <Input type={type} placeholder={placeholder} {...rest} />
      <InputLabel htmlFor={rest.id || rest.name} className={"Active"}>
        {label}
      </InputLabel>
      {errorMessage && <span>{errorMessage}</span>}
    </Container>
  );
};
