import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CATEGORY } from '../../constants';
import { Players } from '../../components/Players';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';
import { registerHost } from '../../ws/actions';
import { Context } from '../../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: ${colors.black};
  color: ${colors.white};
`;

const Title = styled.h1`
  font-size: calc(30px + 1vw);
`;

const GameLink = styled(Link)`
  font-size: calc(15px + 1vw);
  margin-bottom: ${spacing.large};
`;

export const HostWelcome = () => {
  const [_, setContext] = useContext(Context);

  useEffect(() => {
    registerHost(setContext);
  }, []);

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <GameLink to={CATEGORY}>Play</GameLink>
      <Players variant="dark" />
    </Container>
  );
};
