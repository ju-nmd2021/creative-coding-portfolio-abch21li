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
    const noiseValue = noise(i / 200);
    const y = base + noiseValue * 4 * maxHeight;
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
    seed += 600;
    h -= 12;
  }
}

function draw() {
  background(10, 100, 200, 100);

  for (let layer of layers) {
    stroke(10, 200, 255, 10);
    fill(10, 10, 15, 30);
    beginShape();
    vertex(0,400);
    for (let p of layer) {
      vertex(p.x, p.y);
    }
    vertex(width, 200);
    endShape();
  }
  noLoop();
}

// Reference: Creative Coding - Perlin Noise Landscape - Code Pen 2023 //
