const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,
ground1,ground2,ground3,polygon,slingshot,score=0,gameState="onSling",backgroundImg;
function preload(){
    getBackgroundImage()
}

function setup(){
    var canvas = createCanvas(800,700);
    engine = Engine.create();
    world =  engine.world;
    block1 = new Block(330,235)
    block3 = new Block(360,235)
    block4 = new Block(390,235)
    block5 = new Block(360,195)
    block6 = new Block(390,195)
    block7 = new Block(500,370)
    block8 = new Block(480,370)
    block10= new Block(480,435)
    block9 = new Block(500,435)
    block11 = new Block(450,435)
    block2 = new Block(390,155)
    block12 = new Block(450,330)

    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(355,260,120,20)
    ground3 = new Ground(550,450,200,20)
    polygon = new Polygon(100,250)
    slingshot=new SlingShot(polygon.body,{x:100,y:250})
}
function draw(){
   
    if(backgroundImg){
        background(backgroundImg);
        
    }
    background("white")
    Engine.update(engine)
    textSize(30)
    text("Drag The Hexagon  ",450,50)
    textSize(25)
    text("Score : "+score,500,80)
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    ground1.display()
    polygon.display()
    ground2.display()
    slingshot.display()
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block7.score();
    block6.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    ground3.display()

    
}
function mouseDragged(){
    
    if(gameState!="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    gameState="launched"
   
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body,{x:40,y:280});
        slingshot.attach(polygon.body);
        gameState="onSling"
    }
}
async function getBackgroundImage(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json()

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13)

    if(hour>=6&&hour<=18)
    {
        bg = "dayBg.jpg"
    }
    else{
        bg="night background.webp"
    }
    backgroundImg=loadImage(bg)
}