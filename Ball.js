class Ball{
    constructor(x,y){
        var op={
            isStatic:false,
            restitution:0.1,
            friction:1.0,
            density:1.0
        }
        this.body=Bodies.circle(x,y,60,op)
        this.x=x;
        this.y=y;
        this.r=30;
        World.add(world,this.body)
    }
    display(){
        var p=this.body.position
        push();
        translate(p.x,p.y);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r)
        pop();
    }
}