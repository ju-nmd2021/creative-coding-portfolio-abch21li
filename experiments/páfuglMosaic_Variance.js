const size = 50;
const gap = 50;
const amount = 2;

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function drawElement() {
  let fields = 15;
  let s = size / fields;
  for (let x = 0; x < fields; x++) {
    for (let y = 0; y < fields; y++) {
      push();
      noStroke();
      if (Math.random() < 10) {
        fill(Math.random() * 10, Math.random() * 100, Math.random() * 190);
      }
      ellipse(s * 9, y * 4, s * Math.random() * 15);
      pop();
    }
  }
}

function draw() {
  background(0, 0, 0, 1);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(1);

  let centerX = mouseX;
  let centerY = mouseY;
  for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
    for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
      let xPosition = centerX + 2;
      let yPosition = centerY;
      if (amount % 2 === 0) {
        xPosition += size / 2;
      }
      push();
      translate(xPosition, yPosition);
      drawElement(0);
      pop();
    }
  }
}

// Reference: Creative Coding - Grid In Grid - Code Pen 2023 //
