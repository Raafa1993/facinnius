import React from "react";

import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  ButtonDelete,
  SectionInfo,
  TextTitle,
  ViewValorUnit,
  TextInfoUnit,
  TextValueUnit,
  ViewQtd,
  TextInfoQtd,
  TextValueQtd,
  ViewSub,
  TextInfoSub,
  TextValueSub,
  ViewQtdRow,
  ViewText,

} from "./styles";
import { ImageBackground } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface CardProps {
  title: string;
  valueUnit: string;
  valueQtd: string;
  subTotal: string;
  available?: string;
  sales?: string;
  rest?: string;
  image: any;
}

interface PropsData {
  data: CardProps;
  onPress: () => void;
  type: string;
}

export default function CardProduct({ data, type, onPress }: PropsData) {
  return (
    <Container>
      <ImageBackground
        source={data.image}
        resizeMode="contain"
        style={{
          justifyContent: "center",
          backgroundColor: "#FFFCF4",
          borderRightWidth: 1,
          borderColor: "rgba(0,0,0,0.1)",
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
          position: "relative",
          width: RFPercentage(22),
        }}
      >
        <ButtonDelete activeOpacity={0.7} onPress={onPress}>
          <Ionicons name="md-trash-outline" size={24} color="white" />
        </ButtonDelete>
      </ImageBackground>

      <SectionInfo>
        <TextTitle>{data.title}</TextTitle>

        <ViewValorUnit>
          <TextInfoUnit>Valor unitario</TextInfoUnit>
          <TextValueUnit>R$ {data.valueUnit}</TextValueUnit>
        </ViewValorUnit>

        {type === 'Vitrine' ? (
          <ViewQtdRow>
            <ViewText>
              <TextInfoQtd>Disponivel</TextInfoQtd>
              <TextValueQtd>{data.valueQtd}</TextValueQtd>
            </ViewText>

            <ViewText>
              <TextInfoQtd>Vendas</TextInfoQtd>
              <TextValueQtd>{data.valueQtd}</TextValueQtd>
            </ViewText>

            <ViewText>
              <TextInfoQtd>Restantes</TextInfoQtd>
              <TextValueQtd>{data.valueQtd}</TextValueQtd>
            </ViewText>
          </ViewQtdRow>
        ) : (
          <ViewQtd>
            <TextInfoQtd>Quantidade</TextInfoQtd>
            <TextValueQtd>{data.valueQtd}</TextValueQtd>
          </ViewQtd>

        )}



        <ViewSub>
          <TextInfoSub>Subtotal</TextInfoSub>
          <TextValueSub>R$ {data.subTotal}</TextValueSub>
        </ViewSub>
      </SectionInfo>
    </Container>
  );
}
