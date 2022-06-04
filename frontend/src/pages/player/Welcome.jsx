import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';
import { PLAYER } from '../../routes';

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
  const [ws, setWs] = useState();
  const [teamName, setTeamName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setWs(new WebSocket('ws://localhost:5000/game?type=player'));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    ws.send(JSON.stringify({ team: teamName }));
    navigate(PLAYER);
  };

  return (
    <Container>
      <Title>Welcome to QuasiQuiz!</Title>
      <form onSubmit={handleSubmit}>
        <Input placeholder="team name" id="teamName" value={teamName} onChange={(e) => { setTeamName(e.target.value); }} />
        <Button>Play</Button>
      </form>
    </Container>
  );
};
