function setup() {

}

function draw() {
  
}

function drawBoard() {
  let gameBoard = new Array(22);
  for (let i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = new Array(10);
  }

  return gameBoard;
}

const BOARD = drawBoard();
const SQ = 35;
let x = 0;
let y = 0;

function setup() {
  createCanvas(1040, 880);
  frameRate(1)
  for (let i = 0; i < BOARD.length; i++) {
    for (let j = 0; j < BOARD[0].length; j++) {
      BOARD[i][j] = 0
      rect(j * SQ, i * SQ, SQ, SQ)
    }
  }
  draw()
}



function draw() {
}



