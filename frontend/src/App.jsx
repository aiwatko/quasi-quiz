import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Question } from './pages/host/Question';
import { Play } from './pages/player/Play';
import { PlayerWelcome } from './pages/player/Welcome';
import { HostWelcome } from './pages/host/Welcome';
import { GlobalStyle } from './globalStyles';
import {
  GAME, HOST, PLAYER, QUESTION,
} from './constants';

export const Context = createContext();

const App = () => {
  const [context, setContext] = useState({});

  return (
    <Context.Provider value={[context, setContext]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={PLAYER} element={<PlayerWelcome />} />
          <Route path={HOST} element={<HostWelcome />} />
          <Route path={QUESTION} element={<Question />} />
          <Route path={GAME} element={<Play />} />
        </Routes>
      </Router>
    </Context.Provider>
  );
};

export default App;
