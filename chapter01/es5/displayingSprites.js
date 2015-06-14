//Create the stage and renderer
"use strict";

var stage = new PIXI.Container(),
    renderer = PIXI.autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
PIXI.loader.add("images/pixie96x48.png").load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the sprite from the texture
  var pixie = new PIXI.Sprite.fromImage("images/pixie96x48.png");

  //Add the sprite to the stage
  stage.addChild(pixie);

  //Render the stage  
  renderer.render(stage);
}

//You can alternatively use alias to stand for Pixi objects and
//methods. Here's what the code above looks like using aliases:
/*
//Create the aliases
let Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    Sprite = PIXI.Sprite;

//Create the stage and renderer
let stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Use Pixi's built-in `loader` object to load an image
loader
  .add("images/pixie96x48.png")
  .load(setup);

//This `setup` function will run when the image has loaded
function setup() {

  //Create the sprite from the texture
  let pixie = new Sprite.fromImage("images/pixie96x48.png");

  //Add the sprite to the stage
  stage.addChild(pixie);
  
  //Render the stage   
  renderer.render(stage);
}
*/
//# sourceMappingURL=displayingSprites.js.map