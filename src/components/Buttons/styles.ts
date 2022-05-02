import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  padding: 18px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GOLD};
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
    font-size: 15px;
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: #fff;
`;