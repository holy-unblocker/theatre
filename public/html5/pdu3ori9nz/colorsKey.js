function colorsKey(x, y, keyNumber, gathered, saved, fadeAlpha, fadingIn, fadingOut) {
	
	
	if(keyNumber == null)
		keyNumber = 1;
	
	if(gathered == null)
		gathered = false;
	
	if(saved == null)
		saved = false;
	
	if(fadeAlpha == null)
		fadeAlpha = 1;
	if(fadingIn == null)
		fadingIn = false;
	if(fadingOut == null)
		fadingOut = false;
	
	this.simpleX = x;
	this.simpleY = y;
	this.x = x * TILE_SIZE + TILE_SIZE / 2;
	this.y = y * TILE_SIZE + TILE_SIZE / 2;
	this.gathered = gathered;
	this.saved = saved;
	this.fadeAlpha = fadeAlpha;
	this.fadingIn = fadingIn;
	this.fadingOut = fadingOut;
	this.keyNumber = keyNumber;
	//this.shineTime = shineTime;
	//this.shineAlpha = shineAlpha;
	//this.shiningIn = shiningIn;
	//this.shiningOut = shiningOut;
}

var colorsKeys = [
	
	[],
	// level 1
	[
	 
	],
	// level 2
	[
	  new colorsKey(17.5, 11.5,4)
	],
	// level 3
	[
	
	  
	],
	//level4
	[
	 	
	],
	// level 5
	[
	 	
	],
	//////////////////////////////////// end
	// level 6
	[],
	// level 7
	[
	 
		 
	],
	// level 8
	[
	 	
	],
	// level 9
	[
	 	
	],
	// level 10
	[
	 
	],
	// level 11
	[
	
	],
	// level 12
	[
	  new colorsKey(29.5, 8.5,3)
	],
	// level 13
	[],
	// level 14
	[
	
	],
	// level 15
	[
	
	],
	// level 16
	[
	 
	],
	// level 17
	[
	  
	],
	// level 18
	[
	  
	],
	// level 19
	[
	
	 
	 
	],
	// level 20
	[
	 
	
	],
	// level 21
	[
	  new colorsKey(5, 7,6)
	],
	// level 22
	[
	],
	// level 23
	[],
	// level 24
	[
	
	],
	// level 25
	[],
	// level 26
	[],
	// level 27
	[],
	// level 28
	[
    
	],
	// level 29
	[
	  
	],
	// level 30
	[
	],
	// level 31
	[ 
	],
	// level 32
	[
	 new colorsKey(17.5, 10.5,2)
	],
	// level 33
	[
	],
	// level 34
	[
	   
	],
	// level 35
	[ 
	],
	// level 36
	[
	
	],
	// level 37
	[
	],
	// level 38
	[ 
	],
	// level 39
	[
	  
	],
	// level 40
	[
	   
	],
	// level 41
	[ 
	  
	],
	// level 42
	[
	  new colorsKey(30, 6,5)
	],
	// level 43
	[],
	// level 44
	[
	],
	// level 45
	[
	],
	// level 46
	[],
	// level 47
	[],
	// level 48
	[],
	// level 49
	[],
	// level 50
	[]
];

function resetColorKeys(l) {
	for (var i = 0; i < colorsKeys[l].length; i++) {
		colorsKeys[l][i].gathered = false;
		colorsKeys[l][i].saved = false;
		colorsKeys[l][i].fadeAlpha = 1;
		colorsKeys[l][i].fadingIn = false;
		colorsKeys[l][i].fadingOut = false;
		//keys[l][i].shineTime = createCoinShineTime();
		//keys[l][i].shineAlpha = 0;
		//keys[l][i].shiningIn = false;
		//keys[l][i].shiningOut = false;
	}
}

function resetColorKeysAll() {
	for (var real = 0; real< 6; real++ ){
	for (var i = 0; i < colorsKeys[real].length; i++) {
		colorsKeys[real][i].gathered = false;
		colorsKeys[real][i].saved = false;
		colorsKeys[real][i].fadeAlpha = 1;
		colorsKeys[real][i].fadingIn = false;
		colorsKeys[real][i].fadingOut = false;
		//keys[l][i].shineTime = createCoinShineTime();
		//keys[l][i].shineAlpha = 0;
		//keys[l][i].shiningIn = false;
		//keys[l][i].shiningOut = false;
	}
	}
}

function updateColorKeys() {
	if (state == "game" && !paused) {
		colorsKeysFade();
		//keysShine();
	}
}

function drawColorKeys() {
	if (state == "game") {
		for (var i = 0; i < colorsKeys[level].length; i++) {
			if (!colorsKeys[level][i].gathered || colorsKeys[level][i].fadingIn || colorsKeys[level][i].fadingOut) {
				/*
				// key fill
				canvas.beginPath();
				canvas.arc(keys[level][i].x, keys[level][i].y, COIN_SIZE / 2, 0, 2 * Math.PI, false);
				canvas.fillStyle = KEY_FILL_COLOR + keys[level][i].fadeAlpha + ")";
				canvas.fill();
				
				// key shine
				canvas.beginPath();
				canvas.arc(keys[level][i].x, keys[level][i].y, COIN_SIZE / 2, 0, 2 * Math.PI, false);
				if (keys[level][i].shineAlpha > keys[level][i].fadeAlpha)
					canvas.fillStyle = COIN_SHINE_COLOR + keys[level][i].fadeAlpha + ")";
				else
					canvas.fillStyle = COIN_SHINE_COLOR + keys[level][i].shineAlpha + ")";
				canvas.fill();
				*/

				canvas.beginPath();
		        canvas.rect(colorsKeys[level][i].x - PLAYER_SIZE / 2 * player.width,colorsKeys[level][i].y - PLAYER_SIZE / 2 * player.height, cwh(PLAYER_SIZE * player.width), cwh(PLAYER_SIZE * player.height));
		        canvas.fillStyle = "rgba(" + PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][0] + ", " + PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][1] + ", " + PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][2] + ", " + 1 + ")";
		        canvas.fill();
			
			
			
				/*
				canvas.beginPath();
				canvas.moveTo(colorsKeys[level][i].x -5 *1.5,     colorsKeys[level][i].y -5*1.5);
				canvas.lineTo(colorsKeys[level][i].x +5 *1.5,     colorsKeys[level][i].y -5*1.5);
				canvas.lineTo(colorsKeys[level][i].x +5 *1.5,     colorsKeys[level][i].y +5*1.5);
				canvas.lineTo(colorsKeys[level][i].x -5 *1.5,     colorsKeys[level][i].y +5*1.5);
				canvas.lineTo(colorsKeys[level][i].x -5 *1.5,     colorsKeys[level][i].y -5*1.5);
				*/
				
				/*canvas.lineTo(keys[level][i].x + 5 - 5 - 9 - 5, keys[level][i].y - 5 + 5 + 9 - 5);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4,     keys[level][i].y - 5 + 5 + 4);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4 - 5, keys[level][i].y - 5 + 5 + 4 - 5);*/
				/*
				canvas.fillStyle = PLAYER_FILL_COLORS[3];
				canvas.fill();
				canvas.lineWidth = 2;
				canvas.strokeStyle = ENEMY_OUTLINE_COLOR_0 + colorsKeys[level][i].fadeAlpha + ")";
				canvas.stroke();
				*/
				/*
				canvas.fillStyle = enemyFillColor;
			canvas.fill();
			canvas.lineWidth = cwh(4);
			canvas.strokeStyle = enemyOutlineColor;
			canvas.stroke();*/
				
				/*canvas.beginPath();
				canvas.arc   (keys[level][i].x - 5,             keys[level][i].y + 5, 6, 0, 2 * Math.PI, false);
				
				/*canvas.moveTo(keys[level][i].x + 5 - 5 + 2,     keys[level][i].y - 5 + 5 - 2);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9 - 5, keys[level][i].y - 5 + 5 + 9 - 5);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 9,     keys[level][i].y - 5 + 5 + 9);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4,     keys[level][i].y - 5 + 5 + 4);
				canvas.lineTo(keys[level][i].x + 5 - 5 - 4 - 5, keys[level][i].y - 5 + 5 + 4 - 5);*/
				/*
				canvas.lineWidth = 4;
				canvas.strokeStyle = ENEMY_OUTLINE_COLOR_0 + keys[level][i].fadeAlpha + ")";
				canvas.stroke();*/
			}
		}
	}
}

function colorsKeysFade() {
	if (state == "game") {
		for (var i = 0; i < colorsKeys[level].length; i++) {
			if (colorsKeys[level][i].fadingOut && colorsKeys[level][i].fadeAlpha > 0) {
				colorsKeys[level][i].fadeAlpha -= COIN_FADE_SPEED;
			}
			else if (colorsKeys[level][i].fadingOut && colorsKeys[level][i].fadeAlpha <= 0) {
				colorsKeys[level][i].fadeAlpha = 0;
				colorsKeys[level][i].fadingOut = false;
				//keys[level][i].shineTime = createCoinShineTime();
			}
			else if (colorsKeys[level][i].fadingIn && colorsKeys[level][i].fadeAlpha < 1) {
				colorsKeys[level][i].fadeAlpha += COIN_FADE_SPEED;
			}
			else if (colorsKeys[level][i].fadingIn && colorsKeys[level][i].fadeAlpha >= 1) {
				colorsKeys[level][i].fadeAlpha = 1;
				colorsKeys[level][i].fadingIn = false;
			}
		}
	}
}

function getColorKeysTotal(lev) {
	if(lev== null)
		lev = level;
	return colorsKeys[lev].length;
}

function unsavedColorKeysAll() {
	/*for (var i = 0; i < colorsKeys[level].length; i++) {
		if (colorsKeys[level][i].gathered && !colorsKeys[level][i].saved) {
			return true;
		}
	}
	return false;*/
	
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	 for (var i = 0; i < colorsKeys[lev].length; i++) {
		if (colorsKeys[lev][i].gathered && !colorsKeys[lev][i].saved) {
			return true;
		}
	 }
	}
	return false;
}

/*
function keysShine() {
	coinShineTimer++;
	if (coinShineTimer > COIN_SHINE_FREQ)
		coinShineTimer = 0;
	
	for (var i = 0; i < keys[level].length; i++) {
		if (!keys[level][i].shiningIn && coinShineTimer == keys[level][i].shineTime) {
			keys[level][i].shiningIn = true;
			keys[level][i].shiningOut = false;
			keys[level][i].shineAlpha = 0;
		} else if (keys[level][i].shiningIn && keys[level][i].shineAlpha < 1) {
			keys[level][i].shineAlpha += COIN_SHINE_FADE_IN_SPEED;
		} else if (keys[level][i].shiningIn && keys[level][i].shineAlpha >= 1) {
			keys[level][i].shiningOut = true;
			keys[level][i].shiningIn = false;
			keys[level][i].shineAlpha = 1;
		} else if (keys[level][i].shiningOut && keys[level][i].shineAlpha > 0) {
			keys[level][i].shineAlpha -= COIN_SHINE_FADE_OUT_SPEED;
		} else if (keys[level][i].shiningOut && keys[level][i].shineAlpha <= 0) {
			keys[level][i].shiningOut = false;
			keys[level][i].shiningIn = false;
			keys[level][i].shineAlpha = 0;
		}
	}
}
*/

function submitSavedColorKeys() {
	colorKeysSave = [-1,-1,-1,-1,-1];
	//colorKeysSave[realLevel-1] = 1;
	t= 0;
	for (var i = 0; i < colorsKeys.length; i++) {
	 if(colorsKeys[i].length>0){
	  if(colorsKeys[i][0].gathered == true){
	   colorKeysSave[t] = 0;
	   t++;
	  }
	 }
	}
	
	localStorage.setItem("whg3_colorKeys", JSON.stringify(colorKeysSave));
}

function loadSavedColorKeys() {
	resetColorKeys(realLevel);
	keysSave = JSON.parse(localStorage["whg3_colorKeys"]);
	var t = 0;
	if (keysSave[0] >= 0) {
		for (var i = 0; i < colorsKeys.length; i++) {
			if(colorsKeys[i].length>0){
			 if(keysSave[t]>=0){	
			  colorsKeys[i][0].gathered = true;
			  colorsKeys[i][0].saved = true;
			  t++;
			 }
			}
		}
	}
}