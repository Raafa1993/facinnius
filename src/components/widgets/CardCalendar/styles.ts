import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex-direction: row;
    background-color: transparent;
    margin-bottom: 20px;
    height: ${RFPercentage(9)}px;
    margin: 20px;
`;

export const ButtonBack = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 6px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-right-color: #F3F3F3;
    border-right-width: 2px;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    color: ${({ theme }) => theme.COLORS.SUBTITLE};
    font-size: ${RFPercentage(1.8)}px;
    line-height: 23px;
    margin-right: 6px;
`;

export const SectionData = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 12px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const TextData = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.SEMIBOLD};
    color: ${({ theme }) => theme.COLORS.TEXT};
    font-size: ${RFPercentage(1.8)}px;
    line-height: 23px;
    margin-left: 6px;
`;

export const SectionButtonSave = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width:  ${RFPercentage(9)}px;
    border-radius: 8px;
    margin-left: 12px;
    background-color: ${({ theme }) => theme.COLORS.GOLD};
`;
