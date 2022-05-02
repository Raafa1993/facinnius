import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
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
  DaySelected,
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
import { ButtonDay } from '../components/ButtonDay';
import CardRoutine from '../components/widgets/CardRoutine';

export function MyRoutine(props: any){
  const navigation = useNavigation<any>()
  const id = uuid.v4();
  const [selectedDay, setSelectedDay] = useState({
    id,
    abbreviatedDay: 'QUA',
    day: 'Quarta-feira'
  })

  const Days = [
  {
    id,
    abbreviatedDay: 'SEG',
    day: 'Segunda-feira'
  },
  {
    id,
    abbreviatedDay: 'TER',
    day: 'Terça-feira'
  },
  {
    id,
    abbreviatedDay: 'QUA',
    day: 'Quarta-feira'
  },
  {
    id,
    abbreviatedDay: 'QUI',
    day: 'Quinta-feira'
  },
  {
    id,
    abbreviatedDay: 'SEX',
    day: 'Sexta-feira'
  },
  {
    id,
    abbreviatedDay: 'SÁB',
    day: 'Sábado'
  },  
]

  const Routine = [
    {
      id: uuid.v4(),
      title: 'Salão da dona Maria',
      address: 'Av. Senador Roberto simonsen, 1350 São caetano do sul',
      payment: '18 dias atrás',
      status: 'atrasado'
    },
    {
      id: uuid.v4(),
      title: 'Roberto cliente',
      address: 'Rua Antonio bento, 56 - AP 92São caetano do sul',
      payment: '2 dias atrás',
      status: 'dia'
    },
    {
      id: uuid.v4(),
      title: 'Salão do João',
      address: 'Rua José Barbosa Marcondes Filho Nº 01 bairro: Pirituba',
      payment: '5 dias atrás',
      status: 'aguardando'
    },
    {
      id: uuid.v4(),
      title: 'Roberto cliente',
      address: 'Rua Antonio bento, 56 - AP 92São caetano do sul',
      payment: '2 dias atrás',
      status: 'dia'
    },
    {
      id: uuid.v4(),
      title: 'Salão da dona Maria',
      address: 'Av. Senador Roberto simonsen, 1350 São caetano do sul',
      payment: '18 dias atrás',
      status: 'atrasado'
    },
  ]

  return (
    <Container style={globlaStyle.containerDefault}>
      <ScrollView>

        <StatusBar animated={true} barStyle={'default'} />
        <Header />

        <SectionMessage>
          <Title>Minha rotina</Title>
          <SubTitle>
            Que tal dar um olhada em sua rotina? Está selecionado como <DaySelected>{selectedDay.day}</DaySelected>, mas você pode escolher outro dia da semana.
          </SubTitle>
        </SectionMessage>

        <SectionWeek>
          <ScrollView horizontal>
            {Days.map((row) => (
              <ButtonDay
                onPress={() => setSelectedDay(row)}
                title={row.abbreviatedDay}
                selected={selectedDay.day === row.day}
              />
            ))}
          </ScrollView>
        </SectionWeek>

        <SectionMyObjective>
          <TextObjective>{selectedDay.day}</TextObjective>
        </SectionMyObjective>

        {Routine.map((row: any) => (
          <CardRoutine
            key={row.id}
            onPress={() => console.log(row.id)}
            data={row}
          />
        ))}

     </ScrollView>
    </Container>
  );
}