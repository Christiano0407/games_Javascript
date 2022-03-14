console.group("Whaca Mole");
// ==> Const ===
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const score = document.getElementById("score");
const timeLeft = document.getElementById("time-left");

// Math.floor => Devuelve el máximo entero menor o igual a un número.=>
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
//> Events === ==== ==>

//> 1) =====>
randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomPosition = squares[Math.floor(Math.random() * 9)];
  /*  console.log(randomPosition); */
  /*  console.log(Math.floor(Math.random() * 9)); */
  randomPosition.classList.add("mole");

  hitPosition = randomSquare.id; // Toma position = id>
};
//randomSquare();

// 3) =>
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

//> 2) ===>
moveMole = () => {
  timerId = setInterval(randomSquare, 500);
};
//> Eject ===>
moveMole();

//> 4)== ==> Contador>
countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    console.log("Game Over!" + "  " + result);
  }
};

let countDownTimerId = setInterval(countDown, 1000);
console.groupEnd();
