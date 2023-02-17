(function (window) {
  "use strict";
  window.opspark = window.opspark || {};
  window.opspark.collectable = window.opspark.collectable || {};
  let collectable = window.opspark.collectable;

  let type = {
    db: { assetKey: "db", points: 1 },
    max: { assetKey: "max", points: 1 },
    steve: { assetKey: "steve", points: 5 },
    grace: { assetKey: "grace", points: 1 },
    kennedi: { assetKey: "kennedi", points: 1 },
    halle: { assetKey: "halle", points: 1 },
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
    createCollectable(type.halle, 100, 125, 6, 0.7); //top
    createCollectable(type.halle, 800, 50, 6, 0.7); // Tippytop
    createCollectable(type.halle, 650, 425, 6, 0.7); //bottom
    createCollectable(type.halle, 300, 225, 6, 0.7); //2ndPlatform
    createCollectable(type.halle, 100, 325, 6, 0.7);
    createCollectable(type.halle, 975, 225, 6, 0.7); //First platform
    
    // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
  }
  collectable.init = init;
})(window);
