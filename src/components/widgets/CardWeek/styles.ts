import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

type Props = {
    isGreen?: boolean;
}

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: space-between;
    padding: 14px;
    border-radius: 12px;
    background-color: ${({theme}) => theme.COLORS.CARD};
    margin-bottom: 14px;
`;

export const TextDay = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${({theme}) => theme.FONTS.MEDIUM};
    color: ${({theme}) => theme.COLORS.TEXT};
    margin-bottom: 12px;
`;

export const TextData = styled.Text`
    font-size: ${RFPercentage(1.4)}px;
    font-family: ${({theme}) => theme.FONTS.MEDIUM};
    color: ${({theme}) => theme.COLORS.GOLD};
`;

export const SectionTableInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-color: rgba(0,0,0, 0.15);
    border-bottom-width: 1px;
    margin-bottom: 12px;
    padding: 6px 0;
    
`;

export const TextTotalDay = styled.Text`
    font-size: ${RFPercentage(1.6)}px;
    font-family: ${(props) => props.theme.FONTS.SEMIBOLD};
    color: ${(props) => props.theme.COLORS.SUBTITLE};
`;

export const TextValueDay = styled.Text`
    font-size: ${RFPercentage(2)}px;
    font-family: ${(props) => props.theme.FONTS.BOLD};
`;


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

export const SectionFooter = styled.View`
    flex-direction: row;
`;

export const Table = styled.View`
    flex: 1;
    justify-content: space-between;
`;

export const Td = styled.Text`
    font-size: ${RFPercentage(1.6)}px;
    font-family: ${(props) => props.theme.FONTS.SEMIBOLD};
    color: ${(props) => props.theme.COLORS.SUBTITLE};
    margin-bottom: 4px;
`;

export const Th = styled.Text<Props>`
    font-size: ${RFPercentage(2)}px;
    font-family: ${(props) => props.theme.FONTS.BOLD};

    color: ${({ isGreen }) => isGreen ? '#25B54D' : '#2E2C29'};
`;


