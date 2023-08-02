const Player = require("./Player")
const Board = require("./Board")

class Game {

    constructor(board, players) {
        this.players = players
        this.board = board
        this.turn = 0
        this.isGameEnded = false
    }

    static newGame(player0Name, player1Name) {

        if (typeof player0Name != "string" || player0Name.trim() == "") {
            throw new Error("Player 1 name is required and should be a non empty string")
        }

        if (typeof player1Name != "string" || player1Name.trim() == "") {
            throw new Error("Player 2 name is required and should be a non empty string")
        }

        let boardForGame = new Board()
        let player0 = new Player("X", player0Name)
        let player1 = new Player("O", player1Name)
        return new Game(boardForGame, [player0, player1])
    }

    play(cellNumber) {
        if (this.isGameEnded) {
            return "Game has Ended"
        }

        if (typeof cellNumber != "number") {
            return "Invalid input."
        }

        if (cellNumber < 0 || cellNumber > 8) {
            return "Please choose a number between 0 and 8.";
        }

        if (!this.board.isCellMarked(cellNumber)) {
            return "Cell Not Empty"
        }

        let currentPlayer
        if (this.turn % 2 == 0) {
            currentPlayer = this.players[0]
        } else {
            currentPlayer = this.players[1]
        }

        let cellObj = this.board.getCellObj(cellNumber)
        currentPlayer.markCell(cellObj)
        this.turn++

        this.board.printBoard()
        let [symbolOfWinner, gameStatus] = this.board.analyzeResult()
        if (gameStatus == "") {
            return "Continue Playing"


        }
        if (gameStatus == "Draw") {
            return "Game Ended as Drawn"

        }
        if (symbolOfWinner == this.players[0].symbol) {
            this.isGameEnded = true;
            return this.players[0].name + " is Winner"

        }
        this.isGameEnded = true
        return this.players[1].name + " is Winner"


    }

    resetGame() {
        this.board = new Board();
        this.turn = 0
        this.isGameEnded = false;
    }
}
module.exports = Game
