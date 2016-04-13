Game.Play = function () {};

var shape;
var baseSquare;
var emitter;
var lives;
var score;
var labelLives;
var labelScore;
var safe;

var velX;
var spacebar;
var released;

Game.Play.prototype.create = function () {
  velX = 200;
  safe = false;
  chooseShape();

  baseSquare = game.add.sprite(200, game.world.height, 'base-square');
  baseSquare.id = 0;
  baseSquare.anchor.setTo(1);
  game.physics.arcade.enable(baseSquare);

  game.physics.startSystem(Phaser.Physics.ARCADE);
  spacebar = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  lives = 3;
  score = 0;
  labelScore = game.add.text(20, 20, 'Score: ' + score, {
    font: '30px Arial', fill: '#000000'
  });
  labelLives = game.add.text(game.world.width - 20, 20, 'Lives: ' + lives, {
    font: '30px Arial', fill: '#000000'
  });
  labelLives.anchor.setTo(1, 0);
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
    if (!safe) {
      lives--;
      labelLives.setText('Lives: ' + lives);
    }
    safe = false;
    released = false;
    chooseShape();
  }

  if (lives === 0) {
    gameOver();
  }

  game.physics.arcade.overlap(shape, baseSquare, hitBase, null, this);
};

function hitBase() {
  if (shape.id === baseSquare.id) {
    score++;
    safe = true;
    labelScore.setText('Score: ' + score);
  }
  shape.alive = false;
}

function gameOver() {
  score = 0;
  lives = 3;
  labelScore.setText('Score: ' + score);
  labelLives.setText('Lives: ' + lives);
}

function chooseShape () {
  var i = game.rnd.integerInRange(0, 2);

  shape = game.add.sprite(game.world.centerX, 100, 'shape-' + i);
  shape.anchor.setTo(0.5);
  game.physics.enable(shape);
  shape.body.velocity.x = velX;
  shape.checkWorldBounds = true;
  shape.outOfBoundsKill = true;
  shape.id = i;

  emitter = game.add.emitter(0, 0, 100);
  emitter.gravity = 100;
  emitter.makeParticles('particles-' + i);
}

function particleBurst () {
  emitter.x = shape.body.x + shape.body.width / 2;
  emitter.y = shape.body.y + shape.body.height / 2;

  emitter.start(true, 10000, null, 100);
}
