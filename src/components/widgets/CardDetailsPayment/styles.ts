import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

interface Props {
    isTotal?: boolean;
}

export const Container = styled.View`
    background-color: transparent;
`;

export const SectionFinishedAttendence = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.COLORS.GOLD};
    position: relative;
`;

export const TextSale = styled.Text`
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(1.8)}px;
    line-height: 26px;
    text-transform: uppercase;
`;

export const ButtonFinishedAttendence = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: ${RFPercentage(1.8)}px ${RFPercentage(1.8)}px;
    background-color: ${({ theme }) => theme.COLORS.GREEN};
    border-radius: 50px;
    border-width: 3px;
    border-color: #F5F5F5;
    position: absolute;
    right: 18px;
    bottom: 20px;
`;

export const TextButtonFinished = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(1.6)}px;
    line-height: 21px;
    text-transform: uppercase;
`;

export const SectionTotals = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    background-color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const ViewTotalValues = styled.View`
    align-items: baseline;
    flex: 1;
`;

export const TextTotalDesciption = styled.Text`
    font-family: ${({theme}) => theme.FONTS.SEMIBOLD};
    color: ${({theme}) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(2)}px;
    line-height: 24px;
    text-transform: uppercase;
`;

export const TextTotalValues = styled.Text<Props>`
    font-family: ${({theme}) => theme.FONTS.BOLD};
    color: ${({isTotal}) => isTotal ? '#F54949' : '#fff'};
    font-size: ${RFPercentage(2.2)}px;
    line-height: 28px;
`;
