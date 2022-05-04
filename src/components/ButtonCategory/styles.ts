import styled from 'styled-components/native';

interface PropsButton {
  isSelected?: boolean;
}

export const Container = styled.TouchableOpacity<PropsButton>`
  align-items: center;
  justify-content: center;

  border-bottom-width: 3px;
  border-color: ${({ isSelected }) => isSelected ? '#C59A32' : '#8E8E8E'};
  flex: 1;
  margin-left: -0.9px;
`;

export const ViewIcon = styled.View<PropsButton>`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${({ isSelected }) => isSelected ? '#C59A32' : '#C4C4C4'};
  border-radius: 50px;
`;

export const Title = styled.Text<PropsButton>`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ isSelected }) => isSelected ? '#C59A32' : '#8E8E8E'};
  margin-top: 4px;
`;
