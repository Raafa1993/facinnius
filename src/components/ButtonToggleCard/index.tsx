import React, { useState } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { Container, ButtonCardCollumn, ButtonCardRow } from './styles';

interface Props extends TouchableOpacityProps {
  toggle: boolean;
}

export function ButtonToggleCard({ toggle, ...rest }: Props) {
  return (
    <Container
      activeOpacity={0.7}
      {...rest}
    >

     <ButtonCardRow
      isSelected={toggle}
     >
      <Feather name="list" size={24} color="white" />
     </ButtonCardRow>

     <ButtonCardCollumn
      isSelected={!toggle}
     >
      <Feather name="menu" size={24} color="white" />
     </ButtonCardCollumn>

    </Container>
  );
}

