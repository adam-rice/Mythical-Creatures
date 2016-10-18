function Pirate (name, job) {
  this.name = name;
  this.job = job || 'Scallywag';
  this.cursed = false;
  this.commitHeinousActCount = 0;
  this.commitHeinousAct = function () {
    this.commitHeinousActCount += 1;
    if (this.commitHeinousActCount >= 3) {
      this.cursed = true;
    }
  };
  this.robShip = function() {
    this.booty = 100;
    return 'YAARRR!';
  };
  this.booty = 0;
}

module.exports = Pirate;
