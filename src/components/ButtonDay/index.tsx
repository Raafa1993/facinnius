import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    selected?: boolean;
  }

export function ButtonDay({ title, onPress, selected, ...rest }: Props){
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      selected={selected}
      {...rest}
    >
    
    <Text
      selected={selected}
    >
      {title}
    </Text>

    </Container>
  );
}