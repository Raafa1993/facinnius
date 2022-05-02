import React from "react";

import {
  Container,
  Title,
  TableRow,
  TextLeft,
  TextRight,
} from "./styles";


export default function DataTable() {
  return (
    <Container>
      <Title>
        Dados gerais
      </Title>

      <TableRow>
        <TextLeft>Acumulado na rua em R$</TextLeft>
        <TextRight>R$ 11.295,75</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Consignado em R$</TextLeft>
        <TextRight>R$ 2.770,00</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Média em R$ em cada cliente</TextLeft>
        <TextRight>R$ 281,49</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Recebimento por cliente</TextLeft>
        <TextRight>R$ 50,00</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Média em R$ de consginado</TextLeft>
        <TextRight>R$ 395,71</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Total de avulsos</TextLeft>
        <TextRight>11</TextRight>
      </TableRow>

      <TableRow>
        <TextLeft>Total de consignados</TextLeft>
        <TextRight>7</TextRight>
      </TableRow>
      
    </Container>
  );
}
