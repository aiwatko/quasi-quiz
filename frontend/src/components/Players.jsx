import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../materials/colors';
import { spacing } from '../materials/spacing';

const PlayersContainer = styled.div`
  margin-top: ${spacing.large};
  display: flex;
  gap: ${spacing.medium};
`;

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
`;

export const Players = ({
  players, variant,
}) => (
  <PlayersContainer>
    {players.map((player) => <Player variant={variant} key={player}>{player}</Player>)}
  </PlayersContainer>
);

Players.defaultProps = {
  players: [],
  variant: 'bright',
};

Players.propTypes = {
  players: PropTypes.array,
  variant: PropTypes.string,
};
