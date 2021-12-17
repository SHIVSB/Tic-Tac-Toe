let turn = true; // True is for player 1

let boardCells = Array.from(document.getElementsByClassName("cell"));
let board = document.getElementById("board");

boardCells.forEach(function (cell){
    cell.addEventListener("click",cellClick)
});

function cellClick(event){
    let currentCell = event.target;
    if(turn){
        //player 1
        currentCell.classList.add("x"); // Adding class
    }else{
        //player 2
        currentCell.classList.add("circle"); // Every html element can be given multiple classes
    }
    gameStatus();
    turn = !turn;
    setNextPlayerHint();
}

function setNextPlayerHint(){
    board.classList.remove("x");//If there is a class x, remove it
    board.classList.remove("circle");//If there is a class circle, remove it
    if(turn){
        board.classList.add("x");
    }else {
        board.classList.add("circle");
    }
}


function gameStatus(){
    let r11 = boardCells[0].classList[1];
    let r12 = boardCells[1].classList[1];
    let r13 = boardCells[2].classList[1];
    let r21 = boardCells[3].classList[1];
    let r22 = boardCells[4].classList[1];
    let r23 = boardCells[5].classList[1];
    let r31 = boardCells[6].classList[1];
    let r32 = boardCells[7].classList[1];
    let r33 = boardCells[8].classList[1];

    if(r11 && r11 === r12 && r11 === r13) {
        return announceWinner();
    }else if(r21 && r21 === r22 && r21 === r23) {
        return announceWinner();
    }else if(r31 && r31 === r32 && r31 === r33) {
        return announceWinner();
    }else if(r11 && r11 === r21 && r11 === r31) {
        return announceWinner();
    }else if(r12 && r12 === r22 && r12 === r32) {
        return announceWinner();
    }else if(r13 && r13 === r23 && r13 === r33) {
        return announceWinner();
    }else if(r11 && r11 === r22 && r11 === r33) {
        return announceWinner();
    }else if(r13 && r13 === r22 && r13 === r31) {
        return announceWinner();
    }else{
        checkDraw();
    }
}

function checkDraw(){
    for(let element of boardCells){
        if(element.classList[1] === "x" || element.classList[1] === "circle"){
            continue;
        }else{
            return;
        }
    }
    document.getElementById("winning_message").innerHTML = "Draw";
    document.body.classList.add("drawcolor");
}


function announceWinner(){
    if(turn){
        document.getElementById("winning_message").innerHTML = "Winner is " + "X";
    }else{
        document.getElementById("winning_message").innerHTML = "Winner is " + "O";
    }
    document.body.classList.add("wincolor");
}