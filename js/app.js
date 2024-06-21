/*-------------------------------- Constants --------------------------------*/
//5) Define the required constants.


/*---------------------------- Variables (state) ----------------------------*/
//1) Define the required variables used to track the state of the game.

let board = []
let turn = 'X'
let winner = false
let tie = false


/*------------------------ Cached Element References ------------------------*/
//2) Store cached element references.

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.querySelector('#message')

const resetBtnEl = document.querySelector('#button')

const winningCombo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

/*-------------------------------- Functions --------------------------------*/
//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.
const init = () => {

    // console.log('init called')

    board = ['','','','','','','','','']
    winner = false
    tie = false
    turn = 'X'
    render()
}

const render = () => {

    // console.log('render called')

    updateBoard()
    updateMessage()

}

function updateBoard() {
    board.forEach((val, square) => {
        squareEls[square].textContent = val
    })
}

updateMessage = () => {

    console.log('updateMessage called')

    if (winner === false && tie === false) {
        messageEl.textContent = `It is ${turn}'s turn!`
    } else if (winner === false && tie === true) {
        messageEl.textContent = `Tie Game!`
    } else {
        messageEl.textContent = `Congrats, ${turn} won the game!`
    }
    //console.log(`turn${turn}, winner state: ${winner}, tie state ${tie}`)

}

function handleClick(event) {
    const squareIndex = event.target.id
    if (board[squareIndex] !== '' || winner){
        return
    }
    placePiece(squareIndex)
    checkForWinner(board)
    checkForTie(board)
    switchPlayerTurn(board)
    render()

}

function placePiece(index) {

        board[index] = turn
        //console.log(board)

}

function checkForWinner() {

    // [0,1,2],
    // [3,4,5],
    // [6,7,8],
    // [0,3,6],
    // [1,4,7],
    // [2,5,8],
    // [0,4,8],
    // [2,4,6]

    if (board[0] === board[1] && board[0] === board[2] && board[0] !== ''){
        winner = true
    } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
        winner = true
    } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
        winner = true
    } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
        winner = true
    } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
        winner = true
    } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
        winner = true
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
        winner = true
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
        winner = true
    }
    // console.log(winner) to see if 'winner' gets updated
}

function checkForTie(){
    if(board.includes('')){
        tie = false
    } else {
        tie = true
    }
}
function switchPlayerTurn() {
    if(winner === true){
        return
    } else {
        if (turn === 'X'){
            turn = 'O'
        } else {
            turn = 'X'
        }
    }
}

function reset() {
    init()
    squareEls.forEach((sqr) => {
        sqr.innerText =''
    })
}

//4) The state of the game should be rendered to the user.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
})

resetBtnEl.addEventListener('click', reset)

placePiece()
init()





