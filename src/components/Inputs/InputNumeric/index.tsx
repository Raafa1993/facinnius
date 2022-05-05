import React, { useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

import { maskCurrency } from '../../../utils/masks';

import { 
  Container, 
  Text, 
  InputText,
  TextTitle,
  ViewIput,
} from './styles';

export type InputProps = TextInputProps & {
  label: string;
  mask: "cep" | "phone" | "currency";
  inputMaskChange: any;
  title: string;
  isTotal?: boolean;
}

export function InputNumeric({ label, title, isTotal, mask, inputMaskChange, ...rest }: InputProps){
  const inputRef = useRef<any>(null);
  function handleChange(text: string) {
    if (mask === "currency") {
      const value = maskCurrency(text);
      inputMaskChange(value);
    }
  }

  return (
    <Container
      onPress={() => inputRef.current.focus()}
    > 
        <TextTitle>{title}</TextTitle>

      <ViewIput>
        <Text isTotal={isTotal}>{label ?? 'R$: '}</Text>
        <InputText
          isTotal={isTotal}
          onChangeText={(text) => handleChange(text)}
          ref={inputRef}
          {...rest}
        />
      </ViewIput>

    </Container>
  );
}