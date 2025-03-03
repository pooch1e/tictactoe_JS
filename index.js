const gameboard = {
  board: [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "]],
  gameWon: false,
  turn: 0,

  render: function(){
    console.log("   ") // empty space before a board
    this.board.forEach((arr, i)=> { // looping over each array in the board
        console.log(arr.toString().replace(/,/g, "|"))
    })
},

  checkMoveIsValid: function(x, y) {
    if (this.board[x][y] == " ") {
      console.log("valid move")
    } else {
      console.log("invalid, please try again")
    }
  },

  checkForWin: function(player_symbol) {
    for (let i = 0; i < this.board.length; i++) {
      let row = this.board[i];
      let col = this.board.map(row => row[i]);
      if (row.every(cell => cell === player_symbol) || col.every(cell => cell === player_symbol)) { //check lines
        this.gameWon = true;
      }
    }
    //check diagonals
    if (this.board[0][0] === player_symbol && this.board[1][1] === player_symbol && this.board[2][2] === player_symbol || this.board[0][2] === player_symbol && this.board[1][1] === player_symbol && this.board[2][0] === player_symbol) {
      this.gameWon = true;
    }
  }



}

const player = {
  init: function(x, y) {
    this.x = x;
    this.y = y;
    this.symbol = input;
  },

  whoIsPlaying: function() {
    let input;
    input = prompt("Enter X or O");
    return input;
  },

  playerMove: function(x, y) {
   this.symbol = gameboard.board[x][y];
  }

  
}
//debug
gameboard.render();
gameboard.checkMoveIsValid(0, 0);