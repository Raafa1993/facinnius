import styled from 'styled-components/native';

export const Container = styled.View`
   align-items: baseline;
   margin-bottom: 32px;
`;

export const ButtonMenu = styled.TouchableOpacity`
   align-items: center;
   flex-direction: row;
`;

export const Text = styled.Text`
   margin-left: 8px;
   font-size: 22px;
   line-height: 30px;
   font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
   color: ${({ theme }) => theme.COLORS.TEXT};
`