var Game = {};

Game.Boot = function () {};

Game.Boot.prototype.create = function () {
  game.stage.backgroundColor = '#ffffff';
  game.state.start('preloader');
};
