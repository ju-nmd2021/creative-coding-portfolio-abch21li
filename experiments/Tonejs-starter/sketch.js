
const playBTN = document.getElementById('play-btn');
const synth = new Tone.Synth().toDestination();

playBTN.addEventListener("click", () => {
  if (Tone.context.state ==! "running") {
    Tone.start();
  }
  synth.triggerAttackRelease("C4", "4n");
})

