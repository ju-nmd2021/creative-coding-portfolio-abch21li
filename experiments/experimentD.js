function setup() {
  createCanvas(innerWidth, innerHeight);
  background(0, 0, 0);
}

function draw() {
  push();
  strokeWeight(0);
  scale(1);
  fill(255, 90, 100);
  triangle(120, 300, 232, 80, 344, 300);
  pop();

  push();
  strokeWeight(0);
  scale(2);
  fill(255, 10, 100);
  triangle(120, 300, 232, 80, 344, 300);
  pop();

  push();
  strokeWeight(0);
  scale(3);
  fill(255, 20, 150);
  triangle(120, 300, 232, 80, 344, 300);
  pop();

  push();
  strokeWeight(0);
  scale(4);
  fill(200, 20, 150);
  triangle(120, 300, 232, 80, 344, 300);
  pop();
}
