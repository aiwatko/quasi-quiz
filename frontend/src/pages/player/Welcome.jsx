import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../../components/PageContainer';
import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';

const Title = styled.h1`
  font-size: 30px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: ${spacing.medium};
`;

const Input = styled.input`
  height: ${spacing.large};
  padding: ${spacing.medium} ${spacing.small};
  margin-right: ${spacing.large};
`;

const Button = styled.button`
  padding: ${spacing.small} ${spacing.large};
  background: ${colors.black};
  color: ${colors.white};
  font-weight: 800;
  text-align: center;
  border: 2px solid ${colors.black};
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
    navigate('/player');
  };

  return (
    <PageContainer>
      <Title>Welcome to QuasiQuiz!</Title>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="teamName"> Enter your team name: </Label>
        <Input id="teamName" value={teamName} onChange={(e) => { setTeamName(e.target.value); }} />
        <Button>play!</Button>
      </form>
    </PageContainer>
  );
};