import { Controller, useForm } from "react-hook-form";
import { AppButton } from "../../Components/AppButton";
import { AppInput } from "../../Components/Input";
import { ButtonContainer, Container } from "./styles";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FetchPokemonDetails,
  UpdatePokemon,
} from "../../services/PokemonService";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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

export const EditPokemonPage = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({} as FormDataProps);
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataProps>({
    resolver: yupResolver(registerPokemonSchema),
    defaultValues: {
      description: "",
      name: "",
      type: "",
    },
  });
  const handleSubmitData = async (data: FormDataProps) => {
    console.log(data);
    const response = await UpdatePokemon(data, id!);
    if (response.id) {
      alert("Pokemon atualizado com sucesso!");
      reset();
    }
  };
  useEffect(() => {
    const fetchPokemonDetails = async (id: string) => {
      const response = await FetchPokemonDetails(id);
      setPokemon(response);
      reset({
        description: response.description,
        name: response.name,
        type: response.type,
      });
      console.log(response);
    };
    fetchPokemonDetails(id!);
  }, [id, reset]);
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
            type="reset"
            onClick={() => navigate("/")}
          />
        </ButtonContainer>
      </form>
    </Container>
  );
};
