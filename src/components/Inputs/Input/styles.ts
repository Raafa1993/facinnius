import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

interface Props {
   isFocused?: boolean;
   isSelected?: boolean;
 }

export const Container = styled.View<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60px;
  background-color: transparent;
  margin-bottom: 20px;
  border-bottom-color: #E4E4E4;
  border-bottom-width: 2px;
  ${({ isFocused }) => isFocused && css`
    border-bottom-color: #C59A32;
  `};
`;

export const Text = styled.Text<Props>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${props => props.isSelected ? "#C59A32" : "#8E8E8E"};
`;

export const InputText = styled(TextInput)<Props>`
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.TEXT};
  margin-top: 2px;
`;