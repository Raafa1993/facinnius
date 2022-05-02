import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { StatusBar } from 'react-native';
import { Header } from '../components/Header';

import globlaStyle from '../theme/global'
import { Container, Text, Button } from './styles';

export function Home(){
  const navigation = useNavigation<any>()
  return (
    <Container style={globlaStyle.containerDefault}>
      <Header />
      {/* <StatusBar animated={true} barStyle={'light-content'} /> */}
      <Button
         onPress={() => navigation.navigate('SignIn')}
      >
      </Button>
    </Container>
  );
}