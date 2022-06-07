import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';
import { GAME, WS_ACTIONS, WS_REGISTRATION } from '../../constants';
import { Context } from '../../App';

const Container = styled.div`
  display: flex;
  padding: ${spacing.large};
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background: ${colors.black};
`;

const Title = styled.h1`
  font-size: 30px;
  color: ${colors.white};
`;

const Input = styled.input`
  // height: 29px;
  padding: ${spacing.medium} ${spacing.small};
  margin-right: ${spacing.large};
  background: ${colors.black};
  color: ${colors.white};
  border: 2px solid ${colors.white};
  font-size: 15px;
  border-radius: 0;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
`;

const Button = styled.button`
  padding: ${spacing.medium} ${spacing.xLarge};
  background: ${colors.black};
  color: ${colors.white};
  border: 2px solid ${colors.white};
  font-size: 15px;
  text-align: center;
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
    navigate(GAME);
  };

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <form onSubmit={handleSubmit}>
        <Input placeholder="player or team name" value={playerName} onChange={(e) => { setPlayerName(e.target.value); }} />
        <Button>play</Button>
      </form>
    </Container>
  );
};
