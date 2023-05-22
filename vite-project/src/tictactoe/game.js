import { useState } from "react"
//useState gồm 2 giá trị: useState(giá trị khởi tạo, function cập nhật giá trị đó)
// vd: useState(value, setValue) 
function Square({ value, onSquareClick }){
  // const [value, setValue] = useState(null)

  // function onSquareClick(){
  //   setValue('X')
  //   console.log("ban vua click vao")
  // }
 return (
 <button className="square" onClick={onSquareClick}>{value}</button>)
}
export default function Board(){
  // tạo useState tên giá trị khởi tạo là xIsNext(true), function cập nhật giá trị là setXIsNext
  const [xIsNext, setXIsNext] = useState(true) 
  const [squares, setSquares] = useState(Array(9).fill(null))

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice(); // trả về 1 mảng mới
    if (xIsNext) {
      nextSquares[i] = 'X';
      console.log("gia tri la", nextSquares)
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function resetGame(){
    setSquares(Array(9).fill(null))
  }

return(
<>

<div className="w-60 h-60 board-row m-auto mt-3 grid grid-cols-3 border border-sky-500">
  <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
  <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
  <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
  <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
  <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
  <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
  <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
  <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
  <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
</div>
<div className="winner text-center justify-center">{winner ? `Winner is ${winner}` : ""}</div>
<div className="m-auto">
  <button className="mt-5 ml-44 w-20 h-16 bg-sky-400" onClick={resetGame}>Reset Game</button>
</div>

</>
)
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
