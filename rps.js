function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const computerChoice = Math.floor(Math.random() * choices.length);
    const choice = choices[computerChoice].trim().toLowerCase();
    return choice;
  }
  
  let playerScore = 0;
  let computerScore = 0;
  
  function playRound(playerSelection, computerSelection) {
    const validChoices = ["rock", "paper", "scissors"];
  
    if (!validChoices.includes(playerSelection)) {
      alert("Wrong input");
      return; // Exit the function if input is invalid
    }
  
    console.log("Player's choice:", playerSelection);
    console.log("Computer's choice:", computerSelection);
  
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      alert("You lost this round!");
      computerScore += 1;
    } else if (playerSelection === computerSelection) {
      alert("It's a tie this round!");
    } else {
      alert("You won this round!");
      playerScore += 1;   
    }
    
    console.log("Player's score:", playerScore);
    console.log("Computer's score:", computerScore);
  }
  
  function newGame(numberOfRounds) {
    for (let round = 1; round <= numberOfRounds; round++) {
      const computerChoice = getComputerChoice();
      const playerChoice = prompt("Choose Rock, Paper, or Scissors").toLowerCase();
      playRound(playerChoice, computerChoice);
    }
  }
  
  const numberOfRounds = 5;
  newGame(numberOfRounds);