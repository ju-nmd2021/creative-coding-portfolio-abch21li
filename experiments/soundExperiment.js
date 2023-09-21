

let ready = false;
let osc;


function draw() {
if (ready) {
} else {
  //do stuff
  fill(255);
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