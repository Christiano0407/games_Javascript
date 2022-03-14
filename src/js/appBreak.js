//> Const == ==== ==>
const scoreDisplay = document.getElementById("score");
const grid = document.querySelector(".grid");
/* console.log(grid); */
/* const block = document.createElement("div");
block.classList.add("block"); */
//> Conect with User =>
const blockWidth = 100;
const blockHeight = 20;

// Events === ==== ===>
/*  grid.appendChild(block);  */ //> Agregamos dentro de "Grid" => Block <<

//2)>
// Create Block> Constructor  o Contenedor ===>>
class Block {
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

//> 3) ===== All My Block ===Parameter=>
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(10, 210),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

//1)> Moves = Draw my Block == === ===>>
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div"); //> Creamos un "Div"
    block.classList.add("block"); // Agregamos el Div ==>

    block.style.left = blocks[i].bottomLeft[0] + "px";
    block.style.bottom = blocks[i].bottomLeft[1] + "px";
    /*  grid.style.right = "100px"; */
    grid.appendChild(block); //> Agregamos dentro de "Grid" => Block <<
    console.log(blocks[i].bottomLeft);
  }
}
addBlocks();
// 1) ==>

// 4) ==User == == == >
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);

//> Ball ==>
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
