import React, { useContext } from 'react';
import styled from 'styled-components';
import { PageContainer } from '../../components/PageContainer';
// import { colors } from '../../materials/colors';
import { spacing } from '../../materials/spacing';
import { Context } from '../../App';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 0;
  font-size: calc(20px + 2vw);
`;

const Score = styled.div`
  margin-bottom: ${spacing.medium};
  font-size: calc(10px + 2vw);
`;

export const Ranking = () => {
  const [context] = useContext(Context);

  return (
    <PageContainer>
      <Container>
        <div>
          <Title>Ranking</Title>
          {Object.entries(context.players).map((player) => (
            <Score key={player[0]}>
              {player[1].name}
              : 0
            </Score>
          ))}
        </div>
      </Container>
    </PageContainer>
  );
};
