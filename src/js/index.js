// Rock Paper Scisors >>
//> Const Game ==== ===== ===>
const computer = document.getElementById("computer-choice");
const user = document.getElementById("user-choice");
const result = document.getElementById("results");
//>BTN
const rockBtn = document.getElementById("btn-rock");
const paperBtn = document.getElementById("btn-paper");
const scissorBtn = document.getElementById("btn-scissor");

// Events  === =========== =====>
rockBtn.addEventListener("click", () => {
  console.log("Rock");
});

paperBtn.addEventListener("click", () => {
  console.log("Paper");
});

scissorBtn.addEventListener("click", () => {
  console.log("Scissor");
});
