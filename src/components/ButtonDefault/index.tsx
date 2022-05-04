import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, ViewIcon, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  icon?: any;
}

export function ButtonDefault({ title, icon, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >
      {icon && (
        <ViewIcon>
          {icon}
        </ViewIcon>
      )}

      <Title>
        {title}
      </Title>
    </Container>
  );
}

