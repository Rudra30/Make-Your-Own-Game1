var Ninja;
var Idle;
var Run;
var Jump;
var Dead;

function preload() {

Idle = loadAnimation("images/idle/Idle__000.png",
                     "images/idle/Idle__001.png",
                     "images/idle/Idle__002.png",
                     "images/idle/Idle__003.png",
                     "images/idle/Idle__004.png",
                     "images/idle/Idle__005.png",
                     "images/idle/Idle__006.png",
                     "images/idle/Idle__007.png",
                     "images/idle/Idle__008.png",
                     "images/idle/Idle__009.png",);

Run = loadAnimation("images/Run/Run__000.png",
                    "images/Run/Run__001.png",
                    "images/Run/Run__002.png",
                    "images/Run/Run__003.png",
                    "images/Run/Run__004.png",
                    "images/Run/Run__005.png",
                    "images/Run/Run__006.png",
                    "images/Run/Run__007.png",
                    "images/Run/Run__008.png",
                    "images/Run/Run__009.png",)

Jump = loadAnimation("images/Jump/Jump__000.png",
                     "images/Jump/Jump__001.png",
                     "images/Jump/Jump__002.png",
                     "images/Jump/Jump__003.png",
                     "images/Jump/Jump__004.png",
                     "images/Jump/Jump__005.png",
                     "images/Jump/Jump__006.png",
                     "images/Jump/Jump__007.png",
                     "images/Jump/Jump__008.png",
                     "images/Jump/Jump__009.png",)

Dead = loadAnimation("images/Dead/Dead__000.png",
                     "images/Dead/Dead__001.png",
                     "images/Dead/Dead__002.png",
                     "images/Dead/Dead__003.png",
                     "images/Dead/Dead__004.png",
                     "images/Dead/Dead__005.png",
                     "images/Dead/Dead__006.png",
                     "images/Dead/Dead__007.png",
                     "images/Dead/Dead__008.png",
                     "images/Dead/Dead__009.png",)                     
}

function setup() {

createCanvas(1200,700);
Ninja = createSprite(600,350,50,50);
Ninja.scale = 0.3 ;
Ninja.addAnimation("Kirti",Idle);
Ninja.addAnimation("Kirti1",Run);
Ninja.addAnimation("Kirti2",Jump);
Ninja.addAnimation("Kirti3",Dead);
}


function draw() {

background("lightgreen");

//Right arrow
if(keyWentDown("right_arrow")){
    Ninja.changeAnimation("Kirti1",Run);
}

if(keyWentUp("right_arrow")){
    Ninja.changeAnimation("Kirti",Idle);
}

//Space
if(keyWentDown("space")){
    Ninja.changeAnimation("Kirti2",Jump);
    Ninja.velocityY = -10;
}

drawSprites();
}


