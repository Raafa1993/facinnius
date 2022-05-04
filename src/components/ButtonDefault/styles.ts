import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  padding: 14px 18px;
  border-radius: 8px;
`;

export const ViewIcon = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(1.8)}px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-left: 12px;
`;
