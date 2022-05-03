import React from "react";

import {
  Container,
  SectinInfoClient,
  SectionTable,
  TextDescitpion,
  TextValue,
} from "./styles";

interface PropsData {
  isTotal?: boolean;
}

export default function CardInfoClient() {
  return (
    <Container>
      <SectinInfoClient>
        <SectionTable>
          <TextDescitpion>
            Nome completo
          </TextDescitpion>
          <TextValue>
            Maria Silva Sauro 
          </TextValue>
        </SectionTable>

        <SectionTable>
          <TextDescitpion>
            CEP
          </TextDescitpion>
          <TextValue>
            09520-050
          </TextValue>
        </SectionTable>
      </SectinInfoClient>

      <SectinInfoClient>
        <SectionTable>
          <TextDescitpion>
            Salão
          </TextDescitpion>
          <TextValue>
            Salão da dona Maria
          </TextValue>
        </SectionTable>

        <SectionTable>
          <TextDescitpion>
            Endereço
          </TextDescitpion>
          <TextValue>
          Salão da dona Maria, 56
          </TextValue>
        </SectionTable>
      </SectinInfoClient>

      <SectinInfoClient>
        <SectionTable>
          <TextDescitpion>
          Telefone
          </TextDescitpion>
          <TextValue>
          (11) 99999-9999
          </TextValue>
        </SectionTable>

        <SectionTable>
          <TextDescitpion>
          Complemento
          </TextDescitpion>
          <TextValue>
          AP 95
          </TextValue>
        </SectionTable>
      </SectinInfoClient>

      <SectinInfoClient>
        <SectionTable>
          <TextDescitpion>
          CPF
          </TextDescitpion>
          <TextValue>
          381.999.958-85
          </TextValue>
        </SectionTable>

        <SectionTable>
          <TextDescitpion>
          UF/Cidade
          </TextDescitpion>
          <TextValue>
          SP/São Caetano do Sul
          </TextValue>
        </SectionTable>
      </SectinInfoClient>

    </Container>
  );
}
