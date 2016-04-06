Game.Play = function () {};

var shape;
var particles;
var emitter;

var velX;
var spacebar;
var released;

Game.Play.prototype.create = function () {
  velX = 200;
  chooseShape();

  game.physics.startSystem(Phaser.Physics.ARCADE);
  spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
};

Game.Play.prototype.update = function () {
  if (!released) {
    if (shape.body.x < 0) {
      shape.body.velocity.x = velX;
    }

    if (shape.body.x + shape.body.width >= game.width) {
      shape.body.velocity.x = -velX;
    }

    if (spacebar.isDown) {
      particleBurst();
      released = true;
      shape.body.gravity.y = 1000;
    }
  }

  if (!shape.alive) {
    released = false;
    chooseShape();
  }
};

function chooseShape () {
  var i = game.rnd.integerInRange(0, 2);

  shape = game.add.sprite(game.world.centerX, 100, 'shape-' + i);
  shape.anchor.setTo(0.5);
  game.physics.enable(shape);
  shape.body.velocity.x = velX;
  shape.checkWorldBounds = true;
  shape.outOfBoundsKill = true;

  emitter = game.add.emitter(0, 0, 100);
  emitter.gravity = 100;
  emitter.makeParticles('particles-' + i);
}

function particleBurst () {
  emitter.x = shape.body.x + shape.body.width / 2;
  emitter.y = shape.body.y + shape.body.height / 2;

  emitter.start(true, 2000, null, 100);
}
