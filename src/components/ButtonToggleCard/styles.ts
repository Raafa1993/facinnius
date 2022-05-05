import styled from 'styled-components/native';

interface Props {
  isSelected: boolean;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border-width: 1px;
  border-color: #E5E5E5;
  padding: 4px;
  border-radius: 8px;
`;


export const ButtonCardRow = styled.View<Props>`
    align-items: center;
    justify-content: center;
    background-color: ${({isSelected}) => isSelected ? '#C59A32' : '#E5E5E5'};
    padding: 10px 12px;
    border-radius: 4px;
`;

export const ButtonCardCollumn = styled.View<Props>`
  align-items: center;
  justify-content: center;
  background-color: ${({isSelected}) => isSelected ? '#C59A32' : '#E5E5E5'};
  padding: 10px 12px;
  border-radius: 4px;
  margin-left: 4px;
`;

