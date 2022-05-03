import React from "react";

import {
  Container,
  SectionFinishedAttendence,
  TextSale,
  ButtonFinishedAttendence,
  TextButtonFinished,
  SectionTotals,
  ViewTotalValues,
  TextTotalDesciption,
  TextTotalValues,
} from "./styles";

interface PropsData {
  isTotal?: boolean;
}

export default function CardDetailsPayment({ isTotal }: PropsData) {
  return (
    <Container>
      <SectionFinishedAttendence>
        <TextSale>
          Vendas
        </TextSale>
        <ButtonFinishedAttendence>
          <TextButtonFinished>
            Finalizar atendimento
          </TextButtonFinished>
        </ButtonFinishedAttendence>
      </SectionFinishedAttendence>

      <SectionTotals>
        <ViewTotalValues>
          <TextTotalDesciption>
            Total da conta
          </TextTotalDesciption>
          <TextTotalValues
            isTotal={isTotal}
          >
            R$: 240,00
          </TextTotalValues>
        </ViewTotalValues>

        <ViewTotalValues>
          <TextTotalDesciption>
            Desconto
          </TextTotalDesciption>
          <TextTotalValues>
            R$: 20,00
          </TextTotalValues>
        </ViewTotalValues>

        <ViewTotalValues>
          <TextTotalDesciption>
            Pagamento
          </TextTotalDesciption>
          <TextTotalValues>
            R$: 50,00
          </TextTotalValues>
        </ViewTotalValues>
      
      </SectionTotals>
    </Container>
  );
}
