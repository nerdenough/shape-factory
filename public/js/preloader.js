Game.Preloader = function () {};

var loadText;

Game.Preloader.prototype.create = function () {
  game.load.onLoadStart.add(loadStart, this);
  game.load.onFileComplete.add(fileComplete, this);
  game.load.onLoadComplete.add(loadComplete, this);

  loadText = game.add.text(32, 32, 'Loading', {fill: '#ffffff'});

  game.load.image('shape-0', 'assets/square.png');
  game.load.image('shape-1', 'assets/circle.png');
  game.load.image('shape-2', 'assets/triangle.png');

  game.load.image('base-square', 'assets/base-square.png');

  game.load.image('particles-0', 'assets/particles-square.png');
  game.load.image('particles-1', 'assets/particles-circle.png');
  game.load.image('particles-2', 'assets/particles-triangle.png');

  game.load.start();
};

function loadStart () {
  loadText.setText('Loading: 0%');
}

function fileComplete (progress) {
  loadText.setText('Loading: ' + progress + '%');
}

function loadComplete () {
  loadText.setText('Loading: Done!');
  game.state.start('play');
}
