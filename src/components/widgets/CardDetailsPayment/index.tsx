import React, { useState } from "react";
import { InputNumeric } from "../../Inputs/InputNumeric";

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
  const [discount, setDiscount] = useState("");
  const [payment, setPayment] = useState("");

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
            Total
          </TextTotalDesciption>
          <TextTotalValues
            isTotal={isTotal}
          >
            R$: 240,00
          </TextTotalValues>
        </ViewTotalValues>

        <InputNumeric
          inputMaskChange={(value: any) => setDiscount(value)}
          label="R$: "
          title="Desconto"
          mask="currency"
          keyboardType="numeric"
          value={discount}
        />

        <InputNumeric
          inputMaskChange={(value: any) => setPayment(value)}
          label="R$: "
          title="Pagamento"
          mask="currency"
          keyboardType="numeric"
          value={payment}
        />
      
      </SectionTotals>
    </Container>
  );
}
