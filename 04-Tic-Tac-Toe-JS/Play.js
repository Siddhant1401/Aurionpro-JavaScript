let playTicTacToe = (symbol, cellNumber) => {

    if ((symbol == "x" || symbol == "o") && typeof cellNumber == "number" && board[cellNumber] == "z" && !isGameOver) {

        board[cellNumber] = symbol

        if (checkWinner(board)) {
            console.log("Winner is ", tempVar);
            console.log("Board Reseted");
            board = ["z", "z", "z", "z", "z", "z", "z", "z", "z"]
        }
        else if (isBoardFull) {
            console.log("Draw");
        }

    }
    else {
        if (symbol != "x" && symbol != "o") {
            console.log(symbol,cellNumber);
            console.log("Invalid Symbol");
        }
        else if(cellNumber > 9 || cellNumber < 0){
            console.log("Invalid Cell Number");
        }
        else if(board[cellNumber] != "z"){
            console.log("Cell Already Filled");
        }
        else{
            console.log("Game Alreay Over");
        }
    }

    return board

}

let checkWinner = (board) => {


    if (board[0] == board[1] && board[1] == board[2]) {
        tempVar = board[1]
        return isGameOver = true;
    }

    if (board[3] == board[4] && board[4] == board[5]) {
        tempVar = board[4]
        return isGameOver = true;
    }

    if (board[6] == board[7] && board[7] == board[8]) {
        tempVar = board[7]
        return isGameOver = true;
    }

    if (board[0] == board[3] && board[3] == board[6]) {
        tempVar = board[3]
        return isGameOver = true;
    }

    if (board[1] == board[4] && board[4] == board[7]) {
        tempVar = board[4]
        return isGameOver = true;
    }

    if (board[2] == board[5] && board[5] == board[8]) {
        tempVar = board[5]
        return isGameOver = true;
    }

    if (board[0] == board[4] && board[4] == board[8]) {
        tempVar = board[4]
        return isGameOver = true;
    }

    if (board[2] == board[4] && board[4] == board[6]) {
        tempVar = board[4]
        return isGameOver = true;
    }
}

let BoardFull = (board) => {
    if (board[0] != "z", board[1] != "z", board[2] != "z", board[3] != "z", board[4] != "z", board[5] != "z", board[6] != "z", board[7] != "z", board[8] != "z", board[9] != "z") {
        isBoardFull = true
    }
}
let tempVar = "v"
let isBoardFull = false
let isGameOver = false
let board = ["o", "o", "o", "z", "z", "z", "z", "z", "z"]
// playTicTacToe("o",0);
// playTicTacToe("o",3);
// playTicTacToe("o",6);
console.log(board);
