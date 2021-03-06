var assert = require('chai').assert;
var Centaur = require('../exercises/centaur');

describe('Centaur', function () {

  it('should be a function', function () {
    assert.isFunction(Centaur);
  });

  it('should have a name', function () {
    var centaur = new Centaur('George');
    assert.equal(centaur.name, 'George');
  });

  it('should have a breed', function () {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.breed, 'Palomino');
  });

  it('should have excellent bow skills', function() {
    var centaur = new Centaur('George');
    assert.equal(centaur.shoot(), 'Twang!!!');
  });

  it('should have a horse sound when it runs', function() {
    var centaur = new Centaur('George');
    assert.equal(centaur.run(), 'Clop clop clop clop!!!');
  });

  it('should not be cranky when first created', function() {
    var centaur = new Centaur('George');
    assert(!centaur.cranky);
  });

  it('should be standing up when first created', function() {
    var centaur = new Centaur('George');
    assert(centaur.standing);
  });

  it('should be cranky after running or shooting a bow three times', function() {
    var centaur = new Centaur('George');
    assert(!centaur.cranky);
    centaur.shoot();
    centaur.run();
    centaur.shoot();
    assert(centaur.cranky);
  });

  it('should not shoot when cranky', function() {
    var centaur = new Centaur('George');
    for (var i = 0; i < 3; i++)  {
      centaur.shoot();
    }
    assert.equal(centaur.shoot(), 'NO!');
  });

  it('should not sleep while standing', function() {
    var centaur = new Centaur('George');
    assert.equal(centaur.sleep(), 'NO!');
  });

  it('after laying down it is not standing', function() {
    var centaur = new Centaur('George');

    assert(centaur.standing);
    assert(!centaur.layingDown);

    centaur.layDown();

    assert(!centaur.standing);
    assert(centaur.layingDown);

    centaur.standUp();

    assert(centaur.standing);
    assert(!centaur.layingDown);
  });

  it('should not run or shoot while laying down', function() {
    var centaur = new Centaur('George');

    centaur.layDown();

    assert.equal(centaur.shoot(), 'NO!');
    assert.equal(centaur.run(), 'NO!');
  });

  it('should be able to sleep when laying down', function() {
    var centaur = new Centaur('George');
    centaur.layDown();
    assert.equal(centaur.sleep(), 'ZZZZ');
  });

  it('should not be cranky after sleeping', function() {
    var centaur = new Centaur('George');

    for (var i = 0; i < 3; i++)  {
      centaur.shoot();
    }

    assert(centaur.cranky);

    centaur.layDown();

    assert.equal(centaur.sleep(), 'ZZZZ');
    assert.equal(centaur.cranky, false);

    centaur.standUp();
    assert.equal(centaur.shoot(),'Twang!!!');
  });

  it('should not be cranky after drinking potion', function() {
    var centaur = new Centaur('George');

    for (var i = 0; i < 3; i++)  {
      centaur.shoot();
    }

    centaur.drinkPotion();

    assert(!centaur.cranky);
  });

  it('should only drink potion while standing', function() {
    var centaur = new Centaur('George');

    centaur.layDown();
    centaur.drinkPotion();

    assert.equal(centaur.drinkPotion(), 'Only while I\'m standing!');
  });

  it('should be cranky if it drinks potion while rested', function() {
    var centaur = new Centaur('George');

    assert(!centaur.cranky);

    centaur.drinkPotion();

    assert(centaur.cranky);
  });
});
