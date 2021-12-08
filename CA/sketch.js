let star = []; // array of Jitter objects

function setup() {
  createCanvas(1423, 760);
  // Create objects
  for (let i = 0; i < 1000; i++) {
    star.push(new Star());
  }
}

function draw() {
  background(0, 0, 40);
  for (let i = 0; i < star.length; i++) {
    star[i].moveStar();
    star[i].showStar();
  }
}