import React from 'react';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../ControlledInput'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
  
import { Container} from './styles';
import { Buttons } from '../Buttons';
import { useNavigation } from '@react-navigation/native';

type FormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
  password: yup.string().min(6, "A senha deve ter ao menos 6 dígitos").required("Informe a senha"),
  passwordConfirm: yup.string().oneOf([yup.ref('password'), null], 'A senha de confirmação não confere.')
});

export function FormSignUp(){
  const navigation = useNavigation<any>()
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  function handleUserRegister(data: FormData) {
    console.log(data)
    navigation.navigate("Home")
  }
  return (
    <Container>

      <ControlledInput
        name='name'
        control={control}
        placeholder="Nome"
        label='Digite seu nome'
        error={errors.name}
      />

      <ControlledInput
        name='email'
        control={control}
        placeholder="E-mail"
        keyboardType='email-address'
        autoCapitalize='none'
        label='Digite seu E-mail'
        error={errors.email}
      />

      <ControlledInput
        name='password'
        control={control}
        placeholder="Senha"
        label='Digite sua senha'
        error={errors.password}
      />

      <ControlledInput
        name='passwordConfirm'
        control={control}
        placeholder="Confirme a senha"
        label='Confirme a senha'
        error={errors.passwordConfirm}
      />
      
      <Buttons
        title='Cadastrar'
        // onPress={handleSubmit(handleUserRegister)}
        onPress={() => navigation.navigate('SignIn')}
      />
      
    </Container>
  );
}