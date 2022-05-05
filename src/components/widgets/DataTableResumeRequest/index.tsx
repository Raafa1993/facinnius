import React, { useEffect, useState } from "react";

import {
  Container,
  Title,
  SubTitle,
  ViewTable,
  Tbody,
  TextTh,
  TextTr,
  TextTrDescription,
  TextTrValues,
} from "./styles";

interface Dataprops {
  title: string;
  valueUnit: string;
  valueQtd: string;
  subTotal: string;
}

interface Props {
  dataProducts?: Dataprops[];
  isDescription?: boolean;
  title: string;
  type?: 'Vendas' | 'Vitrine' | 'Resumo';
}

export default function DataTableResumeRequest({ dataProducts, type, title, isDescription }: Props) {

  return (
    <Container>
      <Title>
        {`Resumo da ${ title}`}
      </Title>

      {isDescription && (
        <SubTitle>
          Esse extrato está sendo exibido de acordo com a data 09/02/2022
        </SubTitle>
      )}

      <ViewTable>
        {type !== 'Resumo' && (
          <>
            <Tbody>
              <TextTh>Descrição</TextTh>
              <TextTh style={{textAlign: 'center'}}>Qtd</TextTh>
              <TextTh style={{textAlign: 'right'}}>Valor</TextTh>
            </Tbody>

              {dataProducts?.map((row, key) => (
                <Tbody key={key}>
                  <TextTr>{row.title}</TextTr>
                  <TextTr style={{textAlign: 'center'}}>{row.valueQtd}</TextTr>
                  <TextTr style={{textAlign: 'right'}}>R$ {row.valueUnit}</TextTr>
                </Tbody>
              ))}

            {/* <Tbody>
              <TextTr>Recovery Cupuaçu</TextTr>
              <TextTr style={{textAlign: 'center'}}>5</TextTr>
              <TextTr style={{textAlign: 'right'}}>R$ 50,00</TextTr>
            </Tbody> */}
          </>
        )}

        <Tbody>
          <TextTrDescription>Dividas anteriores</TextTrDescription>
          <TextTrValues style={{textAlign: 'center'}}></TextTrValues>
          <TextTrValues style={{textAlign: 'right'}}>R$ 10,00</TextTrValues>
        </Tbody>

        <Tbody>
          <TextTrDescription>Descontos</TextTrDescription>
          <TextTrValues style={{textAlign: 'center'}}></TextTrValues>
          <TextTrValues style={{textAlign: 'right'}}>R$ 20,00</TextTrValues>
        </Tbody>

        <Tbody>
          <TextTrDescription>Pagamento</TextTrDescription>
          <TextTrValues style={{textAlign: 'center'}}></TextTrValues>
          <TextTrValues style={{textAlign: 'right'}}>R$ 50,00</TextTrValues>
        </Tbody>

        <Tbody>
          <TextTrDescription>Subtotal</TextTrDescription>
          <TextTrValues style={{textAlign: 'center'}}></TextTrValues>
          <TextTrValues style={{textAlign: 'right'}}>R$ 190,00</TextTrValues>
        </Tbody>


      </ViewTable>
      
    </Container>
  );
}
