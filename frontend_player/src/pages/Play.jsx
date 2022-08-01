import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { spacing } from '../materials/spacing'
import { InputRadio } from '../components/InputRadio'
import { Context } from '../App'

const Container = styled.div`
    display: grid;
    height: 100vh;
    padding: ${spacing.medium};
    grid-template-columns: repeat(2, 1fr);
    column-gap: ${spacing.medium};
    row-gap: ${spacing.medium};
`

export const Play = () => {
  const [selectedInput, setSelectedInput] = useState()
  const [context] = useContext(Context)

  const handleClick = (e) => {
    setSelectedInput(e.target.value)
  }

  return (
    <Container>
      {['A', 'B', 'C', 'D'].map((option) => (
        <InputRadio
          key={`answer-${option}`}
          onClick={handleClick}
          disabled={context.buttons === 'off' || (!!selectedInput && selectedInput !== option)}
          name="play"
          value={option}
        />
      ))}
    </Container>
  )
}
