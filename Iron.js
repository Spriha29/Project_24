class Iron {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':2.0
      }
      this.body = Bodies.rectangle(x, y, 70, 40, options);
      this.width = 70;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      var angle = this.body.angle;
      push();
      translate(position.x, position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3);
      stroke("black");
      fill("red");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };