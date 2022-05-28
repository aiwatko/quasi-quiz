import React from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/PageContainer';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';

const question = 'How many tram lines are there in Zürich?';
const answers = ['Lorem ipsum sin dolor amet', 11, 12, 16];
const teams = ['galapagos', 'azores', 'sicily', 'lodz'];

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

const TeamsContainer = styled.div`
  margin-top: ${spacing.large};
  display: flex;
  gap: ${spacing.medium};
`;

const Team = styled.div`
  border: 2px solid ${colors.black};
  padding: ${spacing.medium};
  flex: 1;
  font-weight: 800;
  font-size: calc(10px + 1vw);
  text-align: center;
`;

export const Question = () => (
  <PageContainer>
    <Container>
      <Title>{question}</Title>
      <AnswersContainer>
        {answers.map((answer) => <Answer>{answer}</Answer>)}
      </AnswersContainer>
      <TeamsContainer>
        {teams.map((team) => <Team>{team}</Team>)}
      </TeamsContainer>
    </Container>
  </PageContainer>
);
