import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Context } from '../App'
import { QUESTION } from '../constants'
import { colors } from '../materials/colors'
import { spacing } from '../materials/spacing'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${colors.black};
  color: ${colors.white};
`

const Title = styled.h1`
  font-size: calc(30px + 1vw);
  margin-bottom: ${spacing.medium};
`

const Subtitle = styled.h2`
  font-size: calc(15px + 1vw);
  margin-top: 0;
  margin-bottom: ${spacing.xLarge};
`

const QuestionLink = styled(Link)`
  color: ${colors.white};
  font-size: calc(15px + 1vw);
  margin-bottom: ${spacing.large};
`

export function Category() {
  const [context] = useContext(Context)
  const { category, time } = context.currentQuestion

  return (
    <Container>
      <Title>{category}</Title>
      <Subtitle>
        {`${time} seconds`}
      </Subtitle>
      <QuestionLink to={QUESTION}>Go!</QuestionLink>
    </Container>
  )
}
