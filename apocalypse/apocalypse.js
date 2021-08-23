//The game
var apocalypse = function(game){


}
var score = 0;
var scoreText;
var finalScore;
apocalypse.prototype = {
	create : function() {

		//adding background, floor, and score
		score = 0;
		var background = this.game.add.sprite(0,0,'bg');
		platform = this.game.add.group();
		platform.enableBody = true;
		var ground = platform.create(0, this.game.world.height - 40, 'ground');
		ground.body.immovable = true;
		scoreText = this.game.add.text(4, 440, 'Score: 0', {fontSize: '32px', fill: '#000'})

		// spawn fireball above canvas and drop it in a random place
		function dropFireball () {
			var fireball = fireballs.create((Math.random()*640), -30, 'fireball');
			fireball.scale.setTo(2, 2);
			fireball.body.gravity.y = 200;
		}

		// sets event timer for game difficulty
		this.fireballDelay = this.game.time.events.loop(1000, dropFireball, this);

		//adding player
		player = this.game.add.sprite(32, this.game.world.height - 180, 'charr');
		this.game.physics.arcade.enable(player);
		player.scale.setTo(2, 2);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;
		player.animations.add('left', [0, 1], 10, true);
		player.animations.add('right', [3, 4], 10, true);

		//adding fireballs
		fireballs = this.game.add.group();
		fireballs.enableBody = true;

		let gyro = null;
		try {
			gyro = new Accelerometer({ referenceFrame: 'device', frequency: 60});
			gyro.addEventListener('error', event => {
				// handle errors
				if (event.error.name === 'NotAllowedError') {
				} else if (event.error.name === 'NotReadableError') {
					console.log('Cannot connect to the sensor.');
				}
			});
			gyro.addEventListener('reading', () => reloadOnShake(gyro));
			gyro.start();
			gyro.startTracking(function(o) {
				player.body.velocity.x += o.gamma * 4;
				player.body.velocity.y += o.beta * 4;
			});
			console.log("gyro added successfully")
		} catch (error) {
			// constructor errors
			if (error.name === 'SecurityError') {
				console.log('Sensor construction was blocked by a feature policy.');
			}else if (error.name === 'ReferenceError') {
				console.log('Sensor is notsupported by UA');
			} else {
				throw error;
			}
		}
	},

	update : function() {

		// scales difficulty based on how long you've been playing
		switch (score) {
			case 5:
				this.fireballDelay.delay = 700;
				break;
			case 20:
				this.fireballDelay.delay = 500;
				break;
			case 50:
				this.fireballDelay.delay = 400;
				break;
			case 75:
				this.fireballDelay.delay = 200;
				break;
			case 125:
				this.fireballDelay.delay = 150;
				break;
			case 175:
				this.fireballDelay.delay = 100;
				break;
			default:
				break;
		}

		//prevents the player from dropping through the platform
		this.game.physics.arcade.collide(player, platform);

		//reset the player's velocity
		player.body.velocity.x = 0;

		//player controls
		cursors = this.game.input.keyboard.createCursorKeys();

		if (cursors.left.isDown)
		{
			player.body.velocity.x = -300;
			player.animations.play('left');
		}
		else if (cursors.right.isDown)
		{
			player.body.velocity.x = 300;
			player.animations.play('right');
		}
		else
		{
			player.animations.stop();
			player.frame = 2;
		}

		//dodge
		this.game.physics.arcade.overlap(platform, fireballs, dodge, null, this);

		function dodge(platform, fireball)
		{
			fireball.kill();

			score += 1;
			scoreText.text = 'Score: ' + score;
		}

		//die
		this.game.physics.arcade.overlap(player, fireballs, die, null, this);

		function die (player, fireball)
		{
			finalScore = score;
			player.kill();
			this.game.state.start("GameOver", true, false, finalScore);
		}
	}
}
