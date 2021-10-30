import React from 'react';
import styled from 'styled-components';
import { spacing } from '../../materials/spacing';
import { Button } from '../../components/Button';

const ButtonsContainer = styled.div`
    display: grid;
    height: 100vh;
    padding: ${spacing.medium};
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${spacing.medium};
    row-gap: ${spacing.medium};
`;

export const Play = () => (
  <ButtonsContainer>
    <Button disabled>A</Button>
    <Button>B</Button>
    <Button variant="correct">C</Button>
    <Button variant="incorrect">D</Button>
  </ButtonsContainer>
);
