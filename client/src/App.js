import React from 'react';
import './App.css';
import PlayerList from './components/PlayerList.jsx'
function App() {
  return (
    <div>
      <header>
        <h1 className="header">ResuelveFC</h1>
        <PlayerList />
      </header>
    </div>
  );
}

export default App;
