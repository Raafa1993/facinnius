import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';
import { ControlledInput } from '../ControlledInput'

import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
  
import { Container} from './styles';
import { Buttons } from '../Buttons';

type FormData = {
  name: string;
  email: string;
}

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o e-mail"),
});

export function FormSignIn(){
  const navigation = useNavigation<any>()
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  // function handleUserRegister(data: FormData) {
  //   console.log(data)
  //   navigation.navigate("Home")
  // }
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

      <Buttons
        title='Entrar'
        // onPress={handleSubmit(handleUserRegister)}
        onPress={() => navigation.navigate('Home')}
      />

      <Buttons
        title='Cadastrar'
        // onPress={handleSubmit(handleUserRegister)}
        onPress={() => navigation.navigate('SignUp')}
      />
      
    </Container>
  );
}