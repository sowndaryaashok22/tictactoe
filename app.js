const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes);
const playText = document.getElementById("playText");
const reStartBtn = document.getElementById("restart");

// const heading = document.getElementById('playText');
// heading.style='color: black';

let player1 = "O";
let player2 = "X";
let currentPlayer;
let spaces = []

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if(index < 3){
            styleString += 'border-bottom: 3px solid var(--purple);';
        }
        if(index % 3 === 0){
            styleString += 'border-right: 3px solid var(--purple);';
        }
        if(index % 3 === 2){
            styleString += 'border-left: 3px solid var(--purple);';
        }
        if(index > 5){
            styleString += 'border-top: 3px solid var(--purple);';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    })
};


const boxClicked = (e) => {
    const id = e.target.id;
    console.log("box is clicked", id);
    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        
        if(playerHasWon()){
            playText.innerText = `${currentPlayer} has won!!`;
            restart();
            return;
        }
        currentPlayer = currentPlayer === player1 ? player2 : player1 ;
    }
}

const playerHasWon = () => {
    if(spaces[1] === currentPlayer){
       if(spaces[2] === currentPlayer && spaces[3] === currentPlayer) {
           console.log(`${currentPlayer} has won by crossing top`);
           return true;
       }
       if(spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
        console.log(`${currentPlayer} has won by crossing left`);
        return true;
    }
    if(spaces[5] === currentPlayer && spaces[9] === currentPlayer) {
        console.log(`${currentPlayer} has won by crossing diagonally`);
        return true;
    }
    }
    if(spaces[9] === currentPlayer){
        if(spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} has won by crossing right`);
            return true;
        }
        if(spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
         console.log(`${currentPlayer} has won by crossing bottom`);
         return true;
     }
    
    } 
    if(spaces[5] === currentPlayer) {
        if(spaces[2] === currentPlayer && spaces[8] === currentPlayer){
            console.log(`${currentPlayer} has won by crossing vertically`);
            return true;  
        }
        if(spaces[4] === currentPlayer && spaces[6] === currentPlayer){
            console.log(`${currentPlayer} has won by crossing hortizontally`);
            return true; 
        }
    } 
    if(spaces[3] === currentPlayer) {
        if(spaces[5] === currentPlayer && spaces[7] === currentPlayer){
            console.log(`${currentPlayer} has won by crossing diagonally from right`);
            return true;  
        }  
    } 
    if(spaces[7] ===  currentPlayer){
        if(spaces[4] === currentPlayer && spaces[1] === currentPlayer){
            console.log(`${currentPlayer} has won by crossing bottom to up`);
            return true;  
        }
    }    
             
}
const restart = () => {
    spaces.forEach((space, index) => {
        spaces[index] = null;
    });
    boxes.forEach(box => {
        box.innerText = '';
    });


playText.innerText = "lets play!!"
    currentPlayer = player1;
}

reStartBtn.addEventListener('click', restart);
restart();  
   
drawBoard();