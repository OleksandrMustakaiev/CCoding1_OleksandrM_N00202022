let arrow;

function setup() {
    //background
	createCanvas(500, 500);
    //background color
    background(150);
    //add class
    arrow = new Arrow(250,250);
}	

function draw() {	
    background(150);
    //to show the arrow
	arrow.drawArrow();
}


//class definition below
class Arrow {
	constructor(x, y, rotation) {
		this.x = x;
		this.y = y;
		this.rotation = rotation;
	}
	//function to draw the arrow
	drawArrow() {
		//translate from the top left corner to x and y of object
		translate(this.x, this.y);
        let arrow = atan2(mouseY - this.y, mouseX - this.x)
		//rotate by rotation value of object
		rotate(arrow);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
		
	}
}