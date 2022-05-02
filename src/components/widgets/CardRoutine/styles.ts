import styled, { css } from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
  status?: string;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 12px;
`;

export const SectionInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-bottom-width: 2px;
  margin-bottom: 12px;
  padding-bottom: 12px;
`;

export const ViewInfo = styled.View`
  align-items: baseline;
`;

export const TextTitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-bottom: 4px;
`;

export const TextAddress = styled.Text`
  font-size: ${RFPercentage(1.6)}px;
  font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
  color: ${({ theme }) => theme.COLORS.SUBTITLE};
  max-width: 94%;
`;

export const ViewCircle = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 50px;
  border: 2px solid rgba(0, 0, 0, 0.2);
`;

export const SectionFooter = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextPayment = styled.Text`
  font-size: ${RFPercentage(1.6)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
`;

export const StatusPayment = styled.View<Props>`
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 40px;
  border-radius: 5px;
  margin-left: 14px;

  background-color: ${({ status }) =>
    status === "atrasado"
      ? "#F54949"
      : "#fff" && status === "dia"
      ? "#25B54D"
      : "#fff" && status === "aguardando"
      ? "#8E8E8E"
      : "#fff"};
`;

export const TextStatusPayment = styled.Text`
  font-size: ${RFPercentage(1.6)}px;
  line-height: 20px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
