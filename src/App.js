import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import GamePageLuckyJet from './pages/GamePageLuckyJet';
import GamePageSpaceX from './pages/GamePageSpaceX';
import GamePageJetX from './pages/GamePageJetX';
import GamePageMatrix from './pages/GamePageMatrix';
import GamePageRocketQueen from './pages/GamePageRocketQueen';
import GamePageNewGame from './pages/GamePageNewGame';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/matrix" element={<GamePageMatrix />} />
        <Route path="/newgame" element={<GamePageNewGame />} />
        <Route path="/spacex" element={<GamePageSpaceX />} />
        <Route path="/rocketqueen" element={<GamePageRocketQueen />} />
        <Route path="/luckyjet" element={<GamePageLuckyJet />} />
      </Routes>
    </Router>
  );
}

export default App;