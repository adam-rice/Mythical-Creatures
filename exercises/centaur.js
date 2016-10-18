function Centaur(name, breed) {
  this.name = name;
  this.breed = breed;
  this.work = 0;
  this.shoot = function () {
    if (this.cranky === true) {
      return 'NO!';
    } else if (this.layingDown === true) {
      return 'NO!';
    } else {
      this.work++;
      if (this.work >= 3) {
        this.cranky = true; }
      return 'Twang!!!';
    }
  };
  this.run = function() {
    if (this.layingDown === true) {
      return 'NO!';
    } else {
      this.work++;
        if (this.work >= 3) {
          this.cranky = true;
        }
      return 'Clop clop clop clop!!!';
    }
  };
  this.cranky = false;
  this.standing = true;
}

Centaur.prototype.sleep = function () {
  if (this.standing === true) {
    return 'NO!';
  } else if (this.layingDown === true) {
    this.cranky = false;
    return 'ZZZZ';
  }
};

Centaur.prototype.layDown = function () {
  this.standing = false;
  this.layingDown = true;
};

Centaur.prototype.standUp = function () {
  this.layingDown = false;
  this.standing = true;
};

Centaur.prototype.drinkPotion = function () {
  if (this.standing === false) {
    return 'Only while I\'m standing!';
  } else if (this.cranky === false) {
    this.cranky = true;
  } else {
    this.cranky = false;
  }
};


module.exports = Centaur;
