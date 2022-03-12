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
];
//> Events ==>
//> sort ordenado >
cardArray.sort(() => 0.5 - Math.random());
/* console.log(cardArray); */

//> Crear e llamar a las img.
const gridDisplay = document.getElementById("grid");
console.log(gridDisplay);

const cardChosen = []; //> Guardar todo en un array>

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

// Flip =>  LLamar / MEMORY O Intersection ==> === >
function flipCard() {
  console.log(cardArray); //> LLamar a mi lista>
  const cardId = this.getAttribute("data-id"); //> Agregamos el atributo de ID = num> GET => OBTENER.
  //console.log(cardArray[cardId].name); //Aparece el nombre>
  cardChosen.push(cardArray[cardId].name);
  console.log("clicked", cardId); //> Aparece el Id
  console.log(cardChosen); //> Llamar lo que está en la lista (agregando al dar click) ==>
  this.setAttribute("src", cardArray[cardId].img); //Agregar IMG y Conectar con ID ==>
}
