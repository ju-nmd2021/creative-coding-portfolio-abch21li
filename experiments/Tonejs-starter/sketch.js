let ready = false;
let osc;

let lastX = 0;
let lastY = 0;
// let osc2;
// let lfo; //low frequency osc  

let wave;

function setup() {
  createCanvas(innerWidth, innerHeight);
  osc = new Tone.Oscillator();
  osc.frequency.value = 220;
  osc.connect(Tone.Master);
 
  // osc2 = new Tone.Oscillator();
  // osc2.frequency.value = 220;
  // osc2.connect(Tone.Master);

  // lfo = new Tone.LFO("0.1hz", 210, 230);
  // lfo.connect(osc.frequency); 
  
  wave = new Tone.Waveform();
  Tone.Master.connect(wave);

  Tone.Master.volume.value = -9;

}

function draw() {
if (ready) {
background(0);
osc.frequency.value = map(mouseX, 0, width, 0, 200)
stroke(mouseX, 0, mouseY);
strokeWeight(10);
let buffer = wave.getValue(0);

//look for trigger point where samples go from negative to positive
let start = 0;
for (let i=1; i < buffer.length; i++) {
  if (buffer [i-1] < 0 && buffer[i] >= 0) {
    start = 1;
    break; //interrupts for loop 
  }
}


//Calculate new end point so that same number of samples is drawn in each frame
let end = start + buffer.length/2;

//drawing the waveform
for (let i=start; i < end; i++) {
  let x1 = map(i-1, start, end, 0, width);
  let y1 = map(buffer[i-1], -1, 1, 0, height);
  let x2 = map(i, start, end, 0, width);
  let y2 = map(buffer[i], -1, 1, 0, height);
  line(mouseX, mouseY, x2, y2);
};



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
    // osc2.start();
    // lfo.start();
    ready = true;
  }
}