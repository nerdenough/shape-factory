var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('boot', Game.Boot);
game.state.add('preloader', Game.Preloader);
game.state.add('play', Game.Play);

game.state.start('boot');
