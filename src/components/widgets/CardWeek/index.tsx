import React from "react";

import {
  Container,
  TextDay,
  TextData,
  SectionTableInfo,
  TextTotalDay,
  TextValueDay,
  SectionFooter,
  Table,
  Td,
  Th,
} from "./styles";

interface CardProps {
  week: string;
  date: string;
}

interface PropsData {
  data: CardProps;
  onPress: () => void;
}

export default function CardWeek({ data, onPress }: PropsData) {
  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
    >
      <TextDay>
        {data.week} <TextData>{data.date}</TextData>
      </TextDay>

      <SectionTableInfo>
        <TextTotalDay>Total de salões por dia</TextTotalDay>
        <TextValueDay>40</TextValueDay>
      </SectionTableInfo>

      <SectionTableInfo>
        <TextTotalDay>Igual ou acima de</TextTotalDay>
        <TextValueDay>R$: 10,00</TextValueDay>
      </SectionTableInfo>

      <SectionTableInfo>
        <TextTotalDay>Porcentagem a receber</TextTotalDay>
        <TextValueDay>R$0,00</TextValueDay>
      </SectionTableInfo>

      <SectionTableInfo>
        <TextTotalDay>Recebimento por cliente</TextTotalDay>
        <TextValueDay>R$ 50,00</TextValueDay>
      </SectionTableInfo>

      <SectionFooter>
        <Table>
          <Td>Recebimento</Td>
          <Th isGreen>R$: 2.124,50</Th>
        </Table>
        <Table style={{ alignItems: "center" }}>
          <Td>Venda</Td>
          <Th>R$: 3.667,00</Th>
        </Table>
        <Table style={{ alignItems: "flex-end" }}>
          <Td>Conferência</Td>
          <Th isGreen>R$: 2.124,50</Th>
        </Table>
      </SectionFooter>
    </Container>
  );
}
