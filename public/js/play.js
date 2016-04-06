Game.Play = function () {};

var controls;

Game.Play.prototype.create = function () {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  controls = {
    left: this.input.keyboard.addKey(Phaser.Keyboard.A),
    right: this.input.keyboard.addKey(Phaser.Keyboard.D),
    spacebar: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  };
};

Game.Play.prototype.update = function () {};
