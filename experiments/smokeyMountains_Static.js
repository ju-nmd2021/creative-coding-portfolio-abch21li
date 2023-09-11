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
    const noiseValue = noise(i / 500);
    const y = base + noiseValue * 15 * maxHeight;
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
  background(50, 20, 10);

  for (let layer of layers) {
    stroke(10, 200, 255, 10);
    fill(10, 282, 155, 90);
    beginShape();
    vertex(2000, 0);
    for (let p of layer) {
      vertex(p.x, p.y);
    }
    vertex(width, 0);
    endShape();
  }
  noLoop();
}

// Reference: Creative Coding - Perlin Noise Landscape - Code Pen 2023 //
