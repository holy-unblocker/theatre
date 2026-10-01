document.body.appendChild(canvasElement);

window.onload = function(event) {
	init();
};

window.onresize = function(event) {
	measure();
};


function init() {
	muteMusic = false;
    muteSFX = false;
	measure();
	recreateWalls();
	//recreateWalls_stroke();
	
	setInterval(function() {
		update();
		draw();
	}, 1000/FPS);
	
	state = "preloader";
	initPreloader();
}

function update() {
	resetMouse();
	hotkeys();
	runGameTimer();
	if ((state == "game" || state == "main_menu") && playerInited && player!=null) {
		if (!paused) {
			if(player.doorPause == false){
			 updateEnemies();
			 updatePlayer();
			 updateCoins();
			
			 
			 updateColorKeys();
			 updateInstructions();
			 winLevel();
			}
			else 
				playerStop();
			updateDoors();
			updateKeys();
			
			
		}
		updatePlayerRainbow();
	} else if (state == "preloader") {
		updatePreloader();
	} else if (state == "intermission") {
		if (!paused)
			updateIntermission();
	} else if (state == "level_select") {
		updateEnemies();
		updatePlayerRainbow();
	} else if (state == "finish") {
		updateFinish();
	}
}

function draw() {
	canvas.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
	
	if (state == "game" || state == "main_menu") {
		drawWalls_fill();
		drawChecks();
		drawWalls_stroke();
		drawCoins();
		drawKeys();
		drawColorKeys();
		drawDoors();
		drawEnemies();
		if(player.doorPause==false)
		 drawPlayer();
		drawInstructions();
		if (mobile) {
            drawMobileControls();
        }
		if(state == "main_menu")
		 drawMainMenu();
	} else if (state == "preloader") {
		drawPreloader();
	} else if (state == "intermission") {
		if(intermissionTimer !=0)
		 drawIntermission();
	    
	} 
	 else if (state == "main_menu") {
		drawMainMenu();
		true;
	} else if (state == "level_select") {
		drawLevelSelect();
	} else if (state == "finish") {
		drawFinish();
	}
	if (state == "game" || state == "intermission" )
		drawIGMenu();
	if (state == "game" || state == "level_select" || state == "main_menu")
		drawBars();
	if (!mobile) {
        mobileControls();
    }
	drawFullscreenButton();
	drawBorder();

	// debug
	/*canvas.fillStyle = "blue";
	canvas.font = "Bold " + cwh(16) + "px Arial";
canvas.textAlign = "left";
	canvas.fillText("DEBUG: " + mouseX + ", " + mouseY + " / " +
Math.floor(mouseX / TILE_SIZE) + ", " + Math.floor(mouseY / TILE_SIZE), 7, 60 + cwh(BAR_TEXT_FIX)); */
	/*canvas.fillText("DEBUG: " + mouseX + ", " + mouseY + " / " +
		canvasWidth + ", " + canvasHeight, 7, 60 + BAR_TEXT_FIX);
	canvas.fillText(localStorage["whg3_deaths"] + ", " + localStorage["whg3_level"], cwh(7) + os.x, cwh(60 + BAR_TEXT_FIX) + os.y);
	canvas.fillText("DEBUG: " + enemies[23][0].simpleX + ", " + enemies[23][0].simpleY, 7, 60 + cwh(BAR_TEXT_FIX));*/
	
}

function measure() {
	if (mobile) {
        canvasWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        canvasHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;

        canvasElement.width = canvasWidth;
        canvasElement.height = canvasHeight;

        calcOffset();
    }
}

function goFullScreen() {
    if(canvasElement.requestFullScreen)
        canvasElement.requestFullScreen();
    else if(canvasElement.webkitRequestFullScreen)
        canvasElement.webkitRequestFullScreen();
    else if(canvasElement.mozRequestFullScreen)
        canvasElement.mozRequestFullScreen();
    
    FSOn = true;
    measure();
}

function exitFullScreen() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.webkitExitFullscreen)
        document.webkitExitFullscreen();
    else if (document.mozCancelFullScreen)
        document.mozCancelFullScreen();
    
    FSOn = false;
    measure();
}

function drawFullscreenButton() {
	/*
	canvas.fillStyle = "white";
	canvas.font = cwh(30) + "px Arial";
	canvas.textAlign = "center";
	if (FSOn)
		canvas.fillText("EXIT FULLSCREEN", cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT - BAR_HEIGHT / 2 + BAR_TEXT_FIX) + os.y);
	else
		canvas.fillText("GO FULLSCREEN",  cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT - BAR_HEIGHT / 2 + BAR_TEXT_FIX) + os.y);
		
	// fix fullscreen cancelled bug
	if(window.innerWidth == screen.width && window.innerHeight == screen.height) {
		if (!FSOn)
			FSOn = true;
	} else {
		if (FSOn)
			FSOn = false;
	}
	*/
}