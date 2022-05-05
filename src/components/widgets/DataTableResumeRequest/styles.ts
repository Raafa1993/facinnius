import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
    isNegative?: boolean;
}

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    border-radius: 12px;
    background-color: transparent;
    margin-bottom: 12px;
    margin-top: 12px;
`;

export const Title = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme}) => theme.FONTS.BOLD};
    color: ${({theme}) => theme.COLORS.TEXT};
`;

export const TableRow = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: rgba(0,0,0, 0.15);
    border-bottom-width: 1px;
    margin-bottom: 12px;
    padding: 6px 0;
    
`;

export const SubTitle = styled.Text`
    font-size: ${RFPercentage(1.8)}px;
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.H3};
    margin-bottom: 12px;
`;

export const ViewTable = styled.View`
    /* background-color: lightblue; */
    
`;

export const Tbody = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    border-bottom-width: 1px;
    padding: 6px 0;
    border-color: #cece;
`;

export const TextTh = styled.Text`
    flex: 1;
    margin-left: -1px;

    font-size: ${RFPercentage(1.8)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.TEXT};
`;

export const TextTr = styled.Text`
    flex: 1;
    margin-left: -1px;

    font-size: ${RFPercentage(1.8)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.TEXT};
`;

export const TextTrDescription = styled.Text`
    flex: 1;
    margin-left: -1px;

    font-size: ${RFPercentage(1.8)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.H3};
`;

export const TextTrValues = styled.Text<Props>`
    flex: 1;
    margin-left: -1px;

    font-size: ${RFPercentage(1.8)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${({isNegative}) => isNegative ? '#F54949' : '#6D6D6D'};
`;



// export const TextLeft = styled.Text`
//     font-size: ${RFPercentage(1.6)}px;
//     font-family: ${(props) => props.theme.FONTS.MEDIUM};
//     color: ${(props) => props.theme.COLORS.H3};
// `;

