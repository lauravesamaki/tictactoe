import React from 'react';
import { useState } from 'react';
import Square from './components/square';
import './App.css';

function App() {
  let [value, setValue] = useState('X');
  let [statValue, setStatValue] = useState('X');
  let status = 'Next player: ' + statValue;

  function handleClick(e) {
    setValue(value === 'X' ? 'O' : 'X');

    e.target.disabled = true;

    let squareId = e.target.id;
    let square = document.getElementById(squareId);
    let squareValue = document.createTextNode(value);

    square.appendChild(squareValue);
    setStatValue(statValue === 'X' ? 'O' : 'X');
  }  

  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            <Square id={1} onClick={handleClick} />
            <Square id={2} onClick={handleClick} />
            <Square id={3} onClick={handleClick} />
          </div>
          <div className="board-row">
            <Square id={4} onClick={handleClick} />
            <Square id={5} onClick={handleClick} />
            <Square id={6} onClick={handleClick} />
          </div>
          <div className="board-row">
            <Square id={7} onClick={handleClick} />
            <Square id={8} onClick={handleClick} />
            <Square id={9} onClick={handleClick} />
          </div>
        </div>
        <div className="game-info">
          <div><br />{status}</div>
          <div>{/* TODO */}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
