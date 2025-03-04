//js in console
const gameboard = {
  board: [[" ", " ", " "],[" ", " ", " "], [" ", " ", " "]],
  gameWon: false,
  turn: 0,
  cells: $(".cell"), //grab cells

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
      const rowWin = row.every(cell => cell === player_symbol);
      const colWin = col.every(cell => cell === player_symbol);
      if (rowWin || colWin) { // Check lines.
        this.gameWon = true;
        console.log("You win")
        return true;
      }
    // Check diagonals
    if (
      (this.board[0][0] === player_symbol && this.board[1][1] === player_symbol && this.board[2][2] === player_symbol) || 
      (this.board[0][2] === player_symbol && this.board[1][1] === player_symbol && this.board[2][0] === player_symbol)
    ) {
      this.gameWon = true;
      console.log("You win.");
      return true;
    }
  }
  return false;
}
};

const player = {
  init: function(symbol) {
    this.symbol = symbol; //player symbol
  },

  playerMove: function(x, y) { //need to work on this
   if (gameboard.checkMoveIsValid(x, y) === true) {
    gameboard.board[x][y] = this.symbol; //if space is empty, put X there
   }
  }

  
}
player.init("X")
//debug
gameboard.render();
player.playerMove(0, 0);
gameboard.render();
player.playerMove(0, 1);
gameboard.render();
player.playerMove(0, 2);
gameboard.render();
gameboard.checkForWin("X");
