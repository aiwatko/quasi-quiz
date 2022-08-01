import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Question } from './pages/Question'
import { Welcome } from './pages/Welcome'
import { Category } from './pages/Category'
import { Ranking } from './pages/Ranking'
import { GlobalStyle } from './globalStyles'
import {
  CATEGORY, WELCOME, QUESTION, RANKING,
} from './constants'

export const Context = createContext()

function App() {
  const [context, setContext] = useState({
    players: [],
  })

  return (
    <Context.Provider value={[context, setContext]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={WELCOME} element={<Welcome />} />
          <Route path={CATEGORY} element={<Category />} />
          <Route path={QUESTION} element={<Question />} />
          <Route path={RANKING} element={<Ranking />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
}

export default App
