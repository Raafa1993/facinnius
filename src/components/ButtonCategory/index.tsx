import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonCategory({ title, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      <Feather name="shopping-cart" size={24} color="black" />
      <Title>
        {title}
      </Title>
    </Container>
  );
}

