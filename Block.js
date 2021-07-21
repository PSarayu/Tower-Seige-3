class Block{
    constructor(x,y,width,height){
        var options={
            
          friction:0,
            restitution:1
        }

        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

    display(){
        var pos= this.body.position
        var ang=this.body.angle
        push();
        translate(pos.x,pos.y)
        rotate(ang)
        rectMode(CENTER)
        rect(0,0,this.width,this.height);
        pop();
    }
}