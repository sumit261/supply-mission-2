class box{
    constructor(x,y,width,height){
        this.width=width
        this.height=height
        var ground_options={
            isStatic:true
        }
        
      this.body=Bodies.rectangle(x,y,width,height,ground_options)
      World.add(world,this.body);
    }
    display(){
        var position=this.body.position;
        fill(255,0,0);
        rectMode(CENTER)
        rect(position.x,position.y,this.width,this.height);
    }
    } 