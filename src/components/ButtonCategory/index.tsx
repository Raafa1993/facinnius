import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, ViewIcon, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon: any;
  isSelected?: boolean;
}

export function ButtonCategory({ title, icon, isSelected, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      isSelected={isSelected}
      {...rest}
    >
      <ViewIcon
        isSelected={isSelected}
      >
        {icon}
      </ViewIcon>
      <Title
        isSelected={isSelected}
      >
        {title}
      </Title>
    </Container>
  );
}

