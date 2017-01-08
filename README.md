Learn PixiJS
============

This is the code repository for the book [Learn
PixiJS](http://www.springer.com/us/book/9781484210956).

There are two ways to access the source code: by downloading the ZIP file or by
cloning this repository.

The ZIP file
-----------

The easiest way is just to download the ZIP file. It contains a
frozen snapshot of all the source code for *Learn PixiJS* as it was on the
day the book was published. That means it's guaranteed to work with code in the book. 

Clone this repository
---------------------

Alternatively, you can use git to clone this repository. (If you don't
know how to use git [you can find out
here](https://github.com/kittykatattack/learningGit).) Cloning the
repository will
give you the latest version of the submodules, including the latest
version of Pixi. (Be aware that the source code in the book was tested
with Pixi 3.0.7. If you are using a later version of
Pixi you may encounter incompatibilities.)

To clone this repository, run the following in the command line:
```
git clone git@github.com:kittykatattack/learningGit.git
```
When it's finished, run the following two commands:
```
git submodule init
git submodule update
```
To optionally update the submodules to the very latest versions, run this
command:
```
git submodule foreach git pull origin master
```
This will pull the latest versions of the submodules from their
repositories.

Launching a web server
------------------

You'll need to launch a web server in the root repository directory. A
modern text editor like [Light Table](http://lighttable.com),
[Brackets](http://brackets.io) or [Atom](https://atom.io) will
launch one for you automatically, directly from the editor, when you
use it to open an HTML file in the browser. 

Or you could launch a web server directly from the command line using
[http-server](https://github.com/indexzero/http-server). After the server starts, navigate to
`http://localhost:8080/` in your browser and you'll be able to
interact with working versions of all the example files in the book.  

Keeping up with Pixi
--------------------

Pixi is an actively developed library, so make sure you [keep an eye on
Pixi's code repository](https://github.com/pixijs/pixi.js) for any changes to the API. 

Important changes for Pixi v4.x users!
--------------------------------------

If are using Pixi v4, there are a few small but significant API changes that impact
some of the published code in "Learn Pixi JS"

The `generateTexture` method is now a property of the renderer, no a Pixi Sprite.
That means you now need to use `generateTexture` like this:
```
let renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
let texture = renderer.generateTexture(sprite);
```

Because of this change the [`SpriteUtilities`] (https://github.com/kittykatattack/spriteUtilities) 
used in "Learn Pixi JS" now requires a reference to Pixi's `renderer` as the second argument in the constructor:
```
let renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
let u = new SpriteUtilities(PIXI, renderer);
```

`RenderTexture` has also changed. Here's the new API:
```
var renderTexture = RenderTexture.create(100, 100);
renderer.render(mySprite, renderTexture);
```

You can find out more about some of the changes in Pixi v4 here: http://www.goodboydigital.com/pixi-js-v4/
