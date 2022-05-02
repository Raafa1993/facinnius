import React, { useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Text, InputText } from './styles';

export type InputProps = TextInputProps & {
  value?: string;
  label: string;
}

export function Input({ label, placeholder, value, ...rest }: InputProps){
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }

  return (
    <Container
      isFocused={isFocused}
    >
      <Text isSelected={isFocused || isFilled}>{label}</Text>
      <InputText
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        isFocused={isFocused}
        placeholder={placeholder}
        value={value}
        {...rest}
      />
    </Container>
  );
}