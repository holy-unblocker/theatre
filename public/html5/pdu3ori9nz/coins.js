function coin(x, y, gathered, saved, fadeAlpha, fadingIn, fadingOut,
	shineTime, shineAlpha, shiningIn, shiningOut) {

    if (gathered   == null) { gathered   = false; }
    if (saved      == null) { saved      = false; }
    if (fadeAlpha  == null) { fadeAlpha  = 1; }
    if (fadingIn   == null) { fadingIn   = false; }
    if (fadingOut  == null) { fadingOut  = false; }
    if (shineTime  == null) { shineTime  = createCoinShineTime(); }
    if (shineAlpha == null) { shineAlpha = 0; }
    if (shiningIn  == null) { shiningIn  = false; }
    if (shiningOut == null) { shiningOut = false; }

	this.simpleX = x;
	this.simpleY = y;
	this.x = x * TILE_SIZE + TILE_SIZE / 2;
	this.y = y * TILE_SIZE + TILE_SIZE / 2;
	this.gathered = gathered;
	this.saved = saved;
	this.fadeAlpha = fadeAlpha;
	this.fadingIn = fadingIn;
	this.fadingOut = fadingOut;
	this.shineTime = shineTime;
	this.shineAlpha = shineAlpha;
	this.shiningIn = shiningIn;
	this.shiningOut = shiningOut;
}

var coins = [
	[],
	// level 1
	[
        new coin(13, 6),
		new coin(14, 6),
		new coin(15, 6),
		new coin(13, 5),
		new coin(14, 5),
		new coin(15, 5),
		
		 new coin(23, 6),
		new coin(24, 6),
		new coin(25, 6),
		new coin(23, 5),
		new coin(24, 5),
		new coin(25, 5),
		
	],

	// level 2
	[
		new coin(12, 11),
		new coin(13, 11),
		new coin(12, 12),
		new coin(13, 12),
		
		new coin(23, 11),
		new coin(22, 11),
		new coin(23, 12),
		new coin(22, 12),
		
		
		
	],

	// level 3
	[
		
		
	],
	
	// level 4
	[
		new coin(10, 11),
		new coin(11, 11),
		new coin(10, 12),
		new coin(11, 12),
		
		
		
		new coin(20, 8),
		new coin(21, 8),
		new coin(20, 9),
		new coin(21, 9),
		
		
		new coin(22, 14),
		new coin(23, 14),
		new coin(22, 15),
		new coin(23, 15),
		
		
		
		
	],

	// level 5
	[
		new coin(8.5, 6.5),
		new coin(8.5, 9.5),
		new coin(8.5, 13.5),
		
		new coin(14.5, 6.5),
		new coin(14.5, 9.5),
		new coin(14.5, 13.5),
		
		new coin(20.5, 6.5),
		new coin(20.5, 9.5),
		new coin(20.5, 13.5),
		
		new coin(24.5, 6.5),
		new coin(24.5, 9.5),
		new coin(24.5, 13.5),
		
		
		
	],
	
	// level 6
	[
		new coin(3, 11),
		new coin(4, 11),
		new coin(3, 12),
		new coin(4, 12),
		
		new coin(31, 3),
		new coin(32, 3),
		new coin(31, 4),
		new coin(32, 4),
		
		new coin(31, 19),
		new coin(32, 19),
		new coin(31, 20),
		new coin(32, 20)
		
	],
	
	// level 7
	[
		new coin(15, 11),
		new coin(16, 11),
		new coin(17, 11),
		new coin(18, 11),
		new coin(19, 11),
		new coin(20, 11),
		
		new coin(15, 12),
		new coin(16, 12),
		new coin(17, 12),
		new coin(18, 12),
		new coin(19, 12),
		new coin(20, 12),
		
		
	],

	// level 8
	[
		new coin(29, 3),
		new coin(30, 3),
		new coin(31, 3),
		
		new coin(29, 4),
		new coin(30, 4),
		new coin(31, 4),
		
	],
	
	// level 9
	[
		new coin(30, 5),
		new coin(31, 5),
		new coin(32, 5),
		new coin(30, 6),
		new coin(31, 6),
		new coin(32, 6),
		new coin(30, 7),
		new coin(31, 7),
		new coin(32, 7)
		
	],
	
	// level 10
	[   
	    new coin(21, 11),
		new coin(22, 11),
		new coin(23, 11),
	    new coin(24, 11),
		new coin(21, 12),
		new coin(22, 12),
		new coin(23, 12),
	    new coin(24, 12)
	],
	
	// level 11
	[
		
		
	],

	// level 12
	[
		
	],
	
	// level 13
	[
	  new coin(16, 3),
	  new coin(17, 3),
	  new coin(18, 3),
	  new coin(19, 3),
	  new coin(16, 4),
	  new coin(17, 4),
	  new coin(18, 4),
	  new coin(19, 4),
	  new coin(16, 5),
	  new coin(17, 5),
	  new coin(18, 5),
	  new coin(19, 5),
	  
	  new coin(16, 18),
	  new coin(17, 18),
	  new coin(18, 18),
	  new coin(19, 18),
	  new coin(16, 19),
	  new coin(17, 19),
	  new coin(18, 19),
	  new coin(19, 19),
	  new coin(16, 20),
	  new coin(17, 20),
	  new coin(18, 20),
	  new coin(19, 20),
	  
	  
	  new coin(1, 9),
	  new coin(2, 9),
	  new coin(1, 10),
	  new coin(2, 10),
	  new coin(1, 11),
	  new coin(2, 11),
	  
	  new coin(33, 12),
	  new coin(34, 12),
	  new coin(33, 13),
	  new coin(34, 13),
	  new coin(33, 14),
	  new coin(34, 14)
	  
	  
	  
	],

	// level 14
	[
	        new coin(15, 3),
		    new coin(16, 3),
	        new coin(17, 3),
	        new coin(15, 4),
		    new coin(16, 4),
	        new coin(17, 4),
			
			new coin(15, 19),
		    new coin(16, 19),
	        new coin(17, 19),
			new coin(15, 20),
		    new coin(16, 20),
	        new coin(17, 20),
	       
	        new coin(32, 3),
			new coin(33, 3),
			new coin(32, 4),
			new coin(33, 4),
			
			 new coin(32, 19),
			new coin(33, 19),
			new coin(32, 20),
			new coin(33, 20)
			
			
			
	
	],
	
	// level 15
	[
	 new coin(1, 11),
	 new coin(2, 11),
	 new coin(1, 12),
	 new coin(2, 12),
	 
	  new coin(33, 4),
	  new coin(34, 4),
	  new coin(33, 5),
	  new coin(34, 5),
	  new coin(33, 6),
	  new coin(34, 6),
	  
	 
	 
	],

	// level 16
	[
		new coin(17, 10),
		new coin(18, 10),
		new coin(16, 11),
		new coin(16, 12),
		new coin(19, 11),
		new coin(19, 12),
		 new coin(17, 13),
		new coin(18, 13),
	],

	// level 17
	[
	    new coin(5, 3),
		new coin(6, 3),
		new coin(5, 4),
		new coin(6, 4),
	   
        new coin(20, 3),
		new coin(21, 3),
		new coin(20, 4),
		new coin(21, 4),
		
		new coin(5, 19),
		new coin(6, 19),
		new coin(5, 20),
		new coin(6, 20),
		
		 new coin(20, 19),
		new coin(21, 19),
		new coin(20, 20),
		new coin(21, 20),
			   
	],
	

	// level 18
	[
		 new coin(4, 4),
		 new coin(5, 4),
		 new coin(6, 4),
		 new coin(7, 4),
		 new coin(8, 4),
		 
		 new coin(4, 5),
		 new coin(5, 5),
		 new coin(6, 5),
		 new coin(7, 5),
		 new coin(8, 5),
		 
		 new coin(4, 6),
		 new coin(5, 6),
		 
		 new coin(7, 6),
		 new coin(8, 6),
		 
		 new coin(4, 7),
		 new coin(5, 7),
		 new coin(6, 7),
		 new coin(7, 7),
		 new coin(8, 7),
		 
		 new coin(4, 8),
		 new coin(5, 8),
		 new coin(6, 8),
		 new coin(7, 8),
		 new coin(8, 8),
		 
		 new coin(4, 9),
		 new coin(5, 9),
		 new coin(6, 9),
		 new coin(7, 9),
		 new coin(8, 9),
		 
		 new coin(4, 10),
		 new coin(5, 10),
		 new coin(6, 10),
		 new coin(7, 10),
		 new coin(8, 10),
		 
		 new coin(4, 11),
		 new coin(5, 11),
		 
		 new coin(7, 11),
		 new coin(8, 11),
		 
		 new coin(4, 12),
		 new coin(5, 12),
		 new coin(6, 12),
		 new coin(7, 12),
		 new coin(8, 12),
		 
		 new coin(4, 13),
		 new coin(5, 13),
		 new coin(6, 13),
		 new coin(7, 13),
		 new coin(8, 13),
		 
		 
		 
		 
		 
		 
	],

	// level 19
	[
	    new coin(6, 7),
		new coin(7, 7),
        new coin(8, 7),
        new coin(6, 8),
		new coin(7, 8),
        new coin(8, 8),
        new coin(6, 9),
		new coin(7, 9),
        new coin(8, 9),
		
		new coin(6, 14),
		new coin(7, 14),
        new coin(8, 14),
        new coin(6, 15),
		new coin(7, 15),
        new coin(8, 15),
        new coin(6, 16),
		new coin(7, 16),
        new coin(8, 16),
		
		new coin(27, 7),
		new coin(28, 7),
        new coin(29, 7),
        new coin(27, 8),
		new coin(28, 8),
        new coin(29, 8),
        new coin(27, 9),
		new coin(28, 9),
        new coin(29, 9),
		
		new coin(27, 14),
		new coin(28, 14),
        new coin(29, 14),
        new coin(27, 15),
		new coin(28, 15),
        new coin(29, 15),
        new coin(27, 16),
		new coin(28, 16),
        new coin(29, 16),
	],
	
	// level 20
	[
		new coin(29.5, 4.5),
		new coin(30.5, 4.5),
		new coin(31.5, 4.5),
		new coin(29.5, 5.5),
		
		new coin(31.5, 5.5),
		new coin(29.5, 6.5),
		new coin(30.5, 6.5),
		new coin(31.5, 6.5),
		
		new coin(29.5, 16.5),
		new coin(30.5, 16.5),
		new coin(31.5, 16.5),
		new coin(29.5, 17.5),
		
		new coin(31.5, 17.5),
		new coin(29.5, 18.5),
		new coin(30.5, 18.5),
		new coin(31.5, 18.5),
		
	],
	
	// level 21
	[
		
	
	],
	
	// level 22
	[
		new coin(2, 11),
		new coin(3, 11),
		new coin(2, 12),
		new coin(3, 12)
		
	],
	
	// level 23
	[
		new coin(5, 6),
		new coin(6, 6),
		new coin(5, 7),
		new coin(6, 7),
		
		new coin(5, 16),
		new coin(6, 16),
		new coin(5, 17),
		new coin(6, 17),
		
		new coin(10, 11),
		new coin(11, 11),
		new coin(10, 12),
		new coin(11, 12),
		
		new coin(15, 6),
		new coin(16, 6),
		new coin(15, 7),
		new coin(16, 7),
		
		new coin(15, 16),
		new coin(16, 16),
		new coin(15, 17),
		new coin(16, 17),
		
		new coin(20, 11),
		new coin(21, 11),
		new coin(20, 12),
		new coin(21, 12),
		
		new coin(25, 6),
		new coin(26, 6),
		new coin(25, 7),
		new coin(26, 7),
		
		new coin(25, 16),
		new coin(26, 16),
		new coin(25, 17),
		new coin(26, 17),
		
		new coin(30, 11),
		new coin(31, 11),
		new coin(30, 12),
		new coin(31, 12)
		
	],
	
	// level 24
	[],
	
	// level 25
	[
		new coin(12, 4),
		new coin(13, 4),
		new coin(14, 4),
		new coin(12, 5),
		new coin(13, 5),
		new coin(14, 5),
		new coin(12, 6),
		new coin(13, 6),
		new coin(14, 6),
		new coin(12, 7),
		new coin(13, 7),
		new coin(14, 7),
		new coin(12, 8),
		new coin(13, 8),
		new coin(14, 8),
		new coin(12, 9),
		new coin(13, 9),
		new coin(14, 9),
		//
		new coin(15, 7),
		new coin(16, 7),
		new coin(17, 7),
		new coin(15, 8),
		new coin(16, 8),
		new coin(17, 8),
		new coin(15, 9),
		new coin(16, 9),
		new coin(17, 9),
		
		new coin(18, 7),
		new coin(19, 7),
		new coin(20, 7),
		new coin(18, 8),
		new coin(19, 8),
		new coin(20, 8),
		new coin(18, 9),
		new coin(19, 9),
		new coin(20, 9),
		
		new coin(21, 7),
		new coin(22, 7),
		new coin(23, 7),
		new coin(21, 8),
		new coin(22, 8),
		new coin(23, 8),
		new coin(21, 9),
		new coin(22, 9),
		new coin(23, 9),
		
		new coin(21, 10),
		new coin(22, 10),
		new coin(23, 10),
		new coin(21, 11),
		new coin(22,11),
		new coin(23, 11),
		new coin(21, 12),
		new coin(22, 12),
		new coin(23, 12),
		
		new coin(21, 13),
		new coin(22, 13),
		new coin(23, 13),
		new coin(21, 14),
		new coin(22,14),
		new coin(23, 14),
		new coin(21, 15),
		new coin(22, 15),
		new coin(23, 15),
		
		new coin(21, 16),
		new coin(22, 16),
		new coin(23, 16),
		
		
		new coin(12, 14),
		new coin(13, 14),
		new coin(14, 14),
		new coin(12, 15),
		new coin(13, 15),
		new coin(14, 15),
		new coin(12, 16),
		new coin(13, 16),
		new coin(14, 16),
		new coin(12, 17),
		new coin(13, 17),
		new coin(14, 17),
		new coin(12, 18),
		new coin(13, 18),
		new coin(14, 18),
		new coin(12, 19),
		new coin(13, 19),
		new coin(14, 19),
		
		new coin(15, 14),
		new coin(16, 14),
		new coin(17, 14),
		new coin(15, 15),
		new coin(16, 15),
		new coin(17, 15),
		new coin(15, 16),
		new coin(16, 16),
		new coin(17, 16),
		
		new coin(18, 14),
		new coin(19, 14),
		new coin(20, 14),
		new coin(18, 15),
		new coin(19, 15),
		new coin(20, 15),
		new coin(18, 16),
		new coin(19, 16),
		new coin(20, 16),
		
		
	],
	// level 26
	[
		new coin(16.5, 15.5),
		new coin(17.5, 15.5),
		new coin(16.5, 16.5),
		new coin(17.5, 16.5),
		
	],
	// level 27
	[
		new coin(3, 3),
		new coin(4, 3),
		new coin(3, 4),
		new coin(4, 4),
		
		new coin(17, 3),
		new coin(18, 3),
		new coin(17, 4),
		new coin(18, 4),
	
		new coin(31, 3),
		new coin(32, 3),
		new coin(31, 4),
		new coin(32, 4),
		
		new coin(17, 19),
		new coin(18, 19),
		new coin(17, 20),
		new coin(18, 20),
		
		new coin(10, 11),
		new coin(11, 11),
		new coin(10, 12),
		new coin(11, 12),
		
		new coin(24, 11),
		new coin(25, 11),
		new coin(24, 12),
		new coin(25, 12),
	],
	
	// level 28
	[
	    new coin(5, 11),
		new coin(6, 11),
		new coin(5, 12),
		new coin(6, 12),
		
		new coin(29, 11),
		new coin(30, 11),
		new coin(29, 12),
		new coin(30, 12),
		
		new coin(9, 7),
		new coin(10, 7),
		new coin(11, 7),
		new coin(12, 7),
		new coin(13, 7),
		new coin(14, 7),
		new coin(9, 8),
		new coin(10, 8),
		new coin(11, 8),
		new coin(12, 8),
		new coin(13, 8),
		new coin(14, 8),
		
		new coin(21, 7),
		new coin(22, 7),
		new coin(23, 7),
		new coin(24, 7),
		new coin(25, 7),
		new coin(26, 7),
		new coin(21, 8),
		new coin(22, 8),
		new coin(23, 8),
		new coin(24, 8),
		new coin(25, 8),
		new coin(26, 8),
		//
		new coin(9, 15),
		new coin(10,15),
		new coin(11,15),
		new coin(12, 15),
		new coin(13, 15),
		new coin(14, 15),
		new coin(9, 16),
		new coin(10,16),
		new coin(11, 16),
		new coin(12, 16),
		new coin(13, 16),
		new coin(14, 16),
		
		new coin(21, 15),
		new coin(22, 15),
		new coin(23, 15),
		new coin(24, 15),
		new coin(25, 15),
		new coin(26, 15),
		new coin(21, 16),
		new coin(22, 16),
		new coin(23, 16),
		new coin(24, 16),
		new coin(25, 16),
		new coin(26, 16)
		
		
	],
	
	// level 29
	[
		
	],
	
	// level 30
	[
		new coin(4.5, 17.5),
		new coin(5.5, 17.5),
		new coin(4.5, 18.5),
		new coin(5.5, 18.5),
		
		new coin(29.5, 17.5),
		new coin(30.5, 17.5),
		new coin(29.5, 18.5),
		new coin(30.5, 18.5),
		
		new coin(29.5, 4.5),
		new coin(30.5, 4.5),
		new coin(29.5, 5.5),
		new coin(30.5, 5.5)
		
	],
	
	// level 31
	[
		
		
	],
	
	// level 32
	[
		
		new coin(25.5, 6.5),
		new coin(27.5, 6.5),
		new coin(29.5, 6.5),
		new coin(25.5, 8.5),
		new coin(25.5, 10.5),
		new coin(25.5, 12.5),
		new coin(25.5, 14.5),
		new coin(25.5, 16.5),
		
		
		new coin(29.5, 6.5),
		new coin(29.5, 8.5),
		new coin(29.5, 10.5),
		new coin(29.5, 12.5),
		new coin(29.5, 14.5),
		new coin(29.5, 16.5),
		new coin(29.5, 18.5),
		new coin(31.5, 18.5),
		
		
		
		
		
	],
	
	// level 33
	[
		new coin(4, 4),
		new coin(5, 4),
		new coin(6, 4),
		
		new coin(4, 5),
		
		new coin(6, 5),
		
		new coin(4, 6),
		new coin(5, 6),
		new coin(6, 6),
		//
		new coin(4, 17),
		new coin(5, 17),
		new coin(6, 17),
		
		new coin(4, 18),
		
		new coin(6, 18),
		
		new coin(4, 19),
		new coin(5, 19),
		new coin(6, 19),
		
		new coin(10, 4),
		new coin(11, 4),
		new coin(12, 4),
		new coin(13, 4),
		new coin(10, 5),
		new coin(11, 5),
		new coin(12, 5),
		new coin(13, 5),
		new coin(10, 6),
		new coin(11, 6),
		new coin(12, 6),
		new coin(13, 6),
		new coin(10, 7),
		new coin(11, 7),
		new coin(12, 7),
		new coin(13, 7),
		
		new coin(10, 16),
		new coin(11, 16),
		new coin(12, 16),
		new coin(13, 16),
		new coin(10, 17),
		new coin(11, 17),
		new coin(12, 17),
		new coin(13, 17),
		new coin(10, 18),
		new coin(11, 18),
		new coin(12, 18),
		new coin(13, 18),
		new coin(10, 19),
		new coin(11, 19),
		new coin(12, 19),
		new coin(13, 19),
		
		new coin(18, 4.5),
		new coin(21, 4.5),
		new coin(24, 4.5),
		new coin(27, 4.5),
		
		new coin(18, 18.5),
		new coin(21, 18.5),
		new coin(24, 18.5),
		new coin(27, 18.5),
		
		new coin(27, 11.5),
		new coin(30, 11.5),
		
		new coin(19, 9),
		new coin(20, 9),
		
		new coin(19, 10),
		new coin(20, 10),
		
		new coin(19, 13),
		new coin(20, 13),
		
		new coin(19, 14),
		new coin(20, 14),
		
		new coin(17, 11),
		new coin(18, 11),
		new coin(17, 12),
		new coin(18, 12),
		
		new coin(21, 11),
		new coin(22, 11),
		new coin(21, 12),
		new coin(22, 12),
		
		
		
		
	],
	
	// level 34
	[
		new coin(3, 5),
		new coin(4, 5),
		new coin(5, 5),
		new coin(6, 5),
		new coin(7, 5),
		
		new coin(3, 6),
		new coin(4, 6),
		new coin(5, 6),
		
		new coin(3, 7),
		new coin(4, 7),
		
		new coin(3, 8),
		new coin(3, 9),
		
		new coin(12, 5),
		new coin(13, 5),
		new coin(14, 5),
		new coin(15, 5),
		new coin(16, 5),
		
		
		new coin(14, 6),
		new coin(15, 6),
		new coin(16, 6),
		
		new coin(15, 7),
		new coin(16, 7),
		new coin(16, 8),
		new coin(16, 8),
		
		new coin(3, 14),
		new coin(3, 15),
		new coin(3, 16),
		new coin(3, 17),
		new coin(3, 18),
		
		new coin(4, 16),
		new coin(4, 17),
		new coin(4, 18),
		
		new coin(5, 17),
		new coin(5, 18),
		new coin(6, 18),
		new coin(7, 18),
		
		
		
	],
	
	// level 35
	[
		new coin(5.5, 6.5),
		new coin(6.5, 6.5),
		new coin(7.5, 6.5),
		new coin(8.5, 6.5),
		new coin(9.5, 6.5),
		
		new coin(9.5, 7.5),
		new coin(9.5, 8.5),
		new coin(9.5, 9.5),
		new coin(9.5, 10.5),
		new coin(9.5, 11.5),
		
		
		new coin(10.5, 11.5),
		new coin(11.5, 11.5),
		new coin(12.5, 11.5),
		new coin(13.5, 11.5),
		new coin(14.5, 11.5),
		
	
		new coin(14.5, 12.5),
		new coin(14.5, 13.5),
		new coin(14.5, 14.5),
		new coin(14.5, 15.5),
		new coin(14.5, 16.5),
		
		new coin(13.5, 16.5),
		new coin(12.5, 16.5),
		new coin(11.5, 16.5),
		new coin(10.5, 16.5),
		new coin(9.5, 16.5),
		new coin(8.5, 16.5),
		new coin(7.5, 16.5),
		new coin(6.5, 16.5),
		new coin(5.5, 16.5),
		new coin(4.5, 16.5),
		
		new coin(4.5, 15.5),
		new coin(4.5, 14.5),
		new coin(4.5, 13.5),
		new coin(4.5, 12.5),
		new coin(4.5, 11.5),
		
		new coin(14.5, 10.5),
		new coin(14.5, 9.5),
		new coin(14.5, 8.5),
		new coin(14.5, 7.5),
		new coin(14.5, 6.5),
		
		new coin(15.5, 6.5),
		new coin(16.5, 6.5),
		new coin(17.5, 6.5),
		new coin(18.5, 6.5),
		new coin(19.5, 6.5),
		new coin(20.5, 6.5),
		new coin(21.5, 6.5),
		new coin(22.5, 6.5),
		new coin(23.5, 6.5),
		new coin(24.5, 6.5),
		new coin(25.5, 6.5),
		new coin(26.5, 6.5),
		new coin(27.5, 6.5),
		new coin(28.5, 6.5),
		new coin(29.5, 6.5),
		new coin(30.5, 6.5),
		
		new coin(30.5, 7.5),
		new coin(30.5, 8.5),
		new coin(30.5, 9.5),
		new coin(30.5, 10.5),
		new coin(30.5, 11.5),
		
		new coin(29.5, 11.5),
		new coin(28.5, 11.5),
		new coin(27.5, 11.5),
		new coin(26.5, 11.5),
		new coin(25.5, 11.5),
		new coin(24.5, 11.5),
		
		new coin(23.5, 11.5),
		new coin(22.5, 11.5),
		new coin(21.5, 11.5),
		new coin(20.5, 11.5),
		new coin(19.5, 11.5),
		
		new coin(19.5, 12.5),
		new coin(19.5, 13.5),
		new coin(19.5, 14.5),
		new coin(19.5, 15.5),
	
		
		new coin(24.5, 12.5),
		new coin(24.5, 13.5),
		new coin(24.5, 14.5),
		new coin(24.5, 15.5),
		new coin(24.5, 16.5),
		
		new coin(24.5, 16.5),
		new coin(25.5, 16.5),
		new coin(26.5, 16.5),
		new coin(27.5, 16.5),
		new coin(28.5, 16.5),
		new coin(29.5, 16.5),
		
	],
	
	// level 36
	[
		new coin(4, 6),
		new coin(5, 6),
		new coin(4, 7),
		new coin(5, 7),
		
		new coin(30, 16),
		new coin(31, 16),
		new coin(30, 17),
		new coin(31, 17),
		
		new coin(12, 11),
		new coin(13, 11),
		new coin(12, 12),
		new coin(13, 12),
		
		new coin(22, 11),
		new coin(23, 11),
		new coin(22, 12),
		new coin(23, 12),
		
	],
	
	// level 37
	[
		
		
		new coin(9, 11),
		new coin(10, 11),
		new coin(9, 12),
		new coin(10, 12),
		
		new coin(25, 11),
		new coin(26, 11),
		new coin(25, 12),
		new coin(26, 12),
		
		
	],
	
	// level 38
	[
		new coin(15, 5),
		new coin(16, 5),
		new coin(15, 6),
		new coin(16, 6),
		new coin(19, 5),
		new coin(20, 5),
		new coin(19, 6),
		new coin(20, 6)
		
	],
	
	// level 39
	[
		new coin(8, 8),
		new coin(9, 8),
		new coin(8, 9),
		new coin(9, 9),

		new coin(14, 8),
		new coin(15, 8),
		new coin(14, 9),
		new coin(15, 9),
		
		new coin(20, 8),
		new coin(21, 8),
		new coin(20, 9),
		new coin(21, 9),
		
		new coin(26, 8),
		new coin(27, 8),
		new coin(26, 9),
		new coin(27, 9),
		
		//
		
		new coin(8, 14),
		new coin(9, 14),
		new coin(8, 15),
		new coin(9, 15),

		new coin(14, 14),
		new coin(15, 14),
		new coin(14, 15),
		new coin(15, 15),
		
		new coin(20, 14),
		new coin(21, 14),
		new coin(20, 15),
		new coin(21, 15),
		
		new coin(26, 14),
		new coin(27, 14),
		new coin(26, 15),
		new coin(27, 15)
		
		
	],
	
	// level 40
	[
		new coin(8.5, 6.5),
		new coin(10.5, 6.5),
		new coin(12.5, 6.5),
		new coin(14.5, 6.5),
		new coin(16.5, 6.5),
		new coin(18.5, 6.5),
		new coin(20.5, 6.5),
		new coin(22.5, 6.5),
		new coin(24.5, 6.5),
		new coin(26.5, 6.5),
		new coin(28.5, 6.5),
		
		new coin(8.5, 8.5),
		new coin(10.5, 8.5),
		new coin(12.5, 8.5),
		new coin(14.5, 8.5),
		new coin(16.5, 8.5),
		new coin(18.5, 8.5),
		new coin(20.5, 8.5),
		new coin(22.5, 8.5),
		new coin(24.5, 8.5),
		new coin(26.5, 8.5),
		new coin(28.5, 8.5),
		
		new coin(8.5, 14.5),
		new coin(10.5, 14.5),
		new coin(12.5, 14.5),
		new coin(14.5, 14.5),
		new coin(16.5, 14.5),
		new coin(18.5, 14.5),
		new coin(20.5, 14.5),
		new coin(22.5, 14.5),
		new coin(24.5, 14.5),
		new coin(26.5, 14.5),
		new coin(28.5, 14.5),
	
		new coin(8.5, 16.5),
		new coin(10.5, 16.5),
		new coin(12.5, 16.5),
		new coin(14.5, 16.5),
		new coin(16.5, 16.5),
		new coin(18.5, 16.5),
		new coin(20.5, 16.5),
		new coin(22.5, 16.5),
		new coin(24.5, 16.5),
		new coin(26.5, 16.5),
		new coin(28.5, 16.5)
	],
	
	// level 41
	[
		new coin(9, 8),
		new coin(9, 9),
		new coin(11, 9),
		new coin(10, 18),
		
		new coin(15, 4),
		
		new coin(16, 4),
		new coin(16, 4),
		new coin(23, 4),
		new coin(24, 4),
		new coin(25, 4),
		
		new coin(22, 10),
		new coin(23, 10),
		
		new coin(22, 12),
		new coin(23, 12),
		new coin(25, 16),
		
		
		
		
		
		
		
		
	],
	
	// level 42
	[
		
		
		
	],
	
	// level 43
	[
		
		
	],
	
	// level 44
	[
		new coin(5.5, 6),
		new coin(7.5, 6),
		new coin(9.5, 6),
		new coin(11.5, 6),
		new coin(13.5, 6),
		new coin(15.5, 6),
		new coin(17.5, 6),
		new coin(19.5, 6),
		new coin(21.5, 6),
		new coin(23.5, 6),
		new coin(25.5, 6),
		new coin(27.5, 6),
		new coin(29.5, 6),
		//
		new coin(5.5, 8),
		new coin(7.5, 8),
		new coin(9.5, 8),
		new coin(11.5, 8),
		new coin(13.5, 8),
		new coin(15.5, 8),
		new coin(17.5, 8),
		new coin(19.5, 8),
		new coin(21.5, 8),
		new coin(23.5, 8),
		new coin(25.5, 8),
		new coin(27.5, 8),
		new coin(29.5, 8),
		//
		
		new coin(5.5, 15),
		new coin(7.5, 15),
		new coin(9.5, 15),
		new coin(11.5, 15),
		new coin(13.5, 15),
		new coin(15.5, 15),
		new coin(17.5, 15),
		new coin(19.5, 15),
		new coin(21.5, 15),
		new coin(23.5, 15),
		new coin(25.5, 15),
		new coin(27.5, 15),
		new coin(29.5, 15),
		//
		new coin(5.5, 17),
		new coin(7.5, 17),
		new coin(9.5, 17),
		new coin(11.5, 17),
		new coin(13.5, 17),
		new coin(15.5, 17),
		new coin(17.5, 17),
		new coin(19.5, 17),
		new coin(21.5, 17),
		new coin(23.5, 17),
		new coin(25.5, 17),
		new coin(27.5, 17),
		new coin(29.5, 17),
		
		
	],
	
	// level 45
	[
		new coin(4, 5),
		new coin(5, 5),
		new coin(6, 5),
		new coin(7, 5),
		new coin(8, 5),
		new coin(9, 5),
		new coin(10, 5),
		new coin(11, 5),
		new coin(12, 5),
		new coin(13, 5),
		new coin(14, 5),
		new coin(15, 5),
		new coin(16, 5),
		new coin(17, 5),
		new coin(18, 5),
		new coin(19, 5),
		new coin(20, 5),
		new coin(21, 5),
		new coin(22, 5),
		new coin(23, 5),
		new coin(24, 5),
		new coin(25, 5),
		new coin(26, 5),
		new coin(27, 5),
		new coin(28, 5),
		new coin(29, 5),
		new coin(30, 5),
		new coin(31, 5),
		//
		new coin(4, 6),
		new coin(5, 6),
		new coin(6, 6),
		new coin(7, 6),
		new coin(8, 6),
		new coin(9, 6),
		new coin(10, 6),
		new coin(11, 6),
		new coin(12, 6),
		new coin(13, 6),
		new coin(14, 6),
		new coin(15, 6),
		new coin(16, 6),
		new coin(17, 6),
		new coin(18, 6),
		new coin(19, 6),
		new coin(20, 6),
		new coin(21, 6),
		new coin(22, 6),
		new coin(23, 6),
		new coin(24, 6),
		new coin(25, 6),
		new coin(26, 6),
		new coin(27, 6),
		new coin(28, 6),
		new coin(29, 6),
		new coin(30, 6),
		new coin(31, 6),
		//
		new coin(4, 7),
		new coin(5, 7),
		new coin(6, 7),
		new coin(7, 7),
		new coin(8, 7),
		new coin(9, 7),
		new coin(10, 7),
		new coin(11, 7),
		new coin(12, 7),
		new coin(13, 7),
		new coin(14, 7),
		new coin(15, 7),
		new coin(16, 7),
		new coin(17, 7),
		new coin(18, 7),
		new coin(19, 7),
		new coin(20, 7),
		new coin(21, 7),
		new coin(22, 7),
		new coin(23, 7),
		new coin(24, 7),
		new coin(25, 7),
		new coin(26, 7),
		new coin(27, 7),
		new coin(28, 7),
		new coin(29, 7),
		new coin(30, 7),
		new coin(31, 7),
		//
		new coin(4, 8),
		new coin(5, 8),
		new coin(6, 8),
		new coin(7, 8),
		new coin(8, 8),
		new coin(9, 8),
		new coin(10, 8),
		new coin(11, 8),
		new coin(12, 8),
		new coin(13, 8),
		new coin(14, 8),
		new coin(15, 8),
		new coin(16, 8),
		new coin(17, 8),
		new coin(18, 8),
		new coin(19, 8),
		new coin(20, 8),
		new coin(21, 8),
		new coin(22, 8),
		new coin(23, 8),
		new coin(24, 8),
		new coin(25, 8),
		new coin(26, 8),
		new coin(27, 8),
		new coin(28, 8),
		new coin(29, 8),
		new coin(30, 8),
		new coin(31, 8),
		//
		new coin(4, 9),
		new coin(5, 9),
		new coin(6, 9),
		new coin(7, 9),
		new coin(8, 9),
		new coin(9, 9),
		new coin(10, 9),
		new coin(11, 9),
		new coin(12, 9),
		new coin(13, 9),
		new coin(14, 9),
		new coin(15, 9),
		new coin(16, 9),
		new coin(17, 9),
		new coin(18, 9),
		new coin(19, 9),
		new coin(20, 9),
		new coin(21, 9),
		new coin(22, 9),
		new coin(23, 9),
		new coin(24, 9),
		new coin(25, 9),
		new coin(26, 9),
		new coin(27, 9),
		new coin(28, 9),
		new coin(29, 9),
		new coin(30, 9),
		new coin(31, 9),
		//
		new coin(4, 10),
		new coin(5, 10),
		new coin(6, 10),
		new coin(7, 10),
		new coin(8, 10),
		new coin(9, 10),
		new coin(10, 10),
		new coin(11, 10),
		new coin(12, 10),
		new coin(13, 10),
		new coin(14, 10),
		new coin(15, 10),
		new coin(16, 10),
		new coin(17, 10),
		new coin(18, 10),
		new coin(19, 10),
		new coin(20, 10),
		new coin(21, 10),
		new coin(22, 10),
		new coin(23, 10),
		new coin(24, 10),
		new coin(25, 10),
		new coin(26, 10),
		new coin(27, 10),
		new coin(28, 10),
		new coin(29, 10),
		new coin(30, 10),
		new coin(31, 10),
		//
		new coin(4, 11),
		new coin(5, 11),
		new coin(6, 11),
		new coin(7, 11),
		new coin(8, 11),
		new coin(9, 11),
		new coin(10, 11),
		new coin(11, 11),
		new coin(12, 11),
		new coin(13, 11),
		new coin(14, 11),
		new coin(15, 11),
		
		new coin(18, 11),
		new coin(19, 11),
		new coin(20, 11),
		new coin(21, 11),
		new coin(22, 11),
		new coin(23, 11),
		new coin(24, 11),
		new coin(25, 11),
		new coin(26, 11),
		new coin(27, 11),
		new coin(28, 11),
		new coin(29, 11),
		new coin(30, 11),
		new coin(31, 11),
		//
		new coin(4, 12),
		new coin(5, 12),
		new coin(6, 12),
		new coin(7, 12),
		new coin(8, 12),
		new coin(9, 12),
		new coin(10, 12),
		new coin(11, 12),
		new coin(12, 12),
		new coin(13, 12),
		new coin(14, 12),
		new coin(15, 12),
		
		new coin(18, 12),
		new coin(19, 12),
		new coin(20, 12),
		new coin(21, 12),
		new coin(22, 12),
		new coin(23, 12),
		new coin(24, 12),
		new coin(25, 12),
		new coin(26, 12),
		new coin(27, 12),
		new coin(28, 12),
		new coin(29, 12),
		new coin(30, 12),
		new coin(31, 12),
		//
		new coin(4, 13),
		new coin(5, 13),
		new coin(6, 13),
		new coin(7, 13),
		new coin(8, 13),
		new coin(9, 13),
		new coin(10, 13),
		new coin(11, 13),
		new coin(12, 13),
		new coin(13, 13),
		new coin(14, 13),
		new coin(15, 13),
		new coin(16, 13),
		new coin(17, 13),
		new coin(18, 13),
		new coin(19, 13),
		new coin(20, 13),
		new coin(21, 13),
		new coin(22, 13),
		new coin(23, 13),
		new coin(24, 13),
		new coin(25, 13),
		new coin(26, 13),
		new coin(27, 13),
		new coin(28, 13),
		new coin(29, 13),
		new coin(30, 13),
		new coin(31, 13),
		//
		new coin(4, 14),
		new coin(5, 14),
		new coin(6, 14),
		new coin(7, 14),
		new coin(8, 14),
		new coin(9, 14),
		new coin(10, 14),
		new coin(11, 14),
		new coin(12, 14),
		new coin(13, 14),
		new coin(14, 14),
		new coin(15, 14),
		new coin(16, 14),
		new coin(17, 14),
		new coin(18, 14),
		new coin(19, 14),
		new coin(20, 14),
		new coin(21, 14),
		new coin(22, 14),
		new coin(23, 14),
		new coin(24, 14),
		new coin(25, 14),
		new coin(26, 14),
		new coin(27, 14),
		new coin(28, 14),
		new coin(29, 14),
		new coin(30, 14),
		new coin(31, 14),
		//
		new coin(4, 15),
		new coin(5, 15),
		new coin(6, 15),
		new coin(7, 15),
		new coin(8, 15),
		new coin(9, 15),
		new coin(10, 15),
		new coin(11, 15),
		new coin(12, 15),
		new coin(13, 15),
		new coin(14, 15),
		new coin(15, 15),
		new coin(16, 15),
		new coin(17, 15),
		new coin(18, 15),
		new coin(19, 15),
		new coin(20, 15),
		new coin(21, 15),
		new coin(22, 15),
		new coin(23, 15),
		new coin(24, 15),
		new coin(25, 15),
		new coin(26, 15),
		new coin(27, 15),
		new coin(28, 15),
		new coin(29, 15),
		new coin(30, 15),
		new coin(31, 15),
		//
		new coin(4, 16),
		new coin(5, 16),
		new coin(6, 16),
		new coin(7, 16),
		new coin(8, 16),
		new coin(9, 16),
		new coin(10, 16),
		new coin(11, 16),
		new coin(12, 16),
		new coin(13, 16),
		new coin(14, 16),
		new coin(15, 16),
		new coin(16, 16),
		new coin(17, 16),
		new coin(18, 16),
		new coin(19, 16),
		new coin(20, 16),
		new coin(21, 16),
		new coin(22, 16),
		new coin(23, 16),
		new coin(24, 16),
		new coin(25, 16),
		new coin(26, 16),
		new coin(27, 16),
		new coin(28, 16),
		new coin(29, 16),
		new coin(30, 16),
		new coin(31, 16),
		//
		//
		new coin(4, 17),
		new coin(5, 17),
		new coin(6, 17),
		new coin(7, 17),
		new coin(8, 17),
		new coin(9, 17),
		new coin(10, 17),
		new coin(11, 17),
		new coin(12, 17),
		new coin(13, 17),
		new coin(14, 17),
		new coin(15, 17),
		new coin(16, 17),
		new coin(17, 17),
		new coin(18, 17),
		new coin(19, 17),
		new coin(20, 17),
		new coin(21, 17),
		new coin(22, 17),
		new coin(23, 17),
		new coin(24, 17),
		new coin(25, 17),
		new coin(26, 17),
		new coin(27, 17),
		new coin(28, 17),
		new coin(29, 17),
		new coin(30, 17),
		new coin(31, 17),
		//
		//
		new coin(4, 18),
		new coin(5, 18),
		new coin(6, 18),
		new coin(7, 18),
		new coin(8, 18),
		new coin(9, 18),
		new coin(10, 18),
		new coin(11, 18),
		new coin(12, 18),
		new coin(13, 18),
		new coin(14, 18),
		new coin(15, 18),
		new coin(16, 18),
		new coin(17, 18),
		new coin(18, 18),
		new coin(19, 18),
		new coin(20, 18),
		new coin(21, 18),
		new coin(22, 18),
		new coin(23, 18),
		new coin(24, 18),
		new coin(25, 18),
		new coin(26, 18),
		new coin(27, 18),
		new coin(28, 18),
		new coin(29, 18),
		new coin(30, 18),
		new coin(31, 18),
		//
	],
	
	// level 46
	[
		new coin(7, 7),
		new coin(9, 7),
		
		new coin(7, 8),
		new coin(9, 8),
		
		new coin(7, 11),
		new coin(9, 11),
		
		new coin(7, 12),
		new coin(9, 12),
		
		
		
	],
	
	// level 47
	[
	
		new coin(4, 11),
		new coin(9, 11),
		new coin(4, 16),
		new coin(9, 16),
		new coin(6.5, 13.5),
		new coin(17, 13),
		new coin(18, 13),
		new coin(17, 14),
		new coin(18, 14),
		
		new coin(13, 18),
		new coin(14, 18),
		new coin(13, 19),
		new coin(14, 19),
		
		new coin(21, 18),
		new coin(22, 18),
		new coin(21, 19),
		new coin(22, 19),
		
		new coin(24, 19),
		new coin(25, 19),
		new coin(26, 19),
		new coin(27, 19),
		new coin(28, 19),
		new coin(29, 19),
		new coin(30, 19),
		new coin(31, 19),
		new coin(32, 19),
		new coin(33, 19)
		
		
		
		
		
		
		
		
		
		
		
		
		
	],
	
	// level 48
	[
		
	],
	
	// level 49
	[
		new coin(7.5, 5.5),
		new coin(13.5, 5.5),
		new coin(19.5, 5.5),
		new coin(7.5, 13.5),
		new coin(13.5, 13.5),
		new coin(19.5, 13.5)
		
		
	],
	
	// level 50
	[
		new coin(11.5, 9.5),
		new coin(12.5, 8.5),
		new coin(13.5, 7.5),
		new coin(14.5, 8.5),
		
		new coin(14.5, 10.5),
		new coin(13.5, 11.5),
		new coin(12.5, 10.5),
		new coin(11.5, 9.5),
		new coin(15.5, 9.5)
		
		
	]
];

function resetCoins(l) {
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	 for (var i = 0; i < coins[lev].length; i++) {
		coins[lev][i].gathered = false;
		coins[lev][i].saved = false;
		coins[lev][i].fadeAlpha = 1;
		coins[lev][i].fadingIn = false;
		coins[lev][i].fadingOut = false;
		coins[lev][i].shineTime = createCoinShineTime();
		coins[lev][i].shineAlpha = 0;
		coins[lev][i].shiningIn = false;
		coins[lev][i].shiningOut = false;
	}
   }
}

function resetCoinsAll() {
	
	for (var real = 0; real< 6; real++ ){
	
	 for (var t = 0; t< levelsNumbers[real].length;t++ ){
		 lev = levelsNumbers[real][t];
	 for (var i = 0; i < coins[lev].length; i++) {
		coins[lev][i].gathered = false;
		coins[lev][i].saved = false;
		coins[lev][i].fadeAlpha = 1;
		coins[lev][i].fadingIn = false;
		coins[lev][i].fadingOut = false;
		coins[lev][i].shineTime = createCoinShineTime();
		coins[lev][i].shineAlpha = 0;
		coins[lev][i].shiningIn = false;
		coins[lev][i].shiningOut = false;
	}
   }
  }
}



function updateCoins() {
	if (state == "game" && !paused) {
		coinsFade();
		coinsShine();
	}
}

function drawCoins() {
	if (state == "game") {
		for (var i = 0; i < coins[level].length; i++) {
			if (!coins[level][i].gathered || coins[level][i].fadingIn || coins[level][i].fadingOut) {
				// coin fill
				
				
				
				
				canvas.beginPath();
				canvas.arc(cwh(coins[level][i].x) + os.x, cwh(coins[level][i].y) + os.y, cwh(COIN_SIZE) / 2, 0, 2 * Math.PI, false);
				canvas.fillStyle = COIN_FILL_COLOR + coins[level][i].fadeAlpha + ")";
				canvas.fill();

				// coin shine
				canvas.beginPath();
				canvas.arc(cwh(coins[level][i].x) + os.x, cwh(coins[level][i].y) + os.y, cwh(COIN_SIZE) / 2, 0, 2 * Math.PI, false);
				if (coins[level][i].shineAlpha > coins[level][i].fadeAlpha)
					canvas.fillStyle = COIN_SHINE_COLOR + coins[level][i].fadeAlpha + ")";
				else
					canvas.fillStyle = COIN_SHINE_COLOR + coins[level][i].shineAlpha + ")";
				canvas.fill();

				// coin stroke
				canvas.lineWidth = cwh(4);
				canvas.strokeStyle = COIN_OUTLINE_COLOR + coins[level][i].fadeAlpha + ")";
				canvas.stroke();
			}
		}
	}
}

function coinsFade() {
	if (state == "game") {
		for (var i = 0; i < coins[level].length; i++) {
			if (coins[level][i].fadingOut && coins[level][i].fadeAlpha > 0) {
				coins[level][i].fadeAlpha -= COIN_FADE_SPEED/2;
				if(coins[level][i].fadeAlpha<0){
					coins[level][i].fadeAlpha = 0;
				}
			}
			else if (coins[level][i].fadingOut && coins[level][i].fadeAlpha <= 0) {
				coins[level][i].fadeAlpha = 0;
				coins[level][i].fadingOut = false;
				coins[level][i].shineTime = createCoinShineTime();
			}
			else if (coins[level][i].fadingIn && coins[level][i].fadeAlpha < 1) {
				coins[level][i].fadeAlpha += COIN_FADE_SPEED;
				if(coins[level][i].fadeAlpha>1){
					coins[level][i].fadeAlpha = 1;
				}
			}
			else if (coins[level][i].fadingIn && coins[level][i].fadeAlpha >= 1) {
				coins[level][i].fadeAlpha = 1;
				coins[level][i].fadingIn = false;
			}
			//console.trace(coins[level][i].fadeAlpha);
		}
	}
	
}
function getCoinsCollectedAll() {
	var count = 0;
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	  for (var i = 0; i < coins[lev].length; i++) {
		if (coins[lev][i].gathered) {
			count++;
		}
	 }
    }
	return count;
}

function getCoinsTotalAll() {
    commonCoins = 0;	
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
         commonCoins+= coins[lev].length;		 
	}
	return commonCoins;
}

function unsavedCoinsAll() {
	for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	 for (var i = 0; i < coins[lev].length; i++) {
		if (coins[lev][i].gathered && !coins[lev][i].saved) {
			return true;
		}
	 }
	}
	return false;
}

function getCoinsCollected() {
	var count = 0;

	for (var i = 0; i < coins[level].length; i++) {
		if (coins[level][i].gathered) {
			count++;
		}
	}
	return count;
}

function getCoinsTotal(lev) {
	if(lev== null)
		lev = level;
	return coins[lev].length;
}

function unsavedCoins() {
	for (var i = 0; i < coins[level].length; i++) {
		if (coins[level][i].gathered && !coins[level][i].saved) {
			return true;
		}
	}
	return false;
}

function createCoinShineTime() {
    return Math.floor(Math.random() * (COIN_SHINE_FREQ + 1));
}

function coinsShine() {
	coinShineTimer++;
	if (coinShineTimer > COIN_SHINE_FREQ)
		coinShineTimer = 0;
	
	for (var i = 0; i < coins[level].length; i++) {
		if (!coins[level][i].shiningIn && coinShineTimer == coins[level][i].shineTime) {
			coins[level][i].shiningIn = true;
			coins[level][i].shiningOut = false;
			coins[level][i].shineAlpha = 0;
		} else if (coins[level][i].shiningIn && coins[level][i].shineAlpha < 1) {
			coins[level][i].shineAlpha += COIN_SHINE_FADE_IN_SPEED;
			if(coins[level][i].shineAlpha>1){
              coins[level][i].shineAlpha = 1;				
			}
		} else if (coins[level][i].shiningIn && coins[level][i].shineAlpha >= 1) {
			coins[level][i].shiningOut = true;
			coins[level][i].shiningIn = false;
			coins[level][i].shineAlpha = 1;
		} else if (coins[level][i].shiningOut && coins[level][i].shineAlpha > 0) {
			coins[level][i].shineAlpha -= COIN_SHINE_FADE_OUT_SPEED;
			if(coins[level][i].shineAlpha<0){
				coins[level][i].shineAlpha = 0;
			}
		} else if (coins[level][i].shiningOut && coins[level][i].shineAlpha <= 0) {
			coins[level][i].shiningOut = false;
			coins[level][i].shiningIn = false;
			coins[level][i].shineAlpha = 0;
		}
	}
}

function submitSavedCoins() {
	coinsSave = [];
	currentSave = [];
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
		 
	for (var i = 0; i < coins[lev].length; i++) {
		if (coins[lev][i].saved)
			currentSave.push(i);
	}
	if (currentSave.length == 0)
		coinsSave.push([]);
	else 
	    coinsSave.push(currentSave);
	
	currentSave = [];
   }
   
	if (coinsSave.length == 0)
		coinsSave.push(-99);
	localStorage.setItem("whg3_coins", JSON.stringify(coinsSave));
}

function loadSavedCoins() {
	resetCoins(level);
	coinsSave = JSON.parse(localStorage["whg3_coins"]);
	currentSave = [];
	 for (var t = 0; t< levelsNumbers[realLevel].length;t++ ){
		 lev = levelsNumbers[realLevel][t];
	if(coinsSave!= -99){
    	currentSave = coinsSave[t]; 
	 
	  if (currentSave[0] >= 0) {
		for (var i = 0; i < currentSave.length; i++) {
			coins[lev][parseInt(currentSave[i])].gathered = true;
			coins[lev][parseInt(currentSave[i])].saved = true;
		}
 	  }
	 }
	 }
}