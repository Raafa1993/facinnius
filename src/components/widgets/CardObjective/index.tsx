import React from 'react';

import { Container, Section, Title, Description } from './styles';

type Props = {
  titleOne: string;
  descriptionOne: string;
  titleTwo: string;
  descriptionTwo: string;
}

export default function CardObjective({ titleOne, descriptionOne, titleTwo, descriptionTwo}: Props){
  return (
    <Container>
        <Section>
            <Title numberOfLines={1}>{titleOne}</Title>
            <Description>{descriptionOne}</Description>
        </Section>
        <Section>
            <Title numberOfLines={1}>{titleTwo}</Title>
            <Description>{descriptionTwo}</Description>
        </Section>
    </Container>
  );    
}