const size = 30;
const gap = -50;
const amount = 30;
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
      square(0, 0, size);
      angle = angle + 1;
      pop();
    }
  }
}

function draw() {
  background(100, 150, 205);
  fill(255, 191, 0);
  stroke(0, 0, 0, 10);
  strokeWeight(0.2);
  stroke(0, 0, 0);
  drawGrid(0);

  noLoop();
}

// Reference: Creative Coding - Grid example - Grid from center - Code Pen 2023//
