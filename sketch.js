const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint

var engine,world

function setup(){
    createCanvas(1200,700);
    engine=Engine.create();
    world=engine.world;
    g=new Ground(600,650,1200,20);
    b1=new Box(700,620)
    b2=new Box(700,560)
    b3=new Box(700,500)
    b4=new Box(700,430)
    b5=new Box(700,370)
    b6=new Box(700,310)
    b7=new Box(700,250)

   


    a1=new Box(630,620)
    a2=new Box(630,560)
    a3=new Box(630,500)
    a4=new Box(630,430)
    a5=new Box(630,370)
    a6=new Box(630,310)
    a7=new Box(630,250)
 
    

    c1=new Box(760,620)
    c2=new Box(760,560)
    c3=new Box(760,500)
    c4=new Box(760,430)
    c5=new Box(760,370)
    c6=new Box(760,310)
    c7=new Box(760,250)
   
    w=new Ball(400,400)
    sl=new Rope(w.body,{x:400,y:300})


    
}

function draw(){
    background(0);
    Engine.update(engine);
    g.display();
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    b7.display();
    
    
    a1.display();
    a2.display();
    a3.display();
    a4.display();
    a5.display();
    a6.display();
    a7.display();
   

    c1.display();
    c2.display();
    c3.display();
    c4.display();
    c5.display();
    c6.display();
    c7.display();
   
    w.display();
    sl.display();

}
function mouseDragged(){
    Matter.Body.setPosition(w.body,{x:mouseX,y:mouseY})
}