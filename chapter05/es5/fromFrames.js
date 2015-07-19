//Aliases
"use strict";

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Rectangle = PIXI.Rectangle,
    MovieClip = PIXI.extras.MovieClip;

//Create a Pixi stage and renderer
var stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load resources (images and fonts)
loader.add("images/pixieAtlas.json").load(setup);

//Set the initial game state
var state = play;

//Define any variables that are used in more than one function
var pixie = undefined;

function setup() {

  //Create an array that references the frames you want to use
  //let frames = ["pixie0.png", "pixie1.png", "pixie2.png"];

  //Use the custom `frameSeries` function to create the frames array
  var frames = frameSeries(0, 2, "pixie", ".png");

  //Create a MoveClip from the frames
  pixie = MovieClip.fromFrames(frames);

  //Set the sprite's position and add it to the stage
  pixie.position.set(32, 32);
  stage.addChild(pixie);

  pixie.play();
  pixie.animationSpeed = 0.1;
  console.log(pixie.textures);

  //Start the game loop
  gameLoop();
}

function gameLoop() {

  //Loop this function 60 times per second
  requestAnimationFrame(gameLoop);

  //Run the current state
  state();

  //Render the stage
  renderer.render(stage);
}

function play() {}

function frameSeries() {
  var startNumber = arguments[0] === undefined ? 0 : arguments[0];
  var endNumber = arguments[1] === undefined ? 1 : arguments[1];
  var baseName = arguments[2] === undefined ? "" : arguments[2];
  var extension = arguments[3] === undefined ? "" : arguments[3];

  //Create an array to store the frame names
  var frames = [];

  for (var i = startNumber; i < endNumber + 1; i++) {
    var frame = baseName + i + extension;
    frames.push(frame);
  }

  //Return the array of frames
  return frames;
}
//# sourceMappingURL=fromFrames.js.map