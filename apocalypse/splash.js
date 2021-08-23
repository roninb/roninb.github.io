var splash = function(game){}

splash.prototype = {
  create : function() {
    var splash = this.game.add.sprite(0,0,'bg');
    var play = this.game.add.button(200,320, 'play', this.apocalypse, this);
  },

  apocalypse : function(){
    this.game.state.start("Apocalypse");
  }
}
