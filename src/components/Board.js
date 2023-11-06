import React, { /* Component, */ useState } from 'react'
import Square from './Square'
import "./Board.css"

// export default class Board extends Component 
const Board = ({squares, onClick}) => {
  
  // constructor(props) {
  //   super(props); /* super가 있어야 this를 사용가능 */
  //   this.state = {
  //     squares: Array(9).fill(null)
  //   }
  // }
  
  // const [squares, setSquares] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true)
  
  // const calculateWinner = (squares) => {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6]
  //   ]
  //   for (let index = 0; index < lines.length; index++) {
  //     const [a, b, c] = lines[index];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

  // const winner = calculateWinner(squares);
  // let status;
  // if (winner) {
  //   status = 'Winner:' + winner;
  // } else {
  //   status = `Next player: ${xIsNext ? 'X' : 'O'}`; 
  // }

  // const status = `Next player: ${xIsNext ? 'X': 'O'}`;

  // const handleClick = (i) => {
  //   const newSquares = /* this.state. */squares.slice();

  //   if (calculateWinner(newSquares) || newSquares[i]) {
  //     return;
  //   }
  //   newSquares[i] = xIsNext ? 'X' :  'O';
  //   setSquares(newSquares);    
  //   setXIsNext(prev => !prev)
  //   // this.setState({ squares: squares })
  // }

  const renderSquare = (i) => {    
    return <Square value={squares[i]} 
      onClick={() => onClick(i)}/>
  };

  

  // render() {
    return (
      <div className='board-wrapper'>        
        <div className='board-row'>          
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}          
        </div>
        <div className='board-row'>            
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}            
        </div>
        <div className='board-row'>            
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}            
        </div>
      </div>
    )
  // }
}

export default Board
