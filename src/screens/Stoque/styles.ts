import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`;

export const SectionButtonGps = styled.View`
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    margin-top: 20px;
`;

export const ButtonGps = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 0 56px;
    height: 60px;
    background-color: #2E2C29;
    border-radius: 50px;
`;

export const TextGps = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.BOLD};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(2)}px;
    line-height: 24px;
    margin-right: 10px;
`;

export const SectionMain = styled.View`
    align-items: center;
    background-color: #F5F5F5;
    padding: 20px;
    height: 800px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    position: relative;
    margin-top: 50px;
`;

export const SectionClient = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: -80px;
    width: ${RFPercentage(18)}px;
    height: ${RFPercentage(18)}px;
    background-color: #C59A32;
    border-radius: 100px;
    border-width: 2px;
    border-color: #fff;
    z-index: 2;
`;

export const TextClient = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${RFPercentage(5)}px;
    text-align: center;
    line-height: 140px;
`;


export const TextMain = styled.Text`
    color: #2E2C29;
    font-weight: bold;
    font-size: 32px;
`;

export const SectionStoque = styled.View`
    width: 100%;
    margin-bottom: 12px;
`;

export const SectionCategoryButtons = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 12px;
`;

export const SectionFilter = styled.View`
    justify-content: space-between;
`;

export const SectionFooter = styled.View`
    /* background-color: ${({ theme }) => theme.COLORS.BLUE}; */

`;

export const ViewFooter = styled.View`
    align-items: center;
    justify-content: center;
    flex: 1;
`;
