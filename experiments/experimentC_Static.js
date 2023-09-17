const size = 200;
const gap = 0;
const amount = 2;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(0, 0, 0);
  fill(200, 20, 19);
  stroke(0, 0, 0);
  strokeWeight(0);

  // calculate the starting position based on the amount of squares and the screen width
  let x = 580;
  const y = 350;
  for (let i = 0; i < amount; i++) {
    circle(x, y, size);
    x += size + gap;
    rotate(frameCount / 900);
  }
}

// Reference: Creative Coding - Grid example - Grid from center - Code Pen 2023//
