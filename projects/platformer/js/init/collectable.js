(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 1 },
    max: { assetKey: "max", points: 1 },
    steve: { assetKey: "steve", points: 1 },
    grace: { assetKey: "grace", points: 1 },
    kennedi: { assetKey: "kennedi", points: 1 },
  };

  window.opspark.collectable.type = type;

  /**
   * init: Initialize all collectables.
   *
   * GOAL: Add as many collectables as necessary to make your level challenging.
   *
   * Use the createCollectable() Function to create collectables for the level.
   * See the type Object, above, for the types of collectables and their point values.
   *
   * createCollectable() takes these arguments:
   *
   *      createCollectable(type, x, y, gravity, bounce);
   *
   *      type: The type of the collectable, use the type Object above.
   *      x: The x coordineate for the collectable.
   *      y: The y coordineate for the collectable.
   *      gravity: OPTIONAL The gravitational pull on the collectable.
   *      bounce: OPTIONAL A factor effecting how much the collectable will bounce off platforms, etc.
   */
  function init(game) {
    let createCollectable = collectable.create;

    ////////////////////////////////////////////////////////////////////////
    // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////

    // example:
    createCollectable(type.grace, 100, 170, 6, 0.7); //top
    createCollectable(type.kennedi, 800, 125, 6, 0.7); // Tippytop
    createCollectable(type.db, 650, 500, 6, 0.7); //bottom
    createCollectable(type.steve, 300, 300, 6, 0.7); //2ndPlatform
    createCollectable(type.max, 100, 400, 6, 0.7); //First platform
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
