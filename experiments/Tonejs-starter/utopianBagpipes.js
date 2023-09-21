



//-----------------------------------------------TONES


const drnBtnA = document.getElementById('droneA-btn')
const drnBtnB = document.getElementById('droneB-btn')
const drnBtnC = document.getElementById('droneC-btn')
const drnBtnD = document.getElementById('droneD-btn')
const cBTN = document.getElementById('c-btn');
const dBTN = document.getElementById('d-btn');
const eBTN = document.getElementById('e-btn');
const fBTN = document.getElementById('f-btn');
const gBTN = document.getElementById('g-btn');
const aBTN = document.getElementById('a-btn');
const bBTN = document.getElementById('b-btn');
const synth = new Tone.Synth();
const drone = new Tone.PolySynth();


//-----------------------------------------------EFFECTS

const feedbackDelayA = new Tone.FeedbackDelay({
  delayTime: 0.5,
  feedback: 0.7,
  wet: 0.5,
});

const feedbackDelayB = new Tone.FeedbackDelay({
  delayTime: 1,
  feedback: 1,
  wet: 0.4,
});

const reverbA = new Tone.JCReverb({
  roomSize: 0.9,
  wet: 0.9,
});

// const phaser = new Tone.Phaser({
// 	frequency: 5,
// 	octaves: 5,
// 	baseFrequency: 1000
// });


// const loop = new Tone.Loop((time) => {
// 	// triggered every eighth note.
// 	console.log(time);
// }, "1m").start(0);
// Tone.Transport.start();

//-----------------------------------------------CONNECTIONS

synth.connect(feedbackDelayA);
feedbackDelayA.toDestination();

drone.connect(feedbackDelayB);
feedbackDelayB.toDestination();

// drone.connect(phaser);
// phaser.toDestination();

synth.connect(reverbA);
reverbA.toDestination();


// drone.connect(loop);
// loop.toDestination();


//-----------------------------------------------------------

drnBtnA.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    osc.start();
  }
  drone.triggerAttackRelease("C3", "1m");
  drone.triggerAttackRelease("G3", "1m");
  drone.triggerAttackRelease("C2", "1m");
});

drnBtnB.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    drone.start();
  } 
  drone.triggerAttackRelease("F3", "1m");
  drone.triggerAttackRelease("C3", "1m");
  drone.triggerAttackRelease("F2", "1m");
});




drnBtnC.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    drone.start();
  }
  drone.triggerAttackRelease("C3", "1m");
  drone.triggerAttackRelease("G3", "1m");
  drone.triggerAttackRelease("C2", "1m");
});

drnBtnD.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    drone.start();
  }
  drone.triggerAttackRelease("C3", "1m");
  drone.triggerAttackRelease("G3", "1m");
  drone.triggerAttackRelease("C2", "1m");
});

cBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("C5", "8n");
});

dBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("D5", "8n");
});

eBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("E5", "8n");
});

fBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("F5", "8n");
});

gBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("G5", "8n");
});

aBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("A5", "8n");
});

bBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("B5", "8n");
});





// Reference: The Code Creative - Tone.JS - Youtube 2023 //
