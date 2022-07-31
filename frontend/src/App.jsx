import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Play } from './pages/player/Play';
import { PlayerWelcome } from './pages/player/Welcome';
import { Question } from './pages/host/Question';
import { HostWelcome } from './pages/host/Welcome';
import { Category } from './pages/host/Category';
import { Ranking } from './pages/host/Ranking';
import { GlobalStyle } from './globalStyles';
import {
  CATEGORY,
  GAME, HOST, PLAYER, QUESTION, RANKING,
} from './constants';

export const Context = createContext();

const App = () => {
  const [context, setContext] = useState({
    players: [],
  });

  return (
    <Context.Provider value={[context, setContext]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={PLAYER} element={<PlayerWelcome />} />
          <Route path={GAME} element={<Play />} />
          <Route path={HOST} element={<HostWelcome />} />
          <Route path={CATEGORY} element={<Category />} />
          <Route path={QUESTION} element={<Question />} />
          <Route path={RANKING} element={<Ranking />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
