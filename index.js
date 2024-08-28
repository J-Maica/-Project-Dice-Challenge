let d1 = document.querySelector("#d1 img");
let d2 = document.querySelector("#d2 img");
let winner = document.querySelector(".winner");
let page2 = document.querySelector(".page2");
let page2Btn = document.querySelector(".page2 button");
let page1 = document.querySelector(".page1");
let page1Btn = document.querySelector(".page1 button");

function rollDice(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber1)
    d1.src = `./images/dice${randomNumber1}.png`;
    
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;
    // console.log(randomNumber2)
    d2.src = `./images/dice${randomNumber2}.png`;
    
    if (randomNumber1 === randomNumber2){
        winner.innerHTML = "Tie";
    }
    else if (randomNumber1 > randomNumber2) {
        winner.innerHTML = "Winner: Player 1";
    }
    else {
        winner.innerHTML = "Winner: Player 2";
    }
}

//hide page 1 after clicking roll btn
page1Btn.addEventListener("click", function(){
    page1.style.display = "none";
    page2.style.display = "block";
    rollDice()
})

// roll dice
page2Btn.addEventListener("click", function(){
    rollDice()
})



