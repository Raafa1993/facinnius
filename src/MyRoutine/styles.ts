import styled from 'styled-components/native'
import { RFPercentage } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
`;

export const SectionMessage = styled.View`
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 32px;
    line-height: 36px;
    font-family: ${(props) => props.theme.FONTS.BOLD};
    color: ${(props) => props.theme.COLORS.TEXT};
`;

export const SubTitle = styled.Text`
    font-size: 16px;
    line-height: 22px;
    font-family: ${(props) => props.theme.FONTS.MEDIUM};
    color: ${(props) => props.theme.COLORS.SUBTITLE};
`;

export const DaySelected = styled.Text`
    font-size: 16px;
    line-height: 22px;
    font-family: ${(props) => props.theme.FONTS.BOLD};
    color: ${(props) => props.theme.COLORS.GOLD};
`;

export const SectionWeek = styled.View`
    margin-top: 32px;
    flex-direction: row;
    justify-content: space-between;
`;
export const ButtonWeek = styled.TouchableOpacity`
    align-items: center;
    padding: 20px;
    margin: 4px;
    background-color: ${({ theme }) => theme.COLORS.GOLD};
    border-radius: 12px;
    flex: 1;
`;

export const TextButtonWeek = styled.Text`
    font-size: 18px;
    line-height: 22px;
    font-family: ${({ theme }) => theme.FONTS.MEDIUM};
    color: #fff;
`;

export const SectionMyObjective = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 18px;
`;

export const TextObjective = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${(props) => props.theme.FONTS.SEMIBOLD};
    color: ${(props) => props.theme.COLORS.H3};
`;

export const TextValorObjective = styled.Text`
    font-size: ${RFPercentage(2.5)}px;
    font-family: ${(props) => props.theme.FONTS.SEMIBOLD};
    color: ${(props) => props.theme.COLORS.GOLD};
`;

export const SectionCardObjective = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const SectionCardDay = styled.View`
    width: 100%;
`;
