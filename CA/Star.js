class Star {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(2, 6);
      this.speed = 0.3;
    }
  
    moveStar() {
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    showStar() {
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }