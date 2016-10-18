var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function () {

  it('should be a function', function () {
    assert.isFunction(Dragon);
  });

  it('should instantiate our good friend, Dragon', function () {
    var dragon = new Dragon();
    assert.isObject(dragon);
  });

  it('should have name', function () {
    var dragon = new Dragon('Jeff');
    assert.equal(dragon.name, 'Jeff');
  });

  it('should have a rider', function () {
    var dragon = new Dragon('Saphira', 'Eragon');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should have a color', function () {
    var dragon = new Dragon('Saphira', 'Eragon', 'blue');
    assert.equal(dragon.color, 'blue');
  });

  it('should start off being hungry', function() {
    var dragon = new Dragon('Josh');
    assert(dragon.hungry);
  });

  it('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');
    assert(dragon.hungry);
    dragon.eat();
    assert(dragon.hungry);
    dragon.eat();
    assert(dragon.hungry);
    dragon.eat();
    assert(!dragon.hungry);
  });
});
