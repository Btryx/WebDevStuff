const score1 = document.querySelector('#player1points')
const score2 = document.querySelector('#player2points');

const button1 = document.querySelector('#plus1');
const button2 = document.querySelector('#plus2');
const reset = document.querySelector('#reset');


let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

let playto = document.querySelector('#playto');

button1.addEventListener('click', function() {

    if(!isGameOver){
        p1Score++;
        if(p1Score === winningScore){
            isGameOver = true;
            score1.classList.add("has-text-success");
            score2.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;
        }        
        score1.textContent = p1Score;
    }
})

button2.addEventListener('click', function() {

    if(!isGameOver){
        p2Score++;
        if(p2Score === winningScore){
            isGameOver = true;
            score2.classList.add("has-text-success");
            score1.classList.add("has-text-danger");
            button1.disabled = true;
            button2.disabled = true;

        }
        score2.textContent = p2Score;
    }
})

reset.addEventListener('click', resetall);

playto.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetall();
})

function resetall() {
    p1Score = 0;
    p2Score = 0;
    score1.textContent = 0;
    score2.textContent = 0;
    isGameOver = false;
    score1.classList.remove("has-text-success", "has-text-danger");
    score2.classList.remove("has-text-success", "has-text-danger");
    button1.disabled = false;
    button2.disabled = false;
}