var gates = [
 [],
 //level1
 [2,0,0,0],
//level2
 [3,5,1,4],
//level3
 [0,0,2,0],
//level4
 [0,2,0,0],
//level5
 [0,0,0,2],
//level6
 [10,0,7,0],
//level7
 [6,8,0,9],
//level8
 [0,0,0,7],
//level9
 [0,7,0,0],
//level10
 [0,11,6,12],
//level11
 [0,0,0,10],
//level12
 [0,10,0,0],
//level13
 [16,17,15,14],
//level14
 [19,13,18,0],
//level15
 [13,20,0,18],
//level16
 [0,21,13,0],
//level17
 [21,0,0,13],
//level18
 [14,15,0,0],
//level19
 [0,0,14,0],
//level20
 [0,0,0,15],
//level21
 [0,0,17,16],
//level22
 [0,23,0,0],
//level23
 [24,0,32,22],
//level24
 [30,25,23,0],
//level25
 [0,26,0,24],
//level26
 [27,0,31,25],
//level27
 [28,0,26,0],
//level28
 [0,29,27,0],
//level29
 [0,0,0,28],
//level30
 [0,0,24,0],
//level31
 [26,0,0,0],
//level32
 [23,0,0,0],
//level33
 [34,0,0,0],
//level34
 [35,0,33,38],
//level35
 [36,0,34,37],
//level36
 [0,0,35,0],
//level37
 [0,35,38,39],
//level38
 [37,34,46,0],
//level39
 [44,37,42,40],
//level40
 [41,39,0,0],
//level41
 [0,0,40,0],
//level42
 [39,0,0,43],
//level43
 [0,42,0,0],
//level44
 [0,45,39,0],
//level45
 [0,0,0,44],
//level46
 [38,0,0,47],
//level47
 [0,46,0,48],
//level48
 [0,47,0,0],
//level49
 [2,0,0,0],
//level50
 [2,0,0,0],
 
];
// 20x15
var checkpoints = [
	[
	    [16, 12, 4, 5],
		[11, 9, 6, 2,true,"left"],
		[19, 9, 6, 2,true,"right"]
	],
	// level 1
	[
		[4, 10, 4, 4],
		[34, 10, 2, 4],
		[18, 17, 3, 2]
		
	],
	
	// level 2
	[
		[0, 10, 2, 4],
		[16, 2, 4, 2],
		[16, 20, 4, 2],
		[34, 10, 2, 4]
	],
	
	// level 3
	[
		[0, 10, 2, 4],
		[27, 8, 5, 8,true]
		
		
	],
	
	// level 4
	[
		[10, 11, 2, 2],
		[20, 8, 2, 2],
		[22, 14, 2, 2],
		[16, 20, 4, 2]
		
	],
	
	// level 5
	[
		[17, 11, 2, 2],
		[16, 2, 4, 2]
		
	],
	
	// level 6
	[
		
		[15, 10, 6, 4],
		[0, 19, 2, 2],
		[0, 3, 2, 2],
		
		
		[34, 10, 2, 4]
	],
	
	// level 7
	[
		[11, 11, 3, 2],
		[22, 11, 3, 2],
		[34, 3, 2, 2],
		[34,19,2,2]
	],
	
	// level 8
	[
		[16, 8, 4, 5],
		[19,14,3,5,true]
	],
	
	// level 9
	[
		[7, 5, 3, 3]
		
	],
	
	// level 10
	[
		[0, 10, 2,4],
		[13, 4, 1,1],
		[13, 19, 1,1],
		[19, 10, 1,1],
		[19, 13, 1,1],
		[25, 5, 2,2],
		[28, 2, 4,2],
		[28, 20, 4,2]
		
		
		
		
		
		
	],
	
	// level 11
	[
		[13, 4, 3, 3],
		[24, 7, 2, 1],
		[28, 2, 4, 2]
	],
	
	// level 12
	[
		[4, 7, 4, 4],
		[4, 13, 4, 4],
		[28,20, 4, 2]
		
	],
	
	// level 13
	[
		[14, 10, 3, 4],
		[19, 10, 3, 4,true],
		
		[3, 2, 3, 2],
		[0, 17, 2, 3],
		[16, 3, 4, 3],
		
		
		[34, 4, 2, 3],
		[16, 18, 4, 3]
	],
	
	// level 14
	[
		[0, 3, 2, 3],
		[3, 20, 3, 2],
		[17, 11, 3, 2],
		
		
		[15, 19, 3, 2]
	],
	
	// level 15
	[
		[3, 2, 3, 1],
		[17, 11, 2, 2],
		[34, 17, 2, 3],
		[1, 11, 2, 2]
	],
	
	// level 16
	[
		[0, 4, 2, 3],
		[30, 20, 3, 2]
	],
	
	// level 17
	[
		[3, 11, 6, 2],
		[30, 2, 3, 2],
		[34, 16, 2, 3],
		
	],
	
	// level 18
	[
		
		[3, 20, 3, 2],
		[34, 3, 2, 3]
	],
	
	// level 19
	[
		[6, 14, 3, 3]
 		
	],
	
	// level 20
	[
		[29, 4, 4, 4]
	],
	
	// level 21
	[
	
		[30, 2, 3, 3],
		[0, 16, 3, 3]
	],
	
	// level 22
	[
		
		[16, 4, 4, 4, true],
		[2, 11, 2, 2],
	],
	
	// level 23
	[
		[34, 17, 2, 3]
	],
	
	// level 24
	[
		[0, 17, 2, 3],
		
		[12, 20, 3, 2],
		[34, 4, 2, 3]
	],
	
	// level 25
	[
		[12, 2, 3, 2],
		[12, 20, 3, 2]
	],
	
	// level 26
	[
		[0, 16, 2, 3],
		[34, 16, 2, 3],
		[12, 2, 3, 2],
		
	],
	
	// level 27
	[
		[0, 16, 2, 3],
		[34, 16, 2, 3],
		
	],
	
	// level 28
	[
		[0, 16, 2, 3],
		[17, 20, 2, 2]
	],
	
	// level 29
	[
		[17, 2, 2, 2],
		
	],
	
	// level 30
	[
		[0, 4, 2, 3],
		
	],
	// level 31
	[
		[12, 10, 3, 3],
		[19, 8, 1, 1],
		[19, 14, 1, 1],
		[24, 10, 3, 3],
		[33,16, 3, 3]
		
	],
	// level 32
	[
		[34, 17, 2, 2],
		
		[3, 4, 4, 4,true],
		[23, 16, 2, 2]
		
	],
	// level 33
	[
		[2, 9, 6, 6],
		[4,17,3,3]
		
	],
	// level 34
	[
		[0, 10, 3, 2],
		
	],
	// level 35
	[
		[23, 2, 4, 2],
		[34,15,2,4]
		
		
	],
	// level 36
	[
		[0, 15, 2, 4]
		
	],
	// level 37
	[
		[23, 2, 4, 2],
		[23,20,4,2]
		
	],
	// level 38
	[
		[0, 4, 2, 3],
		
		
	],
	// level 39
	[
		[0, 10, 2, 4],
		[34, 10, 2, 4],
		[23, 20, 4, 2]
		
		
	],
	// level 40
	[
		[34, 3, 2, 1]
		
	],
	// level 41
	[
		[0, 3, 2, 1],
		[18,8,1,1]
	],
	// level 42
	[
		[34, 10, 2, 4]
		
	],
	// level 43
	[
		
		[21,9,2,2]
		
	],
	// level 44
	[
		[0,10,2,4]
		
	],
	// level 45
	[
		
		[4,16,2,2]
		
	],
	// level 46
	[
		[4, 6, 2, 3]
		
	],
	// level 47
	[
		[9, 5, 2, 2],
		[17,13,2,2]
		
	],
	// level 48
	[
		[25, 4, 4, 4,true]
		
	],
	// level 49
	[
		[3, 15, 2, 2],
		[23,3,2,2,true]
		
	],
	// level 50
	[
		[5, 9, 2, 2],
		[21,9,2,2,true]
		
	]
];

function drawChecks() {
	for (var i = 0; i < checkpoints[level].length; i++) {
		canvas.beginPath();
		canvas.rect(
			checkpoints[level][i][0] * cwh(TILE_SIZE) + os.x,
			checkpoints[level][i][1] * cwh(TILE_SIZE) + os.y,
			checkpoints[level][i][2] * cwh(TILE_SIZE),
			checkpoints[level][i][3] * cwh(TILE_SIZE)
		);
		canvas.fillStyle = CHECK_COLOR;
		canvas.fill();
	}
	drawCheckFlash();
}

function drawCheckFlash() {
	if (checkFlashAlpha > 0 && state == "game" && checkpoints[level].length >= (curCheck+1)  ) {
		canvas.beginPath();
		canvas.rect(
			checkpoints[level][curCheck][0] * cwh(TILE_SIZE) + os.x,
			checkpoints[level][curCheck][1] * cwh(TILE_SIZE) + os.y,
			checkpoints[level][curCheck][2] * cwh(TILE_SIZE),
			checkpoints[level][curCheck][3] * cwh(TILE_SIZE)
		);
		canvas.fillStyle = CHECK_FLASH_COLOR + checkFlashAlpha + ")";
		canvas.fill();
		checkFlashAlpha -= CHECK_FLASH_FADE_SPEED;
	}
}