import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Question } from './pages/host/Question';
import { Play } from './pages/player/Play';
import { PlayerWelcome } from './pages/player/Welcome';
import { HostWelcome } from './pages/host/Welcome';
import { GlobalStyle } from './globalStyles';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/" element={<PlayerWelcome />} />
        <Route path="/host" element={<HostWelcome />} />
        <Route path="/question" element={<Question />} />
        <Route path="/player" element={<Play />} />
      </Routes>
    </Router>
  </>
);

export default App;
