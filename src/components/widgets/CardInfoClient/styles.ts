import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    width: 100%;
    padding: ${RFPercentage(2.8)}px;
    border-radius: 12px;
    border-color: #fff;
    border-width: 2px;
    background-color: #FFF3D6;
    position: relative;
    margin-top: -20px;
`;

export const SectionTable = styled.View`
    flex: 1;
`;

export const SectinInfoClient = styled.View`
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: #E8DDC3;
    padding-bottom: 4px;
    margin-bottom: 12px;

`;

export const TextDescitpion = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.REGULAR};
    color: ${({ theme }) => theme.COLORS.SUBTITLE};
    font-size: ${RFPercentage(1.6)}px;
`;

export const TextValue = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${RFPercentage(2)}px;
    line-height: 22px;
    margin-top: 2px;
`;
