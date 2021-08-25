class Shoting {
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,300,300,options)
        this.width=300;
        this.height=300;
        this.image = loadImage("sprites/001.png");
        World.add(world, this.body);
       }
  
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
    
    
  }
  