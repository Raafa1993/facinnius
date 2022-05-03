import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { FormSignUp } from '../../../components/FormSignUp';

//IMAGES
import LogoImg from '../../../assets/ImageDefault.png';

import { Container, SectionLogo, Image } from './styles';

export function SignUp(){
  
  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior='position' enabled>
          <>
            <SectionLogo>
              <Image
                source={LogoImg}
                resizeMode="contain"
              />
            </SectionLogo>
            <FormSignUp />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}