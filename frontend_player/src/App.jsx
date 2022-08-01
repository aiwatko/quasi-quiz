import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Play } from './pages/Play'
import { Welcome } from './pages/Welcome'
import { GlobalStyle } from './globalStyles'
import { GAME, PLAYER } from './constants'

export const Context = createContext()

const App = () => {
  const [context, setContext] = useState({
    buttons: 'off',
  })

  return (
    <Context.Provider value={[context, setContext]}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path={PLAYER} element={<Welcome />} />
          <Route path={GAME} element={<Play />} />
        </Routes>
      </Router>
    </Context.Provider>
  )
}

export default App
