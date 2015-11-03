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
