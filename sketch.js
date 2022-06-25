let wall;

let pStart;
let pEnd;

let ray;

function setup() {
  createCanvas(400, 400);

  pStart = new Point(300, 100);
  pEnd = new Point(300, 300);
  wall = new Boundary(pStart, pEnd);
  ray = new Ray(100, 200);
}

function draw() {
  background(0);
  wall.show();
  ray.show();
  ray.lookAt(mouseX, mouseY);

  let pt = ray.cast(wall);

  if (pt) {
    fill(255);
    ellipse(pt.x, pt.y, 8, 8);
  }
}
