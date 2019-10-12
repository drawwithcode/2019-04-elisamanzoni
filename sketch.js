var tirolermusic;

function preload(){

   oktoberfest_img = loadImage("./images/oktoberfest.jpg");
   tiroler = loadImage("./images/tiroler-normal.png");
   beer = loadImage("./images/la-chouffe.png");

   tirolermusic = loadSound("./assets/tiroler-music.mp3");

  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(10);
  // put setup code here
}

function draw() {

  new backgroundImage(oktoberfest_img);
//  oktoberfest_img.filter("invert");

//table
noStroke();
fill('#8b5e3c');
rect(0,windowHeight-100,windowWidth,100);

  //tiroler
  imageMode(CENTER);
  image(tiroler,windowWidth/2,windowHeight-tiroler.height/16-100,tiroler.width/8,tiroler.height/8);

  //beer
  image( beer,windowWidth/4,windowHeight-beer.height/14-20,beer.width/7,beer.height/7);
  // put drawing code here



}
function backgroundImage(img) {
  push();
  translate(width/2,height/2);
  imageMode(CENTER);
  let scale = Math.max(width/img.width,height/img.height);
  image(img,0,0,img.width*scale,img.height*scale);
  pop();
}
