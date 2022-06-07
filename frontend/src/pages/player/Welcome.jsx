import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';
import { PLAYER, WS_ACTIONS, WS_REGISTRATION } from '../../constants';
import { Context } from '../../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${colors.black};
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${colors.white};
`;

const Input = styled.input`
  height: ${spacing.large};
  padding: ${spacing.medium} ${spacing.small};
  margin-right: ${spacing.large};
`;

const Button = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background: ${colors.white};
  color: ${colors.black};
  font-weight: 800;
  text-align: center;
  border: 2px solid ${colors.white};
  border-radius: 3px;
`;

export const PlayerWelcome = () => {
  const [context, setContext] = useContext(Context);

  const [playerName, setPlayerName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setContext({
      ...context, playerWs: new WebSocket(WS_REGISTRATION.player),
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    context.playerWs.send(
      JSON.stringify({ action: WS_ACTIONS.playerNameRegistration, playerName }),
    );
    navigate(PLAYER);
  };

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <form onSubmit={handleSubmit}>
        <Input placeholder="player or team name" value={playerName} onChange={(e) => { setPlayerName(e.target.value); }} />
        <Button>Play</Button>
      </form>
    </Container>
  );
};
