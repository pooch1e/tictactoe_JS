const gameboard = {
  board: [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "]],
  gameWon: false,
  turn: 0,

  render: function(){
    console.log("   ") // empty space before a board
    this.board.forEach((arr, i) => { // looping over each array in the board
        console.log(arr.toString().replace(/,/g, "|"))
    })
},

  checkMoveIsValid: function(x, y) {
    if (this.board[x][y] == " ") {
      console.log("valid move")
      return true;
    } else {
      console.log("invalid, please try again")
      return false;
    }
  },

  checkForWin: function(player_symbol) {
    for (let i = 0; i < this.board.length; i++) {
      let row = this.board[i];
      let col = this.board.map(row => row[i]);
      if (row.every(cell => cell === player_symbol) || col.every(cell => cell === player_symbol)) { //check lines
        this.gameWon = true;
        return true;
      }
    }
    //check diagonals
    if (this.board[0][0] === player_symbol && this.board[1][1] === player_symbol && this.board[2][2] === player_symbol || this.board[0][2] === player_symbol && this.board[1][1] === player_symbol && this.board[2][0] === player_symbol) {
      this.gameWon = true;
      return true;
    }
    return false;
  }

};

const player = {
  init: function(symbol) {
    this.symbol = symbol;
  },

  playerMove: function(x, y) { //need to work on this
   
  }

  
}
player.init("X")
//debug
gameboard.render();
player.playerMove(0, 0)
gameboard.checkMoveIsValid(0, 0);
