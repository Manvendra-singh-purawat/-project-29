class line {
  constructor() {
    var options = {
      isStatic: true,
    };
    this.ground = Bodies.rectangle(550, 390, 1100, 10, options);
    World.add(world, this.ground);
  }
  display() {
    noStroke();
    fill("green");
    rectMode(CENTER);
    rect(this.ground.position.x, this.ground.position.y, 1100, 20);
  }
}
