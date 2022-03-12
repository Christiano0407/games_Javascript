// Memory Game >>
//> Const ==>
const result = document.getElementById("result");
const grid = document.getElementById("grid");
//> Images =>
const cardArray = [
  {
    name: "fries",
    img: "../assets/memory02/fries.png",
  },
  {
    name: "blank",
    img: "../assets/memory02/blank.png",
  },
  {
    name: "cheeseburger",
    img: "../assets/memory02/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../assets/memory02/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../assets/memory02/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../assets/memory02/milkshake.png",
  },
  {
    name: "pizza",
    img: "../assets/memory02/pizza.png",
  },
  {
    name: "white",
    img: "../assets/memory02/white.png",
  },
  {
    name: "pizza",
    img: "../assets/memory02/pizza.png",
  },
  {
    name: "hotdog",
    img: "../assets/memory02/hotdog.png",
  },
  {
    name: "fries",
    img: "../assets/memory02/fries.png",
  },
  {
    name: "ice-cream",
    img: "../assets/memory02/ice-cream.png",
  },
  {
    name: "cheeseburger",
    img: "../assets/memory02/cheeseburger.png",
  },
  {
    name: "milkshake",
    img: "../assets/memory02/milkshake.png",
  },
];
//> Events ==>
//> sort ordenado >
cardArray.sort(() => 0.5 - Math.random());
/* console.log(cardArray); */

//> Crear e llamar a las img.
const resultDisplay = document.getElementById("result");
console.log(resultDisplay);
const gridDisplay = document.getElementById("grid");
console.log(gridDisplay);
let cardChosen = []; //> Guardar todo en un array>
let cardsChosenIds = []; //> ID
const cardsWon = []; // Card Win!>

createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../assets/memory02/blank.png"); //> SET = Agregar O Colocar.>
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard); //Llamar a la function>
    gridDisplay.appendChild(card);
  }
};

createBoard();

//=> Check Math Function0> conection >
function checkMatch() {
  const cards = document.querySelectorAll("img");
  //>Options
  let optionOneId = cardsChosenIds[0];
  let optionTwoId = cardsChosenIds[1];
  //>> Compare Options>
  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "../assets/memory02/blank.png");
    cards[optionOneId].setAttribute("src", "../assets/memory02/blank.png");
    console.log("Yo have clicked the same Image");
  }

  //>> Options>>
  if (cardChosen[0] == cardChosen[1]) {
    console.log("You found a match!");
    cards[optionOneId].setAttribute("src", "../assets/memory02/white.png");
    cards[optionTwoId].setAttribute("src", "../assets/memory02/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardChosen); //>Agregar
  } else {
    cards[optionOneId].setAttribute("src", "../assets/memory02/blank.png"); //> Regreso en caso de no ser iguales=>
    cards[optionTwoId].setAttribute("src", "../assets/memory02/blank.png");
    console.log("Sorry! Try Again.");
  }
  //>
  resultDisplay.textContent = cardsWon.length;
  cardChosen = [];
  cardsChosenIds = [];

  //> Cards Para ganar son 2 ==>
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "Congratulations!";
  }
}

// Flip =>  LLamar / MEMORY O Intersection ==> === >
function flipCard() {
  // console.log(cardArray); //> LLamar a mi lista>
  const cardId = this.getAttribute("data-id"); //> Agregamos el atributo de ID = num> GET => OBTENER.
  //console.log(cardArray[cardId].name); //Aparece el nombre>
  cardChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId); // Saber el "id", de las tarjetas>
  console.log(cardsChosenIds);
  console.log(cardChosen);
  //console.log("clicked", cardId); //> Aparece el Id
  //console.log(cardChosen); //> Llamar lo que está en la lista (agregando al dar click) ==>
  this.setAttribute("src", cardArray[cardId].img); //Agregar IMG y Conectar con ID ==>

  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
