var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf').Werewolf;
var Victim = require('../exercises/werewolf').Victim;

describe('Werewolf', function () {

  it('should be a function', function () {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function () {
    var werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it('should have a name', function () {
    var werewolf = new Werewolf('Jorge');
    assert.equal(werewolf.name, 'Jorge');
  });

  it('should have a location', function () {
    var werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it('should default to human form', function () {
    var werewolf = new Werewolf('Mike','Basement lair');
    assert(werewolf.human);
  });

  it('should refute human form after changing', function() {
    var werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert(!werewolf.human);
  });

  it('should show assert wolf form after change', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert(!werewolf.wolf);
    werewolf.change();
    assert(werewolf.wolf);
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert(!werewolf.wolf);
    werewolf.change();
    werewolf.change();
    assert(!werewolf.wolf);
    assert(werewolf.human);
    werewolf.change();
    assert(werewolf.wolf);
    assert(!werewolf.human);
  });

  it('should start off not hungry', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    assert(!werewolf.hungry);
  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    werewolf.change();
    assert(werewolf.hungry);
  });

  it('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jhun');
    werewolf.hungry = true;
    assert.equal(werewolf.eat(victim));
  });

  it('should not be hungry after changing back to human form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    werewolf.change();
    werewolf.change();
    assert(!werewolf.hungry);
  });

  it('should change back to human form after eating', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jhun');
    werewolf.change();
    werewolf.eat(victim);
    assert(!werewolf.wolf);
  });

  it('should not be able to consume victim in human form', function() {
    var werewolf = new Werewolf('Lousia', 'Gusto');
    var victim = new Victim('Jhun', 'human');
    werewolf.change();
    werewolf.eat(victim);
    assert(werewolf.wolf);
  });
});

describe('Victim', function () {

  it('should be a function', function () {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function () {
    var victim = new Victim();
    assert.isObject(victim);
  });

  it('should have a name', function () {
    var victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it('should have a default form of chicken', function() {
    var victim = new Victim('Jorge');
    assert.equal(victim.form, 'chicken');
  });

  it('should start alive', function () {
    var werewolf = new Victim('TayTay');
    assert(werewolf.alive);
  });

  it('should be dead after being eaten', function () {
    var werewolf = new Werewolf('TayTay');
    var victim = new Victim('TayTay');
    werewolf.change();
    werewolf.eat(victim);
    assert(!victim.alive);
  });
});
