function door(x, y, w, h, dir,doorNumber, finalDoor, curW, curH, opened, saved, opening, closing) {
	
	if(curW== null)
		curW=1;
	if(curH== null)
		curH=1;
	if(opened== null)
		opened=false;
	if(saved== null)
		saved=false;
	if(opening== null)
		opening=false;
	
	if(closing== null)
		closing=false;
	
	if(doorNumber== null)
		doorNumber = 0;
	
	if(finalDoor== null)
		finalDoor = 0;
	
	this.x = x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.dir = dir;
	this.curW = curW;
	this.curH = curH;
	this.opened = opened;
	this.saved = saved;
	this.opening = opening;
	this.closing = closing;
	this.doorNumber = doorNumber;
	this.inited = false;
	this.finalDoor = finalDoor; 
	this.fromSave = false;
	//this.doorPause = false;
	this.currentDoor = -1;
	
	
	
	
}
var levelsNumbers = [
	[],
	// level 1
	[1,2,3,4,5],
	[6,7,8,9,10,11,12],
	[13,14,15,16,17,18,19,20,21],
	[22,23,24,25,26,27,28,29,30,31,32],
	[33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48]
];

var startLevels = [1,6,13,22,33];



var doors = [
	[
	 new door(27, 11, 2, 1, "right",1)
	],
	// level 1
	[
	  new door(29, 11, 2, 2, "right",1)
	],
	// level 2
	[
	   new door(16, 4, 4, 2, "right",2),
	   new door(16, 18, 4, 2, "right",3),
	   new door(17, 9, 2, 1, "right",4),
	   new door(17, 14, 2, 1, "right",5)
	   
	],
	// level 3
	[
	  new door(22, 10, 2, 4, "right",6,true)
	],
	// level 4
	[

	],
	// level 5
	[],
	// level 6
	[],
	// level 7
	[
	  new door(4, 4, 3, 1, "right",1),
	  new door(4, 19, 3, 1, "right",2),
	  new door(14, 11, 1, 2, "right",3),
	  new door(21, 11, 1, 2, "right",4),
	  
	  
	  
	],
	// level 8
	[
	 /* new door(25, 11, 1, 2, "right"),
	  new door(25, 14, 1, 2, "right"),
	  new door(29, 6, 2, 2, "right"),
	  */
	   new door(22, 17, 2, 2, "right",11,true),
	  
	],
	// level 9
	[],
	// level 10
	[
	  new door(25, 11, 1, 2, "right",7),
	  new door(25, 14, 1, 2, "right",5),
	  new door(29, 6, 2, 2, "right",8),
	],
	// level 11
	[
	 new door(26, 5, 2, 1, "right",6),
	],
	// level 12
	[
	   new door(29, 11, 2, 1, "right",10),
	   new door(8, 14, 1, 2, "right",9),
	   
	],
	// level 13
	[
	   new door(17, 6, 2, 1, "bottom",1),
	   new door(17, 17, 2, 1, "bottom",2),
	   new door(22, 11, 1, 2, "bottom",27,true),
	   
	   
	],
	// level 14
	[
	  new door(2, 3, 1, 3, "bottom",3),
	   new door(32, 11, 2, 2, "bottom",5),
	],
	// level 15
	[
	  new door(3, 3, 3, 1, "bottom",4),
	  new door(3, 20, 3, 1, "bottom",6)
	],
	// level 16
	[
	   new door(31, 19, 2, 1, "bottom",19),
	],
	// level 17
	[ 
	   new door(33, 17, 1, 2, "bottom",9),
	],
	// level 18
	[
	 
	],
	// level 19
	[
	 new door(20, 13, 1, 1, "left",11),
	 new door(19, 13, 1, 1, "left",16),
	 new door(18, 13, 1, 1, "left",18),
	  new door(17, 13, 1, 1, "left",15),
	 new door(16, 13, 1, 1, "left",10),
	 new door(16, 12, 1, 1, "left",13),
	 new door(16, 11, 1, 1, "left",14),
	 new door(16, 10, 1, 1, "left",12),
	 new door(17, 10, 1, 1, "left",17)
	 
	 
	],
	// level 20
	[
	   new door(28, 11, 1, 2, "left",8),
	 new door(28, 17, 1, 2, "left",7),
	],
	// level 21
	[
	   new door(2, 15, 1, 1, "left",25),
	    new door(4, 9, 1, 1, "left",24),
		 new door(7, 10, 1, 1, "left",23),
		
		   new door(8, 7, 1, 1, "left",22),
		    new door(10, 7, 1, 1, "left",20),
			 new door(12, 9, 1, 1, "left",21),
			  new door(29, 4, 1, 1, "left",26)
	],
	// level 22
	[
	
	],
	// level 23
	[
	 new door(33, 17, 1, 3, "left",1),
	 new door(2, 17, 1, 3, "left",4),
	 
	],
	// level 24
	[
	 new door(32, 4, 2, 3, "left",2)
	],
	// level 25
	[],
	// level 26
	[
	 
	  new door(2, 16, 1, 3, "left",3),
	  
	],
	// level 27
	[],
	// level 28
	[],
	// level 29
	[],
	// level 30
	[],
	// level 31
	[],
	// level 32
	[
	 new door(7, 6, 2, 2, "left",6,true),
	 new door(17, 14, 2, 2, "left",5)
	 
	],
	// level 33
	[
	  new door(31, 3, 1, 3, "left",1),
	   new door(34, 10, 2, 4, "left",2),
	],
	// level 34
	[
	   new door(9, 3, 2, 2, "left",7),
	   new door(25, 3, 2, 2, "left",8),
	   new door(17, 11, 2, 2, "left",3),
	   new door(33, 10, 3, 4, "left",4),
	   
	],
	// level 35
	[
	  new door(23, 4, 4, 1, "left",5),
	   new door(33, 15, 1, 4, "left",6)
	],
	// level 36
	[],
	// level 37
	[
	 new door(23, 4, 4, 1, "left",9),
	 new door(2, 10, 1, 4, "left",10),
	 
	],
	// level 38
	[ 
	  new door(2, 4, 1, 3, "left",24)
	],
	// level 39
	[
	  new door(9, 2, 4, 1, "left",11),
	  new door(9, 3, 4, 1, "left",13),
	  new door(9, 4, 4, 1, "left",12),
	  new door(32, 10, 2, 4, "left",16),
	   new door(2, 10, 2, 4, "left",19),
	  
	],
	// level 40
	[ 
	  new door(31, 6, 1, 1, "left",15),
	  new door(27, 11, 2, 2, "left",14),
	  new door(31, 17, 1, 1, "left",18),
	],
	// level 41
	[
	  new door(5, 19, 1, 1, "left",17),
	  new door(33, 19, 1, 1, "left",22),
	],
	// level 42
	[
	  new door(2, 2, 31, 2, "left",20),
	],
	// level 43
	[
	  new door(2, 20, 31, 2, "left",21),
	],
	// level 44
	[ 
	 new door(33, 21, 1, 1, "left",23),
	],
	// level 45
	[],
	// level 46
	[],
	// level 47
	[ 
	  new door(15, 2, 6, 2, "left",25,true),
	],
	// level 48
	[],
	// level 49
	[],
	// level 50
	[]
	
	
	/*[
		new door(10, 6, 2, 2, "left")
	]*/
];

function resetDoors(l) {
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	for (var i = 0; i < doors[lev].length; i++) {
		doors[lev][i].curW = 1;
		doors[lev][i].curH = 1;
		doors[lev][i].opened = false;
		doors[lev][i].saved = false;
		doors[lev][i].opening = false;
		doors[lev][i].closing = false;
		doors[lev][i].fromSave = false;
		doors[lev][i].inited = false;
	}
	}
	detectDoorsInWalls();
}

function resetDoorsAll() {
	for (var real = 0; real< 6; real++ ){
	 for (var t = 0; t< levelsNumbers[real].length;t++ ){
		 lev = levelsNumbers[real][t];
	for (var i = 0; i < doors[lev].length; i++) {
		doors[lev][i].curW = 1;
		doors[lev][i].curH = 1;
		doors[lev][i].opened = false;
		doors[lev][i].saved = false;
		doors[lev][i].opening = false;
		doors[lev][i].closing = false;
		doors[lev][i].fromSave = false;
		doors[lev][i].inited = false;
	}
	}
	
	}
	detectDoorsInWalls();
}

function getDoorByNumber(lev,doorNumber,save) {
	if(save == null)
		save = false;
	for (var i =0; i< levelsNumbers.length;i++ ){
	 for (var n = 0; n< levelsNumbers[i].length;n++ ){
	  
	  if (levelsNumbers[i][n]==lev){
		realLevel = i;   
	  }
		
	 }
	}
	if(doorNumber==null){
		doorNumber = countAllDoors();
	}
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	   for (var d = 0; d < doors[lev].length;d++ ){
	    if (doors[lev][d].doorNumber==doorNumber)
		 {
		     doors[lev][d].opened = true;
			 doors[lev][d].opening = true;
			 doors[lev][d].closing = false;
			// doors[lev][d].saved = true;
			 if((lev != level)&&(!save)){
				 player.doorPause = true;
				 player.gotoThisLevel = lev;
				 player.comeBackLevel = level;
				 player.afterDoorPause = true;
				 if(player.doorPauseCounter==0)
				  player.doorPauseCounter = 1;
				 
				 player.prevX = player.x;
				 player.prevY = player.y;
				 player.alpha = 0;
				 
				 
				 this.currentDoor = doorNumber;
			 }
			 
			 return true;
		 }	 
			 
	    }
	 }
	
}
function countAllDoors(lev) {
	count = 0;
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	   
	     count +=   doors[lev].length;
     }
	 return count;
}
function addDoorsToWalls() {
  for (var r = 0;r < levelsNumbers[realLevel].length; r++ ){	
   lev = levelsNumbers[realLevel][r];
	for (var i = 0; i < doors[lev].length; i++) {
	 for (var yy = doors[lev][i].y; yy < (doors[lev][i].h+ doors[lev][i].y) ; yy++) {
        for (var xx = doors[lev][i].x; xx < (doors[lev][i].w+ doors[lev][i].x); xx++) {
			if(doors[lev][i].fromSave == false)
             walls[lev][yy][xx] = 1; 
        }
     }
	}
  }
}

function addDoorToWalls(door,lev) {
  
	 for (var yy = door.y; yy < (door.h+ door.y) ; yy++) {
        for (var xx = door.x; xx < (door.w+ door.x); xx++) {
            walls[lev][yy][xx] = 0; 
        }
     }
	
  }


function detectDoorsInWalls() {
   for (var r = 0;r < levelsNumbers[realLevel].length; r++ ){	
    lev = levelsNumbers[realLevel][r];
	for (var i = 0; i < doors[lev].length; i++) {
		var changeTo = null;
		if (doors[lev][i].opened)
			changeTo = 0;
		else
			changeTo = 1;
		
		for (var x = 0; x < doors[lev][i].w; x++) {
			for (var y = 0; y < doors[lev][i].h; y++) {
				walls[lev][doors[lev][i].y + y][doors[lev][i].x + x] = changeTo;
			}
		}
	}
   }
}
function detectDoorsInWallsRevert() {
   for (var r = 0;r < levelsNumbers[realLevel].length; r++ ){	
    lev = levelsNumbers[realLevel][r];
	for (var i = 0; i < doors[lev].length; i++) {
		var changeTo = null;
		if (doors[lev][i].opened)
			changeTo = 1;
		else
			changeTo = 0;
		
		for (var x = 0; x < doors[lev][i].w; x++) {
			for (var y = 0; y < doors[lev][i].h; y++) {
				walls[lev][doors[lev][i].y + y][doors[lev][i].x + x] = changeTo;
			}
		}
	}
   }
}
function updateDoors() {
	if(state == "main_menu"){
		if(doors[0][0].inited == false){
				//doors[0][0].inited = true;
				 for (var yy = doors[0][0].y; yy < (doors[0][0].h+ doors[0][0].y) ; yy++) {
                  for (var xx = doors[0][0].x; xx < (doors[0][0].w+ doors[0][0].x); xx++) {
			        walls[0][yy][xx] = 1; 
					doors[0][0].curW =1;
					doors[0][0].opened = false;
                  }
                 }
				//walls[0][yy][xx] = 1;
		}
		else {
           //doors[0][0].inited = true;
				 for (var yy = doors[0][0].y; yy < (doors[0][0].h+ doors[0][0].y) ; yy++) {
                  for (var xx = doors[0][0].x; xx < (doors[0][0].w+ doors[0][0].x); xx++) {
			        walls[0][yy][xx] = 0;
	              	doors[0][0].curW = 0;
					doors[0][0].opened = true;
                  			
                  }
                 }
		}
			
	}
	if (state == "game" && !paused) {
		// open and close
	 for (var r = 0;r < levelsNumbers[realLevel].length; r++ ){	
	    lev = levelsNumbers[realLevel][r];
		if(doors[lev].length>0){
		for (var i = 0; i < doors[lev].length; i++) {
			
			if(doors[lev][i].inited == false){
				doors[lev][i].inited = true;
				addDoorsToWalls();
			}
		  if((doors[lev].length>0) && ( i < doors[lev].length)   ) {
			  canvas.fillStyle = "blue";
	/*canvas.font = "Bold " + cwh(16) + "px Arial";
canvas.textAlign = "left";
	canvas.fillText("lev: " + lev + ", " + doors[lev][i].opening + " / " +
Math.floor(mouseX / TILE_SIZE) + ", " + Math.floor(mouseY / TILE_SIZE), 7, 60 + cwh(BAR_TEXT_FIX));*/

			if (doors[lev][i].opening == true) {
				if (doors[lev][i].dir == "right" || doors[lev][i].dir == "left") {
					doors[lev][i].curW -= DOOR_OPEN_SPEED;
					if (doors[lev][i].curW <= 0) {
						doors[lev][i].curW = 0;
						doors[lev][i].opening = false;
						doors[lev][i].opened = true;
						if(player.doorPause == true){
						 player.doorPause = false;
						 player.gotoThisLevel = player.comeBackLevel;
						 player.x = player.prevX;
						 player.y = player.prevY;
						 player.alpha = 1;
						 //player.comeBackLevel = 0;
						}
					}
				} else {
					doors[lev][i].curH -= DOOR_OPEN_SPEED;
					if (doors[lev][i].curH <= 0) {
						doors[lev][i].curH = 0;
						doors[lev][i].opening = false;
						doors[lev][i].opened = true;
						if(player.doorPause == true){
						 player.doorPause = false;
						 player.gotoThisLevel = player.comeBackLevel;
						 player.x = player.prevX;
						 player.y = player.prevY;
						 player.alpha = 1;
						 
						 //player.comeBackLevel = 0;
						}
					}
				}
			} else if (doors[lev][i].closing) {
				if (doors[lev][i].dir == "right" || doors[lev][i].dir == "left") {
					doors[lev][i].curW += DOOR_OPEN_SPEED;
					if (doors[lev][i].curW >= 1) {
						doors[lev][i].curW = 1;
						doors[lev][i].closing = false;
						doors[lev][i].opened = false;
					}
				} else {
					doors[lev][i].curH += DOOR_OPEN_SPEED;
					if (doors[lev][i].curH >= 1) {
						doors[lev][i].curH = 1;
						doors[lev][i].closing = false;
						doors[lev][i].opened = false;
					}
				}
			}
		   }
		}
	  }
	 }	
	}
}

function drawDoors() {
	if (state == "game" || state =="main_menu") {
		for (var i = 0; i < doors[level].length; i++) {
			if (!(!doors[level][i].opening && !doors[level][i].closing && doors[level][i].opened)) {
				canvas.beginPath();
				if (doors[level][i].dir == "left" || doors[level][i].dir == "up") {
					canvas.rect(
						doors[level][i].x * TILE_SIZE,
						doors[level][i].y * TILE_SIZE,
						doors[level][i].curW * doors[level][i].w * TILE_SIZE,
						doors[level][i].curH * doors[level][i].h * TILE_SIZE);
				} else {
					// mod for right down
					canvas.rect(
						doors[level][i].x * TILE_SIZE,
						doors[level][i].y * TILE_SIZE,
						doors[level][i].curW * doors[level][i].w * TILE_SIZE,
						doors[level][i].curH * doors[level][i].h * TILE_SIZE);
				}
				if(doors[level][i].finalDoor == false)
				 canvas.fillStyle = DOOR_FILL_COLOR;
			    else
				  canvas.fillStyle = DOOR_MAIN_COLOR;
			    	
				canvas.fill();
				canvas.strokeStyle = DOOR_OUTLINE_COLOR;
				canvas.lineWidth = 4;
				canvas.stroke();
			}
		}
	}
}

function getDoorsTotal(lev) {
	if(lev== null)
		lev = level;
	return doors[lev].length;
}

function submitSavedDoors() {
	doorsSave = [];
	currentSave = [];
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
		 
	for (var i = 0; i < doors[lev].length; i++) {
		if (doors[lev][i].saved)
			currentSave.push(i);
	}
	if (currentSave.length == 0)
		doorsSave.push([]);
	else 
	    doorsSave.push(currentSave);
	
	currentSave = [];
   }
   
	if (doorsSave.length == 0)
		doorsSave.push(-99);
	localStorage.setItem("whg3_doors", JSON.stringify(doorsSave));
}

function loadSavedDoors() {
	resetDoors(level);
	doorsSave = JSON.parse(localStorage["whg3_doors"]);
	currentSave = [];
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
		 if(doorsSave!= -99){
		 currentSave = doorsSave[t]; 
	  if (currentSave[0] >= 0) {
		for (var i = 0; i < currentSave.length; i++) {
		 	doors[lev][parseInt(currentSave[i])].gathered = true;
			doors[lev][parseInt(currentSave[i])].saved = true;
			 doors[lev][parseInt(currentSave[i])].opened = true;
			 doors[lev][parseInt(currentSave[i])].opening = false;
			 doors[lev][parseInt(currentSave[i])].closing = false;
			 doors[lev][parseInt(currentSave[i])].fromSave = true;
			 addDoorToWalls(doors[lev][parseInt(currentSave[i])],lev);
			 //addDoorsToWalls();
			 //detectDoorsInWalls();
			 //getDoorByNumber(lev,doors[lev][parseInt(currentSave[i])].doorNumber);
			 //detectDoorsInWalls();
			 //doors[lev][parseInt(currentSave[i])].closing = false;
		}
 	  }
	 }
	 }
}





