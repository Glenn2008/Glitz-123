class Pc {
  constructor(x,y){
      var options = {
      'isStatic':true
    }
      this.body = Bodies.rectangle(x, y, 220, 100, options);
      this.width = 220;
      this.height = 200;
      this.image = loadImage("sprites/106894 (1).png");
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
