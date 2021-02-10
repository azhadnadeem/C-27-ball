class Log{
    constructor(x,y,height,angle){
    var bounce={
      restitution:1,
      friction:1,
      density:1
    }
    this.log=Bodies.rectangle(x.y,this.width,height,bounce);
    this.width=300
    this.height=height
   // Matter.Body.setAngle(this.log,angle)
    World.add(world,this.log)
  }
  display(){
    var pos=this.log.position
    var angle=this.log.angle;
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    rectMode(CENTER)
    fill("green")
    rect(300,100,this.width,this.height);
    pop()
  }
}