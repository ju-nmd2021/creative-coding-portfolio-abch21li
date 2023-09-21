let ready = false;
let osc;

function setup() {
  createCanvas(innerWidth, innerHeight);
  osc = new Tone.Oscillator();
  osc.connect(Tone.Master);
}

function draw() {
if (ready) {
} else {
  //do stuff
  fill(255);
  background(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text("CLICK TO START", width/2, height/2);
}
}

function mousePressed() {
  if (!ready) {
    osc.start();
    ready = true;
  }
}