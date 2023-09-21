const size = 50;
const gap = 0;
let amount = 5;
let angle = 0;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function drawGrid() {
  const centerX = width / 2;
  const centerY = height / 2;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      let xPosition = centerX + x * (size + gap + 1);
      let yPosition = centerY + y * (size + gap + 1);
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      rotate(angle);
      square(0, 0, size, 8);
      pop();
    }
  }
}

function draw() {

    background(100, 70, 100);
    fill(255, 191, 0);
    stroke(40, 100, 10, 30);
    strokeWeight(23);
    drawGrid(0);
    angle = angle - 0.3;
}

// Reference: Creative Coding - Grid example - Grid from center - Code Pen 2023//

