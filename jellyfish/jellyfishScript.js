// Jellyfish class
class Jellyfish {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.noiseOffset = random(100);
    this.noiseOffsetX = random(100);
    this.noiseOffsetY = random(100);
    this.hue = random(360); // Add a hue property for color
  }

  display() {
    push();
    translate(this.x, this.y);
    colorMode(HSB, 360, 100, 100, 1); // Change color mode to HSB
    // Set semi-transparent fill and stroke colors using hue and pastel shades
    let pastelSaturation = 30;
    let pastelBrightness = 90;
    fill(this.hue, pastelSaturation, pastelBrightness, 0.5);
    stroke(this.hue, pastelSaturation, pastelBrightness, 0.5);
    // Draw the jellyfish head
    ellipse(0, 0, this.size, this.size * 0.8);
    // Draw the tentacles
    strokeWeight(2);
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let startX = this.size / 2 * cos(angle);
      let startY = this.size / 2 * sin(angle);
      let noiseValue = noise((frameCount + this.noiseOffset) * 0.01, i * 0.1);
      let controlX = lerp(startX, 0, noiseValue);
      let controlY = lerp(startY, this.size * 0.8, noiseValue);
      let endX = startX * (1 + noiseValue * 2);
      let endY = startY * (1 + noiseValue * 2);
      curve(controlX, controlY, startX, startY, endX, endY, controlX, controlY);
    }
    pop();
  }

  update() {
    // Apply vertical and horizontal noise-based movement
    this.y += map(noise(this.noiseOffsetY), 0, 1, -1, 1);
    this.x += map(noise(this.noiseOffsetX), 0, 1, -1, 1);
    this.noiseOffset += 0.1;
    this.noiseOffsetX += 0.01;
    this.noiseOffsetY += 0.01;
    // Reset jellyfish position if it goes off the screen
    if (this.y < -this.size) {
      this.y = height + this.size;
    }
    if (this.x < -this.size) {
      this.x = width + this.size;
    }
    if (this.x > width + this.size) {
      this.x = -this.size;
    }
  }
}

// Global variables
let jellyfish;
let babyJellyfish = [];

// Setup function
function setup() {
  createCanvas(800, 600);
  jellyfish = new Jellyfish(width / 2, height / 2, 150);
}

// Draw function
function draw() {
  background(0, 50, 100);
  jellyfish.display();
  jellyfish.update();

  // Display and update baby jellyfish
  for (let i = 0; i < babyJellyfish.length; i++) {
    babyJellyfish[i].display();
    babyJellyfish[i].update();
  }
}

// Mouse click event listener
function mouseClicked() {
  let babySize = random(5, 30);
  let baby = new Jellyfish(mouseX, mouseY, babySize);
  babyJellyfish.push(baby);
}
