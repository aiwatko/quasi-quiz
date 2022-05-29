import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Question } from './pages/host/Question';
import { Welcome } from './pages/player/Welcome';
import { GlobalStyle } from './globalStyles';

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/host" element={<Question />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  </>
);

export default App;
