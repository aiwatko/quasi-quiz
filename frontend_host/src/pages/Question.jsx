import React, { useContext } from 'react'
import styled from 'styled-components'
import { Context } from '../App'
import { Countdown } from '../components/Countdown'
import { PageContainer } from '../components/PageContainer'
import { Players } from '../components/Players'
import { colors } from '../materials/colors'
import { spacing } from '../materials/spacing'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Timer = styled.div`
  font-size: calc(20px + 2vw);
  font-weight: bold;
  align-self: flex-end;
`

const Title = styled.h1`
  margin-top: 0;
  font-size: calc(20px + 2vw);
`

const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${spacing.medium};
  flex: 1;
`

const Answer = styled.div`
  background: ${colors.black};
  padding: ${spacing.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: calc(15px + 1vw);
`

export function Question() {
  const [context] = useContext(Context)
  const { question, answers, time } = context.questions[context.currentQuestion]

  return (
    <PageContainer>
      <Container>
        <Timer><Countdown time={time} /></Timer>
        <Title>{question}</Title>
        <AnswersContainer>
          {answers.map((answer) => <Answer>{answer}</Answer>)}
        </AnswersContainer>
        <Players />
      </Container>
    </PageContainer>
  )
}
