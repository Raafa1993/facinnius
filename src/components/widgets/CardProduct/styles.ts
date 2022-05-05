import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  status?: string;
}

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-color: rgba(0, 0, 0, 0.1);
  border-width: 1px;
  margin-bottom: 12px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  align-items: center;
  justify-content: flex-start;
  padding: 10px 12px;
  position: absolute;
  top: 12px;
  left: 12px;
  border-radius: 12px;
  background-color: ${({theme}) => theme.COLORS.ALERT};
`;

export const SectionInfo = styled.View`
  padding: 14px;
  flex: 1;

`;

export const TextTitle = styled.Text`
  font-family: ${({theme}) => theme.FONTS.MEDIUM};
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${RFPercentage(2)}px;
  margin-bottom: 2px;
`;

export const ViewValorUnit = styled.View`
  margin-bottom: 8px;
`;

export const TextInfoUnit = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
  font-size: ${RFPercentage(1.6)}px;
  line-height: 18px;
`;

export const TextValueUnit = styled.Text`
  font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
  font-size: ${RFPercentage(1.8)}px;
  line-height: 22px;
`;

export const ViewQtd = styled.View`
  margin-bottom: 8px;
`;

export const ViewQtdRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const ViewText = styled.View`
  align-items: center;
`;


export const TextInfoQtd = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
  font-size: ${RFPercentage(1.6)}px;
  line-height: 18px;
`;

export const TextValueQtd = styled.Text`
  font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${RFPercentage(1.8)}px;
  line-height: 22px;
`;

export const ViewSub = styled.View`
  flex: 1;
  border-color: rgba(0, 0, 0, 0.1);
  border-top-width: 1px;
  padding-top: 8px;
`;

export const TextInfoSub = styled.Text`
  font-family: ${({theme}) => theme.FONTS.REGULAR};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
  font-size: ${RFPercentage(1.6)}px;
  line-height: 18px;
`;

export const TextValueSub = styled.Text`
  font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
  color: ${({theme}) => theme.COLORS.SUBTITLE};
  font-size: ${RFPercentage(1.8)}px;
  line-height: 22px;
`;
