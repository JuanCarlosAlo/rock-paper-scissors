const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const lizard = document.getElementById("lizard");
const spock = document.getElementById("spock");

const pcScore = document.getElementById("points-pc");
const userScore = document.getElementById("points-you");

const playAgainButton = document.getElementById("play-again");
const firstPhase = document.getElementById("first-phase");
const secondPhase = document.getElementById("second-phase");

const userPickImg = document.getElementById("user-pick-img");
const pcPickImg = document.getElementById("pc-pick-img");
const resultText = document.getElementById("result-content");

const movesOptions = ["paper", "scissors", "rock", "lizard,", "spock"];

let pcPoints = 0;
let userPoints = 0;

const results = {
  paper: {
    rock: false,
    scissors: true,
    lizard: false,
    spock: false,
  },
  rock: {
    paper: true,
    scissors: false,
    lizzard: false,
    spock: true,
  },
  scissors: {
    paper: false,
    rock: false,
    lizzard: false,
    spock: true,
  },
  lizard: {
    paper: false,
    rock: true,
    scissors: true,
    spock: false,
  },
  spock: {
    paper: true,
    rock: false,
    scissors: false,
    lizard: true,
  },
};

const addScorePoints = () => {
  pcScore.textContent = pcPoints;
  userScore.textContent = userPoints;
};

const resultComparation = (pcMove, userMove) => {
  if (pcMove === userMove) {
    resultText.textContent = "DRAW";
    return;
  }

  if (results[pcMove][userMove]) {
    resultText.textContent = "YOU LOSE";
    pcPoints++;
  } else {
    resultText.textContent = "YOU WIN";
    userPoints++;
  }
  addScorePoints();
};

const showResults = (pcMove, userMove) => {
  pcPickImg.src = `assets/images/icon-${pcMove}.svg`;
  userPickImg.src = `assets/images/icon-${userMove}.svg`;
};

const movesRecolection = (userMove) => {
  pcMove = pcMoves();
  resultComparation(pcMove, userMove);

  showResults(pcMove, userMove);
};

const pcMoves = () => {
  const pcMove = movesOptions[Math.floor(Math.random() * movesOptions.length)];

  return pcMove;
};

const secondPhaseScreen = () => {
  firstPhase.classList.remove("first-phase--show");
  secondPhase.classList.add("second-phase--show");
};

playAgainButton.addEventListener("click", () => {
  firstPhase.classList.add("first-phase--show");
  secondPhase.classList.remove("second-phase--show");
});

firstPhase.addEventListener("click", (e) => {
  if (
    e.target.tagName === "IMG"
    //|| e.target.classList.contains("game-item")
  ) {
    userMove = e.target.id;

    pcMoves();
    movesRecolection(userMove);
    secondPhaseScreen();
  }
});
