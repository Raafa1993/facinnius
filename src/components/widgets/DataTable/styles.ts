import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    border-radius: 12px;
    background-color: transparent;
    margin-bottom: 4px;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.H3};
    margin-bottom: 12px;
`;

export const TableRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: rgba(0,0,0, 0.15);
    border-bottom-width: 1px;
    margin-bottom: 12px;
    padding: 6px 0;
    
`;

export const TextLeft = styled.Text`
    font-size: ${RFPercentage(1.6)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.H3};
`;

export const TextRight = styled.Text`
    font-size: ${RFPercentage(1.6)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.H3};
`;
