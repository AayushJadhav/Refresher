var beep;

function preload() {
  beep = loadSound("beep.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("green");
  
  console.log(frameCount);
  
  refresher();
}

function refresher() {
  if(frameCount % 790 === 0) {
    beep.play();
  }
}