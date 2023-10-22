import { Controller, useForm } from "react-hook-form";
import { AppButton } from "../../Components/AppButton";
import { AppInput } from "../../Components/Input";
import { ButtonContainer, Container } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterPokemon } from "../../services/PokemonService";
import { useNavigate } from "react-router-dom";

type FormDataProps = {
  name: string;
  type: string;
  description: string;
};
const registerPokemonSchema = yup.object({
  name: yup.string().required("O Nome é obrigatório"),
  type: yup.string().required("O Tipo é obrigatório"),
  description: yup.string().required("A descrição é obrigatória"),
});

export const RegisterPokemonPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerPokemonSchema),
  });
  const handleSubmitData = async (data: FormDataProps) => {
    const response = await RegisterPokemon(data);
    if (response.id) {
      alert("Pokemon registrado com sucesso!");
      reset();
    }
  };
  return (
    <Container>
      <form onSubmit={handleSubmit(handleSubmitData)} style={{ width: "100%" }}>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Pikachu"
              label="Name"
              errorMessage={errors.name?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Electric pokemon"
              label="Description"
              errorMessage={errors.description?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="type"
          render={({ field: { onChange, value } }) => (
            <AppInput
              placeholder="Electric"
              label="Type"
              errorMessage={errors.type?.message}
              onChange={onChange}
              value={value}
            />
          )}
        />

        <ButtonContainer>
          <AppButton title="Enviar" type="submit" />
          <AppButton
            title="Voltar"
            variant="secondary"
            type="button"
            onClick={() => navigate("/")}
          />
        </ButtonContainer>
      </form>
    </Container>
  );
};
