let walls = [];

let ray;
let actor;

function setup() {
  createCanvas(800, 600);

  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(0, 0, 0, height)); //left vertical boundary
  walls.push(new Boundary(width, 0, width, height)); //right vertical boundary
  walls.push(new Boundary(0, 0, width, 0)); //Upper horizontal boundary
  walls.push(new Boundary(0, height, width, height)); //Lower horizontal boundary

  actor = new Actor();
}

function draw() {
  background(0);

  for (let wall of walls) {
    wall.show();
  }

  actor.update(mouseX, mouseY);
  actor.show();
  actor.emanate(walls);
}
