const size = 400;
const amount = 100;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawElement(counter) {
  push();
  const fields = 40;
  const s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      noStroke();
      if (Math.random() < 0.3) {
        fill(10, 10, 10, 10);
      }
      circle(x * s, y * s, s);
      rotate(frameCount / 100);
      pop();
    }
  }
  pop();
}

function draw() {
  background(0, 0, 255);

  const centerX = (width - size) / 2;
  const centerY = (height - size) / 2;
  for (let i = 0; i < amount; i++) {
    push();
    translate(centerX, centerY);
    drawElement(i);
    pop();
  }
}

// Reference: Creative Coding - Grid example - Random pattern - Codepen 2023
