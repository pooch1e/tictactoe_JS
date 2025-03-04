//JS with board
const gameboard = {
    options: ["", "", "", "", "", "", "", "", ""],

    winCondition: [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 7],
    ],
    currentPlayer: "X",
    running: false,

  init: function() {
    this.addListener();
    this.running = true;
    this.restartGame();
  },

  addListener: function() { //adds listener to cells
    //capture cell
    $(".cell").on("click", (e) => this.cellClicked(e));
  },

  cellClicked: function(e) { //gets cell index when cell clicked
    console.log("cell clicked") //for debug
    const cellIndex = Number($(e.target).attr("id"));
    console.log(cellIndex); //for debug

    //only get cell index if options are empty and game is running
    if (this.options[cellIndex] !== "" || !this.running) {
      return
    } else {
      this.updateBoard(cellIndex)
      this.checkWinner();
    }

  },
  
  updateBoard: function(cellIndex) {
    this.options[cellIndex] = this.currentPlayer; //making the options at index parsed, the player symbol |updates array
    $("#" + cellIndex).html(this.options[cellIndex]); //render to board

  },

  changePlayer: function() {
    this.currentPlayer = (this.currentPlayer == "X") ? "0": "X";
    $("#player-turn").html(`Player ${this.currentPlayer}'s turn`); //update UI html
  },

  checkWinner: function() {
    let winner = false;

    for (let i = 0; i < this.winCondition.length; i++) {
      const gameState = this.winCondition[i];
      const cellA = this.options[gameState[0]];
      const cellB = this.options[gameState[1]];
      const cellC = this.options[gameState[2]];

      if (cellA && cellA === cellB && cellB === cellC) {
        winner = true;
        break;
      }
    }
    if (winner) {
      //need to change text to who won
      $("#player-turn").html(`${this.currentPlayer} wins!`);
      this.running = false;
    } else if (!this.options.includes("")) { //find draw
      $("#player-turn").html("It's a draw!");
      this.running = false;
    } else {
      this.changePlayer();
    }
  },

  restartGame: function() {
    $("#restart-btn").off("click").on("click", () => {
    this.options = ["", "", "", "", "", "", "", "", ""];
    $(".cell").html(""); //empty UI
    this.currentPlayer = "X"
    this.running = true;
  });
  }
}

const player = {

}


gameboard.init();
