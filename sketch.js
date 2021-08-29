
var gameState = PLAY;

var boy, boyimg;
var coin, coinimg, coingroup;
var bird, birdimg, birdgroup;
var tree, treeimg, treegroup;
var grass, grassimg ,grassgroup;

function preload(){
boyimg = loadImage ("boy.png");
coinimg = loadImage ("coin.png");
birdimg = loadImage("bird.png");
treeimg = loadImage("tree.png");
grassimg = loadImage("grass.png");
}

function setup() {
 createCanvas(600,600);
 tree = createSprite(300,300);
 tree.addImage("tree",treeimg);
 tree.velocityX = 1;

 grass.createSprite(300,300);
 grass.addImage("grass",grassimg);
 grass.velocityX = 1;

 coingroup = new Group();
 birdgroup = new Group();

 boy = createSprite(200,200,50,50)
 boy.scale = 0.3;
 boy.addImage("boy",boyimg);
}

function draw() {
 
}