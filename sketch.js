const width = 640;
const height = 480;
const snakeSize = 30;
let x = 20;
let y = 60;
let direction = [0, 1];
const grid = 20;
const snakeFrameRate = 13; //reduce this number to make snake move slower
let food = [60, 60];
let snakeTail = [
  [x - grid, y],
  [x - 2 * grid, y]
];
// let snake = new Snake();

function setup() {
  createCanvas(width, height);
  background('rgba(0, 255, 0, 0.25)');
  frameRate(snakeFrameRate);
  generatedFood ();
}

function draw() {
  background('rgba(0, 255, 0, 0.25)');
  const snakeColor = color('magenta');
  fill(snakeColor);
  rect(x, y, snakeSize, snakeSize);
  // y++;
  for (let i=0; i < snakeTail.length; i++){
    rect(snakeTail[i][0], snakeTail[i][1], snakeSize, snakeSize);
  }

  for (let i = snakeTail.length - 1; i >= 1; i--) {
    arrayCopy (snakeTail[i - 1], snakeTail[i]);
  }
  arrayCopy([x, y], snakeTail[0]);

  x = x + direction[0] * grid;
  y = y + direction[1] * grid;

  fill('yellow');
  rect(food[0], food[1], snakeSize, snakeSize);

  if (snakeTail[snakeTail.length - 1][0] === food[0] && snakeTail[snakeTail.length - 1][1] === food[1]) {
    snakeTail.push(food);
    generatedFood();
  }
    
}

function generatedFood (){
  food = [floor(random(width/grid)) * grid, floor(random(height/grid)) * grid];
}

function keyPressed () {
  if (keyCode === LEFT_ARROW) {
    direction = [-1, 0];
  } else if (keyCode === RIGHT_ARROW) {
    direction = [1, 0];
  } else if (keyCode === UP_ARROW) {
    direction = [0, -1];
  } else if (keyCode === DOWN_ARROW) {
    direction = [0, 1];
  }  
}