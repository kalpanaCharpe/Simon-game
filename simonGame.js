let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["red","green","blue","yellow"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress" ,() => {
   if(started == false){
    console.log("game started");
    started = true;

    levelUp();
   }
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(() => {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");

    setTimeout(() => {
        btn.classList.remove("userflash");
    },250);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let random_indx = Math.floor(Math.random() * 3);
    let random_color = btns[random_indx];
    let random_btn = document.querySelector(`.${random_color}`);
    gameSeq.push(random_color);
    console.log(gameSeq);
    gameFlash(random_btn);
    
    // console.log(random_indx);
    // console.log(random_color);
    // console.log(random_btn);
}

function checkAns(idx){
    // console.log("current level", level);

    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
        // console.log("same value");
    }
    else{
        h3.innerHTML = `Game Over! Your Score: <b>${level}</b> <br> Press any key to Start Game`;
        document.querySelector("body").style.background = "red";
        setTimeout( function(){
            document.querySelector("body").style.background = "white";
        },170);
        reset();
    }
}

function btnPress(){
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}