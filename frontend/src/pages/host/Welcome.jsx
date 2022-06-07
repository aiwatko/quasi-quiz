import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../materials/colors';
import { QUESTION, WS_REGISTRATION } from '../../constants';
import { Players } from '../../components/Players';
import { spacing } from '../../materials/spacing';
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
  font-size: calc(30px + 1vw);
  color: ${colors.white};
`;

const GameLink = styled(Link)`
  color: ${colors.white};
  font-size: calc(15px + 1vw);
  margin-bottom: ${spacing.large};
`;

export const HostWelcome = () => {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
    setContext({ ...context, hostWs: new WebSocket(WS_REGISTRATION.host) });
  }, []);

  useEffect(() => {
    if (context.hostWs) {
      context.hostWs.onmessage = (event) => {
        const data = JSON.parse(event.data);
        setContext({ ...context, players: data.players });
      };
    }
  }, [context]);

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <GameLink to={QUESTION}>Play</GameLink>
      <Players players={context.players} variant="dark" />
    </Container>
  );
};
