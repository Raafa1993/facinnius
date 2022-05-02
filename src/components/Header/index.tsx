import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, ButtonMenu, Text } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Header(){
  const navigation = useNavigation<any>()
  return (
    <Container>
      <ButtonMenu
        activeOpacity={0.7}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Feather name="menu" size={44} color="black" />
        <Text>Menu</Text>
      </ButtonMenu>
    </Container>
  );
}