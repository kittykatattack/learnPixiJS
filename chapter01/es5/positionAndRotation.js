//Aliases
"use strict";

var Container = PIXI.Container,
    autoDetectRenderer = PIXI.autoDetectRenderer,
    loader = PIXI.loader,
    Sprite = PIXI.Sprite;

//Create a Pixi stage and renderer and add the
//renderer.view to the DOM
var stage = new Container(),
    renderer = autoDetectRenderer(256, 256);
document.body.appendChild(renderer.view);

//Set the canvas's border style and background color
renderer.view.style.border = "1px dashed black";
renderer.backgroundColor = "0xFFFFFF";

//load an image and run the `setup` function when it's done
loader.add("images/cat64x64.png").load(setup);

function setup() {

  //Create the `cat` sprite from the texture
  var cat = new Sprite.fromImage("images/cat64x64.png");

  //Position the sprite and change its width and height
  cat.x = 96;
  cat.y = 128;

  //Optionally change the width and height
  //cat.width = 80;
  //cat.height = 120;

  //Optionally change the sprite's scale
  //cat.scale.x = 1.5;
  //cat.scale.y = 1.5;

  //Optionally center the sprite's anchor point
  //cat.anchor.x = 0.5;
  //cat.anchor.y = 0.5;

  //As an alternative to anchor, you can optionally set the cat's pivot point
  //cat.pivot.x = 32;
  //cat.pivot.y = 32;

  //Rotate the sprite
  //cat.rotation = 0.5;

  //You can use this alternative syntax to set the
  //sprites anchor point, scale and rotation
  /*
  cat.anchor.set(0.5, 0.5);
  cat.position.set(120, 120);
  cat.scale.set(1.5, 3);
  */

  //Add the cat to the stage
  stage.addChild(cat);

  //Render the stage  
  renderer.render(stage);
}
//# sourceMappingURL=positionAndRotation.js.map