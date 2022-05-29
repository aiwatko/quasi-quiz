import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Question } from './pages/host/Question';
import { Play } from './pages/player/Play';
import { Welcome } from './pages/player/Welcome';
import { GlobalStyle } from './globalStyles';

const App = () => {
  const playerWebSocket = new WebSocket('ws://localhost:5000/game');
  const hostWebSocket = new WebSocket('ws://localhost:5000/game');

  playerWebSocket.onmessage = (event) => {
    console.log(JSON.parse(event.data));
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/host" element={<Question ws={hostWebSocket} />} />
          <Route path="/play" element={<Play ws={playerWebSocket} />} />
          <Route path="/" element={<Welcome ws={playerWebSocket} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
