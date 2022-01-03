//Ball class
class Ball {
	constructor(x, y, vx, vy, radius, r, g, b) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx; //velocity x
		this.vy = vy; //velocity y
		this.radius = radius; //radius of the ball(s)
		this.r = r; //red
		this.g = g; //green
		this.b = b; //blue
}
    drawBall() { //draw the ball
		fill(this.r, this.g, this.b); //color
		ellipse(this.x, this.y, this.radius*2, this.radius*2); //ball
	} 

	moveBall() { //move ball
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}
