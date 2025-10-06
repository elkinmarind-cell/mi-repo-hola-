const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const restartBtn = document.getElementById('restart');

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;

const winningCombinations = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
];

function checkWinner() {
  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return board.includes(null) ? null : 'Empate';
}

function handleClick(e) {
  const index = e.target.dataset.index;
  if (board[index] || gameOver) return;

  board[index] = currentPlayer;
  e.target.textContent = currentPlayer;

  const result = checkWinner();
  if (result) {
    gameOver = true;
    message.textContent = result === 'Empate' ? '¡Es un empate!' : `¡Gana ${result}!`;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Turno de ${currentPlayer}`;
  }
}

function restartGame() {
  board.fill(null);
  cells.forEach(cell => cell.textContent = '');
  currentPlayer = 'X';
  gameOver = false;
  message.textContent = `Turno de ${currentPlayer}`;
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Mensaje inicial
message.textContent = `Turno de ${currentPlayer}`;



