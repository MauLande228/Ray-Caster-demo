class Point {
  constructor(x, y) {
    this.point = createVector(x, y);
  }
}

class Boundary {
  constructor(start, end) {
    this.pA = start.point;
    this.pB = end.point;
  }

  show() {
    stroke(255);
    line(this.pA.x, this.pA.y, this.pB.x, this.pB.y);
  }
}
