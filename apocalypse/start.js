var start = function(game){}

start.prototype = {
  preload : function() {
    this.load.image('bg', 'img/bg.png');
    this.load.image('ground', 'img/ground.png');
    this.load.image('fireball', 'img/fireball.png');
    this.load.image('play', 'img/play.png');
    this.load.image('gameover', 'img/gameover.png');
    this.load.spritesheet('charr', 'img/charr.png', 30, 30);
  },
  create : function(){
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.stage.disableVisibilityChange = true;

    var style = {
      font: "48px Monospace",
      fill: "00ff00",
      align: "center"
    };

    this.game.state.start("Splash");
  }
}
