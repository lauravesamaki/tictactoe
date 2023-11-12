import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Square from './components/square';
import './App.css';

//Main App component for the tic-tac-toe game
function App() {
  let [value, setValue] = useState('X');
  let [statValue, setStatValue] = useState('X');
  let [squares, setSquares] = useState([]);
  let [statText, setStatText] = useState('Next player: ');
  let status = statText + statValue;

  //Handle click event for the tic-tac-toe board
  function handleClick(e) {
    setValue(value === 'X' ? 'O' : 'X');

    e.target.disabled = true;

    let squareId = e.target.id;
    let square = document.getElementById(squareId);
    let squareValue = document.createTextNode(value);

    square.appendChild(squareValue);

    setStatValue(statValue === 'X' ? 'O' : 'X');
    
    setSquares([...squares, {id: squareId, value: value}]);  

    let winner = checkWinner();
    if (winner !== null) {
      setStatText('Winner: ');
      setStatValue(winner);
      let resetButton = document.getElementById('reset');
      resetButton.hidden = false;
    }
  }  

  return (
    //JSX for the tic-tac-toe game
    <div className="App">
      <header className="App-header">
        Tic Tac Toe
      </header>
      <div className="game">
        <div className="game-board">
          <table>
            <tbody>
              <tr id="a">
                <td>
                  <Square id="1" onClick={handleClick} />
                </td>
                <td>
                  <Square id="2" onClick={handleClick} />
                </td>
                <td>
                  <Square id="3" onClick={handleClick} />
                </td>
              </tr>            
              <tr id="b">
                <td>
                  <Square id="4" onClick={handleClick} />
                </td>
                <td>
                  <Square id="5" onClick={handleClick} />
                </td>
                <td>
                  <Square id="6" onClick={handleClick} />
                </td>
              </tr>
              <tr id="c">
                <td>
                  <Square id="7" onClick={handleClick} />
                </td>
                <td>
                  <Square id="8" onClick={handleClick} />
                </td>
                <td>
                  <Square id="9" onClick={handleClick} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="game-info">
          <span id="status"><br />{status}<br /></span>
          <Button id="reset" onClick={() => {setStatValue('X'); setStatText('Next player: '); reset()}}>Reset</Button>
        </div>
      </div>
    </div>
  );
}

//Check for a winner after each move
function checkWinner(){
  let winner = null;

  let a1 = document.getElementById('1').innerHTML;
  let a2 = document.getElementById('2').innerHTML;
  let a3 = document.getElementById('3').innerHTML;
  let b1 = document.getElementById('4').innerHTML;
  let b2 = document.getElementById('5').innerHTML;
  let b3 = document.getElementById('6').innerHTML;
  let c1 = document.getElementById('7').innerHTML;
  let c2 = document.getElementById('8').innerHTML;
  let c3 = document.getElementById('9').innerHTML;

  if (a1 === a2 && a2 === a3 && a1 !== '') {
    winner = a1;

    getSquares(0,1,2);
  }

  if (b1 === b2 && b2 === b3 && b1 !== '') {
    winner = b1;

    getSquares(3,4,5);
  }

  if (c1 === c2 && c2 === c3 && c1 !== '') {
    winner = c1;

    getSquares(6,7,8);
  }

  if (a1 === b1 && b1 === c1 && a1 !== '') {
    winner = a1;

    getSquares(0,3,6);
  }

  if (a2 === b2 && b2 === c2 && a2 !== '') {
    winner = a2;

    getSquares(1,4,7);
  }

  if (a3 === b3 && b3 === c3 && a3 !== '') {
    winner = a3;

    getSquares(2,5,8);
  }

  if (a1 === b2 && b2 === c3 && a1 !== '') {
    winner = a1;

    getSquares(0,4,8);
  }

  if (a3 === b2 && b2 === c1 && a3 !== '') {
    winner = a3;

    getSquares(2,4,6);
  }  
  
  return winner;
}

function getSquares(x,y,z){
  let buttons = document.getElementsByClassName('square');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].disabled = true;
    }

    buttons[x].style.color = 'green';
    buttons[y].style.color = 'green';
    buttons[z].style.color = 'green';
  }

//Reset the game board
function reset(){
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].innerHTML = '';
    squares[i].disabled = false;
  }
}

export default App;
