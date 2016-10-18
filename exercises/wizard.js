function Wizard(obj={}) {
  this.name = obj.name;
  this.bearded = obj.bearded === undefined ? true : obj.bearded;

  this.incantation = function(string) {
    return string.toUpperCase();
  };
  this.isRested = function () {
    return true;
  };
  this.castCount = 0;
  this.cast = function() {
    this.castCount += 1;
    if (this.castCount < 3) {
      this.isRested = true;
      return 'MAGIC BULLET';
    } else if (this.castCount >= 3) {
      this.isRested = false;
      return 'I SHALL NOT CAST';
    }
  };
}

module.exports = Wizard;
