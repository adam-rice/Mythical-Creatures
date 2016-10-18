function Unicorn(name, color) {
  this.name = name;
  if (color === undefined) {
    this.color = 'white';
  } else {
    this.color = color;
  }
}

Unicorn.prototype.isWhite = function() {
  if (this.color === 'white') {
    return true;
  }
};

Unicorn.prototype.says = function(string) {
  return '**;* ' + string + ' *;**';
};

module.exports = Unicorn;
