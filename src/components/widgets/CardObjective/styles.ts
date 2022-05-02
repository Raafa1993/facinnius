import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    width: 48%;
    border-radius: 12px;
    background-color: ${(props) => props.theme.COLORS.CARD};
`

export const Title = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.SUBTITLE};
`;

export const Description = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${(props) => props.theme.FONTS.BOLD};
    color: ${(props) => props.theme.COLORS.TEXT};
`;

export const Section = styled.View`
    
`;

