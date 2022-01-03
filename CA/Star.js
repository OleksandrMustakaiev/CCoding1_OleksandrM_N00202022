//Stars class
class Star {
    constructor() {
      //properties
      this.x = random(width);
      this.y = random(height);
      this.diameter = random(2, 6); //random size min and max
      this.speed = 0.3; //speed for a shake
    }
  
    moveStar() { //move / shake
      this.x += random(-this.speed, this.speed);
      this.y += random(-this.speed, this.speed);
    }
  
    showStar() { //show
      ellipse(this.x, this.y, this.diameter, this.diameter);
    }
  }