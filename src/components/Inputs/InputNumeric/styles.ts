import { TextInput } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface Props {
  isTotal?: boolean;
 }

export const Container = styled.TouchableOpacity`
  display: flex;
  background-color: transparent;
  flex: 1;
  margin-left: 20px;
`;

export const TextTitle = styled.Text`
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(2)}px;
    line-height: 24px;
    text-transform: uppercase;
`;

export const ViewIput = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
`;

export const Text = styled.Text<Props>`
    font-family: ${({theme}) => theme.FONTS.BOLD};
    color: ${({theme, isTotal}) => isTotal ? theme.COLORS.ALERT : theme.COLORS.WHITE};
    font-size: ${RFPercentage(2.2)}px;
    line-height: 28px;
`;

export const InputText = styled(TextInput)<Props>`
  font-size: ${RFPercentage(2.2)}px;
  line-height: 22px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({theme, isTotal}) => isTotal ? theme.COLORS.ALERT : theme.COLORS.WHITE};
  flex: 1;
  align-items: flex-end;
  text-align: right;

`;