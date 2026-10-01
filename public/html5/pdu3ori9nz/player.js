var player = {
	x: null,
	y: null,
	prevX: null,
	prevY: null,
	right: null,
	left: null,
	top: null,
	bottom: null,
	
	gateToLeft:false,
	gateToRight:false,
	gateToTop:false,
	gateToBottom:false,
	enterFromGate:false,
	tileRight: null,
	tileLeft: null,
	tileTop: null,
	tileBottom: null,
	carvedUp: false,
	carvedDown: false,
	movedRight: false,
	movedLeft: false,
	movedUp: false,
	movedDown: false,
	dying: false,
	bouncing: false,
	bounceState: null,
	bounceY: null,
	bounceTarget: null,
	justStarted:false,	
	gotoThisLevel: 0,
	width: 1,
	height: 1,
	alpha: 1,
	color: 0,
	prevX: 0,
	prevY: 0,
	
	colorsCollected:[true,false,false,false,false,false,false,false],
	initColorsCollected:[true,false,false,false,false,false,false,false],
	
	levelOpened:[true,false,false,false,false,   true,false,false,false,false,false,false,    true,false,false,false,false,false,false,false,false,   true,false,false,false,false,false,false,false,false,false,false,   true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
	initLevelOpened:[true,false,false,false,false,   true,false,false,false,false,false,false,    true,false,false,false,false,false,false,false,false,   true,false,false,false,false,false,false,false,false,false,false,   true,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
	
	redFill: PLAYER_FILL_COLORS[0][0],
	redOutline: PLAYER_OUTLINE_COLORS[0][0],
	
	greenFill: 0,
	doorPause: false,
	afterDoorPause: false,
	doorPauseCounter: 0,
	
	comeBackLevel: 0,
	greenOutline: 0,
	blueFill: 0,
	blueOutline: 0,
	rainbowUnder: null,
	rainbowOver: null,
	rainbowPercent: 0
};

function updatePlayer() {
	if ((state == "game" || state == "main_menu") && !paused) {
		
		
		if(player.doorPause == false && player.gotoThisLevel == 0 ){
		 getPlayerBounds();
		 playerMove();
		playerHitEnemy();	
		playerHitCheck();
		playerGetCoins();
		playerGetKeys();
		playerGetColorKeys();
		
		playerDie();
		playerRespawn();
		playerBounce();
		}
	    else{
	     playerStop();
         	 
		}
		
		getPrevPlayerCoords();
		checkForGate();
		gotoOtherLevel();
		
	}
	else {
		playerStop();
	}
}
function checkForGate() {
	if((player.doorPause == false)&&(player.comeBackLevel == 0))
	 player.gotoThisLevel = 0;
	else 
	{
		if(player.doorPauseCounter==1)
			player.doorPauseCounter = 2;
	}	
	if(player.tileLeft < 0){
		player.gateToLeft = true;
		player.enterFromGate = true;
		player.gotoThisLevel = gates[level][2];
	}
	if(player.tileRight > TILES_X){
		player.gateToRight = true;
		player.enterFromGate = true;
		player.gotoThisLevel = gates[level][0];
    }
	if(player.tileTop < 1){
		player.gateToTop = true;
		player.enterFromGate = true;
		player.gotoThisLevel = gates[level][3];
	}
	if(player.tileBottom > (TILES_Y-2)){
		player.gateToBottom = true;
		player.enterFromGate = true;
	    player.gotoThisLevel = gates[level][1];
	}
	
}
function gotoOtherLevel(){
	if(player.gotoThisLevel!=0){
		if(player.doorPause == false) 
			player.comeBackLevel = 0;
		
		level = player.gotoThisLevel;
		//player.load
		player.levelOpened[level-1]= true;
		localStorage.setItem("whg3_opened", player.levelOpened);
		player.gotoThisLevel = 0;
		//player.doorPause = false;
		//curCheck = 0;
        //resetEnemies(i + 1);
	    initIntermission();	
	}
}
function getPlayerBounds() {
	if (state == "game" || state == "main_menu") {
		player.right = player.x + PLAYER_SIZE / 2;
		player.left = player.x - PLAYER_SIZE / 2;
		player.top = player.y - PLAYER_SIZE;
		player.bottom = player.y;
		
		player.tileRight  = Math.floor((player.right  + WALL_BORDER_LEFT)   / TILE_SIZE);
		player.tileLeft   = Math.floor((player.left   - WALL_BORDER_RIGHT)  / TILE_SIZE);
		player.tileTop    = Math.floor((player.top    - WALL_BORDER_BOTTOM) / TILE_SIZE);
		player.tileBottom = Math.floor((player.bottom + WALL_BORDER_TOP)    / TILE_SIZE);
	}
}

function getPrevPlayerCoords() {
	if (state == "game" || state == "main_menu") {
		player.prevX = player.x;
		player.prevY = player.y;
	}
}

function resetPlayer() {
	if (!justLoaded) {
		//curCheck = 0;
		//curCheckLevel = level;
	}
}
function playerStop() {
	    player.carvedUp = false;
		player.carvedDown = false;
		player.movedRight = false;
		player.movedLeft = false;
		player.movedLeft = false;
		player.movedUp = false;
		player.movedDown = false;
		keyRight = false;
            keyLeft = false;
            keyUp = false;
            keyDown = false;
}
function playerMove() {
	if ((state == "game" || state == "main_menu") && !player.dying && (!player.bouncing || player.bounceState >= 4)) {
		var distance = 0;
		player.carvedUp = false;
		player.carvedDown = false;
		player.movedRight = false;
		player.movedLeft = false;
		player.movedLeft = false;
		player.movedUp = false;
		player.movedDown = false;

		if (!mobile || hideKeys) {
            keyRight = (keydown.right || keydown.d);
            keyLeft = (keydown.left || keydown.a);
            keyUp = (keydown.up || keydown.w);
            keyDown = (keydown.down || keydown.s);
        }

		if (keydown.right || keydown.d || keydown.left || keydown.a || keydown.up || keydown.w || keydown.down || keydown.s) {
			hideKeys = true;
		}

		// right
		if (keyRight) {
			distance = PLAYER_SPEED;
			while (walls[level][player.tileTop][Math.floor((player.right + distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1 ||
				walls[level][player.tileBottom][Math.floor((player.right + distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1) {
				distance--;
			}
			player.x += distance;
			if (distance > 0) {
				player.movedRight = true;
			} else {
				// carve up
				while (distance < PLAYER_SPEED && 
					walls[level][Math.floor((player.bottom - distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.right + PLAYER_SPEED + WALL_BORDER_LEFT) / TILE_SIZE)] == 1 &&
					walls[level][Math.floor((player.bottom - CARVE - distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.right + PLAYER_SPEED + WALL_BORDER_LEFT) / TILE_SIZE)] == 0) {
					distance++;
				}
				if (distance > 0) {
					player.carvedUp = true;
					player.y -= distance;
					if (player.bouncing) {
						player.bounceY -= distance;
						player.bounceTarget -= distance;
					}
				}

				// carve down
				distance = 0;
				while (distance < PLAYER_SPEED && 
					walls[level][Math.floor((player.top + distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.right + PLAYER_SPEED + WALL_BORDER_LEFT) / TILE_SIZE)] == 1 &&
					walls[level][Math.floor((player.top + CARVE + distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.right + PLAYER_SPEED + WALL_BORDER_LEFT) / TILE_SIZE)] == 0) {
					distance++;
				}
				if (distance > 0) {
					player.carvedDown = true;
					player.y += distance;
					if (player.bouncing) {
						player.bounceY += distance;
						player.bounceTarget += distance;
					}
				}
			}
		}

		// left
		else if (keyLeft) {
			distance = PLAYER_SPEED;
			while (walls[level][player.tileTop][Math.floor((player.left - distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1 ||
				walls[level][player.tileBottom][Math.floor((player.left - distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1) {
				distance--;
			}
			player.x -= distance;
			if (distance > 0) {
				player.movedLeft = true;
			} else {
				// carve up
				while (distance < PLAYER_SPEED && 
					walls[level][Math.floor((player.bottom - distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.left - PLAYER_SPEED - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1 &&
					walls[level][Math.floor((player.bottom - CARVE - distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.left - PLAYER_SPEED - WALL_BORDER_RIGHT) / TILE_SIZE)] == 0) {
					distance++;
				}
				if (distance > 0) {
					player.carvedUp = true;
					player.y -= distance;
					if (player.bouncing) {
						player.bounceY -= distance;
						player.bounceTarget -= distance;
					}
				}

				// carve down
				distance = 0;
				while (distance < PLAYER_SPEED && 
					walls[level][Math.floor((player.top + distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.left - PLAYER_SPEED - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1 &&
					walls[level][Math.floor((player.top + CARVE + distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.left - PLAYER_SPEED - WALL_BORDER_RIGHT) / TILE_SIZE)] == 0) {
					distance++;
				}
				if (distance > 0) {
					player.carvedDown = true;
					player.y += distance;
					if (player.bouncing) {
						player.bounceY += distance;
						player.bounceTarget += distance;
					}
				}
			}
		}

		// up
		if (keyUp) {
			distance = PLAYER_SPEED;
			while (walls[level][Math.floor((player.top - distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][player.tileRight] == 1 ||
				walls[level][Math.floor((player.top - distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][player.tileLeft]  == 1) {
				distance--;
			}
			if (!player.carvedUp) {
				player.movedUp = true;
				player.y -= distance;
				if (player.bouncing) {
					player.bounceY -= distance;
					player.bounceTarget -= distance;
				}
			}
			if (distance == 0) {
				// carve right
				if (!player.movedRight && !player.movedLeft) {
					distance = 0;
					while (distance < PLAYER_SPEED && 
						walls[level][Math.floor((player.top - PLAYER_SPEED - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.left + distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1 &&
						walls[level][Math.floor((player.top - PLAYER_SPEED - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.left + CARVE + distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 0) {
						distance++;
					}
					player.x += distance;
				}
				
				// carve left
				if (!player.movedRight && !player.movedLeft) {
					distance = 0;
					while (distance < PLAYER_SPEED && 
						walls[level][Math.floor((player.top - PLAYER_SPEED - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.right - distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1 &&
						walls[level][Math.floor((player.top - PLAYER_SPEED - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.right - CARVE - distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 0) {
						distance++;
					}
					player.x -= distance;
				}
			}
		}

		// down
		else if (keyDown) {
			distance = PLAYER_SPEED;
			while (walls[level][Math.floor((player.bottom + distance + WALL_BORDER_TOP) / TILE_SIZE)][player.tileRight] == 1 ||
				walls[level][Math.floor((player.bottom + distance + WALL_BORDER_TOP) / TILE_SIZE)][player.tileLeft]  == 1) {
				distance--;
			}
			if (!player.carvedDown) {
				player.movedDown = true;
				player.y += distance;
				if (player.bouncing) {
					player.bounceY += distance;
					player.bounceTarget += distance;
				}
			}
			if (distance == 0) {
				// carve right
				if (!player.movedRight && !player.movedLeft) {
					distance = 0;
					while (distance < PLAYER_SPEED && 
						walls[level][Math.floor((player.bottom + PLAYER_SPEED + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.left + distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1 &&
						walls[level][Math.floor((player.bottom + PLAYER_SPEED + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.left + CARVE + distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 0) {
						distance++;
					}
					player.x += distance;
				}
				
				// carve left
				if (!player.movedRight && !player.movedLeft) {
					distance = 0;
					while (distance < PLAYER_SPEED && 
						walls[level][Math.floor((player.bottom + PLAYER_SPEED + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.right - distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1 &&
						walls[level][Math.floor((player.bottom + PLAYER_SPEED + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.right - CARVE - distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 0) {
						distance++;
					}
					player.x -= distance;
				}
			}
		}

		// fix carving cancel move bug - up
		if (player.movedUp && player.carvedDown) {
			player.y -= PLAYER_SPEED;
			if (player.bouncing) {
				player.bounceY -= PLAYER_SPEED;
				player.bounceTarget -= PLAYER_SPEED;
			}
		}

		// fix carving cancel move bug - down
		else if (player.movedDown && player.carvedUp) {
			player.y += PLAYER_SPEED;
			if (player.bouncing) {
				player.bounceY += PLAYER_SPEED;
				player.bounceTarget += PLAYER_SPEED;
			}
		}

		// fix corner bug - up/right
		if ((keyRight) && (keyUp)) {
			if (walls[level][Math.floor((player.top - distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.right + distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1) {
				if (player.prevX == player.x - PLAYER_SPEED && player.prevY == player.y + PLAYER_SPEED) {
					player.x -= PLAYER_SPEED;
				}
			}
		}

		// fix corner bug - up/right
		else if ((keyLeft) && (keyUp)) {
			if (walls[level][Math.floor((player.top - distance - WALL_BORDER_BOTTOM) / TILE_SIZE)][Math.floor((player.left - distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1) {
				if (player.prevX == player.x + PLAYER_SPEED && player.prevY == player.y + PLAYER_SPEED) {
					player.x += PLAYER_SPEED;
				}
			}
		}

		// fix corner bug - down/right
		else if ((keyRight) && (keyDown)) {
			if (walls[level][Math.floor((player.bottom + distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.right + distance + WALL_BORDER_LEFT) / TILE_SIZE)] == 1) {
				if (player.prevX == player.x - PLAYER_SPEED && player.prevY == player.y - PLAYER_SPEED) {
					player.x -= PLAYER_SPEED;
				}
			}
		}

		// fix corner bug - down/right
		else if ((keyLeft) && (keyDown)) {
			if (walls[level][Math.floor((player.bottom + distance + WALL_BORDER_TOP) / TILE_SIZE)][Math.floor((player.left - distance - WALL_BORDER_RIGHT) / TILE_SIZE)] == 1) {
				if (player.prevX == player.x + PLAYER_SPEED && player.prevY == player.y - PLAYER_SPEED) {
					player.x += PLAYER_SPEED;
				}
			}
		}
	}
}

function playerHitEnemy() {
	getPlayerBounds();
	if ((state == "game" || state == "main_menu") && !invincible && !invincible_permanent && !playerFullOnCheck() && !player.dying && (!player.bouncing || player.bounceState >= 4)) {
		for (var i = 0; i < enemies[level].length; i++) {
			if (enemies[level][i].x + ENEMY_SIZE_HIT / 2 > player.left &&
				enemies[level][i].x - ENEMY_SIZE_HIT / 2 < player.right &&
				enemies[level][i].y + ENEMY_SIZE_HIT / 2 > player.top &&
				enemies[level][i].y - ENEMY_SIZE_HIT / 2 < player.bottom) 
			{  
				player.dying = true;
				playSFX(sfx_die);
				break;
			}
		}
	}
}

function playerRespawn() {
	if (state == "game" || state == "main_menu") {
		if (!player.dying && player.alpha < 1 && !finishLevelTimer > 0) {
			player.alpha += RESPAWN_FADE_SPEED;
			if(player.alpha>1){
				player.alpha =1;
			}
		} else if (!player.dying && player.alpha >= 1) {
			player.alpha = 1;
		}
	}
}

function playerDie() {
	if ((state == "game" || state == "main_menu") && player.dying) {
		if (player.alpha > 0) {
			
			player.alpha -= DIE_FADE_SPEED;
			if(player.alpha<0){
				player.alpha = 0;
			}
		}
		else
		{
			deaths++;
			level = curCheckLevel;
			localStorage.setItem("whg3_deaths", deaths);
			localStorage.setItem("whg3_gameTimer", gameTimer);
			player.alpha = 0;
			player.dying = false;
			checkFlashAlpha = 1;
			playerAtCheck(false, true);
			
			if (bouncingEnabled)
				playSFX(sfx_bounce1);

			// reset unsaved coins
			 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		      lev = levelsNumbers[realLevel][t];
		 
			for (var j = 0; j < getCoinsTotal(lev); j++) {
				if (coins[lev][j].gathered && !coins[lev][j].saved) {
					coins[lev][j].gathered = false;
					coins[lev][j].fadingIn = true;
					coins[lev][j].fadingOut = false;
				}
			  }
			 }
			for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		      lev = levelsNumbers[realLevel][t];
			for (var j = 0; j < getKeysTotal(lev); j++) {
				if (keys[lev][j].gathered && !keys[lev][j].saved) {
					keys[lev][j].gathered = false;
					keys[lev][j].fadingIn = true;
					keys[lev][j].fadingOut = false;
					
					/*getDoorByNumber(lev,keys[lev][j].keyNumber,true)
					
					doors[lev][j].opened = false;
					doors[lev][j].closing = true;
					doors[lev][j].opening = false;*/
				}
			}
			}
			
			for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		      lev = levelsNumbers[realLevel][t];
			for (var j = 0; j < getDoorsTotal(lev); j++) {
				if (doors[lev][j].opened && !doors[lev][j].saved) {
					doors[lev][j].opened = false;
					doors[lev][j].openening = false;
					doors[lev][j].closing = true;
					
					/*getDoorByNumber(lev,keys[lev][j].keyNumber,true)
					
					doors[lev][j].opened = false;
					doors[lev][j].closing = true;
					doors[lev][j].opening = false;*/
				}
			}
			}
			
			for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		      lev = levelsNumbers[realLevel][t];
			  
			 for (var j = 0; j < getColorKeysTotal(lev); j++) {
				if (colorsKeys[lev][j].gathered && !colorsKeys[lev][j].saved) {
					colorsKeys[lev][j].gathered = false;
					colorsKeys[lev][j].fadingIn = true;
					colorsKeys[lev][j].fadingOut = false;
					player.color = 0;
					changeColor();
					
					/*doors[level][j].opened = false;
					doors[level][j].closing = true;
					doors[level][j].opening = false;*/
				}
			 }
			}
		}
	}
}

function playerHitCheck() {
	if (state == "game" || state == "main_menu") {
		for (var i = 0; i < checkpoints[level].length; i++) {
			if ((curCheckLevel != level) || curCheck != i || unsavedCoinsAll() || unsavedKeysAll() || unsavedColorKeysAll()) {
				if ((player.right > checkpoints[level][i][0] * TILE_SIZE && player.left < (checkpoints[level][i][0] + checkpoints[level][i][2]) * TILE_SIZE) &&
					(player.bottom > checkpoints[level][i][1] * TILE_SIZE && (player.top < (checkpoints[level][i][1] + checkpoints[level][i][3]) * TILE_SIZE))) {
					
					var justWonLevel = false;
						
					// set new checkpoints
					curCheck = i;
					curCheckLevel = level;
					checkFlashAlpha = 1;
                    //doors[0][0].inited = true;
					// save coin progress
					var gotCoinOnThisCheck = false;
				 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		           lev = levelsNumbers[realLevel][t];
					for (var j = 0; j < getCoinsTotal(lev); j++) {
						if (coins[lev][j].gathered && !coins[lev][j].saved) {
							coins[lev][j].saved = true;
							/*if (coinFullOnCheck(j, i))
								gotCoinOnThisCheck = true;*/
						}
					}
				 
					// save key progress
					var gotKeyOnThisCheck = false;
					for (var j = 0; j < keys[lev].length; j++) {
						
						if (keys[lev][j].gathered && !keys[lev][j].saved) {
							keys[lev][j].saved = true;
							//getDoorByNumber(lev,keys[lev][j].keyNumber,true);//doors[lev][j].saved = true;
							/*if (keyFullOnCheck(j, i))
								gotKeyOnThisCheck = true;*/
						}
					}
					var gotDoorOnThisCheck = false;
					for (var j = 0; j < doors[lev].length; j++) {
						
						if (doors[lev][j].opened && !doors[lev][j].saved) {
							doors[lev][j].saved = true;
							//getDoorByNumber(lev,keys[lev][j].keyNumber,true);//doors[lev][j].saved = true;
							/*if (keyFullOnCheck(j, i))
								gotKeyOnThisCheck = true;*/
						}
					}
					var gotColorKeyOnThisCheck = false;
					for (var j = 0; j < colorsKeys[lev].length; j++) {
						if (colorsKeys[lev][j].gathered && !colorsKeys[lev][j].saved) {
							colorsKeys[lev][j].saved = true;
							//doors[level][j].saved = true;
							/*if (keyColorFullOnCheck(j, i))
								gotColorKeyOnThisCheck = true;*/
						}
					}
				 }
					// finish level
					if (checkpoints[level][i][4] && ((getCoinsCollectedAll() == getCoinsTotalAll())|| (level ==0 && invincible == false))) {
						invincible = true;
						finishLevelTimer = FINISH_LEVEL_TIMER_TOT;
						justWonLevel = true;
						//playSFX(sfx_win);
					} /*else if (!gotCoinOnThisCheck && !gotKeyOnThisCheck) {
						//playSFX(sfx_checkpoint);
					}*/
					
					// save
					if(level!=0){
					 if (!justWonLevel) {
						localStorage.setItem("whg3_curCheck", curCheck);
						localStorage.setItem("whg3_gameTimer", gameTimer);
						localStorage.setItem("whg3_level", level);
						localStorage.setItem("whg3_realLevel", realLevel);
						
						submitSavedCoins();
						submitSavedKeys();
						submitSavedColorKeys();
						submitSavedDoors();
						doors[0][0].inited = true;
						doors[lev][i].curW = 0;
						//doors[lev][i].opening = false;
						doors[lev][i].opened = true;
		
						
					} else {
						if (level < TOTAL_LEVELS)
							localStorage.setItem("whg3_level", startLevels[realLevel]);
						    localStorage.setItem("whg3_realLevel", realLevel+1);
						localStorage.setItem("whg3_curCheck", 0);
						localStorage.setItem("whg3_coins", "[-99]");
						localStorage.setItem("whg3_keys", "[-99]");
						localStorage.setItem("whg3_doors", "[-99]");
						localStorage.setItem("whg3_colorKeys", "[-99]");
						
						localStorage.setItem("whg3_gameTimer", gameTimer);
					 }
					}
					break;
				}
			}
		}
	}
}

function getRealLevel(lev) {
	for (var i =0; i< levelsNumbers.length;i++ ){
	 for (var n = 0; n< levelsNumbers[i].length;n++ ){
	  
	  if (levelsNumbers[i][n]==lev){
		realLevel = i;   
	  }
		
	 }
	}
	return realLevel;
	
}

function playerFullOnCheck() {
	if (state == "game"|| state == "main_menu") {
		for (var i = 0; i < checkpoints[level].length; i++) {
			if (player.right < ((checkpoints[level][i][0] + checkpoints[level][i][2]) * TILE_SIZE) && player.left > (checkpoints[level][i][0] * TILE_SIZE) &&
				player.bottom < ((checkpoints[level][i][1] + checkpoints[level][i][3]) * TILE_SIZE) && player.top > (checkpoints[level][i][1] * TILE_SIZE)) {
				return true;
			}
		}
		return false;
	}
}

function coinFullOnCheck(coinNum, checkNum) {
	if (state == "game" || state == "main_menu") {
		if (coins[level][coinNum].x + COIN_SIZE / 2 < ((checkpoints[level][checkNum][0] + checkpoints[level][checkNum][2]) * TILE_SIZE) && 
			coins[level][coinNum].x - COIN_SIZE / 2 > (checkpoints[level][checkNum][0] * TILE_SIZE) &&
			coins[level][coinNum].y + COIN_SIZE / 2 < ((checkpoints[level][checkNum][1] + checkpoints[level][checkNum][3]) * TILE_SIZE) &&
			coins[level][coinNum].y - COIN_SIZE / 2 > (checkpoints[level][checkNum][1] * TILE_SIZE)) {
			return true;
		}
		return false;
	}
}
function keyFullOnCheck(keyNum, checkNum) {
	if (state == "game" || state == "main_menu") {
		if (keys[level][keyNum].x + KEY_SIZE / 2 < ((checkpoints[level][checkNum][0] + checkpoints[level][checkNum][2]) * TILE_SIZE) && 
			keys[level][keyNum].x - KEY_SIZE / 2 > (checkpoints[level][checkNum][0] * TILE_SIZE) &&
			keys[level][keyNum].y + KEY_SIZE / 2 < ((checkpoints[level][checkNum][1] + checkpoints[level][checkNum][3]) * TILE_SIZE) &&
			keys[level][keyNum].y - KEY_SIZE / 2 > (checkpoints[level][checkNum][1] * TILE_SIZE)) {
			return true;
		}
		return false;
	}
}
function colorKeyFullOnCheck(keyNum, checkNum) {
	if (state == "game" || state == "main_menu") {
		if (colorsKeys[level][keyNum].x + KEY_SIZE / 2 < ((checkpoints[level][checkNum][0] + checkpoints[level][checkNum][2]) * TILE_SIZE) && 
			colorsKeys[level][keyNum].x - KEY_SIZE / 2 > (checkpoints[level][checkNum][0] * TILE_SIZE) &&
			colorsKeys[level][keyNum].y + KEY_SIZE / 2 < ((checkpoints[level][checkNum][1] + checkpoints[level][checkNum][3]) * TILE_SIZE) &&
			colorsKeys[level][keyNum].y - KEY_SIZE / 2 > (checkpoints[level][checkNum][1] * TILE_SIZE)) {
			return true;
		}
		return false;
	}
}
function winLevel() {
	// win level
    if ((state == "game" || state == "main_menu") && invincible && finishLevelTimer > 0) {
		finishLevelTimer--;
		if (player.alpha > 0) {
			player.alpha -= WIN_LEVEL_FADE_SPEED;
			if (player.alpha < 0) {
			 player.alpha = 0;
		    }
			
			
		} else if (player.alpha < 0) {
			player.alpha = 0;
		}
        if (finishLevelTimer <= 0) {
			if(level!=0){
	        if (realLevel < 5) {
				curCheck = 0;
				curCheckLevel = 1;
	            //level++;
				level = levelsNumbers[realLevel+1][0];
				realLevel++;
				level = startLevels[realLevel-1];
				
	            coinsSave = [-99];
				keysSave = [-99];
				keysColor = [-99];
				doorsSave = [-99];
		        localStorage.setItem("whg3_gameTimer", gameTimer);
		        //localStorage.setItem("whg3_level", realLevel);
				
				localStorage.setItem("whg3_level", startLevels[realLevel-1]);
			    localStorage.setItem("whg3_realLevel", realLevel);
				curCheckLevel = level;
		        localStorage.setItem("whg3_deaths", deaths);
		        localStorage.setItem("whg3_curCheck", curCheck);
				localStorage.setItem("whg3_coins", "[-99]");
				localStorage.setItem("whg3_keys", "[-99]");
				localStorage.setItem("whg3_doors", "[-99]");
				
	            state = "intermission";
	            if(intermissionsPauses[realLevel]==true) 
		           intermissionTimer = FPS*2;
                else 
	               intermissionTimer = 0;
	            playSFX(sfx_intermission);
        	} else {
	        	state = "finish";
        		initFinish();
	        }
		 }
		 else {
			   if(checkpoints[level][curCheck][5] == "left" )
				   newGameButton();
			   else 
				   continueButton();
		 }
        }
    }
}

function playerGetCoins() {
	if ((state == "game"|| state == "main_menu") && !player.dying && (!player.bouncing || player.bounceState >= 4)) {
		for (var i = 0; i < coins[level].length; i++) {
			if (!coins[level][i].gathered &&
				coins[level][i].x + COIN_SIZE / 2 > player.left &&
				coins[level][i].x - COIN_SIZE / 2 < player.right &&
				coins[level][i].y + COIN_SIZE / 2 > player.top &&
				coins[level][i].y - COIN_SIZE / 2 < player.bottom) 
			 {  
				coins[level][i].gathered = true;
				coins[level][i].fadingOut = true;
				coins[level][i].fadingIn = false;
				playSFX(sfx_coin);
				getCoinsCollected();
				
				if(getCoinsCollectedAll() == getCoinsTotalAll()){
	    
    	         getDoorByNumber(level);
				
				 detectDoorsInWalls();
				
				 playSFX(sfx_door);  
	           }
             }
			}
		}
	}
	
function playerGetKeys() {
	if ((state == "game" || state == "main_menu") && !player.dying && (!player.bouncing || player.bounceState >= 4)) {
		for (var i = 0; i < keys[level].length; i++) {
			if (!keys[level][i].gathered &&
				keys[level][i].x + KEY_SIZE / 2 > player.left &&
				keys[level][i].x - KEY_SIZE / 2 < player.right &&
				keys[level][i].y + KEY_SIZE / 2 > player.top &&
				keys[level][i].y - KEY_SIZE / 2 < player.bottom) 
			{  
				keys[level][i].gathered = true;
				keys[level][i].fadingOut = true;
				keys[level][i].fadingIn = false;
				
				/*doors[level][i].opened = true;
				doors[level][i].opening = true;
				doors[level][i].closing = false;
				*/
				getDoorByNumber(level,keys[level][i].keyNumber);
				
				detectDoorsInWalls();
				
				playSFX(sfx_door);
			}
		}
	}
}
function addCollorToCollect(col) {
	switch(col){
		case 4:
		 player.colorsCollected[col] = true;
		default:
		  player.colorsCollected[col] = true;
		
	}
	localStorage.setItem("whg3_colors", player.colorsCollected);
	localStorage.setItem("whg3_color", col);
	player.color = col;
	
	
}
function playerGetColorKeys() {
	if ((state == "game" || state == "main_menu") && !player.dying && (!player.bouncing || player.bounceState >= 4)) {
		for (var i = 0; i < colorsKeys[level].length; i++) {
			if (!colorsKeys[level][i].gathered &&
				colorsKeys[level][i].x + KEY_SIZE / 2 > player.left &&
				colorsKeys[level][i].x - KEY_SIZE / 2 < player.right &&
				colorsKeys[level][i].y + KEY_SIZE / 2 > player.top &&
				colorsKeys[level][i].y - KEY_SIZE / 2 < player.bottom) 
			{  
				colorsKeys[level][i].gathered = true;
				colorsKeys[level][i].fadingOut = true;
				colorsKeys[level][i].fadingIn = false;
				addCollorToCollect(colorsKeys[level][i].keyNumber);
				player.redFill = PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][0];
				player.greenFill = PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][1];
				player.blueFill = PLAYER_FILL_COLORS[colorsKeys[level][i].keyNumber][2];
				player.redOutline = PLAYER_OUTLINE_COLORS[colorsKeys[level][i].keyNumber][0];
				player.greenOutline = PLAYER_OUTLINE_COLORS[colorsKeys[level][i].keyNumber][1];
				player.blueOutline = PLAYER_OUTLINE_COLORS[colorsKeys[level][i].keyNumber][2];
				//localStorage.setItem("whg3_color", player.color);
				
				/*doors[level][i].opened = true;
				doors[level][i].opening = true;
				doors[level][i].closing = false;
				*/
				//getDoorByNumber(level,keys[level][i].keyNumber);
				
				//detectDoorsInWalls();
				
				playSFX(sfx_door);
			}
		}
	}
}
function changeColor() {
	
				
				player.redFill = PLAYER_FILL_COLORS[player.color][0];
				player.greenFill = PLAYER_FILL_COLORS[player.color][1];
				player.blueFill = PLAYER_FILL_COLORS[player.color][2];
				player.redOutline = PLAYER_OUTLINE_COLORS[player.color][0];
				player.greenOutline = PLAYER_OUTLINE_COLORS[player.color][1];
				player.blueOutline = PLAYER_OUTLINE_COLORS[player.color][2];
				
	
}
function drawPlayer() {
	if (state == "game" || state == "main_menu") {
		var drawY = player.y;
		if (player.bouncing)
			drawY = player.bounceY;

		// bounce shadow
		if (player.bouncing) {
			yDif = player.bounceTarget - player.bounceY;
			canvas.beginPath();
			canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * (player.bounceY / player.bounceTarget * player.width)) + os.x,
				cwh((player.bounceTarget - yDif / 10) - PLAYER_SIZE * (player.bounceY / player.bounceTarget * player.height / 1.5)) + os.y,
				cwh(PLAYER_SIZE * (player.bounceY / player.bounceTarget * player.width)),
				cwh(PLAYER_SIZE * (player.bounceY / player.bounceTarget * player.height / 1.5)));
			canvas.fillStyle = SHADOW_COLOR + (player.bounceY / player.bounceTarget * SHADOW_OPACITY * player.alpha) + ")";
			canvas.fill();
		}
		
		// underneath fill (fixes small gap between outline and fill, also outline alpha is too dark without double fill)
		canvas.beginPath();
		canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * player.width) + os.x,
			cwh(drawY - PLAYER_SIZE * player.height) + os.y,
			cwh(PLAYER_SIZE * player.width),
			cwh(PLAYER_SIZE * player.height));
		canvas.fillStyle = "rgba(" + player.redFill + ", " + player.greenFill + ", " + player.blueFill + ", " + player.alpha + ")";
		canvas.fill();
		
		// outline
		canvas.beginPath();
		canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * player.width) + os.x, cwh(drawY - PLAYER_SIZE * player.height) + os.y, cwh(OUTLINE_SIZE * player.width), cwh(PLAYER_SIZE * player.height)); // left
		canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * player.width) + os.x, cwh(drawY - PLAYER_SIZE * player.height) + os.y, cwh(PLAYER_SIZE * player.width), cwh(OUTLINE_SIZE * player.height)); // top
		canvas.rect(cwh(player.x + PLAYER_SIZE / 2 * player.width - OUTLINE_SIZE * player.width) + os.x, cwh(drawY - PLAYER_SIZE * player.height) + os.y, cwh(OUTLINE_SIZE * player.width), cwh(PLAYER_SIZE * player.height)); // right
		canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * player.width) + os.x, cwh(drawY - OUTLINE_SIZE * player.height) + os.y, cwh(PLAYER_SIZE * player.width), cwh(OUTLINE_SIZE * player.height)); // bottom
		canvas.fillStyle = "rgba(" + player.redOutline + ", " + player.greenOutline + ", " + player.blueOutline + ", " + player.alpha + ")";
		canvas.fill();
		
		// fill
		canvas.beginPath();
		canvas.rect(cwh(player.x - PLAYER_SIZE / 2 * player.width + OUTLINE_SIZE * player.width) + os.x,
			cwh(drawY - PLAYER_SIZE * player.height + OUTLINE_SIZE * player.height) + os.y,
			cwh(PLAYER_SIZE * player.width - OUTLINE_SIZE * 2 * player.width),
			cwh(PLAYER_SIZE * player.height - OUTLINE_SIZE * 2 * player.height));
		canvas.fillStyle = "rgba(" + player.redFill + ", " + player.greenFill + ", " + player.blueFill + ", " + player.alpha + ")";
		canvas.fill();
	}
}

function playerAtCheck(fall, bounce) {

	if (fall == null) {
		fall = false;
	} if (bounce == null) {
		bounce = false;
	}

	if ((state == "game" || state == "main_menu") && curCheckLevel !=-1 ) {
		var checkWidth = checkpoints[curCheckLevel][curCheck][2] * TILE_SIZE;
		var checkHeight = checkpoints[curCheckLevel][curCheck][3] * TILE_SIZE;
		player.x = Math.ceil(checkpoints[curCheckLevel][curCheck][0] * TILE_SIZE + checkWidth / 2);
		player.y = Math.ceil(checkpoints[curCheckLevel][curCheck][1] * TILE_SIZE + checkHeight / 2 + PLAYER_SIZE / 2);
		invincible = false;
		
		if (fall)
			player.alpha = 1;
			
		if (bouncingEnabled) {
			if (fall) {
				player.bouncing = true;
				player.bounceState = 0;
				player.bounceTarget = player.y;
				player.bounceY = player.bounceTarget + bounce_0_y_start;
	
				bounce_0_y_speed = bounce_0_y_speed_reset;
				bounce_0_width_speed = bounce_0_width_speed_reset;
				bounce_0_height_speed = bounce_0_height_speed;
	
			} else if (bounce) {
				player.bouncing = true;
				player.bounceState = 4;
				player.bounceY = player.y;
				player.bounceTarget = player.bounceY;
	
				bounce_4_size_speed = bounce_4_size_speed_reset;
			}
		}
	}
}
function playerAfterGate() {
	if(player.gateToRight == true){
	 player.x = player.x - CANVAS_WIDTH;
	 player.y = player.y;
     player.gateToRight = false;	 
	}
	if(player.gateToLeft == true){
	 player.x = player.x + CANVAS_WIDTH;
	 player.y = player.y;
     player.gateToLeft = false;	 
	}
	
	if(player.gateToTop == true){
	 player.x = player.x;
	 player.y = player.y + CANVAS_HEIGHT - TILE_SIZE * 4;
     player.gateToTop = false;	 
	}
	if(player.gateToBottom == true){
	 player.x = player.x;
	 player.y = player.y - (CANVAS_HEIGHT - TILE_SIZE * 4);
     player.gateToBottom = false;	 
	}
	
	
	invincible = false;
}
function playerBounce() {
	if ((state == "game" || state == "main_menu") && player.bouncing && bouncingEnabled) {
		
		// fall
		if (player.bounceState == 0) {
			if (player.bounceY < player.bounceTarget) {
				bounce_0_y_speed += bounce_0_y_accel;
				bounce_0_width_speed += bounce_0_width_accel;
				bounce_0_height_speed += bounce_0_height_accel;
				
				if (bounce_0_y_speed > bounce_0_y_speed_max)
					bounce_0_y_speed = bounce_0_y_speed_max;
				if (bounce_0_width_speed > bounce_0_width_speed_max)
					bounce_0_width_speed = bounce_0_width_speed_max;
				if (bounce_0_height_speed > bounce_0_height_speed_max)
					bounce_0_height_speed = bounce_0_height_speed_max;

				player.bounceY += bounce_0_y_speed;
				player.width -= bounce_0_width_speed;
				player.height += bounce_0_height_speed;

				playerLimitSize();
			}
			if (player.bounceY >= player.bounceTarget) {
				player.bounceY = player.bounceTarget;
				player.width = player_size_min;
				player.height = player_size_max;

				bounce_1_size_speed = bounce_1_size_speed_reset;

				player.bounceState = 1;
				
				playSFX(sfx_bounce0);
			}
		}

		// squish after fall
		else if (player.bounceState == 1) {
			if (player.width < player_size_max)
				player.width += bounce_1_size_speed;
			if (player.height > player_size_min)
				player.height -= bounce_1_size_speed;
			
			bounce_1_size_speed -= bounce_1_size_decel;

			if (bounce_1_size_speed < bounce_1_size_speed_min)
				bounce_1_size_speed = bounce_1_size_speed_min;

			playerLimitSize();

			if (player.width >= player_size_max && player.height <= player_size_min) {
				player.width = player_size_max;
				player.height = player_size_min;
				bounce_2_size_speed = bounce_2_size_speed_reset;
				player.bounceState = 2;
			}
		}
		
		// stretch after squish
		else if (player.bounceState == 2) {
			if (player.width > player_size_min)
				player.width -= bounce_2_size_speed;
			if (player.height < player_size_max)
				player.height += bounce_2_size_speed;
			
			bounce_2_size_speed += bounce_2_size_accel;

			if (bounce_2_size_speed > bounce_2_size_speed_max)
				bounce_2_size_speed = bounce_2_size_speed_max;

			playerLimitSize();

			if (player.width <= player_size_min && player.height >= player_size_max) {
				player.width = player_size_min;
				player.height = player_size_max;

				bounce_3_stage = bounce_3_stage_reset;
				bounce_3_y_speed = bounce_3_y_speed_reset;
				bounce_3_width_speed = bounce_3_width_speed_reset;
				bounce_3_height_speed = bounce_3_height_speed_reset;
				player.bounceState = 3;
			}
		}

		// big bounce
		else if (player.bounceState == 3) {
			// go 1/2 up
			if (bounce_3_stage == 0) {
				bounce_3_y_speed -= bounce_3_y_accel;
				bounce_3_width_speed += bounce_3_width_accel;
				bounce_3_height_speed -= bounce_3_height_accel;

				player.bounceY += bounce_3_y_speed;
				player.width += bounce_3_width_speed;
				player.height += bounce_3_height_speed;

				playerLimitSize();

				if (bounce_3_y_speed < bounce_3_y_speed_max) {
					bounce_3_y_speed = bounce_3_y_speed_max;
					bounce_3_stage = 1;
				}
			}
			// go 2/2 up
			else if (bounce_3_stage == 1) {
				bounce_3_y_speed += bounce_3_y_accel;
				bounce_3_width_speed -= bounce_3_width_accel;
				bounce_3_height_speed += bounce_3_height_accel;

				player.bounceY += bounce_3_y_speed;
				player.width += bounce_3_width_speed;
				player.height += bounce_3_height_speed;

				playerLimitSize();

				if (bounce_3_y_speed >= 0) {
					bounce_3_stage = 2;
				}
			}
			// go down
			else if (bounce_3_stage == 2) {
				bounce_3_y_speed += bounce_3_y_accel;
				bounce_3_width_speed += bounce_3_width_accel / 2;
				bounce_3_height_speed -= bounce_3_height_accel / 2;

				player.bounceY += bounce_3_y_speed;

				if (bounce_3_width_speed < 0)
					player.width += bounce_3_width_speed / 2;
				else
					player.width -= bounce_3_width_speed / 2;
				if (bounce_3_height_speed > 0)
					player.height += bounce_3_height_speed / 2;
				else
					player.height -= bounce_3_height_speed / 2;
					
				playerLimitSize();

				if (player.bounceY >= player.bounceTarget) {
					player.bounceY = player.bounceTarget;
					bounce_4_size_speed = bounce_4_size_speed_reset;

					player.bounceState = 4;
				
					playSFX(sfx_bounce1);
				}
			}
		}
		
		// squish after big bounce
		else if (player.bounceState == 4) {
			if (player.width < player_size_max_less)
				player.width += bounce_4_size_speed;
			if (player.height > player_size_min_less)
				player.height -= bounce_4_size_speed;
			
			bounce_4_size_speed -= bounce_4_size_decel;

			if (bounce_4_size_speed < bounce_4_size_speed_min)
				bounce_4_size_speed = bounce_4_size_speed_min;

			playerLimitSizeLess();

			if (player.width >= player_size_max_less && player.height <= player_size_min_less) {
				player.width = player_size_max_less;
				player.height = player_size_min_less;
				bounce_5_size_speed = bounce_5_size_speed_reset;
				player.bounceState = 5;
			}
		}
		
		// stretch after squish
		else if (player.bounceState == 5) {
			if (player.width > player_size_min_less)
				player.width -= bounce_5_size_speed;
			if (player.height < player_size_max_less)
				player.height += bounce_5_size_speed;
			
			bounce_5_size_speed += bounce_5_size_accel;

			if (bounce_5_size_speed > bounce_5_size_speed_max)
				bounce_5_size_speed = bounce_5_size_speed_max;

			playerLimitSizeLess();

			if (player.width <= player_size_min_less && player.height >= player_size_max_less) {
				player.width = player_size_min_less;
				player.height = player_size_max_less;

				bounce_6_stage = bounce_6_stage_reset;
				bounce_6_y_speed = bounce_6_y_speed_reset;
				bounce_6_width_speed = bounce_6_width_speed_reset;
				bounce_6_height_speed = bounce_6_height_speed_reset;
				player.bounceState = 6;
			}
		}

		// small bounce
		else if (player.bounceState == 6) {
			// go 1/2 up
			if (bounce_6_stage == 0) {
				bounce_6_y_speed -= bounce_6_y_accel;
				bounce_6_width_speed += bounce_6_width_accel;
				bounce_6_height_speed -= bounce_6_height_accel;

				player.bounceY += bounce_6_y_speed;
				player.width += bounce_6_width_speed;
				player.height += bounce_6_height_speed;

				playerLimitSize();

				if (bounce_6_y_speed < bounce_6_y_speed_max) {
					bounce_6_y_speed = bounce_6_y_speed_max;
					bounce_6_stage = 1;
				}
			}
			// go 2/2 up
			else if (bounce_6_stage == 1) {
				bounce_6_y_speed += bounce_6_y_accel;
				bounce_6_width_speed -= bounce_6_width_accel;
				bounce_6_height_speed += bounce_6_height_accel;

				player.bounceY += bounce_6_y_speed;
				player.width += bounce_6_width_speed;
				player.height += bounce_6_height_speed;

				playerLimitSize();

				if (bounce_6_y_speed >= 0) {
					bounce_6_stage = 2;
				}
			}
			// go down
			else if (bounce_6_stage == 2) {
				bounce_6_y_speed += bounce_6_y_accel;
				bounce_6_width_speed -= bounce_6_width_accel;
				bounce_6_height_speed += bounce_6_height_accel;

				player.bounceY += bounce_6_y_speed;
				player.width += bounce_6_width_speed / 4;
				player.height += bounce_6_height_speed / 4;
				playerLimitSizeLess();

				if (player.bounceY >= player.bounceTarget) {
					player.bounceY = player.bounceTarget;
					bounce_7_size_speed = bounce_7_size_speed_reset;

					player.bounceState = 7;
				}
			}
		}

		// squish after big bounce
		else if (player.bounceState == 7) {
			if (player.width < player_size_max_less2)
				player.width += bounce_7_size_speed;
			if (player.height > player_size_min_less2)
				player.height -= bounce_7_size_speed;
			
			bounce_7_size_speed -= bounce_7_size_decel;

			if (bounce_7_size_speed < bounce_7_size_speed_min)
				bounce_7_size_speed = bounce_7_size_speed_min;

			playerLimitSizeLess2();

			if (player.width >= player_size_max_less2 && player.height <= player_size_min_less2) {
				player.width = player_size_max_less2;
				player.height = player_size_min_less2;
				bounce_8_size_speed = bounce_8_size_speed_reset;
				player.bounceState = 8;
			}
		}
		
		// stretch after squish
		else if (player.bounceState == 8) {
			if (player.width > 1)
				player.width -= bounce_8_size_speed;
			if (player.height < 1)
				player.height += bounce_8_size_speed;
			
			bounce_8_size_speed += bounce_8_size_accel;

			if (bounce_8_size_speed > bounce_8_size_speed_max)
				bounce_8_size_speed = bounce_8_size_speed_max;

			/*
			if (player.width < 1)
				player.width = 1;
			if (player.height < 1)
				player.height = 1;
			*/

			if (player.width <= 1 && player.height >= 1) {
				player.width = 1;
				player.height = 1;
				player.bounceState = null;
				player.bouncing = false;
			}
		}
	}
}

// limit functions (for easier bounce animation)
function playerLimitSize() {
	if (player.width < player_size_min)
		player.width = player_size_min;
	if (player.width > player_size_max)
		player.width = player_size_max;
	if (player.height < player_size_min)
		player.height = player_size_min;
	if (player.height > player_size_max)
		player.height = player_size_max;
}

function playerLimitSizeLess() {
	if (player.width < player_size_min_less)
		player.width = player_size_min_less;
	if (player.width > player_size_max_less)
		player.width = player_size_max_less;
	if (player.height < player_size_min_less)
		player.height = player_size_min_less;
	if (player.height > player_size_max_less)
		player.height = player_size_max_less;
}

function playerLimitSizeLess2() {
	if (player.width < player_size_min_less2)
		player.width = player_size_min_less2;
	if (player.width > player_size_max_less2)
		player.width = player_size_max_less2;
	if (player.height < player_size_min_less2)
		player.height = player_size_min_less2;
	if (player.height > player_size_max_less2)
		player.height = player_size_max_less2;
}

function updatePlayerRainbow() {
	if (player.color == PLAYER_FILL_COLORS.length) {
		var redFill_0 = PLAYER_FILL_COLORS[player.rainbowUnder][0];
		var redFill_1 = PLAYER_FILL_COLORS[player.rainbowOver][0];
		var greenFill_0 = PLAYER_FILL_COLORS[player.rainbowUnder][1];
		var greenFill_1 = PLAYER_FILL_COLORS[player.rainbowOver][1];
		var blueFill_0 = PLAYER_FILL_COLORS[player.rainbowUnder][2];
		var blueFill_1 = PLAYER_FILL_COLORS[player.rainbowOver][2];
		var redOutline_0 = PLAYER_OUTLINE_COLORS[player.rainbowUnder][0];
		var redOutline_1 = PLAYER_OUTLINE_COLORS[player.rainbowOver][0];
		var greenOutline_0 = PLAYER_OUTLINE_COLORS[player.rainbowUnder][1];
		var greenOutline_1 = PLAYER_OUTLINE_COLORS[player.rainbowOver][1];
		var blueOutline_0 = PLAYER_OUTLINE_COLORS[player.rainbowUnder][2];
		var blueOutline_1 = PLAYER_OUTLINE_COLORS[player.rainbowOver][2];
		
		var redFillDif      = Math.abs(redFill_1      - redFill_0);
		var redOutlineDif   = Math.abs(redOutline_1   - redOutline_0);
		var greenFillDif    = Math.abs(greenFill_1    - greenFill_0);
		var greenOutlineDif = Math.abs(greenOutline_1 - greenOutline_0);
		var blueFillDif     = Math.abs(blueFill_1     - blueFill_0);
		var blueOutlineDif  = Math.abs(blueOutline_1  - blueOutline_0);
		
		if (player.rainbowPercent < 1) {
			player.rainbowPercent += RAINBOW_SPEED;
			if (player.rainbowPercent > 1)
				player.rainbowPercent = 1;
			
			// red
			if (redFill_0 > redFill_1) {
				player.redFill    = Math.floor(redFill_0    - redFillDif    * player.rainbowPercent);
			} else if (redFill_0 < redFill_1) {
				player.redFill    = Math.floor(redFill_0    + redFillDif    * player.rainbowPercent);
			}
			if (redOutline_0 > redOutline_1) {
				player.redOutline = Math.floor(redOutline_0 - redOutlineDif * player.rainbowPercent);
			} else if (redOutline_0 < redOutline_1) {
				player.redOutline = Math.floor(redOutline_0 + redOutlineDif * player.rainbowPercent);
			}
			
			// green
			if (greenFill_0 > greenFill_1) {
				player.greenFill    = Math.floor(greenFill_0    - greenFillDif    * player.rainbowPercent);
			} else if (greenFill_0 < greenFill_1) {
				player.greenFill    = Math.floor(greenFill_0    + greenFillDif    * player.rainbowPercent);
			}
			if (greenOutline_0 > greenOutline_1) {
				player.greenOutline = Math.floor(greenOutline_0 - greenOutlineDif * player.rainbowPercent);
			} else if (greenOutline_0 < greenOutline_1) {
				player.greenOutline = Math.floor(greenOutline_0 + greenOutlineDif * player.rainbowPercent);
			}
			
			// blue
			if (blueFill_0 > blueFill_1) {
				player.blueFill    = Math.floor(blueFill_0    - blueFillDif    * player.rainbowPercent);
			} else if (blueFill_0 < blueFill_1) {
				player.blueFill    = Math.floor(blueFill_0    + blueFillDif    * player.rainbowPercent);
			}
			if (blueOutline_0 > blueOutline_1) {
				player.blueOutline = Math.floor(blueOutline_0 - blueOutlineDif * player.rainbowPercent);
			} else if (blueOutline_0 < blueOutline_1) {
				player.blueOutline = Math.floor(blueOutline_0 + blueOutlineDif * player.rainbowPercent);
			}
		} else {
			player.rainbowPercent = 0;
			player.redFill      = redFill_1;
			player.redOutline   = redOutline_1;
			player.greenFill    = greenFill_1;
			player.greenOutline = greenOutline_1;
			player.blueFill     = blueFill_1;
			player.blueOutline  = blueOutline_1;
			player.rainbowUnder = player.rainbowOver;
			player.rainbowOver++;
			if (player.rainbowOver == PLAYER_FILL_COLORS.length)
				player.rainbowOver = 0;
		}
	}
}