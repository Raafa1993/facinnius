import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ScrollView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';
import CardCalendar from '../../components/widgets/CardCalendar';
import CardDetailsPayment from '../../components/widgets/CardDetailsPayment';
import CardInfoClient from '../../components/widgets/CardInfoClient';

//ICONS
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import globlaStyle from '../../theme/global'
import { 
  Container,
  SectionButtonGps,
  TextGps,
  ButtonGps,
  SectionMain,
  SectionClient,
  TextClient,
  SectionFooter,
  SectionStoque,
  SectionCategoryButtons,
  ButtonCategory,
  TextButtonCategory,
} from './styles';

export function Stoque(props: any){
  const navigation = useNavigation<any>()
  const id = uuid.v4();

  return (
    <Container style={globlaStyle.containerClient}>
      <StatusBar animated={true} barStyle={'default'} />
        <CardCalendar
          day='Quarta feira, 09 de fevereiro'
          onBackToPage={() => navigation.goBack()}
          onSave={() => console.log('Save')}
        />

      <ScrollView>
        <SectionButtonGps>
          <ButtonGps
            activeOpacity={0.7}
          >
            <TextGps>Rotas GPS</TextGps>
            <MaterialIcons name="keyboard-arrow-right" size={30} color="white" />
          </ButtonGps>
        </SectionButtonGps>

        <SectionMain>
          <SectionClient>
            <TextClient>
              MS
            </TextClient>
          </SectionClient>
          <CardInfoClient />

          <SectionStoque>
            <SectionCategoryButtons>
              <ButtonCategory>
                <Feather name="shopping-cart" size={24} color="black" />
                <TextButtonCategory>Vendas</TextButtonCategory>
              </ButtonCategory>

              <ButtonCategory>
                <AntDesign name="tago" size={24} color="black" />
                <TextButtonCategory>Vendas</TextButtonCategory>
              </ButtonCategory>

              <ButtonCategory>
                <Ionicons name="document-text-outline" size={24} color="black" />
                <TextButtonCategory>Vendas</TextButtonCategory>
              </ButtonCategory>

              <ButtonCategory />
            </SectionCategoryButtons>
          </SectionStoque>
        </SectionMain>

     </ScrollView>

      <SectionFooter>
        <CardDetailsPayment
          isTotal={true}
        />
      </SectionFooter>
    </Container>
  );
}