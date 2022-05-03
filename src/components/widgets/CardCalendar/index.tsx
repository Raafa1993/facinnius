import React from "react";

//ICONS
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import {
  Container,
  ButtonBack,
  TextButton,
  SectionData,
  TextData,
  SectionButtonSave,
} from "./styles";


interface PropsData {
  onBackToPage: () => void;
  onSave: () => void;
  day: string;
}

export default function CardCalendar({ onBackToPage, onSave, day }: PropsData) {
  return (
    <Container>
      <ButtonBack
        activeOpacity={0.7}
        onPress={onBackToPage}
      >
        <MaterialIcons name="keyboard-arrow-left" size={34} color="#8E8E8E" />
        <TextButton>Voltar</TextButton>
      </ButtonBack>

      <SectionData>
        <EvilIcons name="calendar" size={44} color="#000" />
        <TextData numberOfLines={1}>{day}</TextData>
      </SectionData>

      <SectionButtonSave
        activeOpacity={0.7}
        onPress={onSave}
      >
        <Ionicons name="md-save-outline" size={38} color="white" />
      </SectionButtonSave>
    </Container>
  );
}
