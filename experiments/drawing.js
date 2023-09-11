class Planet {
  constructor(x, y, height, width, text) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.text = text;
  }

  draw() {
    push();
    translate(this.x, this.y);
    ellipse(50, 50, 200);
    fill(255, 45, 100);
    color(0, 0, 0);
    pop();
  }
}

const newPlanet = new Planet(200, 500, 200, 80, "NEW PLANET");

function draw() {
  newPlanet.draw();
}
