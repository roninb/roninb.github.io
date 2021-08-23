var gameOver = function(game){}

gameOver.prototype = {
  create : function(){
    var gameOverTitle =	this.game.add.sprite(0, 0, 'gameover');
		this.game.add.text(215, 270, ('Your score was: ' + finalScore), {fontSize: '32px', fill: '#f00'});
    var play = this.game.add.button(200,320, 'play', this.apocalypse, this);
  },
  apocalypse : function(){
    this.game.state.start("Apocalypse");
  }
}
