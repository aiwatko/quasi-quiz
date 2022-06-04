import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/PageContainer';
import { Players } from '../../components/Players';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';

const question = 'How many tram lines are there in Zürich?';
const answers = ['Lorem ipsum sin dolor amet', 11, 12, 16];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: calc(20px + 2vw);
`;

const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.medium};
  flex: 1;
`;

const Answer = styled.div`
  background: ${colors.black};
  padding: ${spacing.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: calc(15px + 1vw);
`;

export const Question = () => (
  <PageContainer>
    <Container>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.map((answer) => <Answer>{answer}</Answer>)}
      </AnswersContainer>
      <Players />
    </Container>
  </PageContainer>
);
