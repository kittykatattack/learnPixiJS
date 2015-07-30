//Aliases
"use strict";

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    TextureCache = PIXI.utils.TextureCache,
    Texture = PIXI.Texture,
    Sprite = PIXI.Sprite,
    RenderTexture = PIXI.RenderTexture,
    TilingSprite = PIXI.extras.TilingSprite;

//Create a Pixi stage and renderer
var stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load resources (images and fonts)
loader.add("images/animals.json").load(setup);

//Set the initial game state
var state = play;

//Define any variables that are used in more than one function
var cat = undefined,
    hedgehog = undefined,
    tiger = undefined;

function setup() {

  cat = Sprite.fromFrame("cat.png");
  cat.position.set(64, 64);
  cat.scale.set(2, 2);
  stage.addChild(cat);

  var filter = new PIXI.filters.AsciiFilter();
  //filter.blur = 20;
  cat.filters = [filter];

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
//# sourceMappingURL=filters.js.map