import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { FlatList, ScrollView, StatusBar, View } from 'react-native';
import { Header } from '../components/Header';
import CardObjective from '../components/widgets/CardObjective';
import CardWeek from '../components/widgets/CardWeek';
import uuid from 'react-native-uuid';

import { EvilIcons } from '@expo/vector-icons';

import globlaStyle from '../theme/global'
import { 
  Container,
  SectionMessage,
  Title,
  SubTitle,
  SectionWeek,
  ButtonWeek,
  TextButtonWeek,
  SectionMyObjective,
  TextObjective,
  TextValorObjective,
  SectionCardObjective,
  SectionCardDay,
} from './styles';
import DataTable from '../components/widgets/DataTable';

export function Home(){
  const navigation = useNavigation<any>()
  const [dataListWeek, setDataListWeek] = useState<any>([
    {
    id: uuid.v4(),
    week: 'Segunda feira',
    date: '05/02/2022',
  },
  {
    id: uuid.v4(),
    week: 'Terça feira',
    date: '05/02/2022',
  },
  {
    id: uuid.v4(),
    week: 'Quarta feira',
    date: '05/02/2022',
  },
  {
    id: uuid.v4(),
    week: 'Quinta feira',
    date: '05/02/2022',
  },
  {
    id: uuid.v4(),
    week: 'Sexta feira',
    date: '05/02/2022',
  },
  {
    id: uuid.v4(),
    week: 'Sabado',
    date: '05/02/2022',
  },
])

  return (
    <Container style={globlaStyle.containerDefault}>
      <ScrollView>

        <StatusBar animated={true} barStyle={'default'} />
        <Header />

        <SectionMessage>
          <Title>DashBoard</Title>
          <SubTitle>
            Bem vindo ao seu Dashboard, aqui você encontrará alguns dados importantes para visualizar seu desempenho semanal.
          </SubTitle>
        </SectionMessage>

        <SectionWeek>
          <ButtonWeek
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Rotina")}
          >
            <EvilIcons name="calendar" size={34} color="white" />
            <TextButtonWeek>Semanal</TextButtonWeek>
          </ButtonWeek>
        </SectionWeek>

        <SectionMyObjective>
          <TextObjective>Meus objetivos</TextObjective>
          <TextValorObjective>R$: 775,00</TextValorObjective>
        </SectionMyObjective>

        <SectionCardObjective>
          <CardObjective
            titleOne='Total de salões por dia'
            descriptionOne="40"
            titleTwo='Igual ou acima de'
            descriptionTwo="R$: 1,00"
          />
          <CardObjective
            titleOne='Porcentagem a receber'
            descriptionOne="0,00%"
            titleTwo='Recebimento por cliente'
            descriptionTwo="R$: 50,00"
          />
        </SectionCardObjective>

        <SectionMyObjective>
          <TextObjective>Minha semana</TextObjective>
          <TextValorObjective>05/02/2022</TextValorObjective>
        </SectionMyObjective>

       <SectionCardDay> 
         {dataListWeek.map((row: any) => (
           <CardWeek
            key={row.id}
            data={row}
            onPress={() => navigation.navigate("Rotina", { key: row.id })}
           />
         ))}
       </SectionCardDay>

      <DataTable />

     </ScrollView>
    </Container>
  );
}