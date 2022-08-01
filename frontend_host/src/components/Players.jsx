import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../materials/colors'
import { spacing } from '../materials/spacing'
import { Context } from '../App'

const PlayersContainer = styled.div`
  margin-top: ${spacing.large};
  display: flex;
  gap: ${spacing.medium};
`

const Player = styled.div`
  ${(props) => (props.variant === 'bright'
    ? `border: 2px solid ${colors.black};
      color: ${colors.black};`
    : `border: 2px solid ${colors.white};
     color: ${colors.white};`)}
  ${(props) => (props.answer === 'correct'
    && `border: 2px solid ${colors.green};
      background: ${colors.green};
      color: ${colors.white};`)}
  ${(props) => (props.answer === 'incorrect'
    && `border: 2px solid ${colors.red};
      background: ${colors.red};
      color: ${colors.white};`)}

  padding: ${spacing.medium};
  flex: 1;
  font-weight: 800;
  font-size: calc(10px + 1vw);
  text-align: center;
`

const ANSWER_TO_STYLE = {
  [true]: 'correct',
  [false]: 'incorrect',
}

export function Players({ variant }) {
  const [context] = useContext(Context)
  const { players, answers } = context

  return (
    <PlayersContainer>
      {Object.entries(players).map((player) => {
        const [id, details] = player

        return (
          <Player
            variant={variant}
            key={id}
            answer={ANSWER_TO_STYLE[answers[id]]}
          >
            {details.name}
          </Player>
        )
      })}
    </PlayersContainer>
  )
}

Players.defaultProps = {
  variant: 'bright',
}

Players.propTypes = {
  variant: PropTypes.string,
}
