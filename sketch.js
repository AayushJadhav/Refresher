var beep;

function preload() {
  //loading sound,
  beep = loadSound("beep.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("green");
  
  //calling function :)
  refresher();
}

//creating function for 'beep' sound,
function refresher() {
  if(frameCount % 30 === 0) {
    beep.play();
  }
}
