let star = []; // array of Star objects
let ball; //to make a ball using class
let ball2; //to make a second ball using class
let angle1; //angle to the ball
let angle2; //angle to the second ball
let speed; //speed of the ball


function setup() {
  createCanvas(1423, 760); //size of background
  // Create objects
  for (let i = 0; i < 1000; i++) { //to create lot of stars
    star.push(new Star()); //to show on the screen html
  }

//control settings
speed = 1.5; //speed
angle1 = 60; //angle of the first ball
angle2 = 195; //angle of the second ball

ball = new Ball(height/2, width/2, 2, 3, 45, 241, 196, 15); //first ball (4th sign is the radius of the ball)
ball2 = new Ball(height/2, width/2, 2, 3, 30, 211, 84, 0); //second ball

//angleMode(DEGREES)
ball.vx = speed*cos(angle1 * PI/180);
ball.vy = speed*sin(angle1 * PI/180);
ball2.vx = speed*cos(angle2 * PI/180);
ball2.vy = speed*sin(angle2 * PI/180);
}

function draw() {
  background(0, 0, 40); //background of the galaxy
  fill(255, 255, 255); //color of the stars
  for (let i = 0; i < star.length; i++) {
    star[i].moveStar(); //to shake stars
    star[i].showStar(); //to show stars
  }

    //to see balls and to make them move
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