function Victim(name, form) {
  this.name= name;
  this.alive = true;
  this.form = form || 'chicken';
}

function Werewolf(name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.change = function () {
    if (this.human === true) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.wolf = false;
      this.human = true;
      this.hungry = false;
    }
  };
  this.hungry = false;
}

Werewolf.prototype.eat = function (victim) {
  if (victim.form === 'human') {
        victim.alive = true;
        this.wolf = true;
        this.human = false;
        this.hungry = true;
    } else {
        victim.alive = false;
        this.wolf = false;
        this.human = true;
        this.hungry = false;
    }
};

module.exports.Werewolf = Werewolf;
module.exports.Victim = Victim;
