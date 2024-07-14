console.log("Welcome to Tic Tac Toe");

let winSound = new Audio("win.mp3");
let audioTurn = new Audio("ting.mp3");
let gameoverSound = new Audio("gameover.mp3");

let turn = "x";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "x" ? "0" : "x";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "")
        ) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won!";
            isgameover = true;
            document.querySelector('#wongif').style.width = "500px";
            winSound.play();
        }
    });

    // Check for draw condition
    let allFilled = true;
    Array.from(boxtext).forEach(box => {
        if (box.innerText === "") {
            allFilled = false;
        }
    });

    if (allFilled && !isgameover) {
        document.querySelector('.info').innerText = "It's a draw!";
        isgameover = true;
        document.querySelector('#overgif').style.width = "500px";
        gameoverSound.play();
    }

    // Hide gifs when game is not over
    if (!isgameover) {
        document.querySelector('#wongif').style.width = "0";
        document.querySelector('#overgif').style.width = "0";
    } else {
        document.querySelector('#fungif').style.width = "0"; // Hide fungif if game is over
    }
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();

            if (!isgameover) {
                document.querySelector('.info').innerText = "Turn for " + turn;
            }
        }
    })
});




// Reset game
document.getElementById('reset').addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    boxtexts.forEach(box => {
        box.innerText = "";
    });
    turn = "x";
    isgameover = false;
    document.querySelector('.info').innerText = "Turn for x";
    
      // Show fungif and hide other gifs
      document.querySelector('#fungif').style.width = "500px";
      document.querySelector('#wongif').style.width = "0";
      document.querySelector('#overgif').style.width = "0";
    // Stop all sounds
    winSound.pause();
    winSound.currentTime = 0;
    gameoverSound.pause();
    gameoverSound.currentTime = 0;
    audioTurn.pause();
    audioTurn.currentTime = 0;

});