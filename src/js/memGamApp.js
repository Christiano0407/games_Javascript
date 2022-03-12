// Memory Game >>
//> Const ==>
const result = document.getElementById("result");
const grid = document.getElementById("grid");
//> Images =>
const cardArray = [
  {
    name: "fries",
    img: "../src/assets/memory02/fries.png",
  },
  {
    name: "blank",
    img: "../src/assets/memory02/blank.png",
  },
  {
    name: "cheeseburger",
    img: "../src/assets/memory02/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "../src/assets/memory02/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "../src/assets/memory02/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "../src/assets/memory02/milkshake.png",
  },
  {
    name: "pizza",
    img: "../src/assets/memory02/pizza.png",
  },
  {
    name: "white",
    img: "../src/assets/memory02/white.png",
  },
  {
    name: "pizza",
    img: "../src/assets/memory02/pizza.png",
  },
  {
    name: "hotdog",
    img: "../src/assets/memory02/hotdog.png",
  },
  {
    name: "fries",
    img: "../src/assets/memory02/fries.png",
  },
  {
    name: "ice-cream",
    img: "../src/assets/memory02/ice-cream.png",
  },
];
//> Events ==>
//> sort ordenado >
cardArray.sort(() => 0.5 - Math.random());
/* console.log(cardArray); */

//> Crear e llamar a las img.
const gridDisplay = document.getElementById("grid");
console.log(gridDisplay);

createBoard = () => {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "../assets/memory02/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};

createBoard();

// Flip => MEMORY O Intersection ==> === >
function flipCard() {
  const cardId = this.getAttribute("data-id");
  console.log("clicked", cardId);
}
