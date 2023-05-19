var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        var tree;
        var treee;
        var buildings = [];
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious lightblue;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,canvasHeight,'lightblue');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("img/Wallogoo.jpg");
                moon.x = -100;
                moon.y = 0;
                moon.scaleX = 1.5;
                moon.scaleY = 1.5;
                background.addChild(moon);

            
            for (var i = 0; i < 100; i++){
                var circle = draw.bitmap('img/Wallogooo.png');
                circle.scaleX = .125;
                circle.scaleY = .125;
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);

            }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                var buildingHeight = (Math.random() * 100) + 200;
                var building = draw.bitmap('img/iless.png');
                building.scaleX = .5;
                building.scaleY = .5;
                building.x = canvasWidth / 5 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);   
                
              } 
            
            tree = draw.bitmap("img/Untitled-2.png");
            tree.x = 0;
            tree.y = 170;
            tree.scaleX = .5;
            tree.scaleY = .5;
            background.addChild(tree);

            treee = draw.bitmap("img/Untitled-2.png");
            treee.x = 0;
            treee.y = 170;
            treee.scaleX = .5;
            treee.scaleY = .5;
            background.addChild(treee);

            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 2;

            if (tree.x < -0) {
              tree.x = canvasWidth;
            }

            treee.x = treee.x + 2;

            if (treee.x > canvasWidth) {
              treee.x = 0;
            }

            // TODO 4: Part 2 - Parallax        
            for (var i = 0; i < buildings.length; i++) {
                var eachElement = buildings[i];
                eachElement.x = eachElement.x - 2;

                if (eachElement.x < -200) {
                    eachElement.x = canvasWidth;
                }
            }
            
            

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
