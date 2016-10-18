function Hobbit(name, age, disposition) {
  this.name =name;
  this.disposition = 'homebody';
  this.age = 0;
  this.isShort = true;
}

Hobbit.prototype.celebrate_birthday = function () {
    this.age = this.age + 1;
    return this;
};

Hobbit.prototype.child = function () {
  if (this.age <= 32) {
    return true;
  } else return false;
};

Hobbit.prototype.adult = function () {
  if (this.age <= 32) {
    return false;
  } else return true;
};

Hobbit.prototype.old = function () {
  if (this.age >= 101) {
    return true;
  }
};

Hobbit.prototype.hasRing = function () {
  if (this.name === 'Frodo') {
    return true;
  } else return false;
};

module.exports = Hobbit;
