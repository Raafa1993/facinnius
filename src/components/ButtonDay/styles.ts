import styled from 'styled-components/native';

interface Props {
    selected?: boolean
} 
export const Container = styled.TouchableOpacity<Props>`
    align-items: center;
    padding: 20px;
    margin: 4px;
    background-color: ${({ selected }) => selected ? '#C59A32' : '#FFF'};
    border-radius: 12px;
    flex: 1;
`;

export const Text = styled.Text<Props>`
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    font-size: 18px;
    color: ${({ selected }) => selected ? '#FFF' : '#000000'};
    line-height: 22px;
`;