const gameboard = {
  board: [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "]],
  
  updateBoard: function(){
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
  }



}

const player = {
  init: function(x, y, symbol) {
    this.x = x;
    this.y = y;
    this.symbol = symbol;
  },

  playerMove: function(x, y) {
   this.symbol = board[x][y];
  }
}
//debug
gameboard.updateBoard();
gameboard.checkMoveIsValid(0, 0);