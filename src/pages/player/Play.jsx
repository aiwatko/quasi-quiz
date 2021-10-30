import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../materials/spacing';
import { InputRadio } from '../../components/InputRadio';

const Container = styled.div`
    display: grid;
    height: 100vh;
    padding: ${spacing.medium};
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${spacing.medium};
    row-gap: ${spacing.medium};
`;

export const Play = () => (
  <Container>
    <InputRadio disabled name="play" value="A" />
    <InputRadio name="play" value="B" />
    <InputRadio variant="correct" name="play" value="C" />
    <InputRadio variant="incorrect" name="play" value="D" />
  </Container>
);
