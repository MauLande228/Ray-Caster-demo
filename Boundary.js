class Boundary {
  constructor(x1, y1, x2, y2) {
    this.pA = createVector(x1, y1);
    this.pB = createVector(x2, y2);
  }

  randomize() {
    this.pA.set(random(width), random(height));
    this.pB.set(random(width), random(height));
  }

  show() {
    stroke(255);
    line(this.pA.x, this.pA.y, this.pB.x, this.pB.y);
  }
}
