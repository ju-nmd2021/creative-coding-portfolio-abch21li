let gridsize = 10;
let seed = 0;
let layers = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  generateLayers();
}

class Point {
  constructor(x, y, noise) {
    this.x = x;
    this.y = y;
    this.noise = noise;
  }
}

function generateHorizon(base, maxHeight) {
  let points = [];
  for (let i = 0; i < width; i++) {
    const noiseValue = noise(i / 70);
    const y = base + noiseValue * maxHeight;
    const point = new Point(i, y, noiseValue);
    points.push(point);
  }
  layers.push(points);
}

function generateLayers() {
  let h = 500;
  let maxHeight = 40;
  while (h > 0) {
    noiseSeed(seed);
    generateHorizon(h, maxHeight);
    seed += 1;
    h -= 60;
  }
}

function draw() {
  background(34, 39, 46);

  for (let layer of layers) {
    stroke(108, 182, 255, 10);
    fill(108, 182, 255, 10);
    beginShape();
    vertex(0, 0);
    for (let p of layer) {
      vertex(p.x, p.y);
    }
    vertex(width, 0);
    endShape();
  }
  noLoop();
}
