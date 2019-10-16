var tirolerMusic;
var trashMusic;

function preload(){

   oktoberfest_img = loadImage("./assets/oktoberfest.jpg");
   tiroler = loadImage("./assets/tiroler-normal.png");
   beer = loadImage("./assets/la-chouffe.png");

   tirolerD = loadImage("./assets/tiroler.png");
   beerE = loadImage("./assets/empty-beer.png");

   tirolerMusic = loadSound("./assets/tiroler-music.mp3");
   trashMusic = loadSound("./assets/party-music.mp3");

  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);



  // put setup code here
}

function draw() {

  new backgroundImage(oktoberfest_img);
  //table
  noStroke();
  fill('#8b5e3c');
  rect(0,windowHeight-100,windowWidth,100);
   imageMode(CENTER);

   //text
   fill('white');
   textAlign(CENTER);
   textSize(30);
   text('Drink the beer', windowWidth/2,windowHeight-50);

  if(mouseY>(windowHeight-beerE.height/6-20) && mouseY<(windowHeight-20) &&
      mouseX>(windowWidth/4-beerE.width/14) && mouseX<(windowWidth/4+beerE.width/14) ){

   //tiroler
   image(tirolerD,windowWidth/2,windowHeight-tirolerD.height/16-100,tirolerD.width/8,tirolerD.height/8);

   //beer
   image( beerE,windowWidth/4,windowHeight-beerE.height/14-20,beerE.width/7,beerE.height/7);

   oktoberfest_img.filter("invert");

   if (trashMusic.isPlaying() == false){
     tirolerMusic.stop();
     trashMusic.play();

   }
 }
   else {

     //tiroler
     image(tiroler,windowWidth/2,windowHeight-tiroler.height/16-100,tiroler.width/8,tiroler.height/8);

     //beer
     image( beer,windowWidth/4,windowHeight-beer.height/14-20,beer.width/7,beer.height/7);

     if (tirolerMusic.isPlaying() == false){
       trashMusic.stop();
       tirolerMusic.play();
     }

   }
//  tirolerMusic = createAudio("./assets/tiroler-music.mp3");



//  oktoberfest_img.filter("invert");



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
