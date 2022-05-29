import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../materials/colors';

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
`;

export const HostWelcome = () => {
  const [ws, setWs] = useState();

  useEffect(() => {
    setWs(new WebSocket('ws://localhost:5000/game?type=host'), () => {
      ws.onmessage = (event) => {
        console.log(JSON.parse(event.data));
      };
    });
  }, []);

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <GameLink to="/question">Play</GameLink>
    </Container>
  );
};
