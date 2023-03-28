# jellyfish

This p5.js code creates an interactive animation of a jellyfish and its offspring. The code defines a Jellyfish class, a setup function, a draw function, and a mouseClicked event listener. The Jellyfish class has a constructor, display, and update methods. It allows the user to add baby jellyfish on mouse clicks.

Break down:


1. Jellyfish class:
The Jellyfish class has a constructor and two methods: display() and update().
The constructor initializes the properties of the jellyfish, such as position, size, noise offsets, and color.

- x, y: the coordinates of the jellyfish.
- size: the size of the jellyfish.
- noiseOffset, noiseOffsetX, noiseOffsetY: random noise offsets used for movement and tentacle animation.
- hue: a random hue value for color, used in the HSB color mode.

2. display():
This method draws the jellyfish on the canvas. It sets the color mode to HSB, draws an ellipse for the jellyfish head, and uses a for loop to draw the tentacles using curve().

3. update():
This method updates the jellyfish position using Perlin noise, which creates smooth random movement. It also resets the jellyfish position if it goes off-screen.

4. Global variables:
Two global variables are defined - jellyfish, the main jellyfish object, and babyJellyfish, an array to store baby jellyfish objects.

5. setup():
This function sets up the canvas and creates the main jellyfish object.

6. draw():
This function is the main loop that continuously updates
