var Game = {};

Game.Boot = function () {};

Game.Boot.prototype.create = function () {
  game.stage.backgroundColor = '#7aab98';
  game.state.start('preloader');
};
