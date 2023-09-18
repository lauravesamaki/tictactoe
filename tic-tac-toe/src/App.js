import React from 'react';
import { useState } from 'react';
import Square from './components/square';
import './App.css';

function App() {
  let status = 'Next player: X';
  let [value, setValue] = useState('');

    function handleClick(e) {
        if (value === '') {
            setValue('X');
        }
        else {
            setValue(value === 'X' ? 'O' : 'X');
        }

        let id = e.target.id;
        let square = document.getElementById(id);
        square.disabled = true;
        
    }

  return (
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <div className="game">
        <div className="game-board">
          <div className="board-row">
            <Square id={1} value={value} onClick={handleClick} />
            <Square id={2} value={value} onClick={handleClick} />
            <Square id={3} value={value} onClick={handleClick} />
          </div>
          <div className="board-row">
            <Square id={4} value={value} onClick={handleClick} />
            <Square id={5} value={value} onClick={handleClick} />
            <Square id={6} value={value} onClick={handleClick} />
          </div>
          <div className="board-row">
            <Square id={7} value={value} onClick={handleClick} />
            <Square id={8} value={value} onClick={handleClick} />
            <Square id={9} value={value} onClick={handleClick} />
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
