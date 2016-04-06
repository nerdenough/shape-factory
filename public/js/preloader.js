Game.Preloader = function () {};

var loadText;

Game.Preloader.prototype.create = function () {
  game.load.onLoadStart.add(loadStart, this);
  game.load.onFileComplete.add(fileComplete, this);
  game.load.onLoadComplete.add(loadComplete, this);

  loadText = game.add.text(32, 32, 'Loading', {fill: '#ffffff'});

  game.load.image('square', 'assets/square.png');
  game.load.image('circle', 'assets/circle.png');
  game.load.image('triangle', 'assets/triangle.png');

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
