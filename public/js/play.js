Game.Play = function () {};

var controls;
var shape;

Game.Play.prototype.create = function () {
  game.physics.startSystem(Phaser.Physics.ARCADE);

  chooseShape();

  controls = {
    left: this.input.keyboard.addKey(Phaser.Keyboard.A),
    right: this.input.keyboard.addKey(Phaser.Keyboard.D),
    spacebar: this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)
  };
};

Game.Play.prototype.update = function () {
  if (controls.spacebar.isDown) {
    shape.body.velocity.y = 350;
  }
};

function chooseShape() {
  var i = game.rnd.integerInRange(0, 2);

  shape = game.add.sprite(game.world.centerX, 100, 'shape-' + i);
  shape.anchor.setTo(0.5);

  game.physics.enable(shape);
}
