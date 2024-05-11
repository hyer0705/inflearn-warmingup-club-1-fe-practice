const ROCK = 0;
const SCISSORS = 2;
const PAPER = 1;
const NONE = "d-none";
const BLOCK = "d-block";

let computerRes = 0;
let playerRes = 0;

const renderRes = (el, text) => (el.innerText = text);

const play = (player) => {
  const resEl = document.getElementById("res");
  const playerResEl = document.getElementById("player-res");
  const computerResEl = document.getElementById("computer-res");

  const computer = Math.floor(Math.random() * 3);

  let res = "";
  if (player === computer) {
    res = "Draw!";
  } else {
    if (player === ROCK) {
      if (computer === SCISSORS) {
        res = "Player Win!";
        playerRes++;
      } else if (computer === PAPER) {
        res = "Computer Win!";
        computerRes++;
      }
    } else if (player === SCISSORS) {
      if (computer === ROCK) {
        res = "Computer Win!";
        computerRes++;
      } else if (computer === PAPER) {
        res = "Player Win!";
        playerRes++;
      }
    } else if (player === PAPER) {
      if (computer === ROCK) {
        res = "Player Win!";
        playerRes++;
      } else if (computer === SCISSORS) {
        res = "Computer Win!";
        computerRes++;
      }
    }
  }

  resEl.innerText = res;
  renderRes(playerResEl, playerRes);
  renderRes(computerResEl, computerRes);
};

const decreaseRemainingChances = (remainingChances) => remainingChances - 1;
const printFinalRes = () => {
  const finalResEl = document.getElementById("final-res");

  if (playerRes > computerRes) {
    finalResEl.innerText = "You Win!:)";
  } else if (playerRes === computerRes) {
    finalResEl.innerText = "Draw!:)";
  } else {
    finalResEl.innerText = "You Lose...:)";
  }
};

window.onload = function () {
  const btnRock = document.getElementById("btn-rock");
  const btnScissors = document.getElementById("btn-scissors");
  const btnPaper = document.getElementById("btn-paper");
  const btnRestart = document.getElementById("restart");

  const spanRemainingChances = document.getElementById("remaining-chances");

  const playingEl = document.getElementById("playing");
  const finalEl = document.getElementById("final");

  let totalChance = 10;

  btnRock.addEventListener("click", () => {
    if (totalChance > 0) {
      play(ROCK);
      totalChance = decreaseRemainingChances(totalChance);
      spanRemainingChances.innerText = totalChance;

      if (totalChance === 0) {
        playingEl.classList.add(NONE);
        printFinalRes();
        finalEl.classList.remove(NONE);
      }
    }
  });
  btnScissors.addEventListener("click", () => {
    if (totalChance > 0) {
      play(SCISSORS);
      totalChance = decreaseRemainingChances(totalChance);
      spanRemainingChances.innerText = totalChance;

      if (totalChance === 0) {
        playingEl.classList.add(NONE);
        printFinalRes();
        finalEl.classList.remove(NONE);
      }
    }
  });
  btnPaper.addEventListener("click", () => {
    if (totalChance > 0) {
      play(PAPER);
      totalChance = decreaseRemainingChances(totalChance);
      spanRemainingChances.innerText = totalChance;

      if (totalChance === 0) {
        playingEl.classList.add(NONE);
        printFinalRes();
        finalEl.classList.remove(NONE);
      }
    }
  });

  btnRestart.addEventListener("click", () => {
    totalChance = 10;
    computerRes = 0;
    playerRes = 0;

    spanRemainingChances.innerText = totalChance;
    renderRes(document.getElementById("res"), "");
    renderRes(document.getElementById("computer-res"), computerRes);
    renderRes(document.getElementById("player-res"), playerRes);

    playingEl.classList.remove(NONE);
    finalEl.classList.add(NONE);
  });
};
