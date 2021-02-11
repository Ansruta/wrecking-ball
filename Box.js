class Box{
    constructor(x,y){
        var op={
            isStatic:false,
            restitution:0.1,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.rectangle(x,y,60,60,op)
        this.x=x;
        this.y=y;
        this.width=60;
        this.height=60;
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}