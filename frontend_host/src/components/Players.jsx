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
     color: ${colors.white};`)
}
  
  padding: ${spacing.medium};
  flex: 1;
  font-weight: 800;
  font-size: calc(10px + 1vw);
  text-align: center;
`

export function Players({ variant }) {
  const [context] = useContext(Context)

  return (
    <PlayersContainer>
      {Object.entries(context.players).map((player) => (
        <Player variant={variant} key={player[0]}>{player[1].name}</Player>
      ))}
    </PlayersContainer>
  )
}

Players.defaultProps = {
  variant: 'bright',
}

Players.propTypes = {
  variant: PropTypes.string,
}
