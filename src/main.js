import Phaser from 'phaser';

// configure the phaser game
const config = {
  width: 800,
  height: 600,
  type: Phaser.AUTO, // default to webgl unless unsupported use canvas
};

// create a phaser game
const game = new Phaser.Game(config);
