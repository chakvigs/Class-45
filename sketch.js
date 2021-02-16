var gamestateObj, formObj, playerObj, database;

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  gameObj = new Gamestate();
  gameObj.start();
}

function draw() {
  background(255);
  drawSprites();
}