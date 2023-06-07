"use strict";


// const btn = document.querySelector("button");

// btn.addEventListener("mouseenter", function(event) {
//     event.target.style = `
//     background: green;
//     cursor: pointer;`
// });

// btn.addEventListener("mouseleave", function(event) {
//     event.target.style.background = "limegreen";
    
// });

// function random(number) {
//     return Math.floor(Math.random() * (number + 1));
// }

// btn.addEventListener("click", () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// });

let board = [
    ["__", "__", "__"],
    ["__", "__", "__"],
    ["__", "__", "__"],
];

let strBoard = function (board) {
    return board[0].join("  ") + "\n" +
           board[1].join("  ") + "\n" +
           board[2].join("  ");
};

//console.log(strBoard(board));  

let weWin = function(board, player) {
    // rows
    if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
        return true;
    }
    if (board[1][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
        return true;
    }

    //column
    if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
        return true;
    }
    if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
        return true;
    }

    //diagonal
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
        return true;
    }
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
       return true;
    } 

    return false;
};

let isFull = function(board) {
    let i = 0;
    while(i < board.length) {
        const row = board[i];

        let j = 0;
        while(j = row.length) {
            if (row[j] === "__") {
                return false;
            }
            j += 1;
        }
        i += 1;
    }
    return true;
};


let player = "X";

while (true) {
    let boardStr = strBoard(board);
    let row = +prompt(`Please, provide the value for the row \n\n${boardStr}`);
    let column = +prompt(`Please, provide the value for the column \n\n${boardStr}`);

    if (board[row][column] !== "__") {
        console.log(prompt(`You lose!`));
        break;
    }

    board[row][column] = player;

    const won = weWin(board, player);

    if (won) {
        console.log(prompt(`Player ${player} won the game!`));
        break;
    }

    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
};












