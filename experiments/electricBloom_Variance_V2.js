let size = 500;
let gap = 100;
let amount = 5;
let color = (0, 0, 0);

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
}

function drawGrid(rotation) {
  const centerX = width / 2;
  const centerY = height / 2;
  if (size <= 500) {
    for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
      for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
        let xPosition = centerX + x * (size + gap);
        let yPosition = centerY + y * (size + gap);
        if (amount % 2 === 0) {
          xPosition += size / 2;
        }
        push();
        translate(xPosition, yPosition);
        rotate(rotation);
        square(0, 0, (size = size - 0.009));
        pop();
      }
    }
  } else if (size > 800) {
    for (let x = -Math.floor(amount / 2); x < Math.ceil(amount / 2); x++) {
      for (let y = -Math.floor(amount / 2); y < Math.ceil(amount / 2); y++) {
        let xPosition = centerX + x * (size + gap);
        let yPosition = centerY + y * (size + gap);
        if (amount % 2 === 0) {
          xPosition += size / 2;
        }
        push();
        translate(xPosition, yPosition);
        rotate(rotation);
        square(0, 0, (size = size + 0.009));
        fill(255, 255, 255);
        pop();
      }
    }
  } 
}

function draw(rotation) {
  background(255, 0, 0);
  stroke(20, 50, 80, 20);
  strokeWeight(1000 - 10);

  rotation = rotation + 1;

  let alpha = 1;
  for (let i = 0; i < 15; i++) {
    stroke(0, 90, 0, alpha);
    drawGrid(i * 0.5);
    fill(50, Math.random() * 30, 109);
  }
}

// Reference: Creative Coding - Grid example - Grid On Grid - Code Pen 2023//
