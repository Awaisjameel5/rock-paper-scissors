let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencomputerchoice = () => {
    const options = ["rock", "scissors", "paper"];
    const ranidx = Math.floor(Math.random() * 3);
    return options[ranidx];
};

const drawgame = () => {
    console.log("it was a draw");
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "gray";
};

const showwinner = (userwin) => {
    if (userwin) {
        msg.innerText = `You win!`;
        msg.style.backgroundColor = "green";
        userscore++;
        userscorePara.innerText=userscore;
    } else {
        msg.innerText = `You lose!`;
        msg.style.backgroundColor = "red";
        compscore++;
        compscorePara.innerText=compscore;
    }
};

const playgame = (userchoice) => {
    const compchoice = gencomputerchoice();

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin); 
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});

const userscorePara= document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");