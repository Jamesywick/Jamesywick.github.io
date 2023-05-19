var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade (x, y){
      var hitZoneSize = 50;
      var damageFromObstacle = 15;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/trolleyblue1.png");
      obstacleImage.scaleX = .25;
      obstacleImage.scaleY = .25;
      sawBladeHitZone.addChild(obstacleImage);
      obstacleImage.x = -50;
      obstacleImage.y = -50;
    }
// Make SawBlades I guess
    //createSawBlade(1500, groundY-50);
    //createSawBlade(900, groundY-30);
    //createSawBlade(1300, groundY-70);

    function spawnEnemy (x, y) {
    var enemy = game.createGameItem("enemy", 75);
    var redSquare = draw.bitmap("img/Microwave1.png");
    redSquare.scaleY = .5;
    redSquare.scaleX = .5;
    redSquare.x = -60;
    redSquare.y = -60;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    enemy.velocityX = -3
    enemy.rotationalVelocity = Math.random() * 10
    game.addGameItem(enemy); 
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-10)
    };
    enemy.onProjectileCollision = function () {
      game.increaseScore(100);
      enemy.fadeOut();
    }
  }
// Make the bad guys
  //spawnEnemy(300, groundY-Math.random()*75);
  //spawnEnemy(360, groundY-Math.random()*75);
  //spawnEnemy(420, groundY-Math.random()*75);
  //spawnEnemy(1080, groundY-Math.random()*75);
  //spawnEnemy(540, groundY-Math.random()*75);
  //spawnEnemy(800, groundY-Math.random()*75);

  function creatReward(x, y){
    var reward = game.createGameItem("reward", 250);
    var greenSquare = draw.bitmap("img/Fridge.png");

    greenSquare.x = -250;
    greenSquare.y = -250;
    reward.addChild(greenSquare);
    reward.scaleY = .25;
    reward.scaleX = .25;
    reward.x = x;
    reward.y = y;
    reward.velocityX = -3
    reward.rotationalVelocity = Math.random() * 10
    game.addGameItem(reward); 
    reward.onPlayerCollision = function () {
      game.changeIntegrity(+10)
    };
    reward.onProjectileCollision = function () {
      game.increaseScore(500);
      reward.fadeOut();
    }
  }
// Make good guys
  //creatReward(700, groundY-Math.random()*75);
  //creatReward(1750, groundY-Math.random()*75);
  //creatReward(800, groundY-Math.random()*75);
  //creatReward(1250, groundY-Math.random()*75);

  function creatMarker(x, y){
    var mark = game.createGameItem("mark", 100);
    var markThing = draw.bitmap("img/tree.png");

    markThing.x = -125;
    markThing.y = -125;
    mark.addChild(markThing);
    mark.scaleY = 1;
    mark.scaleX = 1;
    mark.x = x;
    mark.y = y;
    mark.velocityX = -2
    game.addGameItem(mark); 
    mark.onPlayerCollision = function () {
      startLevel();
    };
    mark.onProjectileCollision = function () {
      mark.fadeOut();
      startLevel();
    }
  }

  //creatMarker(1700, groundY-75);
  //creatMarker(3400, groundY-75);
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;
      for (var i = 0; i < levelObjects.length; i++) {
        if (levelObjects[i].type === "sawblade") {
          createSawBlade(levelObjects[i].x, levelObjects[i].y);
        };
        if (levelObjects[i].type === "enemy") {
          spawnEnemy(levelObjects[i].x, levelObjects[i].y);
        };
        if (levelObjects[i].type === "reward") {
          creatReward(levelObjects[i].x, levelObjects[i].y);
        };
        if (levelObjects[i].type === "marker") {
          creatMarker(levelObjects[i].x, levelObjects[i].y);
        };
      };



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
