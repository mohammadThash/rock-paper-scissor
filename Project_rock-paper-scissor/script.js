let playerScore = 0;
let computerScore = 0;

play();

const play = () => {
  const elemnts = ["rock", "paper", "scissors"];
  const playerChoice = prompt("choose rock, paper, scissors");
  if (elemnts.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`Yor choose is ${playerChoice}`);
  } else {
    console.log("invalide input");
    return;
  }
  const computerChoice = elemnts[Math.floor(Math.random() * elemnts.length)];
  console.log(`computer chooses is ${computerChoice}`);

  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);

  if (playerScore === 3) {
    console.log("Congratulate! You win this game");
  } else if (computerScore === 3) {
    console.log("Sorry! You los this game");
  } else {
    play();
  }
};

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "Tie";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("You win!");
    playerScore++;
  } else if (result === "computer") {
    console.log("You los!");
    computerScore++;
  } else {
    console.log("It's a tie!");
  }
  console.log(`Your score: ${playerScore}`);
  console.log(`Computer's score: ${computerScore}`);
  console.log("..............................");
};
