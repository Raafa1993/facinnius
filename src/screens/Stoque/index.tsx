import React, { useState } from 'react';
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
  SectionFilter,
} from './styles';
import { ButtonCategory } from '../../components/ButtonCategory';
import { ButtonDefault } from '../../components/ButtonDefault';

export function Stoque(props: any){
  const navigation = useNavigation<any>()
  const id = uuid.v4();

  const [selectedCategory, setSelectedCategory] = useState('Vendas')

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
              <ButtonCategory
                title='Vendas'
                icon={<Feather name="shopping-cart" size={24} color="white" />}
                onPress={() => setSelectedCategory('Vendas')}
                isSelected={selectedCategory === 'Vendas'}
              />

              <ButtonCategory
                title='Vitrine'
                icon={<AntDesign name="tago" size={24} color="white" />}
                onPress={() => setSelectedCategory('Vitrine')}
                isSelected={selectedCategory === 'Vitrine'}
              />

              <ButtonCategory
                title='Resumo'
                icon={<Feather name="shopping-cart" size={24} color="white" />}
                onPress={() => setSelectedCategory('Resumo')}
                isSelected={selectedCategory === 'Resumo'}
              />
            </SectionCategoryButtons>

            <SectionFilter>
              <ButtonDefault
                title='Adicionar novo produto'
                icon={<Feather name="plus-circle" size={24} color="white" />}
              />
            </SectionFilter>

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