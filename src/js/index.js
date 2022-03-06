// Rock Paper Scisors >>
//> Const Game ==== ===== ===>
const computer = document.getElementById("computer-choice");
const user = document.getElementById("user-choice");
const result = document.getElementById("results");
const possibleChoices = document.querySelectorAll(".btn");
console.log(possibleChoices);
let userChoice;
let computerChoice;
let results;
// Events  === =========== =====>
possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    /* console.log("Buttons"); */
    //>options User>
    userChoice = e.target.id;
    user.innerHTML = userChoice;
    //> Compu Options>
    generateChoiceComputer();
    getResults();
  })
);
//> Function Compu=>
generateChoiceComputer = () => {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  /* console.log(randomNumber); */

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "rcisors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computer.innerHTML = computerChoice;
};

//> Results>
getResults = () => {
  if (computerChoice === userChoice) {
    results = "I´ts a Draw!";
  }
  //>Rock>
  if (computerChoice === "rock" && userChoice === "paper") {
    results = "Your Win!";
  }
  if (computerChoice === "rock" && userChoice === "scissor") {
    results = "Your Lost!";
  }
  //> Paper>
  if (computerChoice === "paper" && userChoice === "rock") {
    results = "Your Lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissor") {
    results = "Your Win!";
  }
  //> Scissor>
  if (computerChoice === "scissor" && userChoice === "rock") {
    results = "Your Win!";
  }
  if (computerChoice === "scissor" && userChoice === "paper") {
    results = "Your Lost!";
  }

  result.innerHTML = results;
};
