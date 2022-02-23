const p1 = {
    score : 0,
    button: document.querySelector("#plus1"),
    scoreDisplay: document.querySelector("#player1points")
}

const p2 = {
    score : 0,
    button: document.querySelector("#plus2"),
    scoreDisplay: document.querySelector("#player2points")
}

const reset = document.querySelector('#reset');
let isGameOver = false;
let winningScore = 3;
let playto = document.querySelector('#playto');

function updateScore(player, opponent){
    if(!isGameOver){
        player.score++;
        if(player.score === winningScore){
            isGameOver = true;
            player.scoreDisplay.classList.add("has-text-success");
            opponent.scoreDisplay.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }        
        player.scoreDisplay.textContent = player.score;
    }
}

p1.button.addEventListener("click", function(){
    updateScore(p1, p2);
})

p2.button.addEventListener("click", function(){
    updateScore(p2, p1);
})

reset.addEventListener('click', resetall);

playto.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    resetall();
})

function resetall() {
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.scoreDisplay.textContent = 0;
        p.scoreDisplay.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
}