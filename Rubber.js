class Rubber {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.3,
          'friction':5.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, 30, options);
      this.radius = 30;
      
      World.add(world, this.body);
    }
    display(){
      var position =this.body.position;
      var angle = this.body.angle;
      push();
      translate(position.x, position.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("blue");
      circle(0, 0, this.radius);
      pop();
    }
  };