import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Context } from '../../App';
import { hostMessageHandler } from '../../actionHanlders';
import {
  CATEGORY, WS_REGISTRATION,
} from '../../constants';
import { Players } from '../../components/Players';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';

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
      context.hostWs.onmessage = (message) => hostMessageHandler(message, context, setContext);
    }
  }, [context]);

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <GameLink to={CATEGORY}>Play</GameLink>
      <Players variant="dark" />
    </Container>
  );
};
