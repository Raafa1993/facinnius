import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { ScrollView, StatusBar } from 'react-native';
import uuid from 'react-native-uuid';
import CardCalendar from '../../components/widgets/CardCalendar';
import CardDetailsPayment from '../../components/widgets/CardDetailsPayment';
import CardInfoClient from '../../components/widgets/CardInfoClient';

//IMAGE
import Item1 from '../../assets/item1.png';
import Item2 from '../../assets/item2.png';

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
import CardProduct from '../../components/widgets/CardProduct';
import DataTableResumeRequest from '../../components/widgets/DataTableResumeRequest';
import { ButtonToggleCard } from '../../components/ButtonToggleCard';

interface Products {
  id: any;
  image: any;
  title: string;
  valueUnit: string;
  valueQtd: string;
  subTotal: string;
}

export function Stoque(props: any){
  const navigation = useNavigation<any>()
  const id = uuid.v4();

  const [toggleCardItem, setToggleCardItem] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('Vendas')
  const [products, setProducts] = useState<Products[]>([{
    id: uuid.v4(),
    image: Item1,
    title: 'Recovery cupuaçu economy',
    valueUnit: '10,00',
    valueQtd: '5',
    subTotal: '55,00',
  },
  {
    id: uuid.v4(),
    image: Item2,
    title: 'Infinity One',
    valueUnit: '100,00',
    valueQtd: '15',
    subTotal: '1.155,00',
  },
])

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


            {selectedCategory !== 'Resumo' ? (
              <>
                <SectionFilter>
                  <ButtonDefault
                    title='Adicionar novo produto'
                    icon={<Feather name="plus-circle" size={24} color="white" />}
                  />
    
                  <ButtonToggleCard
                    toggle={toggleCardItem}
                    onPress={() => setToggleCardItem(!toggleCardItem)}
                  />
                </SectionFilter>
    
                {products.map((row) => (
                  <CardProduct
                    key={row.id}
                    data={row}
                    onPress={() => console.log('Card')}
                    type={selectedCategory}
                  />
                ))}

                <DataTableResumeRequest
                  title={selectedCategory}
                  dataProducts={products}
                  />
              </>
            ) : (
              <DataTableResumeRequest
                title={selectedCategory}
                isDescription
                type='Resumo'
              />
            )}

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