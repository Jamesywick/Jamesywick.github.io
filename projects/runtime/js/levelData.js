var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Microwave Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "enemy", x: 400, y: groundY -75 },
          { type: "enemy", x: 600, y: groundY -60 },
          { type: "enemy", x: 800, y: groundY -45 },
          { type: "enemy", x: 1000, y: groundY -30 },
          { type: "enemy", x: 1200, y: groundY -15 },
          { type: "marker", x: 1700, y: groundY },
        ],
      },
      {
        name: "Cart Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 900, y: groundY - 100},
          { type: "sawblade", x: 900, y: groundY - 75 },
          { type: "sawblade", x: 900, y: groundY - 50},
          { type: "sawblade", x: 900, y: groundY - 25 },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 500, y: groundY - 100},
          { type: "sawblade", x: 500, y: groundY - 75 },
          { type: "sawblade", x: 500, y: groundY - 50},
          { type: "sawblade", x: 500, y: groundY - 25 },
          { type: "sawblade", x: 500, y: groundY },
          { type: "marker", x: 2000, y: groundY},
        ],
      },
      {
        name: "Walmart",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "reward", x: 2000, y: groundY + Math.random()*-10 },
          { type: "reward", x: 2100, y: groundY + Math.random()*-10 },
          { type: "reward", x: 2200, y: groundY + Math.random()*-10 },
          { type: "reward", x: 2300, y: groundY + Math.random()*-10 },
          { type: "reward", x: 2400, y: groundY + Math.random()*-10 },
          { type: "marker", x: 3000, y: groundY},
        ],
      },
      {
        name: "Walmart2",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 500, y: groundY },
          { type: "sawblade", x: 550, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 650, y: groundY },
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 750, y: groundY },
          { type: "sawblade", x: 800, y: groundY },
          { type: "sawblade", x: 850, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 950, y: groundY },

        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
