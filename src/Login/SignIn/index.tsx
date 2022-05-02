import React from 'react';
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { FormSignIn } from '../../components/FormSignIn';

import LogoImg from '../../assets/imageDefault.png';

import { Container, SectionLogo, Image } from './styles';

export function SignIn(){
  
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
            <FormSignIn />
          </>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
}

// const styles = StyleSheet.create({
//   containerDefault: {
//     width: Dimensions.get('screen').width,
//     paddingHorizontal: 20,
//     // alignItems: 'center',
//     // justifyContent: 'center'
//   }
// })