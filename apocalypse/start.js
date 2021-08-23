var start = function(game){}

start.prototype = {
  preload : function() {
    this.load.image('bg', 'apocalypse/img/bg.png');
    this.load.image('ground', 'apocalypse/img/ground.png');
    this.load.image('fireball', 'apocalypse/img/fireball.png');
    this.load.image('play', 'apocalypse/img/play.png');
    this.load.image('gameover', 'apocalypse/img/gameover.png');
    this.load.spritesheet('charr', 'apocalypse/img/charr.png', 30, 30);
  },
  create : function(){
    this.game.state.start("Splash");
  }
}
