let ball;
let ball2;
let angle1;
let angle2;
let speed;

//function to create a background, balls and make it move (speed and so on)
function setup(){
	createCanvas(500,500);

	//control settings
	speed = 5; //speed
	angle1 = 25; //angle of the first ball
	angle2 = 47; //angle of the second ball

	ball = new Ball(height/2, width/2, 2, 3, 20, 186, 220, 88); //first ball
	ball2 = new Ball(height/2, width/2, 2, 3, 20, 235, 77, 75); //second ball

	//angleMode(DEGREES)
	ball.vx = speed*cos(angle1 * PI/180);
	ball.vy = speed*sin(angle1 * PI/180);
	ball2.vx = speed*cos(angle2 * PI/180);
	ball2.vy = speed*sin(angle2 * PI/180);
}
//function to draw the balls and make them move
function draw(){
		background(48, 51, 107);
        ball.drawBall();
		ball.moveBall();
		ball2.drawBall();
		ball2.moveBall();

		//to make balls bounce from the wall
		if (ball.x > width - ball.radius || ball.x < ball.radius) {
			ball.vx = -ball.vx;
		}
		if (ball.y > height - ball.radius || ball.y < ball.radius) {
			ball.vy = -ball.vy;
		}
	
		if (ball2.x > width - ball2.radius || ball2.x < ball2.radius) {
			ball2.vx = -ball2.vx;
		}
		if (ball2.y > height - ball2.radius || ball2.y < ball2.radius) {
			ball2.vy = -ball2.vy;
		}
}
