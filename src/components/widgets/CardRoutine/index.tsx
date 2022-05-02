import React from "react";

import {
  Container,
  SectionInfo,
  ViewInfo,
  TextTitle,
  TextAddress,
  ViewCircle,
  SectionFooter,
  TextPayment,
  StatusPayment,
  TextStatusPayment,
} from "./styles";

interface CardProps {
  title: string,
  address: string,
  payment: string,
  status: string,
}

interface PropsData {
  data: CardProps;
  onPress: () => void;
}


export default function CardRoutine({ data, onPress, ...rest}: PropsData) {

  return (
    <Container
      activeOpacity={0.7}
      onPress={onPress}
      {...rest}
    >
      <SectionInfo>
        <ViewInfo>
          <TextTitle>{data.title}</TextTitle>
          <TextAddress numberOfLines={2}>{data.address}</TextAddress>
        </ViewInfo>

        <ViewCircle />

      </SectionInfo>

      <SectionFooter>
        <TextPayment>Último pagamento</TextPayment>
        <StatusPayment
          status={data.status}
        >
          <TextStatusPayment>{data.payment}</TextStatusPayment>
        </StatusPayment>
      </SectionFooter>

    </Container>
  );
}
