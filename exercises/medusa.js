function Person(name) {
  this.name = name;
  this.stoned = false;
}

function Medusa(name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function(victim) {
  victim.stoned = true;
    if (this.statues.length === 3) {
      var healedVictim = this.statues[0];
      healedVictim.stoned = false;
      this.statues.splice(0,1);
      return this.statues.push(victim);
    } else {
      return this.statues.push(victim); }
};

module.exports.Medusa = Medusa;
module.exports.Person = Person;
