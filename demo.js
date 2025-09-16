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
        console.log("you win");
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
        userscore++;
    } else {
        console.log("you lose");
        msg.innerText = "You lose!";
        msg.style.backgroundColor = "red";
        compscore++;
    }
    console.log("User:", userscore, "Comp:", compscore);
};

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencomputerchoice();
    console.log("comp choice =", compchoice);

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
        showwinner(userwin); // ✅ call the function here
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});