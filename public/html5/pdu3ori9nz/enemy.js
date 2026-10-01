
var enemies = [
	[
		new simpleEnemy(187, 370, 313, 313, 2.9,0),
		new simpleEnemy(187, 370, 363, 363, 2.9,0),
		new simpleEnemy(187, 370, 413, 413, 2.9,0),
		
		new simpleEnemy(370, 187, 338, 338, 2.9,0),
		new simpleEnemy(370, 187, 388, 388, 2.9,0),
		
		
		new staticEnemy(237, 313),
		new staticEnemy(237, 338),
		
		new staticEnemy(163, 412),
		new staticEnemy(163, 387),
		
		
		new simpleCircularEnemy(125, 375, 0, -180, -6),
		new simpleCircularEnemy(125, 375, 18, -180, -6),		
		new simpleCircularEnemy(125, 375, 36, -180, -6),
		
		new simpleEnemy(532, 820, 313, 313, 2.9,0),
		new simpleEnemy(532, 820, 338, 338, 2.9,0),
		new simpleEnemy(532, 820, 363, 363, 2.9,0),
		new simpleEnemy(532, 820, 388, 388, 2.9,0),
		new simpleEnemy(532, 820, 413, 413, 2.9,0),
		
		
		new simpleEnemy(587, 587, 307, 418,0,2.3),
		new simpleEnemy(612, 612, 307, 418,0,2.3),
		new simpleEnemy(637, 637, 307, 418,0,2.3),
		new simpleEnemy(662, 662, 307, 418,0,2.3),
		new simpleEnemy(687, 687, 307, 418,0,2.3),
		
		
		
		
		new staticEnemy(663, 338),
		new staticEnemy(663, 313),
		
		new staticEnemy(763, 362),
		new staticEnemy(763, 337),
		
		
		new staticEnemy(588, 413),
		new staticEnemy(613, 313),
		
		
	],
	// level 1
	[
		new simpleEnemy(263, 263, 395, 207, 0,4),
		new simpleEnemy(288, 288, 395, 207, 0, 4),
		new simpleEnemy(313, 313, 395, 207, 0, 4),
		
		new simpleEnemy(538, 538, 395, 207, 0,4),
		new simpleEnemy(563, 563, 395, 207, 0, 4),
		new simpleEnemy(588, 588, 395, 207, 0, 4),
		
		new simpleEnemy(388, 388, 207, 395, 0,4),
		new simpleEnemy(413, 413, 207, 395, 0, 4),
		new simpleEnemy(438, 438, 207, 395, 0, 4),
		
		new simpleEnemy(663, 663, 207, 395, 0,4),
		new simpleEnemy(688, 688, 207, 395, 0, 4),
		new simpleEnemy(713, 713, 207, 395, 0, 4),
		
		new simpleEnemy(257, 720, 213, 213, 4, 0),
		new simpleEnemy(257, 720, 238, 238, 4, 0),
		new simpleEnemy(257, 720, 263, 263, 4, 0),
		
		new simpleEnemy(720,257, 338, 338, 4, 0),
		new simpleEnemy(720,257, 363, 363, 4, 0),
		new simpleEnemy(720,257, 388, 388, 4, 0),
		
		
	],

	// level 2
	[
		new simpleEnemy(189, 189, 157, 445, 0, 6),
		new simpleEnemy(239, 239, 157, 445, 0, 6),
		new simpleEnemy(289, 289, 157, 445, 0, 6),
		new simpleEnemy(637, 637, 157, 445, 0, 6),
		new simpleEnemy(687, 687, 157, 445, 0, 6),
		
		
		new simpleEnemy(213, 213, 445, 157, 0, 6),
		new simpleEnemy(263, 263, 445, 157, 0, 6),
		
		new simpleEnemy(613, 613, 445, 157, 0, 6),
		new simpleEnemy(663, 663, 445, 157, 0, 6),
		new simpleEnemy(713, 713, 445, 157, 0, 6),
		
		new simpleEnemy(313, 587, 162, 162, 4.5, 0),
		new simpleEnemy(313, 587, 187, 187, 4.5, 0),
		new simpleEnemy(313, 587, 212, 212, 4.5, 0),
		
		new simpleEnemy(587,313, 388, 388, 4.5, 0),
		new simpleEnemy(587,313, 413, 413, 4.5, 0),
		new simpleEnemy(587,313, 438, 438, 4.5, 0)
		
	
		
	],
	
	// level 3
	[
		new simpleEnemy(183, 543, 213, 213, 7, 0),
		new simpleEnemy(183, 543, 238, 238, 7, 0),
		
		new simpleEnemy(183, 543, 313, 313, 7, 0),
		new simpleEnemy(183, 543, 338, 338, 7, 0),
		
		new simpleEnemy(543, 183, 263,263, 7, 0),
		new simpleEnemy(543, 183, 288, 288, 7, 0),
		
		new simpleEnemy(543, 183, 363, 363, 7, 0),
		new simpleEnemy(543, 183, 388, 388, 7, 0),
		
		
	],
	
	// level 4
	[
		new staticEnemy(188, 188),
		new staticEnemy(213, 188),
		new staticEnemy(238, 188),
		new staticEnemy(263, 188),
		new staticEnemy(288, 188),
		new staticEnemy(313, 188),
		new staticEnemy(338, 188),
		new staticEnemy(362, 188),
		new staticEnemy(388, 188),
		new staticEnemy(413, 188),
		new staticEnemy(438, 188),
		
		new staticEnemy(488, 188),
		new staticEnemy(513, 188),
		new staticEnemy(538, 188),
		new staticEnemy(562, 188),
		new staticEnemy(588, 188),
		new staticEnemy(613, 188),
		new staticEnemy(638, 188),
		new staticEnemy(663, 188),
		new staticEnemy(688, 188),
		new staticEnemy(713, 188),
		//
		new staticEnemy(188, 213),
		
		new staticEnemy(238, 213),
		
		
		
		new staticEnemy(338, 213),
		
		
		
		new staticEnemy(438, 213),
		
		new staticEnemy(488, 213),
		
		
		new staticEnemy(563, 213),
		
		
		new staticEnemy(663, 213),
		
		new staticEnemy(713, 213),
		//
		new staticEnemy(188, 238),
		
		
		
		new staticEnemy(288, 238),
		
		
		
		new staticEnemy(388, 238),
		
		
		
		new staticEnemy(488, 238),
		
		
		
		
		new staticEnemy(613, 238),
		new staticEnemy(713, 238),
		//
		
		new staticEnemy(188, 263),
		
		new staticEnemy(238, 263),
		new staticEnemy(263, 263),
		new staticEnemy(288, 263),
		new staticEnemy(313, 263),
		new staticEnemy(338, 263),
		new staticEnemy(362, 263),
		new staticEnemy(388, 263),
		new staticEnemy(413, 263),
		new staticEnemy(438, 263),
		new staticEnemy(462, 263),
		new staticEnemy(488, 263),
		new staticEnemy(513, 263),
		new staticEnemy(538, 263),
		new staticEnemy(562, 263),
		new staticEnemy(588, 263),
		new staticEnemy(613, 263),
		new staticEnemy(638, 263),
		new staticEnemy(663, 263),
		
		new staticEnemy(713, 263),
		//
		
		new staticEnemy(188, 288),
		
		new staticEnemy(238, 288),
		
		
		new staticEnemy(313, 288),
		
		
		
		
		new staticEnemy(413, 288),
		
		
		
		new staticEnemy(513, 288),
		
		new staticEnemy(713, 288),
		//
		new staticEnemy(188, 313),
		
		new staticEnemy(238, 313),
		
		
		new staticEnemy(313, 313),
		
		new staticEnemy(362, 313),
		
		new staticEnemy(413, 313),
		
		new staticEnemy(462, 313),
		
		
		
		new staticEnemy(562, 313),
		new staticEnemy(588, 313),
		new staticEnemy(613, 313),
		new staticEnemy(638, 313),
		new staticEnemy(663, 313),
		
		new staticEnemy(713, 313),
		//
		new staticEnemy(188, 338),
		
		
		
		new staticEnemy(288, 338),
		new staticEnemy(313, 338),
		
		new staticEnemy(362, 338),
		
		
		
		new staticEnemy(462, 338),
		new staticEnemy(488, 338),
		
		new staticEnemy(538, 338),
		new staticEnemy(562, 338),
		
		
		
		new staticEnemy(663, 338),
		
		new staticEnemy(713, 338),
		//
		new staticEnemy(188, 363),
		
		new staticEnemy(238, 363),
		
		new staticEnemy(288, 363),
		new staticEnemy(313, 363),
		
		
		new staticEnemy(388, 363),
		new staticEnemy(413, 363),
		new staticEnemy(438, 363),
		new staticEnemy(462, 363),
		new staticEnemy(488, 363),
		
		new staticEnemy(538, 363),
		
		
		new staticEnemy(613, 363),
		
		new staticEnemy(663, 363),
		
		new staticEnemy(713, 363),
		
		//
		
		new staticEnemy(188, 388),
		
		new staticEnemy(238, 188),
		
		
		
		new staticEnemy(338, 388),
		
		new staticEnemy(388, 388),
		new staticEnemy(413, 388),
		
		
		
		
		new staticEnemy(538, 388),
		
		
		new staticEnemy(613, 388),
		
		
		
		new staticEnemy(713, 388),
		//
		new staticEnemy(188, 413),
		new staticEnemy(213, 413),
		new staticEnemy(238, 413),
		new staticEnemy(263, 413),
		new staticEnemy(288, 413),
		
		
		
		new staticEnemy(388, 413),
		new staticEnemy(413, 413),
		
		new staticEnemy(462, 413),
		new staticEnemy(488, 413),
		new staticEnemy(513, 413),
		new staticEnemy(538, 413),
		new staticEnemy(562, 413),
		new staticEnemy(588, 413),
		new staticEnemy(613, 413),
		new staticEnemy(638, 413),
		new staticEnemy(663, 413),
		new staticEnemy(688, 413),
		new staticEnemy(713, 413),
		//
		
		new simpleEnemy(181, 720, 337, 337, 5.5, 0),
		new simpleEnemy(337, 337, 182, 421, 0, 5),
		new simpleEnemy(213, 213, 421, 182, 0, 5),
		new simpleEnemy(687, 687, 421, 182, 0, 5),
		new simpleEnemy(488, 181, 213, 213, 5.5, 0),
		
		
		/*new staticEnemy(188, 188),
		new staticEnemy(213, 188),
		new staticEnemy(238, 188),
		new staticEnemy(263, 188),
		new staticEnemy(288, 188),
		new staticEnemy(313, 188),
		new staticEnemy(338, 188),
		new staticEnemy(362, 188),
		new staticEnemy(388, 188),
		new staticEnemy(413, 188),
		new staticEnemy(438, 188),
		new staticEnemy(462, 188),
		new staticEnemy(488, 188),
		new staticEnemy(513, 188),
		new staticEnemy(538, 188),
		new staticEnemy(562, 188),
		new staticEnemy(588, 188),
		new staticEnemy(613, 188),
		new staticEnemy(638, 188),
		new staticEnemy(663, 188),
		new staticEnemy(688, 188),
		new staticEnemy(713, 188),*/
		
		
		
		
		
	],
	
	// level 5
	[
		new simpleEnemy(212, 212, 156, 420, 0, 4.4),
		new simpleEnemy(237, 237, 156, 420, 0, 4.4),
		new simpleEnemy(212, 212, 181, 445, 0, 4.4),
		new simpleEnemy(237, 237, 181, 445, 0, 4.4),
		
		
		new simpleEnemy(663, 663, 420,156, 0, 4.4),
		new simpleEnemy(688, 688, 420,156, 0, 4.4),
		new simpleEnemy(663, 663, 445, 181, 0, 4.4),
		new simpleEnemy(688, 688, 445, 181, 0, 4.4),
		
		new simpleEnemy(207,670 , 238, 238, 4.5, 0),
		new simpleEnemy(232, 695, 238, 238, 4.5, 0),
		new simpleEnemy(207,670, 263, 263, 4.5, 0),
		new simpleEnemy(232, 695, 263, 263, 4.5, 0),
		
		new simpleEnemy(207,670 , 413, 413, 4.5, 0),
		new simpleEnemy(232, 695, 413, 413, 4.5, 0),
		new simpleEnemy(207,670, 438, 438, 4.5, 0),
		new simpleEnemy(232, 695, 438, 438, 4.5, 0),
		
		new simpleEnemy(670,207, 163, 163, 4.5, 0),
		new simpleEnemy(695, 232, 163, 163, 4.5, 0),
		new simpleEnemy(670,207, 188, 188, 4.5, 0),
		new simpleEnemy(695, 232, 188, 188, 4.5, 0),
		
		new simpleEnemy(670,207, 337, 337, 4.5, 0),
		new simpleEnemy(695, 232, 337, 337, 4.5, 0),
		new simpleEnemy(670,207, 362, 362, 4.5, 0),
		new simpleEnemy(695, 232, 362, 362, 4.5, 0),
		
		
		
	],
	
	// level 6
	[
		new simpleEnemy(132,344, 88,88, 3.4, 0),
		new simpleEnemy(132,344, 113,113, 3.4, 0),
		new simpleEnemy(132,344, 138,138, 3.4, 0),
		new simpleEnemy(132,344, 162,162, 3.4, 0),
		
		new simpleEnemy(132,344, 438,438, 3.4, 0),
		new simpleEnemy(132,344, 462,462, 3.4, 0),
		new simpleEnemy(132,344, 487,487, 3.4, 0),
		new simpleEnemy(132,344, 512,512, 3.4, 0),
		
		new simpleEnemy(344,132, 263,263, 3.4, 0),
		new simpleEnemy(344,132, 288,288, 3.4, 0),
		new simpleEnemy(344,132, 313,313, 3.4, 0),
		new simpleEnemy(344,132, 338,338, 3.4, 0),
		
		new simpleEnemy(769,557, 88, 88, 3.4, 0),
		new simpleEnemy(769,557, 113, 113, 3.4, 0),
		new simpleEnemy(769,557, 138, 138, 3.4, 0),
		new simpleEnemy(769,557, 163, 163, 3.4, 0),
		
		new simpleEnemy(769,557, 438,438, 3.4, 0),
		new simpleEnemy(769,557, 462,462, 3.4, 0),
		new simpleEnemy(769,557, 487,487, 3.4, 0),
		new simpleEnemy(769,557, 512,512, 3.4, 0),
		
		new simpleEnemy(557,769, 263,263, 3.4, 0),
		new simpleEnemy(557,769, 288,288, 3.4, 0),
		new simpleEnemy(557,769, 313,313, 3.4, 0),
		new simpleEnemy(557,769, 338,338, 3.4, 0),
		
		new simpleEnemy(138,138, 295,82, 0, 3.4),
		new simpleEnemy(163,163, 295,82, 0, 3.4),
		new simpleEnemy(188,188, 295,82, 0, 3.4),
		new simpleEnemy(213,213, 295,82, 0, 3.4),
		
		new simpleEnemy(688,688, 295,82, 0, 3.4),
		new simpleEnemy(713,713, 295,82, 0, 3.4),
		new simpleEnemy(738,738, 295,82, 0, 3.4),
		new simpleEnemy(763,763, 295,82, 0, 3.4),
		
		new simpleEnemy(138,138, 307,518, 0, 3.4),
		new simpleEnemy(163,163, 307,518, 0, 3.4),
		new simpleEnemy(188,188, 307,518, 0, 3.4),
		new simpleEnemy(213,213, 307,518, 0, 3.4),
		
		new simpleEnemy(688,688, 307,518, 0, 3.4),
		new simpleEnemy(713,713, 307,518, 0, 3.4),
		new simpleEnemy(738,738, 307,518, 0, 3.4),
		new simpleEnemy(763,763, 307,518, 0, 3.4),
		
		new simpleEnemy(263,263, 82,295, 0, 3.4),
		new simpleEnemy(288,288, 82,295, 0, 3.4),
		new simpleEnemy(313,313, 82,295, 0, 3.4),
		new simpleEnemy(338,338, 82,295, 0, 3.4),
		
		new simpleEnemy(563,563, 82,295, 0, 3.4),
		new simpleEnemy(588,588, 82,295, 0, 3.4),
		new simpleEnemy(613,613, 82,295, 0, 3.4),
		new simpleEnemy(638,638, 82,295, 0, 3.4),
		
		new simpleEnemy(263,263, 518,307, 0, 3.4),
		new simpleEnemy(288,288, 518,307, 0, 3.4),
		new simpleEnemy(313,313, 518,307, 0, 3.4),
		new simpleEnemy(338,338, 518,307, 0, 3.4),
		
		new simpleEnemy(563,563, 518,307, 0, 3.4),
		new simpleEnemy(588,588, 518,307, 0, 3.4),
		new simpleEnemy(613,613, 518,307, 0, 3.4),
		new simpleEnemy(638,638, 518,307, 0, 3.4)
		
	],
	
	// level 7
	[
		new simpleEnemy(143,107 , 138, 138, 0.45, 0),
		new simpleEnemy(143,107 , 163, 163, 0.45, 0),
		new simpleEnemy(143,107 , 213, 213, 0.45, 0),
		new simpleEnemy(143,107 , 188, 188, 0.45, 0),
		
		new simpleEnemy(243,207 , 138, 138, 0.45, 0),
		new simpleEnemy(243,207 , 163, 163, 0.45, 0),
		new simpleEnemy(243,207 , 213, 213, 0.45, 0),
		new simpleEnemy(243,207 , 188, 188, 0.45, 0),
		
		new simpleEnemy(343,307 , 138, 138, 0.45, 0),
		new simpleEnemy(343,307 , 163, 163, 0.45, 0),
		new simpleEnemy(343,307 , 213, 213, 0.45, 0),
		new simpleEnemy(343,307 , 188, 188, 0.45, 0),
		
		new simpleEnemy(443,407 , 138, 138, 0.45, 0),
		new simpleEnemy(443,407 , 163, 163, 0.45, 0),
		new simpleEnemy(443,407 , 213, 213, 0.45, 0),
		new simpleEnemy(443,407 , 188, 188, 0.45, 0),
		
		new simpleEnemy(543,507 , 138, 138, 0.45, 0),
		new simpleEnemy(543,507 , 163, 163, 0.45, 0),
		new simpleEnemy(543,507 , 213, 213, 0.45, 0),
		new simpleEnemy(543,507 , 188, 188, 0.45, 0),
		
		new simpleEnemy(643,607 , 138, 138, 0.45, 0),
		new simpleEnemy(643,607 , 163, 163, 0.45, 0),
		new simpleEnemy(643,607 , 213, 213, 0.45, 0),
		new simpleEnemy(643,607 , 188, 188, 0.45, 0),
		
		new simpleEnemy(743,707 , 138, 138, 0.45, 0),
		new simpleEnemy(743,707 , 163, 163, 0.45, 0),
		new simpleEnemy(743,707 , 213, 213, 0.45, 0),
		new simpleEnemy(743,707 , 188, 188, 0.45, 0),
		///
		new simpleEnemy(293, 257 , 163, 163, 0.45, 0),
		new simpleEnemy(293, 257 , 188, 188, 0.45, 0),
		new simpleEnemy(293, 257 , 213, 213, 0.45, 0),
		new simpleEnemy(293, 257 , 238, 238, 0.45, 0),
		
		new simpleEnemy(393, 357 , 163, 163, 0.45, 0),
		new simpleEnemy(393, 357 , 188, 188, 0.45, 0),
		new simpleEnemy(393, 357 , 213, 213, 0.45, 0),
		new simpleEnemy(393, 357 , 238, 238, 0.45, 0),
		
		new simpleEnemy(493, 457 , 163, 163, 0.45, 0),
		new simpleEnemy(493, 457 , 188, 188, 0.45, 0),
		new simpleEnemy(493, 457 , 213, 213, 0.45, 0),
		new simpleEnemy(493, 457 , 238, 238, 0.45, 0),
		
		new simpleEnemy(593, 557 , 163, 163, 0.45, 0),
		new simpleEnemy(593, 557 , 188, 188, 0.45, 0),
		new simpleEnemy(593, 557 , 213, 213, 0.45, 0),
		new simpleEnemy(593, 557 , 238, 238, 0.45, 0),
		
		new simpleEnemy(693, 657 , 163, 163, 0.45, 0),
		new simpleEnemy(693, 657 , 188, 188, 0.45, 0),
		new simpleEnemy(693, 657 , 213, 213, 0.45, 0),
		new simpleEnemy(693, 657 , 238, 238, 0.45, 0),
		
		new simpleEnemy(793, 757 , 163, 163, 0.45, 0),
		new simpleEnemy(793, 757 , 188, 188, 0.45, 0),
		new simpleEnemy(793, 757 , 213, 213, 0.45, 0),
		new simpleEnemy(793, 757 , 238, 238, 0.45, 0),
		
		new simpleEnemy(193, 157 , 163, 163, 0.45, 0),
		new simpleEnemy(193, 157 , 188, 188, 0.45, 0),
		new simpleEnemy(193, 157 , 213, 213, 0.45, 0),
		new simpleEnemy(193, 157 , 238, 238, 0.45, 0),
		
		new simpleEnemy(138, 138 , 358, 469, 0, 3.2),
		new simpleEnemy(188, 188 , 358, 469, 0, 3.2),
		new simpleEnemy(238, 238 , 358, 469, 0, 3.2),
		new simpleEnemy(288, 288 , 358, 469, 0, 3.2),
		new simpleEnemy(338, 338 , 358, 469, 0, 3.2),
		new simpleEnemy(388, 388 , 358, 469, 0, 3.2),
		new simpleEnemy(438, 438 , 358, 469, 0, 3.2),
		new simpleEnemy(488, 488 , 358, 469, 0, 3.2),
		new simpleEnemy(538, 538 , 358, 469, 0, 3.2),
		new simpleEnemy(588, 588 , 358, 469, 0, 3.2),
		new simpleEnemy(638, 638 , 358, 469, 0, 3.2),
		new simpleEnemy(688, 688 , 358, 469, 0, 3.2),
		new simpleEnemy(638, 638 , 358, 469, 0, 3.2),
		new simpleEnemy(688, 688 , 358, 469, 0, 3.2),
		new simpleEnemy(738, 738 , 358, 469, 0, 3.2),
		new simpleEnemy(788, 788 , 358, 469, 0, 3.2),
		
		new simpleEnemy(113, 113 , 469,358, 0, 3.2),
		new simpleEnemy(163, 163 , 469,358, 0, 3.2),
		new simpleEnemy(213, 213 , 469,358, 0, 3.2),
		new simpleEnemy(263, 263 , 469,358, 0, 3.2),
		new simpleEnemy(313, 313 , 469,358, 0, 3.2),
		new simpleEnemy(363, 363 , 469,358, 0, 3.2),
		new simpleEnemy(413, 413 , 469,358, 0, 3.2),
		new simpleEnemy(463, 463 , 469,358, 0, 3.2),
		new simpleEnemy(513, 513 , 469,358, 0, 3.2),
		new simpleEnemy(563, 563 , 469,358, 0, 3.2),
		new simpleEnemy(613, 613 , 469,358, 0, 3.2),
		new simpleEnemy(663, 663 , 469,358, 0, 3.2),
		new simpleEnemy(713, 713 , 469,358, 0, 3.2),
		new simpleEnemy(763, 763 , 469,358, 0, 3.2),
		
		new simpleEnemy(108, 268 , 413,413, 1.2, 0),
		new simpleEnemy(108, 268 , 438,438, 1.2, 0),
		new simpleEnemy(108, 268 , 463,463, 1.2, 0),
		
		new simpleEnemy(633, 793 , 413,413, 1.2, 0),
		new simpleEnemy(633, 793 , 438,438, 1.2, 0),
		new simpleEnemy(633, 793 , 463,463, 1.2, 0),
		
		new simpleEnemy(282, 442 , 363,363, 1.2, 0),
		new simpleEnemy(282, 442 , 388,388, 1.2, 0),
		new simpleEnemy(282, 442 , 413,413, 1.2, 0),
		
		new simpleEnemy(458, 618 , 363,363, 1.2, 0),
		new simpleEnemy(458, 618 , 388,388, 1.2, 0),
		new simpleEnemy(458, 618 , 413,413, 1.2, 0),
		
		
		
		
		
		
		
		
        		
		
		
	],

	// level 8
	[
		new simpleEnemy(108, 369, 213, 213, 7.5, 0),
		new simpleEnemy(108, 369, 238, 238, 7.5, 0),
		
		new simpleEnemy(369, 108, 138, 138, 7.5, 0),
		new simpleEnemy(369, 108, 163, 163, 7.5, 0),
		new simpleEnemy(369, 108, 188, 188, 7.5, 0),
		
		new simpleEnemy(794,533, 213, 213, 7.5, 0),
		new simpleEnemy(794,533, 238, 238, 7.5, 0),
		
		new simpleEnemy(533, 794, 138, 138, 7.5, 0),
		new simpleEnemy(533, 794, 163, 163, 7.5, 0),
		new simpleEnemy(533, 794, 188, 188, 7.5, 0),
		
		new simpleEnemy(263, 263, 469, 281, 0, 2),
		new simpleEnemy(313, 313, 469, 281, 0, 2),
		new simpleEnemy(363, 363, 469, 281, 0, 2),
		
		new simpleEnemy(288, 288, 281, 469, 0, 2),
		new simpleEnemy(338, 338, 281, 469, 0, 2),
		
		new simpleEnemy(444, 257, 363, 363, 2, 0),
		new simpleEnemy(444, 257, 413, 413, 2, 0),
		new simpleEnemy(444, 257, 463, 463, 2, 0),
		
		new simpleEnemy(257,444, 388, 388, 2, 0),
		new simpleEnemy(257,444, 438, 438, 2, 0),
		
		new staticEnemy(263, 337),
		new staticEnemy(288, 337),
		new staticEnemy(313, 337),
		
		new staticEnemy(387, 363),
		new staticEnemy(387, 388),
		new staticEnemy(387, 413),
		
		new simpleEnemy(608,794, 313, 313, 1.7, 0),
		new simpleEnemy(608,794, 363, 363, 1.7, 0),
		new simpleEnemy(608,794, 463, 463, 1.7, 0),
		
		new simpleEnemy(794,608, 288, 288, 1.7, 0),
		new simpleEnemy(794,608, 338, 338, 1.7, 0),
		new simpleEnemy(794,608, 438, 438, 1.7, 0),
		
		new simpleEnemy(612,612, 469, 283, 0, 1.7),
		new simpleEnemy(637,637, 469, 283, 0, 1.7),
		
		new simpleEnemy(762,762,  283,469, 0, 1.7),
		new simpleEnemy(787,787, 283,469, 0, 1.7),
		
		new staticEnemy(613, 413),
		new staticEnemy(638, 413),
		new staticEnemy(663, 413),
		new staticEnemy(688, 413),
		new staticEnemy(713, 413),
		new staticEnemy(738, 413),
		
		new staticEnemy(663, 338),
		new staticEnemy(688, 338),
		new staticEnemy(713, 338),
		new staticEnemy(763, 338),
		new staticEnemy(788, 338),
		new staticEnemy(738, 338)
		
		
	
	],

	// level 9
	[
		
		new linearEnemy([
			[162, 112, 187, 187, 3.4, 0],
			[112, 112, 187, 237, 0, 3.4],
			[112, 162, 237, 237, 3.4, 0],
            [162, 162, 237, 187, 0, 3.4]
						
		]),
		
		new linearEnemy([
			
			[112, 162, 237, 237, 3.4, 0],
            [162, 162, 237, 187, 0, 3.4],
			[162, 112, 187, 187, 3.4, 0],
			[112, 112, 187, 237, 0, 3.4]
						
		]),
		
		
		new linearEnemy([
			[113, 163, 263, 263, 3.4, 0],
			[163, 163, 263, 313, 0, 3.4],
			[163, 113, 313, 313, 3.4, 0],
            [113, 113, 313, 263, 0, 3.4]
						
		]),
		
		new linearEnemy([
			[163, 113, 313, 313, 3.4, 0],
            [113, 113, 313, 263, 0, 3.4],
			[113, 163, 263, 263, 3.4, 0],
			[163, 163, 263, 313, 0, 3.4]
			
						
		]),
		
		///
		new linearEnemy([
			[162, 112, 337, 337, 3.4, 0],
			[112, 112, 337, 387, 0, 3.4],
			[112, 162, 387, 387, 3.4, 0],
            [162, 162, 387, 337, 0, 3.4]
						
		]),
		
		new linearEnemy([
			
			[112, 162, 387, 387, 3.4, 0],
            [162, 162, 387, 337, 0, 3.4],
			[162, 112, 337, 337, 3.4, 0],
			[112, 112, 337, 387, 0, 3.4]
						
		]),
		
		
		new linearEnemy([
			[113, 163, 413, 413, 3.4, 0],
			[163, 163, 413, 463, 0, 3.4],
			[163, 113, 463, 463, 3.4, 0],
            [113, 113, 4633, 413, 0, 3.4]
						
		]),
		
		new linearEnemy([
			[163, 113, 463, 463, 3.4, 0],
            [113, 113, 463, 413, 0, 3.4],
			[113, 163, 413, 413, 3.4, 0],
			[163, 163, 413, 463, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			[288, 338, 138, 138, 3.4, 0],
			[338, 338, 138, 188, 0, 3.4],
			[338, 288, 188, 188, 3.4, 0],
            [288, 288, 188, 138, 0, 3.4]
						
		]),
		
		new linearEnemy([
			[338, 288, 188, 188, 3.4, 0],
            [288, 328, 188, 138, 0, 3.4],
			[288, 338, 138, 138, 3.4, 0],
			[338, 338, 138, 188, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			[413, 363, 138, 138, 3.4, 0],
            [363, 363, 138, 188, 0, 3.4],
			[363, 413, 188, 188, 3.4, 0],
			[413, 413, 188, 138, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			
			[363, 413, 188, 188, 3.4, 0],
			[413, 413, 188, 138, 0, 3.4],
			[413, 363, 138, 138, 3.4, 0],
            [363, 363, 138, 188, 0, 3.4]
			
						
		]),
		//
		
		new linearEnemy([
			[438, 488, 138, 138, 3.4, 0],
			[488, 488, 138, 188, 0, 3.4],
			[488, 438, 188, 188, 3.4, 0],
            [438, 438, 188, 138, 0, 3.4]
						
		]),
		
		new linearEnemy([
			[488, 438, 188, 188, 3.4, 0],
            [438, 438, 188, 138, 0, 3.4],
			[438, 488, 138, 138, 3.4, 0],
			[488, 488, 138, 188, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			[563, 513, 138, 138, 3.4, 0],
            [513, 513, 138, 188, 0, 3.4],
			[513, 563, 188, 188, 3.4, 0],
			[563, 563, 188, 138, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			
			[513, 563, 188, 188, 3.4, 0],
			[563, 563, 188, 138, 0, 3.4],
			[563, 513, 138, 138, 3.4, 0],
            [513, 513, 138, 188, 0, 3.4]
			
						
		]),
		///
		
			new linearEnemy([
			[588, 638, 138, 138, 3.4, 0],
			[638, 638, 138, 188, 0, 3.4],
			[638, 588, 188, 188, 3.4, 0],
            [588, 588, 188, 138, 0, 3.4]
						
		]),
		
		new linearEnemy([
			[638, 588, 188, 188, 3.4, 0],
            [588, 628, 188, 138, 0, 3.4],
			[588, 638, 138, 138, 3.4, 0],
			[638, 638, 138, 188, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			[713, 663, 138, 138, 3.4, 0],
            [663, 663, 138, 188, 0, 3.4],
			[663, 713, 188, 188, 3.4, 0],
			[713, 713, 188, 138, 0, 3.4]
			
						
		]),
		
		new linearEnemy([
			
			[663, 713, 188, 188, 3.4, 0],
			[713, 713, 188, 138, 0, 3.4],
			[713, 663, 138, 138, 3.4, 0],
            [663, 663, 138, 188, 0, 3.4]
			
						
		]),
		/////
		
		new linearEnemy([
			
			[213, 263, 238, 238, 2.8, 0],
			[263, 263, 238, 288, 0, 2.8],
			[263, 213, 288, 288, 2.8, 0],
            [213, 213, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[238, 288, 238, 238, 2.8, 0],
			[288, 288, 238, 288, 0, 2.8],
			[288, 238, 288, 288, 2.8, 0],
            [238, 238, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[213, 263, 263, 263, 2.8, 0],
			[263, 263, 263, 313, 0, 2.8],
			[263, 213, 313, 313, 2.8, 0],
            [213, 213, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[238, 288, 263, 263, 2.8, 0],
			[288, 288, 263, 313, 0, 2.8],
			[288, 238, 313, 313, 2.8, 0],
            [238, 238, 313, 263, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[313, 363, 238, 238, 2.8, 0],
			[363, 363, 238, 288, 0, 2.8],
			[363, 313, 288, 288, 2.8, 0],
            [313, 313, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[338, 388, 238, 238, 2.8, 0],
			[388, 388, 238, 288, 0, 2.8],
			[388, 338, 288, 288, 2.8, 0],
            [338, 338, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[313, 363, 263, 263, 2.8, 0],
			[363, 363, 263, 313, 0, 2.8],
			[363, 313, 313, 313, 2.8, 0],
            [313, 313, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[338, 388, 263, 263, 2.8, 0],
			[388, 388, 263, 313, 0, 2.8],
			[388, 338, 313, 313, 2.8, 0],
            [338, 338, 313, 263, 0, 2.8]
			
		]),
		//
		
		new linearEnemy([
			
			[413, 463, 238, 238, 2.8, 0],
			[463, 463, 238, 288, 0, 2.8],
			[463, 413, 288, 288, 2.8, 0],
            [413, 413, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[438, 488, 238, 238, 2.8, 0],
			[488, 488, 238, 288, 0, 2.8],
			[488, 438, 288, 288, 2.8, 0],
            [438, 438, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[413, 463, 263, 263, 2.8, 0],
			[463, 463, 263, 313, 0, 2.8],
			[463, 413, 313, 313, 2.8, 0],
            [413, 413, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[438, 488, 263, 263, 2.8, 0],
			[488, 488, 263, 313, 0, 2.8],
			[488, 438, 313, 313, 2.8, 0],
            [438, 438, 313, 263, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[513, 563, 238, 238, 2.8, 0],
			[563, 563, 238, 288, 0, 2.8],
			[563, 513, 288, 288, 2.8, 0],
            [513, 513, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[538, 588, 238, 238, 2.8, 0],
			[588, 588, 238, 288, 0, 2.8],
			[588, 538, 288, 288, 2.8, 0],
            [538, 538, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[513, 563, 263, 263, 2.8, 0],
			[563, 563, 263, 313, 0, 2.8],
			[563, 513, 313, 313, 2.8, 0],
            [513, 513, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[538, 588, 263, 263, 2.8, 0],
			[588, 588, 263, 313, 0, 2.8],
			[588, 538, 313, 313, 2.8, 0],
            [538, 538, 313, 263, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[613, 663, 238, 238, 2.8, 0],
			[663, 663, 238, 288, 0, 2.8],
			[663, 613, 288, 288, 2.8, 0],
            [613, 613, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[638, 688, 238, 238, 2.8, 0],
			[688, 688, 238, 288, 0, 2.8],
			[688, 638, 288, 288, 2.8, 0],
            [638, 638, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[613, 663, 263, 263, 2.8, 0],
			[663, 663, 263, 313, 0, 2.8],
			[663, 613, 313, 313, 2.8, 0],
            [613, 613, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[638, 688, 263, 263, 2.8, 0],
			[688, 688, 263, 313, 0, 2.8],
			[688, 638, 313, 313, 2.8, 0],
            [638, 638, 313, 263, 0, 2.8]
			
		]),
		
        //
		
		new linearEnemy([
			
			[713, 763, 238, 238, 2.8, 0],
			[763, 763, 238, 288, 0, 2.8],
			[763, 713, 288, 288, 2.8, 0],
            [713, 713, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[738, 788, 238, 238, 2.8, 0],
			[788, 788, 238, 288, 0, 2.8],
			[788, 738, 288, 288, 2.8, 0],
            [738, 738, 288, 238, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[713, 763, 263, 263, 2.8, 0],
			[763, 763, 263, 313, 0, 2.8],
			[763, 713, 313, 313, 2.8, 0],
            [713, 713, 313, 263, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[738, 788, 263, 263, 2.8, 0],
			[788, 788, 263, 313, 0, 2.8],
			[788, 738, 313, 313, 2.8, 0],
            [738, 738, 313, 263, 0, 2.8]
			
		]), 
		
		//
		
		///////////////////
		/////
		
		new linearEnemy([
			
			[213, 263, 338, 338, 2.8, 0],
			[263, 263, 338, 388, 0, 2.8],
			[263, 213, 388, 388, 2.8, 0],
            [213, 213, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[238, 288, 338, 338, 2.8, 0],
			[288, 288, 338, 388, 0, 2.8],
			[288, 238, 388, 388, 2.8, 0],
            [238, 238, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[213, 263, 363, 363, 2.8, 0],
			[263, 263, 363, 413, 0, 2.8],
			[263, 213, 413, 413, 2.8, 0],
            [213, 213, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[238, 288, 363, 363, 2.8, 0],
			[288, 288, 363, 413, 0, 2.8],
			[288, 238, 413, 413, 2.8, 0],
            [238, 238, 413, 363, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[313, 363, 338, 338, 2.8, 0],
			[363, 363, 338, 388, 0, 2.8],
			[363, 313, 388, 388, 2.8, 0],
            [313, 313, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[338, 388, 338, 338, 2.8, 0],
			[388, 388, 338, 388, 0, 2.8],
			[388, 338, 388, 388, 2.8, 0],
            [338, 338, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[313, 363, 363, 363, 2.8, 0],
			[363, 363, 363, 413, 0, 2.8],
			[363, 313, 413, 413, 2.8, 0],
            [313, 313, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[338, 388, 363, 363, 2.8, 0],
			[388, 388, 363, 413, 0, 2.8],
			[388, 338, 413, 413, 2.8, 0],
            [338, 338, 413, 363, 0, 2.8]
			
		]),
		//
		
		new linearEnemy([
			
			[413, 463, 338, 338, 2.8, 0],
			[463, 463, 338, 388, 0, 2.8],
			[463, 413, 388, 388, 2.8, 0],
            [413, 413, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[438, 488, 338, 338, 2.8, 0],
			[488, 488, 338, 388, 0, 2.8],
			[488, 438, 388, 388, 2.8, 0],
            [438, 438, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[413, 463, 363, 363, 2.8, 0],
			[463, 463, 363, 413, 0, 2.8],
			[463, 413, 413, 413, 2.8, 0],
            [413, 413, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[438, 488, 363, 363, 2.8, 0],
			[488, 488, 363, 413, 0, 2.8],
			[488, 438, 413, 413, 2.8, 0],
            [438, 438, 413, 363, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[513, 563, 338, 338, 2.8, 0],
			[563, 563, 338, 388, 0, 2.8],
			[563, 513, 388, 388, 2.8, 0],
            [513, 513, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[538, 588, 338, 338, 2.8, 0],
			[588, 588, 338, 388, 0, 2.8],
			[588, 538, 388, 388, 2.8, 0],
            [538, 538, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[513, 563, 363, 363, 2.8, 0],
			[563, 563, 363, 413, 0, 2.8],
			[563, 513, 413, 413, 2.8, 0],
            [513, 513, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[538, 588, 363, 363, 2.8, 0],
			[588, 588, 363, 413, 0, 2.8],
			[588, 538,413, 413, 2.8, 0],
            [538, 538, 413, 363, 0, 2.8]
			
		]),
		
		//
		
		new linearEnemy([
			
			[613, 663, 338, 338, 2.8, 0],
			[663, 663, 338, 388, 0, 2.8],
			[663, 613, 388, 388, 2.8, 0],
            [613, 613, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[638, 688, 338, 338, 2.8, 0],
			[688, 688, 338, 388, 0, 2.8],
			[688, 638, 388, 388, 2.8, 0],
            [638, 638, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[613, 663, 363, 363, 2.8, 0],
			[663, 663, 363, 413, 0, 2.8],
			[663, 613, 413, 413, 2.8, 0],
            [613, 613, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[638, 688, 363,363, 2.8, 0],
			[688, 688, 363, 413, 0, 2.8],
			[688, 638, 413, 413, 2.8, 0],
            [638, 638, 413, 363, 0, 2.8]
			
		]),
		
        //
		
		new linearEnemy([
			
			[713, 763, 338, 338, 2.8, 0],
			[763, 763, 338, 388, 0, 2.8],
			[763, 713, 388, 388, 2.8, 0],
            [713, 713, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[738, 788, 338, 338, 2.8, 0],
			[788, 788, 338, 388, 0, 2.8],
			[788, 738, 388, 388, 2.8, 0],
            [738, 738, 388, 338, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[713, 763, 363, 363, 2.8, 0],
			[763, 763, 363, 413, 0, 2.8],
			[763, 713, 413, 413, 2.8, 0],
            [713, 713, 413, 363, 0, 2.8]
			
		]),
		
		new linearEnemy([
			
			[738, 788, 363, 363, 2.8, 0],
			[788, 788, 363, 413, 0, 2.8],
			[788, 738, 413, 413, 2.8, 0],
            [738, 738, 413, 363, 0, 2.8]
			
		]), 
	],

	// level 10
	[
		new simpleCircularEnemy(263, 187, 0, 0, 0),
		new simpleCircularEnemy(263, 187, 25, 0, -4),
		new simpleCircularEnemy(263, 187, 50, 0, -4),
		new simpleCircularEnemy(263, 187, 25, 90, -4),
		new simpleCircularEnemy(263, 187, 50, 90, -4),
		new simpleCircularEnemy(263, 187, 25, 180, -4),
		new simpleCircularEnemy(263, 187, 50, 180, -4),
		new simpleCircularEnemy(263, 187, 25, 270, -4),
		new simpleCircularEnemy(263, 187, 50, 270, -4),
		
		new simpleCircularEnemy(363, 187, 0, 0, 0),
		new simpleCircularEnemy(363, 187, 25, 0, 4),
		new simpleCircularEnemy(363, 187, 50, 0, 4),
		new simpleCircularEnemy(363, 187, 25, 90, 4),
		new simpleCircularEnemy(363, 187, 50, 90, 4),
		new simpleCircularEnemy(363, 187, 25, 180, 4),
		new simpleCircularEnemy(363, 187, 50, 180, 4),
		new simpleCircularEnemy(363, 187, 25, 270, 4),
		new simpleCircularEnemy(363, 187, 50, 270, 4),
		
		new simpleCircularEnemy(463, 187, 0, 0, 0),
		new simpleCircularEnemy(463, 187, 25, 0, -4),
		new simpleCircularEnemy(463, 187, 50, 0, -4),
		new simpleCircularEnemy(463, 187, 25, 90, -4),
		new simpleCircularEnemy(463, 187, 50, 90, -4),
		new simpleCircularEnemy(463, 187, 25, 180, -4),
		new simpleCircularEnemy(463, 187, 50, 180, -4),
		new simpleCircularEnemy(463, 187, 25, 270, -4),
		new simpleCircularEnemy(463, 187, 50, 270, -4),
		
		new simpleCircularEnemy(563, 187, 0, 0, 0),
		new simpleCircularEnemy(563, 187, 25, 0, 4),
		new simpleCircularEnemy(563, 187, 50, 0, 4),
		new simpleCircularEnemy(563, 187, 25, 90, 4),
		new simpleCircularEnemy(563, 187, 50, 90, 4),
		new simpleCircularEnemy(563, 187, 25, 180, 4),
		new simpleCircularEnemy(563, 187, 50, 180, 4),
		new simpleCircularEnemy(563, 187, 25, 270, 4),
		new simpleCircularEnemy(563, 187, 50, 270, 4),
		//////////
		new simpleCircularEnemy(263, 413, 0, 0, 0),
		new simpleCircularEnemy(263, 413, 25, 0, 4),
		new simpleCircularEnemy(263, 413, 50, 0, 4),
		new simpleCircularEnemy(263, 413, 25, 90, 4),
		new simpleCircularEnemy(263, 413, 50, 90, 4),
		new simpleCircularEnemy(263, 413, 25, 180, 4),
		new simpleCircularEnemy(263, 413, 50, 180, 4),
		new simpleCircularEnemy(263, 413, 25, 270, 4),
		new simpleCircularEnemy(263, 413, 50, 270, 4),
		
		new simpleCircularEnemy(363, 413, 0, 0, 0),
		new simpleCircularEnemy(363, 413, 25, 0, -4),
		new simpleCircularEnemy(363, 413, 50, 0, -4),
		new simpleCircularEnemy(363, 413, 25, 90, -4),
		new simpleCircularEnemy(363, 413, 50, 90, -4),
		new simpleCircularEnemy(363, 413, 25, 180, -4),
		new simpleCircularEnemy(363, 413, 50, 180, -4),
		new simpleCircularEnemy(363, 413, 25, 270, -4),
		new simpleCircularEnemy(363, 413, 50, 270, -4),
		
		new simpleCircularEnemy(463, 413, 0, 0, 0),
		new simpleCircularEnemy(463, 413, 25, 0, 4),
		new simpleCircularEnemy(463, 413, 50, 0, 4),
		new simpleCircularEnemy(463, 413, 25, 90, 4),
		new simpleCircularEnemy(463, 413, 50, 90, 4),
		new simpleCircularEnemy(463, 413, 25, 180,4),
		new simpleCircularEnemy(463, 413, 50, 180, 4),
		new simpleCircularEnemy(463, 413, 25, 270, 4),
		new simpleCircularEnemy(463, 413, 50, 270, 4),
		
		new simpleCircularEnemy(563, 413, 0, 0, 0),
		new simpleCircularEnemy(563, 413, 25, 0, -4),
		new simpleCircularEnemy(563, 413, 50, 0, -4),
		new simpleCircularEnemy(563, 413, 25, 90, -4),
		new simpleCircularEnemy(563, 413, 50, 90, -4),
		new simpleCircularEnemy(563, 413, 25, 180, -4),
		new simpleCircularEnemy(563, 413, 50, 180, -4),
		new simpleCircularEnemy(563, 413, 25, 270, -4),
		new simpleCircularEnemy(563, 413, 50, 270, -4),
	],
	
	// level 11
	[
		new simpleEnemy(88, 88, 208, 295, 0, 3),
		new simpleEnemy(138, 138, 208, 295, 0, 3),
		new simpleEnemy(113, 113,  295,208, 0, 3),
		
		new simpleEnemy(338, 338, 208, 295, 0, 3),
		new simpleEnemy(388, 388, 208, 295, 0, 3),
		new simpleEnemy(363, 363,  295,208, 0, 3),
		
		new simpleEnemy(238, 238, 208, 295, 0, 3),
		new simpleEnemy(213, 213, 295,208, 0, 3),
		new simpleEnemy(263, 263,  295,208, 0, 3),
		
		new simpleEnemy(88, 88, 408, 495, 0, 3),
		new simpleEnemy(138, 138, 408, 495, 0, 3),
		new simpleEnemy(113, 113,  495,408, 0, 3),
		
		new simpleEnemy(338, 338, 408, 495, 0, 3),
		new simpleEnemy(388, 388, 408, 495, 0, 3),
		new simpleEnemy(363, 363,  495,408, 0, 3),
		
		new simpleEnemy(238, 238, 408, 495, 0, 3),
		new simpleEnemy(213, 213, 495,408, 0, 3),
		new simpleEnemy(263, 263,  495,408, 0, 3),
		
		new simpleEnemy(88, 88, 395, 308, 0, 3),
		new simpleEnemy(138, 138, 395, 308, 0, 3),
		new simpleEnemy(113, 113, 308, 395, 0, 3),
		
		new simpleEnemy(238, 238, 395, 308, 0, 3),
		new simpleEnemy(213, 213, 308, 395, 0, 3),
		new simpleEnemy(263, 263,  308, 395, 0, 3),
		
		new simpleEnemy(338, 338, 395, 308, 0, 3),
		new simpleEnemy(388, 388, 395, 308, 0, 3),
		new simpleEnemy(363, 363, 308, 395, 0, 3),
		//
		new simpleEnemy(463, 463, 183, 469, 0, 3.3),
		new simpleEnemy(488, 488, 183, 469, 0, 3.3),
		new simpleEnemy(463, 463, 469, 183, 0, 3.3),
		new simpleEnemy(488, 488, 469, 183, 0, 3.3),
		
		new simpleEnemy(563, 563, 183, 469, 0, 3.3),
		new simpleEnemy(588, 588, 183, 469, 0, 3.3),
		new simpleEnemy(563, 563, 469, 183, 0, 3.3),
		new simpleEnemy(588, 588, 469, 183, 0, 3.3),
		
		new simpleEnemy(663, 663, 183, 469, 0, 3.3),
		new simpleEnemy(688, 688, 183, 469, 0, 3.3),
		new simpleEnemy(663, 663, 469, 183, 0, 3.3),
		new simpleEnemy(688, 688, 469, 183, 0, 3.3),
		
		new simpleEnemy(763, 763, 183, 469, 0, 3.3),
		new simpleEnemy(788, 788, 183, 469, 0, 3.3),
		new simpleEnemy(763, 763, 469, 183, 0, 3.3),
		new simpleEnemy(788, 788, 469, 183, 0, 3.3)
		
		
	],

	// level 12
	[
		new staticEnemy(237, 188),
		new staticEnemy(262, 188),
		new staticEnemy(287, 188),
		new staticEnemy(313, 188),
		new staticEnemy(337, 188),
		
		
		
		new staticEnemy(438, 188),
		new staticEnemy(463, 188),
		new staticEnemy(488, 188),
		
		
		
		new staticEnemy(588, 188),
		
		//2
		
		
		
		new staticEnemy(313, 213),
		
		
		new staticEnemy(387, 213),
		
		new staticEnemy(438, 213),
		new staticEnemy(463, 213),
		
		
		new staticEnemy(538, 213),
		
		new staticEnemy(588, 213),
		
		new staticEnemy(638, 213),
		
		
		//3
		new staticEnemy(237, 238),
		new staticEnemy(262, 238),
		
		new staticEnemy(313, 238),
		
		new staticEnemy(362, 238),
		new staticEnemy(387, 2388),
		
		new staticEnemy(438, 238),
		
		
		new staticEnemy(513, 238),
		
		
		new staticEnemy(588, 238),
		
		new staticEnemy(638, 238),
		
		//4
		new staticEnemy(237, 263),
		new staticEnemy(262, 263),
		
		
		
		new staticEnemy(362, 263),
		new staticEnemy(387, 263),
		
		
		
		new staticEnemy(488, 263),
		new staticEnemy(513, 263),
		
		new staticEnemy(563, 263),
		
		
		new staticEnemy(638, 263),
		
		//5
	
	
		new staticEnemy(287, 288),
		new staticEnemy(313, 288),
		new staticEnemy(337, 288),
		new staticEnemy(362, 288),
		new staticEnemy(387, 288),
		new staticEnemy(413, 288),
		new staticEnemy(438, 288),
		new staticEnemy(463, 288),
		
		
		
		
		
		new staticEnemy(613, 288),
		
		//6
		new staticEnemy(237, 313),
		
		
		
		
		
		
		
		
		
		
		
		new staticEnemy(513, 313),
		new staticEnemy(538, 313),
		new staticEnemy(563, 313),
		new staticEnemy(588, 313),
		
		
		new staticEnemy(663, 313),
		new staticEnemy(688, 313),
		new staticEnemy(713, 313),
		
		//7
		new staticEnemy(237, 338),
		
		new staticEnemy(287, 338),
		new staticEnemy(313, 338),
		new staticEnemy(337, 338),
		new staticEnemy(362, 338),
		new staticEnemy(387, 338),
		new staticEnemy(413, 338),
		new staticEnemy(438, 338),
		new staticEnemy(463, 338),
		new staticEnemy(488, 338),
		new staticEnemy(513, 338),
		
		new staticEnemy(563, 338),
		new staticEnemy(588, 338),
		
		new staticEnemy(638, 338),
		
		
		
		new staticEnemy(738, 338),
		new staticEnemy(763, 338),
		
		//8
		new staticEnemy(237, 363),
		
		
		
		
		
		
		
		
		
		
		
		
		
		new staticEnemy(588, 363),
		
		new staticEnemy(638, 363),
	
		new staticEnemy(688, 363),
		
		//9
		
		new staticEnemy(262, 388),
		new staticEnemy(287, 388),
		new staticEnemy(313, 388),
		new staticEnemy(337, 388),
		new staticEnemy(362, 388),
		new staticEnemy(387, 388),
		new staticEnemy(413, 388),
		new staticEnemy(438, 388),
		new staticEnemy(463, 388),
		new staticEnemy(488, 388),
		new staticEnemy(513, 388),
		new staticEnemy(538, 388),
		
		new staticEnemy(588, 388),
		
		
		
		new staticEnemy(688, 388),
		new staticEnemy(713, 388),
		new staticEnemy(738, 388),
		new staticEnemy(763, 388),
		
		//
		new staticEnemy(588, 413),
		new staticEnemy(613, 413),
		new staticEnemy(638, 413),
		new staticEnemy(663, 413),
		new staticEnemy(688, 413),
		new staticEnemy(713, 413),
		new staticEnemy(738, 413),
		
		//11
		
		new staticEnemy(763, 463),
		new staticEnemy(788, 463),
		//12
		
		new staticEnemy(738, 488),
		new staticEnemy(763, 488),
		new staticEnemy(788, 488),
		
		new simpleEnemy(313, 313, 183, 419, 0, 4.5),
		new simpleEnemy(413, 413, 183, 419, 0, 4.5),
		new simpleEnemy(513, 513, 183, 419, 0, 4.5),
		new simpleEnemy(613, 613, 183, 419, 0, 4.5),
		
		new simpleEnemy(263, 263, 419,183, 0, 4.5),
		new simpleEnemy(363, 363, 419,183, 0, 4.5),
		new simpleEnemy(463, 463, 419,183, 0, 4.5),
		new simpleEnemy(563, 563, 419,183, 0, 4.5),
		new simpleEnemy(663, 663, 419,183, 0, 4.5),
		
		new simpleEnemy(232, 669, 213, 213, 2.8, 0),
		new simpleEnemy(669, 232, 263, 263, 2.8, 0),
		
		new simpleEnemy(232, 793, 313, 313, 2.8, 0),
		new simpleEnemy(232, 793, 413, 413, 2.8, 0),
		
		new simpleEnemy(793,232, 363, 363, 2.8, 0),
		
		//13
		
		//
		
	],

	// level 13
	[
		new simpleEnemy(332, 569, 188, 188, 6, 0),
		new simpleEnemy(332, 569, 213, 213, 6, 0),
		new simpleEnemy(569, 332, 388, 388, 6, 0),
		new simpleEnemy(569, 332, 413, 413, 6, 0),
		
		new simpleCircularEnemy(124, 136, 16, 60, -4),
		new simpleCircularEnemy(158, 143, 16, -60, -4),
		new simpleCircularEnemy(188, 127, 16, 0, -4),
		new simpleCircularEnemy(245, 144, 16, -60, 4),
		new simpleCircularEnemy(295, 155, 16, -98, -4),
		new simpleCircularEnemy(292, 126, 16, 30, 4),
		new simpleCircularEnemy(127, 202, 16, 50, 4),
		new simpleCircularEnemy(161, 230, 16, -95, 4),
		new simpleCircularEnemy(205, 179, 16, 180, 4),
		new simpleCircularEnemy(161, 230, 16, -95, 4),
		new simpleCircularEnemy(249, 205, 16, -80, 4),
		new simpleCircularEnemy(299, 202, 16, 45, 4),
		new simpleCircularEnemy(219, 243, 16, -150, -4),
		new simpleCircularEnemy(257, 234, 16, 45, -4),
		new simpleCircularEnemy(298, 247, 16, -45, -4),
		new simpleCircularEnemy(123, 271, 16, -135, -4),
		
		new simpleCircularEnemy(160, 271, 16, 45, 4),
		new simpleCircularEnemy(213, 284, 16, 45, 4),
		new simpleCircularEnemy(300, 300, 16, 135, 4),
		new simpleCircularEnemy(133, 328, 16, 45, 4),
		new simpleCircularEnemy(182, 347, 16, -45, 4),
		
		new simpleCircularEnemy(299, 202, 16, 45, 4),
		new simpleCircularEnemy(249, 345, 16, 65, -4),
		new simpleCircularEnemy(302, 357, 16, -45, -4),
		
		new simpleCircularEnemy(127, 407, 16, 110, -4),
		new simpleCircularEnemy(205, 348, 16, 160, 4),
		new simpleCircularEnemy(263, 394, 16, -135, -4),
		new simpleCircularEnemy(134, 421, 16, 190, -4),
		new simpleCircularEnemy(253, 394, 16, 45, 4),
		new simpleCircularEnemy(299, 402, 16, 135, 4),
		new simpleCircularEnemy(172, 444, 16, 0, -4),
		new simpleCircularEnemy(217, 462, 16, -45, 4),
		new simpleCircularEnemy(293, 453, 16, 45, -4),
		new simpleCircularEnemy(142, 467, 16, 40, 4),
		new simpleCircularEnemy(274, 407, 16, 45, 4),
		
		new simpleCircularEnemy(600, 125, 16, 135, 4),
		new simpleCircularEnemy(600, 175, 16, 135, 4),
		new simpleCircularEnemy(600, 225, 16, 135, 4),
		new simpleCircularEnemy(600, 275, 16, 135, 4),
		new simpleCircularEnemy(600, 325, 16, 135, 4),
		new simpleCircularEnemy(600, 375, 16, 135, 4),
		new simpleCircularEnemy(600, 425, 16, 135, 4),
		new simpleCircularEnemy(600, 475, 16, 135, 4),
		
		new simpleCircularEnemy(650, 125, 16, 135, -4),
		new simpleCircularEnemy(650, 175, 16, 135, -4),
		new simpleCircularEnemy(650, 225, 16, 135, -4),
		new simpleCircularEnemy(650, 275, 16, 135, -4),
		new simpleCircularEnemy(650, 325, 16, 135, -4),
		new simpleCircularEnemy(650, 375, 16, 135, -4),
		new simpleCircularEnemy(650, 425, 16, 135, -4),
		new simpleCircularEnemy(650, 475, 16, 135, -4),
		
		new simpleCircularEnemy(675, 125, 16, -45, -4),
		new simpleCircularEnemy(675, 175, 16, -45, -4),
		new simpleCircularEnemy(675, 225, 16, -45, -4),
		new simpleCircularEnemy(675, 275, 16, -45, -4),
		new simpleCircularEnemy(675, 325, 16, -45, -4),
		new simpleCircularEnemy(675, 375, 16, -45, -4),
		new simpleCircularEnemy(675, 425, 16, -45, -4),
		new simpleCircularEnemy(675, 475, 16, -45, -4),
		
		new simpleCircularEnemy(728, 125, 16, 45, 4),
		new simpleCircularEnemy(728, 175, 16, 45, 4),
		new simpleCircularEnemy(728, 225, 16, 45, 4),
		new simpleCircularEnemy(728, 275, 16, 45, 4),
		new simpleCircularEnemy(728, 325, 16, 45, 4),
		new simpleCircularEnemy(728, 375, 16, 45, 4),
		new simpleCircularEnemy(728, 425, 16, 45, 4),
		new simpleCircularEnemy(728, 475, 16, 45, 4),
		
		new simpleCircularEnemy(775, 125, 16, -45, 4),
		new simpleCircularEnemy(775, 175, 16, -45, 4),
		new simpleCircularEnemy(775, 225, 16, -45, 4),
		new simpleCircularEnemy(775, 275, 16, -45, 4),
		new simpleCircularEnemy(775, 325, 16, -45, 4),
		new simpleCircularEnemy(775, 375, 16, -45, 4),
		new simpleCircularEnemy(775, 425, 16, -45, 4),
		new simpleCircularEnemy(775, 475, 16, -45, 4),
		
	],
	
	// level 14
	[
		new simpleEnemy(143, 83, 89, 89, 2.8, 0),
		new simpleEnemy(143, 83, 139, 139, 2.8, 0),
		new simpleEnemy(143, 83, 189, 189, 2.8, 0),
		
		new simpleEnemy(83, 143, 114, 114, 2.8, 0),
		new simpleEnemy(83, 143, 164, 164, 2.8, 0),
		
		new simpleEnemy(87, 87, 268, 208, 0, 2.8),
		new simpleEnemy(137, 137, 268, 208, 0, 2.8),
		new simpleEnemy(187, 187, 268, 208, 0, 2.8),
		new simpleEnemy(237, 237, 268, 208, 0, 2.8),
		
		new simpleEnemy(112, 112, 208, 268, 0, 2.8),
		new simpleEnemy(162, 162, 208, 268, 0, 2.8),
		new simpleEnemy(212, 212, 208, 268, 0, 2.8),
		
		new simpleEnemy(183, 243, 189, 189, 2.8, 0),
		new simpleEnemy(243,183, 164, 164, 2.8, 0),
		
		new simpleEnemy(187,187, 143, 83, 0, 2.8),
		new simpleEnemy(237,237, 143, 83, 0, 2.8),
		new simpleEnemy(287,287, 143, 83, 0, 2.8),
		new simpleEnemy(337,337, 143, 83, 0, 2.8),
		
		new simpleEnemy(212,212, 83, 143, 0, 2.8),
		new simpleEnemy(262,262, 83, 143, 0, 2.8),
		new simpleEnemy(312,312, 83, 143, 0, 2.8),
		
		
		new simpleEnemy(287, 287, 268, 208, 0, 2.8),
		new simpleEnemy(337, 337, 268, 208, 0, 2.8),
		new simpleEnemy(387, 387, 268, 208, 0, 2.8),
		new simpleEnemy(337, 337, 268, 208, 0, 2.8),
		
		new simpleEnemy(312, 312, 208, 268, 0, 2.8),
		new simpleEnemy(362, 362, 208, 268, 0, 2.8),
		new simpleEnemy(312, 312, 208, 268, 0, 2.8),
		
		new simpleEnemy(283, 343, 164, 164, 2.8, 0),
		new simpleEnemy(343,283, 189, 189, 2.8, 0),
		
		//
		new simpleEnemy(88,88, 333, 393, 0, 2.8),
		new simpleEnemy(138,138, 333, 393, 0, 2.8),
		new simpleEnemy(188,188, 333, 393, 0, 2.8),
		new simpleEnemy(238,238, 333, 393, 0, 2.8),
		
		new simpleEnemy(113,113, 393, 333, 0, 2.8),
		new simpleEnemy(163,163, 393, 333, 0, 2.8),
		new simpleEnemy(213,213, 393, 333, 0, 2.8),
		
		new simpleEnemy(288,288, 333, 393, 0, 2.8),
		new simpleEnemy(338,338, 333, 393, 0, 2.8),
		new simpleEnemy(388,388, 333, 393, 0, 2.8),
		new simpleEnemy(438,438, 333, 393, 0, 2.8),
		
		new simpleEnemy(313,313, 393, 333, 0, 2.8),
		new simpleEnemy(363,363, 393, 333, 0, 2.8),
		new simpleEnemy(413,413, 393, 333, 0, 2.8),
		
		new simpleEnemy(82,142, 438, 438, 2.8, 0),
		new simpleEnemy(82,142, 488, 488, 2.8, 0),
		new simpleEnemy(142,82, 413, 413, 2.8, 0),
		new simpleEnemy(142,82, 463, 463, 2.8, 0),
		
		new simpleEnemy(183,243, 413, 413, 2.8, 0),
		new simpleEnemy(243,183, 438, 438, 2.8, 0),
		new simpleEnemy(343,283, 413, 413, 2.8, 0),
		new simpleEnemy(283,343, 438, 438, 2.8, 0),
		
		new simpleEnemy(187,187, 457, 513, 0, 2.8),
		new simpleEnemy(237,237, 457, 513, 0, 2.8),
		new simpleEnemy(287,287, 457, 513, 0, 2.8),
		new simpleEnemy(337,337, 457, 513, 0, 2.8),
		
		
		new simpleEnemy(213,213, 513,457, 0, 2.8),
		new simpleEnemy(263,263, 513,457, 0, 2.8),
		new simpleEnemy(313,313, 513,457, 0, 2.8),
		
		new simpleEnemy(513,513, 83,518, 0, 6.5),
		new simpleEnemy(538,538, 83,518, 0, 6.5),
		new simpleEnemy(563,563, 83,518, 0, 6.5),
		
		new simpleEnemy(663,663, 83,518, 0, 6.5),
		new simpleEnemy(688,688, 83,518, 0, 6.5),
		new simpleEnemy(713,713, 83,518, 0, 6.5),
		
		new simpleEnemy(587,587, 518,83, 0, 6.5),
		new simpleEnemy(612,612, 518,83, 0, 6.5),
		new simpleEnemy(637,637, 518,83, 0, 6.5),
		
		new simpleEnemy(737,737, 518,83, 0, 6.5),
		new simpleEnemy(762,762, 518,83, 0, 6.5),
		new simpleEnemy(787,787, 518,83, 0, 6.5),
		
		new simpleEnemy(508,792, 163,163, 4.4, 0),
		new simpleEnemy(508,792, 188,188, 4.4, 0),
		new simpleEnemy(508,792, 213,213, 4.4, 0),
		
		new simpleEnemy(508,792, 163,163, 4.4, 0),
		new simpleEnemy(508,792, 188,188, 4.4, 0),
		new simpleEnemy(508,792, 213,213, 4.4, 0),
		
		new simpleEnemy(508,792, 313,313, 4.4, 0),
		new simpleEnemy(508,792, 338,338, 4.4, 0),
		new simpleEnemy(508,792, 363,363, 4.4, 0),
		
		new simpleEnemy(508,792, 463,463, 4.4, 0),
		new simpleEnemy(508,792, 488,488, 4.4, 0),
		new simpleEnemy(508,792, 513,513, 4.4, 0),
		
		new simpleEnemy(792,508, 87,87, 4.4, 0),
		new simpleEnemy(792,508, 112,112, 4.4, 0),
		new simpleEnemy(792,508, 137,137, 4.4, 0),
		
		new simpleEnemy(792,508, 237,237, 4.4, 0),
		new simpleEnemy(792,508, 262,262, 4.4, 0),
		new simpleEnemy(792,508, 287,287, 4.4, 0),
		
		new simpleEnemy(792,508, 387,387, 4.4, 0),
		new simpleEnemy(792,508, 412,412, 4.4, 0),
		new simpleEnemy(792,508, 437,437, 4.4, 0),
		
		
	],

	// level 15
	[
		new simpleEnemy(87,87, 108,144, 0, 0.6),
		new simpleEnemy(87,87, 133,169, 0, 0.6),
		new simpleEnemy(87,87, 158,194, 0, 0.6),
		new simpleEnemy(87,87, 183,219, 0, 0.6),
		new simpleEnemy(87,87, 208,244, 0, 0.6),
		new simpleEnemy(87,87, 233,269, 0, 0.6),
		new simpleEnemy(87,87, 258,294, 0, 0.6),
		
		new simpleEnemy(87,87, 344,308, 0, 0.6),
		new simpleEnemy(87,87, 369,333, 0, 0.6),
		new simpleEnemy(87,87, 394,358, 0, 0.6),
		new simpleEnemy(87,87, 419,383, 0, 0.6),
		new simpleEnemy(87,87, 444,408, 0, 0.6),
		new simpleEnemy(87,87, 469,433, 0, 0.6),
		new simpleEnemy(87,87, 494,458, 0, 0.6),
		  //
		new simpleEnemy(112,112, 108,144, 0, 0.6),
		new simpleEnemy(112,112, 133,169, 0, 0.6),
		new simpleEnemy(112,112, 158,194, 0, 0.6),
		new simpleEnemy(112,112, 183,219, 0, 0.6),
		new simpleEnemy(112,112, 208,244, 0, 0.6),
		new simpleEnemy(112,112, 233,269, 0, 0.6),
		new simpleEnemy(112,112, 258,294, 0, 0.6),
		
		new simpleEnemy(112,112, 344,308, 0, 0.6),
		new simpleEnemy(112,112, 369,333, 0, 0.6),
		new simpleEnemy(112,112, 394,358, 0, 0.6),
		new simpleEnemy(112,112, 419,383, 0, 0.6),
		new simpleEnemy(112,112, 444,408, 0, 0.6),
		new simpleEnemy(112,112, 469,433, 0, 0.6),
		new simpleEnemy(112,112, 494,458, 0, 0.6),
		//
		new simpleEnemy(238,238, 108,144, 0, 0.6),
		new simpleEnemy(238,238, 133,169, 0, 0.6),
		new simpleEnemy(238,238, 158,194, 0, 0.6),
		new simpleEnemy(238,238, 183,219, 0, 0.6),
		new simpleEnemy(238,238, 208,244, 0, 0.6),
		new simpleEnemy(238,238, 233,269, 0, 0.6),
		new simpleEnemy(238,238, 258,294, 0, 0.6),
		
		new simpleEnemy(238,238, 344,308, 0, 0.6),
		new simpleEnemy(238,238, 369,333, 0, 0.6),
		new simpleEnemy(238,238, 394,358, 0, 0.6),
		new simpleEnemy(238,238, 419,383, 0, 0.6),
		new simpleEnemy(238,238, 444,408, 0, 0.6),
		new simpleEnemy(238,238, 469,433, 0, 0.6),
		new simpleEnemy(238,238, 494,458, 0, 0.6),
		//
		new simpleEnemy(238,238, 108,144, 0, 0.6),
		new simpleEnemy(238,238, 133,169, 0, 0.6),
		new simpleEnemy(238,238, 158,194, 0, 0.6),
		new simpleEnemy(238,238, 183,219, 0, 0.6),
		new simpleEnemy(238,238, 208,244, 0, 0.6),
		new simpleEnemy(238,238, 233,269, 0, 0.6),
		new simpleEnemy(238,238, 258,294, 0, 0.6),
		
		new simpleEnemy(238,238, 344,308, 0, 0.6),
		new simpleEnemy(238,238, 369,333, 0, 0.6),
		new simpleEnemy(238,238, 394,358, 0, 0.6),
		new simpleEnemy(238,238, 419,383, 0, 0.6),
		new simpleEnemy(238,238, 444,408, 0, 0.6),
		new simpleEnemy(238,238, 469,433, 0, 0.6),
		new simpleEnemy(238,238, 494,458, 0, 0.6),
		
		//
		new simpleEnemy(263,263, 108,144, 0, 0.6),
		new simpleEnemy(263,263, 133,169, 0, 0.6),
		new simpleEnemy(263,263, 158,194, 0, 0.6),
		new simpleEnemy(263,263, 183,219, 0, 0.6),
		new simpleEnemy(263,263, 208,244, 0, 0.6),
		new simpleEnemy(263,263, 233,269, 0, 0.6),
		new simpleEnemy(263,263, 258,294, 0, 0.6),
		
		new simpleEnemy(263,263, 344,308, 0, 0.6),
		new simpleEnemy(263,263, 369,333, 0, 0.6),
		new simpleEnemy(263,263, 394,358, 0, 0.6),
		new simpleEnemy(263,263, 419,383, 0, 0.6),
		new simpleEnemy(263,263, 444,408, 0, 0.6),
		new simpleEnemy(263,263, 469,433, 0, 0.6),
		new simpleEnemy(263,263, 494,458, 0, 0.6),
		//
		new simpleEnemy(288,288, 108,144, 0, 0.6),
		new simpleEnemy(288,288, 133,169, 0, 0.6),
		new simpleEnemy(288,288, 158,194, 0, 0.6),
		new simpleEnemy(288,288, 183,219, 0, 0.6),
		new simpleEnemy(288,288, 208,244, 0, 0.6),
		new simpleEnemy(288,288, 233,269, 0, 0.6),
		new simpleEnemy(288,288, 258,294, 0, 0.6),
		
		new simpleEnemy(288,288, 344,308, 0, 0.6),
		new simpleEnemy(288,288, 369,333, 0, 0.6),
		new simpleEnemy(288,288, 394,358, 0, 0.6),
		new simpleEnemy(288,288, 419,383, 0, 0.6),
		new simpleEnemy(288,288, 444,408, 0, 0.6),
		new simpleEnemy(288,288, 469,433, 0, 0.6),
		new simpleEnemy(288,288, 494,458, 0, 0.6),
		//
		new simpleEnemy(313,313, 108,144, 0, 0.6),
		new simpleEnemy(313,313, 133,169, 0, 0.6),
		new simpleEnemy(313,313, 158,194, 0, 0.6),
		new simpleEnemy(313,313, 183,219, 0, 0.6),
		new simpleEnemy(313,313, 208,244, 0, 0.6),
		new simpleEnemy(313,313, 233,269, 0, 0.6),
		new simpleEnemy(313,313, 258,294, 0, 0.6),
		
		new simpleEnemy(313,313, 344,308, 0, 0.6),
		new simpleEnemy(313,313, 369,333, 0, 0.6),
		new simpleEnemy(313,313, 394,358, 0, 0.6),
		new simpleEnemy(313,313, 419,383, 0, 0.6),
		new simpleEnemy(313,313, 444,408, 0, 0.6),
		new simpleEnemy(313,313, 469,433, 0, 0.6),
		new simpleEnemy(313,313, 494,458, 0, 0.6),
		
		//
		new simpleEnemy(488,488, 108,144, 0, 0.6),
		new simpleEnemy(488,488, 133,169, 0, 0.6),
		new simpleEnemy(488,488, 158,194, 0, 0.6),
		new simpleEnemy(488,488, 183,219, 0, 0.6),
		new simpleEnemy(488,488, 208,244, 0, 0.6),
		new simpleEnemy(488,488, 233,269, 0, 0.6),
		new simpleEnemy(488,488, 258,294, 0, 0.6),
		
		new simpleEnemy(488,488, 344,308, 0, 0.6),
		new simpleEnemy(488,488, 369,333, 0, 0.6),
		new simpleEnemy(488,488, 394,358, 0, 0.6),
		new simpleEnemy(488,488, 419,383, 0, 0.6),
		new simpleEnemy(488,488, 444,408, 0, 0.6),
		new simpleEnemy(488,488, 469,433, 0, 0.6),
		new simpleEnemy(488,488, 494,458, 0, 0.6),
		//
		new simpleEnemy(562,562, 108,144, 0, 0.6),
		new simpleEnemy(562,562, 133,169, 0, 0.6),
		new simpleEnemy(562,562, 158,194, 0, 0.6),
		new simpleEnemy(562,562, 183,219, 0, 0.6),
		new simpleEnemy(562,562, 208,244, 0, 0.6),
		new simpleEnemy(562,562, 233,269, 0, 0.6),
		new simpleEnemy(562,562, 258,294, 0, 0.6),
		
		new simpleEnemy(562,562, 344,308, 0, 0.6),
		new simpleEnemy(562,562, 369,333, 0, 0.6),
		new simpleEnemy(562,562, 394,358, 0, 0.6),
		new simpleEnemy(562,562, 419,383, 0, 0.6),
		new simpleEnemy(562,562, 444,408, 0, 0.6),
		new simpleEnemy(562,562, 469,433, 0, 0.6),
		new simpleEnemy(562,562, 494,458, 0, 0.6),
		//
		new simpleEnemy(688,688, 108,144, 0, 0.6),
		new simpleEnemy(688,688, 133,169, 0, 0.6),
		new simpleEnemy(688,688, 158,194, 0, 0.6),
		new simpleEnemy(688,688, 183,219, 0, 0.6),
		new simpleEnemy(688,688, 208,244, 0, 0.6),
		new simpleEnemy(688,688, 233,269, 0, 0.6),
		new simpleEnemy(688,688, 258,294, 0, 0.6),
		
		new simpleEnemy(688,688, 344,308, 0, 0.6),
		new simpleEnemy(688,688, 369,333, 0, 0.6),
		new simpleEnemy(688,688, 394,358, 0, 0.6),
		new simpleEnemy(688,688, 419,383, 0, 0.6),
		new simpleEnemy(688,688, 444,408, 0, 0.6),
		new simpleEnemy(688,688, 469,433, 0, 0.6),
		new simpleEnemy(688,688, 494,458, 0, 0.6),
		//
		new simpleEnemy(713,713, 108,144, 0, 0.6),
		new simpleEnemy(713,713, 133,169, 0, 0.6),
		new simpleEnemy(713,713, 158,194, 0, 0.6),
		new simpleEnemy(713,713, 183,219, 0, 0.6),
		new simpleEnemy(713,713, 208,244, 0, 0.6),
		new simpleEnemy(713,713, 233,269, 0, 0.6),
		new simpleEnemy(713,713, 258,294, 0, 0.6),
		
		new simpleEnemy(713,713, 344,308, 0, 0.6),
		new simpleEnemy(713,713, 369,333, 0, 0.6),
		new simpleEnemy(713,713, 394,358, 0, 0.6),
		new simpleEnemy(713,713, 419,383, 0, 0.6),
		new simpleEnemy(713,713, 444,408, 0, 0.6),
		new simpleEnemy(713,713, 469,433, 0, 0.6),
		new simpleEnemy(713,713, 494,458, 0, 0.6),
		//
		new simpleEnemy(137,137, 108,208, 0, 1.65),
		new simpleEnemy(137,137, 133,233, 0, 1.65),
		new simpleEnemy(137,137, 158,258, 0, 1.65),
		new simpleEnemy(137,137, 183,283, 0, 1.65),
		
		new simpleEnemy(137,137, 308,408, 0, 1.65),
		new simpleEnemy(137,137, 333,433, 0, 1.65),
		new simpleEnemy(137,137, 358,458, 0, 1.65),
		new simpleEnemy(137,137, 383,483, 0, 1.65),
		//
		new simpleEnemy(187,187, 108,208, 0, 1.65),
		new simpleEnemy(187,187, 133,233, 0, 1.65),
		new simpleEnemy(187,187, 158,258, 0, 1.65),
		new simpleEnemy(187,187, 183,283, 0, 1.65),
		
		new simpleEnemy(187,187, 308,408, 0, 1.65),
		new simpleEnemy(187,187, 333,433, 0, 1.65),
		new simpleEnemy(187,187, 358,458, 0, 1.65),
		new simpleEnemy(187,187, 383,483, 0, 1.65),
		//
		new simpleEnemy(612,612, 108,208, 0, 1.65),
		new simpleEnemy(612,612, 133,233, 0, 1.65),
		new simpleEnemy(612,612, 158,258, 0, 1.65),
		new simpleEnemy(612,612, 183,283, 0, 1.65),
		
		new simpleEnemy(612,612, 308,408, 0, 1.65),
		new simpleEnemy(612,612, 333,433, 0, 1.65),
		new simpleEnemy(612,612, 358,458, 0, 1.65),
		new simpleEnemy(612,612, 383,483, 0, 1.65),
		//
		new simpleEnemy(662,662, 108,208, 0, 1.65),
		new simpleEnemy(662,662, 133,233, 0, 1.65),
		new simpleEnemy(662,662, 158,258, 0, 1.65),
		new simpleEnemy(662,662, 183,283, 0, 1.65),
		
		new simpleEnemy(662,662, 308,408, 0, 1.65),
		new simpleEnemy(662,662, 333,433, 0, 1.65),
		new simpleEnemy(662,662, 358,458, 0, 1.65),
		new simpleEnemy(662,662, 383,483, 0, 1.65),
		
		//
		new simpleEnemy(762,762, 108,208, 0, 1.65),
		new simpleEnemy(762,762, 133,233, 0, 1.65),
		new simpleEnemy(762,762, 158,258, 0, 1.65),
		new simpleEnemy(762,762, 183,283, 0, 1.65),
		
		new simpleEnemy(762,762, 308,408, 0, 1.65),
		new simpleEnemy(762,762, 333,433, 0, 1.65),
		new simpleEnemy(762,762, 358,458, 0, 1.65),
		new simpleEnemy(762,762, 383,483, 0, 1.65),
		//
		new simpleEnemy(163,163, 195,108, 0, 1.5),
		new simpleEnemy(163,163, 270,183, 0, 1.5),
		new simpleEnemy(163,163, 345,258, 0, 1.5),
		new simpleEnemy(163,163, 420,333, 0, 1.5),
		new simpleEnemy(163,163, 495,408, 0, 1.5),
		
		new simpleEnemy(213,213, 195,108, 0, 1.5),
		new simpleEnemy(213,213, 270,183, 0, 1.5),
		new simpleEnemy(213,213, 345,258, 0, 1.5),
		new simpleEnemy(213,213, 420,333, 0, 1.5),
		new simpleEnemy(213,213, 495,408, 0, 1.5),
		
		new simpleEnemy(338,338, 195,108, 0, 1.5),
		new simpleEnemy(338,338, 270,183, 0, 1.5),
		new simpleEnemy(338,338, 345,258, 0, 1.5),
		new simpleEnemy(338,338, 420,333, 0, 1.5),
		new simpleEnemy(338,338, 495,408, 0, 1.5),
		
		new simpleEnemy(388,388, 195,108, 0, 1.5),
		new simpleEnemy(388,388, 270,183, 0, 1.5),
		new simpleEnemy(388,388, 345,258, 0, 1.5),
		new simpleEnemy(388,388, 420,333, 0, 1.5),
		new simpleEnemy(388,388, 495,408, 0, 1.5),
		
		new simpleEnemy(638,638, 195,108, 0, 1.5),
		new simpleEnemy(638,638, 270,183, 0, 1.5),
		new simpleEnemy(638,638, 345,258, 0, 1.5),
		new simpleEnemy(638,638, 420,333, 0, 1.5),
		new simpleEnemy(638,638, 495,408, 0, 1.5),
		
		new simpleEnemy(788,788, 195,108, 0, 1.5),
		new simpleEnemy(788,788, 270,183, 0, 1.5),
		new simpleEnemy(788,788, 345,258, 0, 1.5),
		new simpleEnemy(788,788, 420,333, 0, 1.5),
		new simpleEnemy(788,788, 495,408, 0, 1.5),
		
		
		new simpleEnemy(362,362, 108,194, 0, 1.5),
		new simpleEnemy(362,362, 183,269, 0, 1.5),
		new simpleEnemy(362,362, 258,344, 0, 1.5),
		new simpleEnemy(362,362, 333,419, 0, 1.5),
		new simpleEnemy(362,362, 408,494, 0, 1.5),
		
		new simpleEnemy(412,412, 108,194, 0, 1.5),
		new simpleEnemy(412,412, 183,269, 0, 1.5),
		new simpleEnemy(412,412, 258,344, 0, 1.5),
		new simpleEnemy(412,412, 333,419, 0, 1.5),
		new simpleEnemy(412,412, 408,494, 0, 1.5),
		
		new simpleEnemy(512,512, 108,194, 0, 1.5),
		new simpleEnemy(512,512, 183,269, 0, 1.5),
		new simpleEnemy(512,512, 258,344, 0, 1.5),
		new simpleEnemy(512,512, 333,419, 0, 1.5),
		new simpleEnemy(512,512, 408,494, 0, 1.5),
		
		new simpleEnemy(812,812, 108,194, 0, 1.5),
		new simpleEnemy(812,812, 183,269, 0, 1.5),
		new simpleEnemy(812,812, 258,344, 0, 1.5),
		new simpleEnemy(812,812, 333,419, 0, 1.5),
		new simpleEnemy(812,812, 408,494, 0, 1.5),
		
		new simpleEnemy(538,538, 220,108, 0, 1.85),
		new simpleEnemy(538,538, 245,133, 0, 1.85),
		new simpleEnemy(538,538, 270,158, 0, 1.85),
		new simpleEnemy(538,538, 295,183, 0, 1.85),
		
		new simpleEnemy(538,538, 420,308, 0, 1.85),
		new simpleEnemy(538,538, 445,333, 0, 1.85),
		new simpleEnemy(538,538, 470,358, 0, 1.85),
		new simpleEnemy(538,538, 495,383, 0, 1.85),
		
		new simpleEnemy(588,588, 220,108, 0, 1.85),
		new simpleEnemy(588,588, 245,133, 0, 1.85),
		new simpleEnemy(588,588, 270,158, 0, 1.85),
		new simpleEnemy(588,588, 295,183, 0, 1.85),
		
		new simpleEnemy(588,588, 420,308, 0, 1.85),
		new simpleEnemy(588,588, 445,333, 0, 1.85),
		new simpleEnemy(588,588, 470,358, 0, 1.85),
		new simpleEnemy(588,588, 495,383, 0, 1.85),
		
		new simpleEnemy(738,738, 220,108, 0, 1.85),
		new simpleEnemy(738,738, 245,133, 0, 1.85),
		new simpleEnemy(738,738, 270,158, 0, 1.85),
		new simpleEnemy(738,738, 295,183, 0, 1.85),
		
		new simpleEnemy(738,738, 420,308, 0, 1.85),
		new simpleEnemy(738,738, 445,333, 0, 1.85),
		new simpleEnemy(738,738, 470,358, 0, 1.85),
		new simpleEnemy(738,738, 495,383, 0, 1.85),
		
		
	],

	// level 16
	[
		new staticEnemy(238, 138),
		new staticEnemy(238, 163),
		new staticEnemy(238, 188),
		new staticEnemy(238, 213),
		new staticEnemy(238, 238),
		
		new staticEnemy(663, 338),
		new staticEnemy(663, 363),
		new staticEnemy(663, 388),
		new staticEnemy(663, 413),
		new staticEnemy(663, 438),
		
		// (centerX, centerY, radius, startAngle, speed, angle, enemyType,endX,endY,xSpeed, ySpeed,stage) {
		// circularEnemyLinear(movement, radius, startAngle, speed, angle, enemyType,stage) 	
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 1.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],72,45,2,0),
		
		
		//
       new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],72,-45,2,0),		
		//

        new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],72,135,2,0),
//
         
        new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0]
			
		],72,-135,2,0),
        ///////////////
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],72,45,2,0),
		///
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],72,-45,2,0),
		//
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],72,135,2,0),
		
		//
		//
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9]
			
		],72,-135,2,0),
		
		/////////////////////////
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],72,45,2,0),
		//
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],72,-45,2,0),
		
		//
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],72,135,2,0),
		
		//
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
            [150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 350, 200, 200, 0.9],
			
			
		],72,-135,2,0),
		
		/////////////////////////
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],72,45,2,0),
		//
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],72,-45,2,0),
		//
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],72,135,2,0),
		//
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 150, 200, 200, 0.9, 0],
            [150, 150, 200, 400, 0, 0.9],
			[150, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0,0.9],
			
			
		],72,-135,2,0),
		
		//////////////////////////
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],36,45,2,0),
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],72,45,2,0),
		///
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],36,-45,2,0),
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],72,-45,2,0),
		///
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],36,135,2,0),
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],72,135,2,0),
		///
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],36,-135,2,0),
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[350, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 150, 200, 200, 0.9, 0],
			[150, 150, 200, 400, 0, 0.9],
			[150, 350, 400, 400, 0.9, 0],
			
			
		],72,-135,2,0),
		/////////////////////////////////
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],72,45,2,0),
		//
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],72,-45,2,0),
		
		//
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],72,135,2,0),
		/////
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[450, 450, 300, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
            [750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 300, 0, 0.9],
			
			
		],72,-135,2,0),
		
		////////////////////////
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],72,45,2,0),
		//
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],0,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],72,-45,2,0),
		//
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],72,135,2,0),
		//
		//
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
            [750, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
			[450, 550, 200, 200, 0.9, 0],
			
			
		],72,-135,2,0),
		/////////////////////////////
		
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],0,45,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],36,45,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],72,45,2,0),
		
		//
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],0,-45,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],36,-45,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],72,-45,2,0),
		
		//
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],0,-135,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],36,-135,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],72,-135,2,0),
		
		//
		//
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],0,135,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],36,135,2,0),
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[750, 750, 200, 400, 0, 0.9],
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0]
			
			
		],72,135,2,0),
		
		//////////////////////////////////////////////
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],0,45,2,0),
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],72,45,2,0),
		///
			new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],0,-45,2,0),
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],72,-45,2,0),
		
		///
			new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],0,-135,2,0),
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],72,-135,2,0),
		
		///
			new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],0,135,2,0),
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			
			[750, 450, 400, 400, 0.9, 0],
            [450, 450, 400, 200, 0, 0.9],
			[450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			
			
		],72,135,2,0),
		
		
		//////////////////////////////
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],0,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],18,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],36,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],54,45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],72,45,2,0),
		
		///////////////////
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],0,-5,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],18,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],36,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],54,-45,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],72,-45,2,0),
		
		//
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],0,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],18,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],36,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],54,135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],72,135,2,0),
		//
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],0,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],18,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],36,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],54,-135,2,0),
		
		new circularEnemyLinear([
			
			[550, 450, 400, 400, 0.9, 0],
			[450, 450, 400, 200, 0, 0.9],
            [450, 750, 200, 200, 0.9, 0],
			[750, 750, 200, 400, 0, 0.9],
			[750, 550, 400, 400, 0.9, 0],
			
			
		],72,-135,2,0),
			/*new simpleCircularEnemyXY(350, 200, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(350, 200, 18, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 36, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 54, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 72, -45, 2,0,null,150,200,0.9,0),
			
			new simpleCircularEnemyXY(350, 200, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(350, 200, 18, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 36, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 54, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 72, 135, 2,0,null,150,200,0.9,0),
			
			new simpleCircularEnemyXY(350, 200, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(350, 200, 18, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 36, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 54, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(350, 200, 72, -135, 2,0,null,150,200,0.9,0),
			
			//
			
			  new simpleCircularEnemyXY(150, 200, 0, 0, 0,0,null,150,400,0,0.9), 
		    new simpleCircularEnemyXY(150, 200, 18, 45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 36, 45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 54, 45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 72, 45, 2,0,null,150,400,0,0.9),
			
			new simpleCircularEnemyXY(150, 200, 0, 0, 0,0,null,150,400,0,0.9), 
		    new simpleCircularEnemyXY(150, 200, 18, -45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 36, -45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 54, -45, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 72, -45, 2,0,null,150,400,0,0.9),
			
			new simpleCircularEnemyXY(150, 200, 0, 0, 0,0,null,150,400,0,0.9), 
		    new simpleCircularEnemyXY(150, 200, 18, 135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 36, 135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 54, 135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 72, 135, 2,0,null,150,400,0,0.9),
			
			new simpleCircularEnemyXY(150, 200, 0, 0, 0,0,null,150,400,0,0.9), 
		    new simpleCircularEnemyXY(150, 200, 18, -135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 36, -135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 54, -135, 2,0,null,150,400,0,0.9),
			new simpleCircularEnemyXY(150, 200, 72, -135, 2,0,null,150,400,0,0.9),
			//
			
			 new simpleCircularEnemyXY(150, 400, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(150, 400, 18, 45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 36, 45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 54, 45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 72, 45, 2,0,null,150,200,0.9,0),
			
			new simpleCircularEnemyXY(150, 400, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(150, 400, 18, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 36, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 54, -45, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 72, -45, 2,0,null,150,200,0.9,0),
			
			new simpleCircularEnemyXY(150, 400, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(150, 400, 18, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 36, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 54, 135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 72, 135, 2,0,null,150,200,0.9,0),
			
			new simpleCircularEnemyXY(150, 400, 0, 0, 2,0,null,150,200,0.9,0), 
		    new simpleCircularEnemyXY(150, 400, 18, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 36, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 54, -135, 2,0,null,150,200,0.9,0),
			new simpleCircularEnemyXY(150, 400, 72, -135, 2,0,null,150,200,0.9,0),*/
			
	],

	// level 17
	[
			new simpleEnemy(237,237, 133,269, 0, 1),
			new simpleEnemy(287,287, 133,269, 0, 1),
			new simpleEnemy(337,337, 133,269, 0, 1),
			new simpleEnemy(387,387, 133,269, 0, 1),
			new simpleEnemy(437,437, 133,269, 0, 1),
			
			new simpleEnemy(262,262, 269,133, 0, 1),
			new simpleEnemy(313,313, 269,133, 0, 1),
			new simpleEnemy(363,363, 269,133, 0, 1),
			new simpleEnemy(413,413, 269,133, 0, 1),
			
			
			new simpleEnemy(237,237, 333,469, 0, 1),
			new simpleEnemy(287,287, 333,469, 0, 1),
			new simpleEnemy(337,337, 333,469, 0, 1),
			new simpleEnemy(387,387, 333,469, 0, 1),
			new simpleEnemy(437,437, 333,469, 0, 1),
			
			new simpleEnemy(262,262, 469,333, 0, 1),
			new simpleEnemy(313,313, 469,333, 0, 1),
			new simpleEnemy(363,363, 469,333, 0, 1),
			new simpleEnemy(413,413, 469,333, 0, 1),
			
			
			
			new simpleEnemy(237,237, 133,193, 0, 0.9),
			new simpleEnemy(262,262, 133,193, 0, 0.9),
			new simpleEnemy(287,287, 133,193, 0, 0.9),
			new simpleEnemy(312,312, 133,193, 0, 0.9),
			new simpleEnemy(337,337, 133,193, 0, 0.9),
			new simpleEnemy(362,362, 133,193, 0, 0.9),
			new simpleEnemy(387,387, 133,193, 0, 0.9),
			new simpleEnemy(412,412, 133,193, 0, 0.9),
			new simpleEnemy(437,437, 133,193, 0, 0.9),
			
			
			
			
			new simpleEnemy(237,237, 208,268, 0, 0.9),
			new simpleEnemy(262,262, 208,268, 0, 0.9),
			new simpleEnemy(287,287, 208,268, 0, 0.9),
			new simpleEnemy(312,312, 208,268, 0, 0.9),
			new simpleEnemy(337,337, 208,268, 0, 0.9),
			new simpleEnemy(362,362, 208,268, 0, 0.9),
			new simpleEnemy(387,387, 208,268, 0, 0.9),
			new simpleEnemy(412,412, 208,268, 0, 0.9),
			new simpleEnemy(437,437, 208,268, 0, 0.9),
			
			
			
			
			new simpleEnemy(612,612, 133,269, 0, 1),
			new simpleEnemy(662,662, 133,269, 0, 1),
			new simpleEnemy(712,712, 133,269, 0, 1),
			new simpleEnemy(762,762, 133,269, 0, 1),
			new simpleEnemy(812,812, 133,269, 0, 1),
			
			new simpleEnemy(637,637, 269,133, 0, 1),
			new simpleEnemy(687,687, 269,133, 0, 1),
			new simpleEnemy(737,737, 269,133, 0, 1),
			new simpleEnemy(787,787, 269,133, 0, 1),
			
			new simpleEnemy(612,612, 333,469, 0, 1),
			new simpleEnemy(662,662, 333,469, 0, 1),
			new simpleEnemy(712,712, 333,469, 0, 1),
			new simpleEnemy(762,762, 333,469, 0, 1),
			new simpleEnemy(812,812, 333,469, 0, 1),
			
			new simpleEnemy(637,637, 469,333, 0, 1),
			new simpleEnemy(687,687, 469,333, 0, 1),
			new simpleEnemy(737,737, 469,333, 0, 1),
			new simpleEnemy(787,787, 469,333, 0, 1),
			
			
			new simpleEnemy(237,237, 333,393, 0, 0.9),
			new simpleEnemy(262,262, 333,393, 0, 0.9),
			new simpleEnemy(287,287, 333,393, 0, 0.9),
			new simpleEnemy(312,312, 333,393, 0, 0.9),
			new simpleEnemy(337,337, 333,393, 0, 0.9),
			new simpleEnemy(362,362, 333,393, 0, 0.9),
			new simpleEnemy(387,387, 333,393, 0, 0.9),
			new simpleEnemy(412,412, 333,393, 0, 0.9),
			new simpleEnemy(437,437, 333,393, 0, 0.9),
			
			
			
			
			new simpleEnemy(237,237, 408,468, 0, 0.9),
			new simpleEnemy(262,262, 408,468, 0, 0.9),
			new simpleEnemy(287,287, 408,468, 0, 0.9),
			new simpleEnemy(312,312, 408,468, 0, 0.9),
			new simpleEnemy(337,337, 408,468, 0, 0.9),
			new simpleEnemy(362,362, 408,468, 0, 0.9),
			new simpleEnemy(387,387, 408,468, 0, 0.9),
			new simpleEnemy(412,412, 408,468, 0, 0.9),
			new simpleEnemy(437,437, 408,468, 0, 0.9),
			
			///
			
			
			
			new simpleEnemy(612,612, 133,193, 0, 0.9),
			new simpleEnemy(637,637, 133,193, 0, 0.9),
			new simpleEnemy(662,662, 133,193, 0, 0.9),
			new simpleEnemy(687,687, 133,193, 0, 0.9),
			new simpleEnemy(712,712, 133,193, 0, 0.9),
			new simpleEnemy(737,737, 133,193, 0, 0.9),
			new simpleEnemy(762,762, 133,193, 0, 0.9),
			new simpleEnemy(787,787, 133,193, 0, 0.9),
			
			
		
			
			new simpleEnemy(612,612, 208,268, 0, 0.9),
			new simpleEnemy(637,637, 208,268, 0, 0.9),
			new simpleEnemy(662,662, 208,268, 0, 0.9),
			new simpleEnemy(687,687, 208,268, 0, 0.9),
			new simpleEnemy(712,712, 208,268, 0, 0.9),
			new simpleEnemy(737,737, 208,268, 0, 0.9),
			new simpleEnemy(762,762, 208,268, 0, 0.9),
			new simpleEnemy(787,787, 208,268, 0, 0.9),
			new simpleEnemy(812,812, 208,268, 0, 0.9),
		
			
			
			new simpleEnemy(612,612, 333,393, 0, 0.9),
			new simpleEnemy(637,637, 333,393, 0, 0.9),
			new simpleEnemy(662,662, 333,393, 0, 0.9),
			new simpleEnemy(687,687, 333,393, 0, 0.9),
			new simpleEnemy(712,712, 333,393, 0, 0.9),
			new simpleEnemy(737,737, 333,393, 0, 0.9),
			new simpleEnemy(762,762, 333,393, 0, 0.9),
			new simpleEnemy(787,787, 333,393, 0, 0.9),
			
			
			
			
			new simpleEnemy(612,612, 408,468, 0, 0.9),
			new simpleEnemy(637,637, 408,468, 0, 0.9),
			new simpleEnemy(662,662, 408,468, 0, 0.9),
			new simpleEnemy(687,687, 408,468, 0, 0.9),
			new simpleEnemy(712,712, 408,468, 0, 0.9),
			new simpleEnemy(737,737, 408,468, 0, 0.9),
			new simpleEnemy(762,762, 408,468, 0, 0.9),
			
			
			new simpleCircularEnemy(150, 200, 0, 0, 0), 
			new simpleCircularEnemy(150, 200, 18, 45, -2.7),
			new simpleCircularEnemy(150, 200, 36, 45, -2.7),
			new simpleCircularEnemy(150, 200, 54, 45, -2.7),
			new simpleCircularEnemy(150, 200, 72, 45, -2.7),
			
			new simpleCircularEnemy(150, 200, 18, 135, -2.7),
			new simpleCircularEnemy(150, 200, 36, 135, -2.7),
			new simpleCircularEnemy(150, 200, 54, 135, -2.7),
			new simpleCircularEnemy(150, 200, 72, 135, -2.7),
			
			new simpleCircularEnemy(150, 200, 18, -135, -2.7),
			new simpleCircularEnemy(150, 200, 36, -135, -2.7),
			new simpleCircularEnemy(150, 200, 54, -135, -2.7),
			new simpleCircularEnemy(150, 200, 72, -135, -2.7),
			
			new simpleCircularEnemy(150, 200, 18, -45, -2.7),
			new simpleCircularEnemy(150, 200, 36, -45, -2.7),
			new simpleCircularEnemy(150, 200, 54, -45, -2.7),
			new simpleCircularEnemy(150, 200, 72, -45, -2.7),
			
			//
			new simpleCircularEnemy(524, 200, 0, 0, 0), 
			new simpleCircularEnemy(524, 200, 18, 45, -2.7),
			new simpleCircularEnemy(524, 200, 36, 45, -2.7),
			new simpleCircularEnemy(524, 200, 54, 45, -2.7),
			new simpleCircularEnemy(524, 200, 72, 45, -2.7),
			
			new simpleCircularEnemy(524, 200, 18, 135, -2.7),
			new simpleCircularEnemy(524, 200, 36, 135, -2.7),
			new simpleCircularEnemy(524, 200, 54, 135, -2.7),
			new simpleCircularEnemy(524, 200, 72, 135, -2.7),
			
			new simpleCircularEnemy(524, 200, 18, -135, -2.7),
			new simpleCircularEnemy(524, 200, 36, -135, -2.7),
			new simpleCircularEnemy(524, 200, 54, -135, -2.7),
			new simpleCircularEnemy(524, 200, 72, -135, -2.7),
			
			new simpleCircularEnemy(524, 200, 18, -45, -2.7),
			new simpleCircularEnemy(524, 200, 36, -45, -2.7),
			new simpleCircularEnemy(524, 200, 54, -45, -2.7),
			new simpleCircularEnemy(524, 200, 72, -45, -2.7),
			//

			new simpleCircularEnemy(150, 400, 0, 0, 0), 
			new simpleCircularEnemy(150, 400, 18, 45, -2.7),
			new simpleCircularEnemy(150, 400, 36, 45, -2.7),
			new simpleCircularEnemy(150, 400, 54, 45, -2.7),
			new simpleCircularEnemy(150, 400, 72, 45, -2.7),
			
			new simpleCircularEnemy(150, 400, 18, 135, -2.7),
			new simpleCircularEnemy(150, 400, 36, 135, -2.7),
			new simpleCircularEnemy(150, 400, 54, 135, -2.7),
			new simpleCircularEnemy(150, 400, 72, 135, -2.7),
			
			new simpleCircularEnemy(150, 400, 18, -135, -2.7),
			new simpleCircularEnemy(150, 400, 36, -135, -2.7),
			new simpleCircularEnemy(150, 400, 54, -135, -2.7),
			new simpleCircularEnemy(150, 400, 72, -135, -2.7),
			
			new simpleCircularEnemy(150, 400, 18, -45, -2.7),
			new simpleCircularEnemy(150, 400, 36, -45, -2.7),
			new simpleCircularEnemy(150, 400, 54, -45, -2.7),
			new simpleCircularEnemy(150, 400, 72, -45, -2.7),
			//
			
			new simpleCircularEnemy(524, 400, 0, 0, 0), 
			new simpleCircularEnemy(524, 400, 18, 45, -2.7),
			new simpleCircularEnemy(524, 400, 36, 45, -2.7),
			new simpleCircularEnemy(524, 400, 54, 45, -2.7),
			new simpleCircularEnemy(524, 400, 72, 45, -2.7),
			
			new simpleCircularEnemy(524, 400, 18, 135, -2.7),
			new simpleCircularEnemy(524, 400, 36, 135, -2.7),
			new simpleCircularEnemy(524, 400, 54, 135, -2.7),
			new simpleCircularEnemy(524, 400, 72, 135, -2.7),
			
			new simpleCircularEnemy(524, 400, 18, -135, -2.7),
			new simpleCircularEnemy(524, 400, 36, -135, -2.7),
			new simpleCircularEnemy(524, 400, 54, -135, -2.7),
			new simpleCircularEnemy(524, 400, 72, -135, -2.7),
			
			new simpleCircularEnemy(524, 400, 18, -45, -2.7),
			new simpleCircularEnemy(524, 400, 36, -45, -2.7),
			new simpleCircularEnemy(524, 400, 54, -45, -2.7),
			new simpleCircularEnemy(524, 400, 72, -45, -2.7),
	],
	
	// level 18
	[
		new simpleEnemy(262, 262, 108, 342, 0, 4),
		new simpleEnemy(312, 312, 108, 342, 0, 4),
        new simpleEnemy(362, 362, 108, 342, 0, 4),
		new simpleEnemy(412, 412, 108, 342, 0, 4),
        new simpleEnemy(462, 462, 108, 342, 0, 4),
		new simpleEnemy(512, 512, 108, 342, 0, 4),

		new simpleEnemy(287, 287, 342,108, 0, 4),
		new simpleEnemy(337, 337, 342,108, 0, 4),
        new simpleEnemy(387, 387, 342,234, 0, 4),
		new simpleEnemy(437, 437, 342,108, 0, 4),
        new simpleEnemy(487, 487, 342,108, 0, 4),
		
		new simpleEnemy(260, 368, 114, 114, 1.8, 0),
		new simpleEnemy(260, 368, 164, 164, 1.8, 0),
		new simpleEnemy(260, 368, 214, 214, 1.8, 0),
		
		new simpleEnemy(368, 260, 139, 139, 1.8, 0),
		new simpleEnemy(368, 260, 189, 189, 1.8, 0),
		
		new simpleEnemy(518, 258, 238, 238, 1.8, 0),
		new simpleEnemy(518, 258, 288, 288, 1.8, 0),
		new simpleEnemy(518, 258, 338, 338, 1.8, 0),
		
		new simpleEnemy(258,518, 263, 263, 1.8, 0),
		new simpleEnemy(258,518, 313, 313, 1.8, 0),
		
		new simpleEnemy(668, 408, 112, 112, 1.8, 0),
		new simpleEnemy(668, 408, 162, 162, 1.8, 0),
		new simpleEnemy(668, 408, 212, 212, 1.8, 0),
		
		new simpleEnemy(408, 668, 137, 137, 1.8, 0),
		new simpleEnemy(408, 668, 187, 187, 1.8, 0),
		
		new simpleEnemy(562, 562, 108, 492, 0, 1.8),
		new simpleEnemy(612, 612, 108, 492, 0, 1.8),
		new simpleEnemy(662, 662, 108, 492, 0, 1.8),
		
		new simpleEnemy(587, 587, 492,108, 0, 1.8),
		new simpleEnemy(637, 637, 492,108, 0, 1.8),
		
		new simpleEnemy(668, 558, 238,238, 1.8, 0),
		new simpleEnemy(668, 558, 288,288, 1.8, 0),
		new simpleEnemy(668, 558, 338,338, 1.8, 0),
		new simpleEnemy(558, 668, 263,263, 1.8, 0),
		new simpleEnemy(558, 668, 313,313, 1.8, 0),
		new simpleEnemy(558, 668, 363,363, 1.8, 0),
		
		new simpleEnemy(712, 712, 82,494, 0, 1.8),
		new simpleEnemy(762, 762, 82,494, 0, 1.8),
		new simpleEnemy(812, 812, 82,494, 0, 1.8),
		
		new simpleEnemy(737, 737, 494,82, 0, 1.8),
		new simpleEnemy(787, 787, 494,82, 0, 1.8),
		
		new simpleEnemy(818, 708, 88,88, 1.8, 0),
		new simpleEnemy(818, 708, 138,138, 1.8, 0),
		new simpleEnemy(818, 708, 188,188, 1.8, 0),
		new simpleEnemy(818, 708, 238,238, 1.8, 0),
		new simpleEnemy(818, 708, 288,288, 1.8, 0),
		new simpleEnemy(818, 708, 338,338, 1.8, 0),
		
		new simpleEnemy(708,818, 113,113, 1.8, 0),
		new simpleEnemy(708,818, 163,163, 1.8, 0),
		new simpleEnemy(708,818, 213,213, 1.8, 0),
		new simpleEnemy(708,818, 263,263, 1.8, 0),
		new simpleEnemy(708,818, 313,313, 1.8, 0),
		new simpleEnemy(708,818, 363,363, 1.8, 0),
		
		new simpleEnemy(818,82, 388,388, 3.4, 0),
		new simpleEnemy(818,82, 438,438, 3.4, 0),
		new simpleEnemy(818,82, 488,488, 3.4, 0),
		
		new simpleEnemy(82,818, 413,413, 3.4, 0),
		new simpleEnemy(82,818, 463,463, 3.4, 0),
		
		new simpleEnemy(86,86, 494,384, 0, 1.8),
		new simpleEnemy(136,136, 494,384, 0, 1.8),
		new simpleEnemy(186,186, 494,384, 0, 1.8),
		new simpleEnemy(236,236, 494,384, 0, 1.8),
		new simpleEnemy(286,286, 494,384, 0, 1.8),
		new simpleEnemy(336,336, 494,384, 0, 1.8),
		new simpleEnemy(386,386, 494,384, 0, 1.8),
		new simpleEnemy(436,436, 494,384, 0, 1.8),
		new simpleEnemy(486,486, 494,384, 0, 1.8),
		new simpleEnemy(536,536, 494,384, 0, 1.8),
		
		new simpleEnemy(111,111, 384,494, 0, 1.8),
		new simpleEnemy(161,161, 384,494, 0, 1.8),
		new simpleEnemy(211,211, 384,494, 0, 1.8),
		new simpleEnemy(261,261, 384,494, 0, 1.8),
		new simpleEnemy(311,311, 384,494, 0, 1.8),
		new simpleEnemy(361,361, 384,494, 0, 1.8),
		new simpleEnemy(411,411, 384,494, 0, 1.8),
		new simpleEnemy(461,461, 384,494, 0, 1.8),
		new simpleEnemy(511,511, 384,494, 0, 1.8),
		
		new simpleEnemy(688,688, 384,494, 0, 1.8),
		
		
		
		
		
		
		
		
		
		
	],
	
	// level 19
	[
		new simpleEnemy(337, 437, 187, 187, 2.5, 0),
		new simpleEnemy(362, 462, 187, 187, 2.5, 0),
		new simpleEnemy(337, 437, 212, 212, 2.5, 0),
		new simpleEnemy(362, 462, 212, 212, 2.5, 0),
		
		new simpleEnemy(437, 537, 187, 187, 2.5, 0),
		new simpleEnemy(462, 562, 187, 187, 2.5, 0),
		new simpleEnemy(437, 537, 212, 212, 2.5, 0),
		new simpleEnemy(462, 562, 212, 212, 2.5, 0),
		
		new simpleEnemy(537, 537, 187, 287, 0, 2.5),
		new simpleEnemy(562, 562, 187, 287, 0, 2.5),
		new simpleEnemy(537, 537, 212, 312, 0, 2.5),
		new simpleEnemy(562, 562, 212, 312, 0, 2.5),
		
		new simpleEnemy(537, 537, 287, 387, 0, 2.5),
		new simpleEnemy(562, 562, 287, 387, 0, 2.5),
		new simpleEnemy(537, 537, 312, 412, 0, 2.5),
		new simpleEnemy(562, 562, 312, 412, 0, 2.5),
		
		new simpleEnemy(537, 437, 387, 387, 2.5, 0),
		new simpleEnemy(562, 462, 387, 387, 2.5, 0),
		new simpleEnemy(537, 437, 412, 412, 2.5, 0),
		new simpleEnemy(562, 462, 412, 412, 2.5, 0),
		
		new simpleEnemy(437, 337, 387, 387, 2.5, 0),
		new simpleEnemy(462, 362, 387, 387, 2.5, 0),
		new simpleEnemy(437, 337, 412, 412, 2.5, 0),
		new simpleEnemy(462, 362, 412, 412, 2.5, 0),
		
		new simpleEnemy(337, 337, 387, 287, 0, 2.5),
		new simpleEnemy(362, 362, 387, 287, 0, 2.5),
		new simpleEnemy(337, 337, 412, 312, 0, 2.5),
		new simpleEnemy(362, 362, 412, 312, 0, 2.5),
		
		new simpleEnemy(337, 337, 287, 187, 0, 2.5),
		new simpleEnemy(362, 362, 287, 187, 0, 2.5),
		new simpleEnemy(337, 337, 312, 212, 0, 2.5),
		new simpleEnemy(362, 362, 312, 212, 0, 2.5),
		
		new simpleEnemy(137,237 , 113, 113, 2.5, 0),
		new simpleEnemy(312,412 , 113, 113, 2.5, 0),
		new simpleEnemy(487,587 , 113, 113, 2.5, 0),
		new simpleEnemy(662,762 , 113, 113, 2.5, 0),
		
		new simpleEnemy(237,137 , 138, 138, 2.5, 0),
		new simpleEnemy(412,312 , 138, 138, 2.5, 0),
		new simpleEnemy(587,487 , 138, 138, 2.5, 0),
		new simpleEnemy(762,662 , 138, 138, 2.5, 0),
		
		new simpleEnemy(87, 87, 263,163 , 0, 4.4),
		new simpleEnemy(112, 112, 163,263 , 0, 4.4),
		
		new simpleEnemy(87, 87, 438,338 , 0, 4.4),
		new simpleEnemy(112, 112, 338,438 , 0, 4.4),
		
		new simpleEnemy(263, 263, 263,163 , 0,4.4),
		new simpleEnemy(288, 288, 163,263 , 0, 4.4),
		
		new simpleEnemy(263, 263, 438,338 , 0, 4.4),
		new simpleEnemy(288, 288, 338,438 , 0, 4.4),
		
		new simpleEnemy(613, 613, 263,163 , 0, 4.4),
		new simpleEnemy(638, 638, 163,263 , 0, 4.4),
		
		new simpleEnemy(613, 613, 438,338 , 0, 4.4),
		new simpleEnemy(638, 638, 338,438 , 0, 4.4),
		
		new simpleEnemy(788, 788, 263,163 , 0, 4.4),
		new simpleEnemy(813, 813, 163,263 , 0, 4.4),
		
		new simpleEnemy(788, 788, 438,338 , 0, 4.4),
		new simpleEnemy(813, 813, 338,438 , 0, 4.4),
		
		new simpleEnemy(137,237 , 463, 463, 2.5, 0),
		new simpleEnemy(312,412 , 463, 463, 2.5, 0),
		new simpleEnemy(487,587 , 463, 463, 2.5, 0),
		new simpleEnemy(662,762 , 463, 463, 2.5, 0),
		
		new simpleEnemy(237,137 , 488, 488, 2.5, 0),
		new simpleEnemy(412,312 , 488, 488, 2.5, 0),
		new simpleEnemy(587,487 , 488, 488, 2.5, 0),
		new simpleEnemy(762,662 , 488, 488, 2.5, 0),
		
		new linearEnemy([
			[87, 87, 313, 288, 0, 1.5],
			[87, 112, 288, 288, 1.5, 0],
			[112, 112, 288, 313, 0, 1.5],
			[112, 87, 313, 313, 1.5, 0]
		]),
		
		new linearEnemy([
			[263, 263, 137, 112, 0, 1.5],
			[263, 288, 112, 112, 1.5, 0],
			[288, 288, 112, 137, 0, 1.5],
			[288, 263, 137, 137, 1.5, 0]
		]),
		
		new linearEnemy([
			[263, 263, 487, 462, 0, 1.5],
			[263, 288, 462, 462, 1.5, 0],
			[288, 288, 462, 487, 0, 1.5],
			[288, 263, 487, 487, 1.5, 0]
		]),
		
		new linearEnemy([
			[787, 787, 313, 288, 0, 1.5],
			[787, 812, 288, 288, 1.5, 0],
			[812, 812, 288, 313, 0, 1.5],
			[812, 787, 313, 313, 1.5, 0]
		]),
		new linearEnemy([
			[612, 612, 487, 462, 0, 1.5],
			[612, 637, 462, 462, 1.5, 0],
			[637, 637, 462, 487, 0, 1.5],
			[637, 612, 487, 487, 1.5, 0]
		]),
	],
	
	// level 20
	[
		//1
		new staticEnemy(88, 113),
		
		
		new staticEnemy(163, 113),
		
		new staticEnemy(188, 113),
		new staticEnemy(213, 113),
		new staticEnemy(238, 113),
		new staticEnemy(263, 113),
		
		new staticEnemy(288, 113),
		new staticEnemy(313, 113),
		new staticEnemy(338, 113),
		new staticEnemy(363, 113),
		
		new staticEnemy(388, 113),
		new staticEnemy(413, 113),
		new staticEnemy(438, 113),
		new staticEnemy(463, 113),
		
		new staticEnemy(488, 113),
		new staticEnemy(513, 113),
		new staticEnemy(538, 113),
		new staticEnemy(563, 113),
		
		new staticEnemy(588, 113),
		new staticEnemy(613, 113),
		new staticEnemy(638, 113),
		new staticEnemy(663, 113),
		
		new staticEnemy(688, 113),
        ///	2	
		new staticEnemy(88, 138),
		
		
		new staticEnemy(288, 138),
		new staticEnemy(313, 138),
		
		
		new staticEnemy(488, 138),
		new staticEnemy(513, 138),
		
		//
		new staticEnemy(88, 163),
		
		
		new staticEnemy(288, 163),
		new staticEnemy(313, 163),
		
		
		new staticEnemy(488, 163),
		new staticEnemy(513, 163),
		
		//
		new staticEnemy(88, 188),
		
		new staticEnemy(163, 188),
		new staticEnemy(188, 188),
		new staticEnemy(213, 188),
		
		
		new staticEnemy(388, 188),
		new staticEnemy(413, 188),
		
		
		new staticEnemy(588, 188),
		new staticEnemy(613, 188),
		new staticEnemy(638, 188),
		new staticEnemy(663, 188),
		
		new staticEnemy(688, 188),
		//
		new staticEnemy(88, 213),
		
		new staticEnemy(163, 213),
		new staticEnemy(188, 213),
		new staticEnemy(213, 213),
		
		
		new staticEnemy(388, 213),
		new staticEnemy(413, 213),
		
		
		new staticEnemy(588, 213),
		new staticEnemy(613, 213),
		new staticEnemy(638, 213),
		new staticEnemy(663, 213),
		
		new staticEnemy(688, 213),
		//
		new staticEnemy(88, 238),
		
		
		new staticEnemy(163, 238),
		
		new staticEnemy(188, 238),
		new staticEnemy(213, 238),
		new staticEnemy(238, 238),
		new staticEnemy(263, 238),
		
		new staticEnemy(288, 238),
		new staticEnemy(313, 238),
		new staticEnemy(338, 238),
		new staticEnemy(363, 238),
		
		new staticEnemy(388, 238),
		new staticEnemy(413, 238),
		new staticEnemy(438, 238),
		new staticEnemy(463, 238),
		
		new staticEnemy(488, 238),
		new staticEnemy(513, 238),
		new staticEnemy(538, 238),
		new staticEnemy(563, 238),
		
		new staticEnemy(588, 238),
		new staticEnemy(613, 238),
		new staticEnemy(638, 238),
		new staticEnemy(663, 238),
		
		new staticEnemy(688, 238),
		//
		new staticEnemy(88, 263),
		
		new staticEnemy(163, 263),
		new staticEnemy(188, 263),
		new staticEnemy(213, 263),
		
		
		new staticEnemy(388, 263),
		new staticEnemy(413, 263),
		
		
		new staticEnemy(588, 263),
		new staticEnemy(613, 263),
		new staticEnemy(638, 263),
		new staticEnemy(663, 263),
		
		new staticEnemy(688, 263),
		//
		new staticEnemy(88, 288),
		
		new staticEnemy(163, 288),
		new staticEnemy(188, 288),
		new staticEnemy(213, 288),
		
		
		new staticEnemy(388, 288),
		new staticEnemy(413, 288),
		
		
		new staticEnemy(588, 288),
		
		
		new staticEnemy(613, 288),
		//
		new staticEnemy(88, 313),
		
		
		new staticEnemy(288, 313),
		new staticEnemy(313, 313),
		
		
		new staticEnemy(488, 313),
		new staticEnemy(513, 313),
		//
		new staticEnemy(88, 338),
		
		
		new staticEnemy(288, 338),
		new staticEnemy(313, 338),
		
		
		new staticEnemy(488, 338),
		new staticEnemy(513, 338),
		new staticEnemy(688, 338),
		
		
		//
		new staticEnemy(88, 363),
		
		
		new staticEnemy(163, 363),
		
		new staticEnemy(188, 363),
		new staticEnemy(213, 363),
		new staticEnemy(238, 363),
		new staticEnemy(263, 363),
		
		new staticEnemy(288, 363),
		new staticEnemy(313, 363),
		new staticEnemy(338, 363),
		new staticEnemy(363, 363),
		
		new staticEnemy(388, 363),
		new staticEnemy(413, 363),
		new staticEnemy(438, 363),
		new staticEnemy(463, 363),
		
		new staticEnemy(488, 363),
		new staticEnemy(513, 363),
		new staticEnemy(538, 363),
		new staticEnemy(563, 363),
		
		new staticEnemy(588, 363),
		new staticEnemy(613, 363),
		new staticEnemy(638, 363),
		new staticEnemy(663, 363),
		
		new staticEnemy(688, 363),
		//
		new staticEnemy(88, 388),
		
		new staticEnemy(163, 388),
		new staticEnemy(188, 388),
		new staticEnemy(213, 388),
		
		
		new staticEnemy(388, 388),
		new staticEnemy(413, 388),
		
		
		new staticEnemy(588, 388),
		new staticEnemy(613, 388),
		new staticEnemy(638, 388),
		new staticEnemy(663, 388),
		
		new staticEnemy(688, 388),
		//
		new staticEnemy(88, 413),
		
		new staticEnemy(163, 413),
		new staticEnemy(188, 413),
		new staticEnemy(213, 413),
		
		
		new staticEnemy(388, 413),
		new staticEnemy(413, 413),
		
		
		new staticEnemy(588, 413),
		
		
		new staticEnemy(688, 413),
		//
		new staticEnemy(88, 438),
		
		
		new staticEnemy(288, 438),
		new staticEnemy(313, 438),
		
		
		new staticEnemy(488, 438),
		new staticEnemy(513, 438),
		//
		new staticEnemy(88, 463),
		
		
		new staticEnemy(288, 463),
		new staticEnemy(313, 463),
		
		
		new staticEnemy(488, 463),
		new staticEnemy(513, 463),
		
		new staticEnemy(88, 488),
		new staticEnemy(113, 488),
		new staticEnemy(138, 488),
		new staticEnemy(163, 488),
		
		new staticEnemy(188, 488),
		new staticEnemy(213, 488),
		new staticEnemy(238, 488),
		new staticEnemy(263, 488),
		
		new staticEnemy(288, 488),
		new staticEnemy(313, 488),
		new staticEnemy(338, 488),
		new staticEnemy(363, 488),
		
		new staticEnemy(388, 488),
		new staticEnemy(413, 488),
		new staticEnemy(438, 488),
		new staticEnemy(463, 488),
		
		new staticEnemy(488, 488),
		new staticEnemy(513, 488),
		new staticEnemy(538, 488),
		new staticEnemy(563, 488),
		
		new staticEnemy(588, 488),
		new staticEnemy(613, 488),
		new staticEnemy(638, 488),
		new staticEnemy(663, 488),
		
		new staticEnemy(688, 488),
		
		//
		new simpleEnemy(87, 87, 495, 108, 0, 3.6),
		new simpleEnemy(137, 137, 495, 108, 0, 3.6),
		new simpleEnemy(187, 187, 495, 108, 0, 3.6),
		new simpleEnemy(237, 237, 495, 108, 0, 3.6),
		new simpleEnemy(287, 287, 495, 108, 0, 3.6),
		new simpleEnemy(337, 337, 495, 108, 0, 3.6),
		new simpleEnemy(387, 387, 495, 108, 0, 3.6),
		new simpleEnemy(437, 437, 495, 108, 0, 3.6),
		new simpleEnemy(487, 487, 495, 108, 0, 3.6),
		new simpleEnemy(537, 537, 495, 108, 0, 3.6),
		new simpleEnemy(587, 587, 495, 108, 0, 3.6),
		new simpleEnemy(637, 637, 495, 108, 0, 3.6),
		new simpleEnemy(687, 687, 495, 108, 0, 3.6),
		
		new simpleEnemy(112, 112, 108, 495, 0, 3.6),
		new simpleEnemy(162, 162, 108, 495, 0, 3.6),
		new simpleEnemy(212, 212, 108, 495, 0, 3.6),
		new simpleEnemy(262, 262, 108, 495, 0, 3.6),
		new simpleEnemy(312, 312, 108, 495, 0, 3.6),
		new simpleEnemy(362, 362, 108, 495, 0, 3.6),
		new simpleEnemy(412, 412, 108, 495, 0, 3.6),
		new simpleEnemy(462, 462, 108, 495, 0, 3.6),
		new simpleEnemy(512, 512, 108, 495, 0, 3.6),
		new simpleEnemy(562, 562, 108, 495, 0, 3.6),
		new simpleEnemy(612, 612, 108, 495, 0, 3.6),
		new simpleEnemy(662, 662, 108, 495, 0, 3.6),
		
		new simpleEnemy(695, 82 , 113, 113, 2.8, 0),
		new simpleEnemy(695, 82 , 138, 138, 2.8, 0),
		
		new simpleEnemy(695, 82 , 213, 213, 2.8, 0),
		new simpleEnemy(695, 82 , 238, 238, 2.8, 0),
		
		new simpleEnemy(695, 82 , 313, 313, 2.8, 0),
		new simpleEnemy(695, 82 , 338, 338, 2.8, 0),
		
		new simpleEnemy(695, 82 , 413, 413, 2.8, 0),
		new simpleEnemy(695, 82 , 438, 438, 2.8, 0),
		
		new simpleEnemy(82,695 , 163, 163, 2.8, 0),
		new simpleEnemy(82,695 , 188, 188, 2.8, 0),
	    
		new simpleEnemy(82,695 , 263, 263, 2.8, 0),
		new simpleEnemy(82,695 , 288, 288, 2.8, 0),
	    
		new simpleEnemy(82,695 , 363, 363, 2.8, 0),
		new simpleEnemy(82,695 , 388, 388, 2.8, 0),
	
	    new simpleEnemy(82,695 , 463, 463, 2.8, 0),
		new simpleEnemy(82,695 , 488, 488, 2.8, 0),
	
	],
	
	
	// level 21
	[
		new staticEnemy(113, 413),
		new staticEnemy(138, 413),
		new staticEnemy(163, 413),
		new staticEnemy(188, 413),
		new staticEnemy(213, 413),
		new staticEnemy(238, 413),
		new staticEnemy(263, 413),
		new staticEnemy(288, 413),
		new staticEnemy(313, 413),
		new staticEnemy(338, 413),
		new staticEnemy(363, 413),
		new staticEnemy(388, 413),
		new staticEnemy(413, 413),
		new staticEnemy(438, 413),
		new staticEnemy(463, 413),
		new staticEnemy(488, 413),
		
		new staticEnemy(113, 488),
		new staticEnemy(138, 488),
		new staticEnemy(163, 488),
		new staticEnemy(188, 488),
		new staticEnemy(213, 488),
		new staticEnemy(238, 488),
		new staticEnemy(263, 488),
		new staticEnemy(288, 488),
		new staticEnemy(313, 488),
		new staticEnemy(338, 488),
		new staticEnemy(363, 488),
		new staticEnemy(388, 488),
		new staticEnemy(413, 488),
		new staticEnemy(438, 488),
		new staticEnemy(463, 488),
		new staticEnemy(488, 488),
		
		
		new staticEnemy(188, 438),
		
		new staticEnemy(288, 438),
		new staticEnemy(313, 438),
		
		new staticEnemy(413, 438),
		
		
		new staticEnemy(138, 463),
		
		new staticEnemy(238, 463),
		
		new staticEnemy(363, 463),
		
		new staticEnemy(463, 463),
		//
		new staticEnemy(763, 163),
		new staticEnemy(763, 188),
		new staticEnemy(763, 213),
		new staticEnemy(763, 238),
		
		new staticEnemy(763, 263),
		new staticEnemy(763, 288),
		new staticEnemy(763, 313),
		new staticEnemy(763, 338),
		
		new staticEnemy(763, 363),
		new staticEnemy(763, 388),
		new staticEnemy(763, 413),
		new staticEnemy(763, 438),
		
		
		new staticEnemy(763, 488),
		
		//
		
		
		new staticEnemy(788, 263),
		new staticEnemy(788, 288),
		
		
		new staticEnemy(788, 413),
		
		new staticEnemy(788, 488),
		//
		
		new staticEnemy(813, 188),
		new staticEnemy(813, 213),
		
		new staticEnemy(813, 338),
		
		new staticEnemy(813, 363),
		
		
		new staticEnemy(813, 463),
		new staticEnemy(813, 488),
		//
		new staticEnemy(838, 163),
		new staticEnemy(838, 188),
		new staticEnemy(838, 213),
		new staticEnemy(838, 238),
		
		new staticEnemy(838, 263),
		new staticEnemy(838, 288),
		new staticEnemy(838, 313),
		new staticEnemy(838, 338),
		
		new staticEnemy(838, 363),
		new staticEnemy(838, 388),
		new staticEnemy(838, 413),
		new staticEnemy(838, 438),
		
		new staticEnemy(838, 463),
		new staticEnemy(838, 488),
		
		
		new staticEnemy(637, 413),
		new staticEnemy(662, 413),
		new staticEnemy(687, 413),
		new staticEnemy(712, 413),
		new staticEnemy(737, 413),
		
		new staticEnemy(737, 438),
		new staticEnemy(662, 463),
		new staticEnemy(687, 463),
		
		new staticEnemy(637, 488),
		new staticEnemy(662, 488),
		new staticEnemy(687, 488),
		new staticEnemy(712, 488),
		new staticEnemy(737, 488),
		//
		new staticEnemy(337, 162),
		
		new staticEnemy(537, 162),
		
		//
		new staticEnemy(337, 187),
		
		new staticEnemy(387, 187),
		new staticEnemy(412, 187),
		
		new staticEnemy(437, 187),
		new staticEnemy(462, 187),
		new staticEnemy(487, 187),
		
		
		new staticEnemy(537, 187),
		
		new staticEnemy(612, 187),
		
		new staticEnemy(637, 187),
		new staticEnemy(662, 187),
		new staticEnemy(687, 187),
		//
		new staticEnemy(337, 212),
		
		new staticEnemy(487, 212),
		
		
		new staticEnemy(537, 212),
		new staticEnemy(562, 212),
		new staticEnemy(587, 212),
		new staticEnemy(612, 212),
		//
		
		new staticEnemy(362, 237),
		new staticEnemy(387, 237),
		new staticEnemy(412, 237),
		
		new staticEnemy(437, 237),
		
		new staticEnemy(487, 237),
		
		new staticEnemy(612, 237),
		
		
		new staticEnemy(662, 237),
		new staticEnemy(687, 237),
		new staticEnemy(712, 237),
		
		//
		
		new staticEnemy(487, 262),
		
		
		new staticEnemy(537, 262),
		new staticEnemy(562, 262),
		
		new staticEnemy(612, 262),
		//
		new staticEnemy(337, 287),
		new staticEnemy(362, 287),
		new staticEnemy(387, 287),
		new staticEnemy(412, 287),
		
		new staticEnemy(437, 287),
		new staticEnemy(462, 287),
		new staticEnemy(487, 287),
		
		
		
		new staticEnemy(537, 287),
		
		new staticEnemy(612, 287),
		
		new staticEnemy(637, 287),
		new staticEnemy(662, 287),
		new staticEnemy(687, 287),
		//
		
		
		new staticEnemy(537, 312),
		new staticEnemy(612, 312),
		//
		
		new staticEnemy(362, 337),
		new staticEnemy(387, 337),
		new staticEnemy(412, 337),
		
		
		new staticEnemy(462, 337),
		new staticEnemy(487, 337),
		new staticEnemy(512, 337),
		
		new staticEnemy(537, 337),
		new staticEnemy(562, 337),
		new staticEnemy(587, 337),
		new staticEnemy(612, 337),
		
		new staticEnemy(637, 337),
		new staticEnemy(662, 337),
		
		new staticEnemy(712, 337),
		//
		
		new staticEnemy(412, 362),
		
		
		new staticEnemy(712, 362),
		//
		
		//new simpleEnemy(113, , 413, 413, 3, 0),
		
		new linearEnemy([
			[113, 488, 414, 414, 3, 0],
			[488, 488, 414, 438, 0, 2],
			[488, 488, 438, 414, 0, 2],
			
			[488, 113, 414, 414, 3, 0],
			[113, 113, 414, 438, 0, 2],
			[113, 113, 438, 414, 0, 2]
			
		 ]),
		 
		 new linearEnemy([
			[113, 488, 438, 438, 3, 0],
			[488, 488, 438, 414, 0, 1],
			
			[488, 113, 414, 414, 3, 0],
			[113, 113, 414, 438, 0, 1]
			
		 ]),
		 	 new linearEnemy([
			[113, 488, 463, 463, 3, 0],
			[488, 488, 463, 487, 0, 1],
			
			[488, 113, 487, 487, 3, 0],
			[113, 113, 487, 463, 0, 1]
			
		 ]),
		 
		 new linearEnemy([
			[113, 488, 487, 487, 3, 0],
			[488, 488, 487, 463, 0, 2],
			[488, 488, 463, 487, 0, 2],
			
			[488, 113, 487, 487, 3, 0],
			[113, 113, 487, 463, 0, 2],
			[113, 113, 463, 487, 0, 2]
			
		 ]),
		 new linearEnemy([
			[763, 763, 163, 412, 0, 3],
			[763, 638, 412, 412, 3, 0],
			[638, 638, 412, 436, 0, 2],
			[638, 638, 436, 412, 0, 2],
			
			[638, 763, 412, 412, 3, 0],
			[763, 763, 412, 163, 0, 3],
			[763, 787, 163, 163, 2, 0],
			[787, 763, 163, 163, 2, 0],

		 ]),
		  new linearEnemy([
			[788, 788, 163, 437, 0, 3],
			[788, 638, 437, 437, 3, 0],
			[638, 638, 437, 412, 0, 4],
			[638, 763, 412, 412, 3, 0],
			
			[763, 763, 412, 163, 0, 3],
			[763, 788, 163, 163, 4, 0],

		 ]),
		    new linearEnemy([
			[813, 813, 163, 463, 0, 3],
			[813, 638, 463, 463, 3, 0],
			[638, 638, 463, 487, 0, 4],
			[638, 838, 487, 487, 3, 0],
			
			[838, 838, 487, 163, 0, 3],
			[838, 813, 163, 163, 4, 0],

		 ]),
		  new linearEnemy([
			[838, 838, 163, 487, 0, 4],
			[838, 638, 487, 487, 4, 0],
			[638, 638, 487, 463, 0, 2],
			[638, 638, 463, 487, 0, 2],
			
			[638, 838, 487, 487, 4, 0],
			[838, 838, 487, 163, 0, 4],
			[838, 814, 163, 163, 2, 0],
			[814, 838, 163, 163, 2, 0],

		 ]),
		 
		 new linearEnemy([
			[338, 338, 227, 264, 0, 3],
			[338, 463, 264, 264, 3, 0],
			[463, 463, 264, 214, 0, 3],
			[463, 363, 214, 214, 3, 0],
			[363, 363, 214, 164, 0, 3],
			
			[363, 513, 164, 164, 3, 0],
			[513, 513, 164, 325, 0, 3],
			[513, 513, 325, 164, 0, 3],
			[513, 363, 164, 164, 3, 0],
			
			
			[363, 363, 164, 214, 0, 3],
			[363, 463, 214, 214, 3, 0],
			[463, 463, 214, 264, 0, 3],
			[463, 338, 264, 264, 3, 0],
			[338, 338, 264, 227, 0, 3],
			

		 ]),
		  new linearEnemy([
			[626, 713 , 312, 312, 3, 0],
			[713, 713, 312, 262, 0, 3],
			[713, 638, 262, 262, 3, 0],
			[638, 638, 262, 212, 0, 3],
			[638, 713, 212, 212, 3, 0],
			
			[713, 713, 212, 162, 0, 3],
			[713, 613, 162, 162, 3, 0],
			[613, 713, 162, 162, 3, 0],
			[713, 713, 162, 212, 0, 3],
			
			
			[713, 638, 212, 212, 3, 0],
			[638, 638, 212, 262, 0, 3],
			[638, 713, 262, 262, 3, 0],
			[713, 713, 262, 312, 0, 3],
			[713, 626, 312, 312, 3, 0],
			

		 ]),
		 new linearEnemy([
			[400, 112, 363, 363, 3.5, 0],
			[112, 112, 363, 313, 0, 3.5],
			[112, 245, 313, 313, 3.5, 0],
			[245, 112, 313, 313, 3.5, 0],
			[112, 112, 313, 363, 0, 3.5],
			[112, 400, 363, 363, 3.5, 0],
			
			
		]),
		 new simpleEnemy(332, 525, 313, 313, 6.5, 0),
		new simpleEnemy(424, 700, 363, 363, 7, 0),
	],
	// level 22
	[
		
		new simpleEnemy(283, 445 , 238, 238, 4.5, 0),
		new simpleEnemy(283, 445 , 263, 263, 4.5, 0),
		new simpleEnemy(445, 283 , 288, 288, 4.5, 0),
		new simpleEnemy(445, 283 , 313, 313, 4.5, 0),
		
		new simpleEnemy(457, 618 , 288, 288, 4.5, 0),
		new simpleEnemy(457, 618 , 313, 313, 4.5, 0),
		new simpleEnemy(618, 457 , 238, 238, 4.5, 0),
		new simpleEnemy(618, 457 , 263, 263, 4.5, 0),
		
		new simpleEnemy(108, 270 , 464, 464, 4.5, 0),
		new simpleEnemy(108, 270 , 489, 489, 4.5, 0),
		new simpleEnemy(270, 108 , 414, 414, 4.5, 0),
		new simpleEnemy(270, 108 , 439, 439, 4.5, 0),
		
		new simpleEnemy(457, 619 , 464, 464, 4.5, 0),
		new simpleEnemy(457, 619 , 489, 489, 4.5, 0),
		new simpleEnemy(619, 457 , 414, 414, 4.5, 0),
		new simpleEnemy(619, 457 , 439, 439, 4.5, 0),
		
		new simpleEnemy(282, 444 , 414, 414, 4.5, 0),
		new simpleEnemy(282, 444 , 439, 439, 4.5, 0),
		new simpleEnemy(444, 282 , 464, 464, 4.5, 0),
		new simpleEnemy(444, 282 , 489, 489, 4.5, 0),
		
		new simpleEnemy(632, 794 , 414, 414, 4.5, 0),
		new simpleEnemy(632, 794 , 439, 439, 4.5, 0),
		new simpleEnemy(794, 632 , 464, 464, 4.5, 0),
		new simpleEnemy(794, 632 , 489, 489, 4.5, 0),
		
		new simpleEnemy(287, 287 , 108, 318, 0, 6),
		new simpleEnemy(312, 312 , 108, 318, 0, 6),
		new simpleEnemy(337, 337 , 318, 108, 0, 6),
		new simpleEnemy(362, 362 , 318, 108, 0, 6),
		
		new simpleEnemy(537, 537 , 318, 108, 0, 6),
		new simpleEnemy(562, 562 , 318, 108, 0, 6),
		new simpleEnemy(587, 587 , 108, 318, 0, 6),
		new simpleEnemy(612, 612 , 108, 318, 0, 6),
		
		new simpleEnemy(112, 231 , 113, 113, 4, 0),
		new simpleEnemy(112, 231 , 138, 138, 4, 0),
		new simpleEnemy(231, 112 , 163, 163, 4, 0),
		new simpleEnemy(231, 112 , 188, 188, 4, 0),
		
		new simpleEnemy(531, 656 , 113, 113, 4, 0),
		new simpleEnemy(531, 656 , 138, 138, 4, 0),
		new simpleEnemy(656, 531 , 163, 163, 4, 0),
		new simpleEnemy(656, 531 , 188, 188, 4, 0),
		
		new simpleEnemy(245, 368 , 113, 113, 4, 0),
		new simpleEnemy(245, 368 , 138, 138, 4, 0),
		new simpleEnemy(368, 245 , 163, 163, 4, 0),
		new simpleEnemy(368, 245 , 188, 188, 4, 0),
		
		new simpleEnemy(670, 794 , 113, 113, 4, 0),
		new simpleEnemy(670, 794 , 138, 138, 4, 0),
		new simpleEnemy(794, 670 , 163, 163, 4, 0),
		new simpleEnemy(794, 670 , 188, 188, 4, 0),
		
		new simpleEnemy(112, 112 , 108, 294, 0, 4.5),
		new simpleEnemy(137, 137 , 108, 294, 0, 4.5),
		new simpleEnemy(162, 162 , 294, 108, 0, 4.5),
		new simpleEnemy(187, 187 , 294, 108, 0, 4.5),
		
		new simpleEnemy(112, 112 , 494, 308, 0, 4.5),
		new simpleEnemy(137, 137 , 494, 308, 0, 4.5),
		new simpleEnemy(162, 162 , 308, 494, 0, 4.5),
		new simpleEnemy(187, 187 , 308, 494, 0, 4.5),
		
		new simpleEnemy(713, 713 , 294, 108, 0, 4.5),
		new simpleEnemy(738, 738 , 294, 108, 0, 4.5),
		new simpleEnemy(763, 763 , 108, 294, 0, 4.5),
		new simpleEnemy(788, 788 , 108, 294, 0, 4.5),
		
		new simpleEnemy(713, 713 , 308, 494, 0, 4.5),
		new simpleEnemy(738, 738 , 308, 494, 0, 4.5),
		new simpleEnemy(763, 763 , 494, 308, 0, 4.5),
		new simpleEnemy(788, 788 , 494, 308, 0, 4.5),
		
	],
	
	// level 23
	[
		new simpleEnemy(87, 87, 494, 108, 0, 2.8),
		new simpleEnemy(112, 112, 494, 108, 0, 2.8),
		new simpleEnemy(137, 137, 494, 108, 0, 2.8),
		new simpleEnemy(162, 162, 494, 108, 0, 2.8),
		new simpleEnemy(187, 187, 494, 108, 0, 2.8),
		
		new simpleEnemy(212, 212, 108, 494, 0, 2.8),
		new simpleEnemy(237, 237, 108, 494, 0, 2.8),
		new simpleEnemy(262, 262, 108, 494, 0, 2.8),
		new simpleEnemy(287, 287, 108, 494, 0, 2.8),
		new simpleEnemy(312, 312, 108, 494, 0, 2.8),
		
		new simpleEnemy(337, 337, 494, 108, 0, 2.8),
		new simpleEnemy(362, 362, 494, 108, 0, 2.8),
		new simpleEnemy(387, 387, 494, 108, 0, 2.8),
		new simpleEnemy(412, 412, 494, 108, 0, 2.8),
		new simpleEnemy(437, 437, 494, 108, 0, 2.8),
		
		new simpleEnemy(462, 462, 108, 494, 0, 2.8),
		new simpleEnemy(487, 487, 108, 494, 0, 2.8),
		new simpleEnemy(512, 512, 108, 494, 0, 2.8),
		new simpleEnemy(537, 537, 108, 494, 0, 2.8),
		new simpleEnemy(562, 562, 108, 494, 0, 2.8),
		
		new simpleEnemy(587, 587, 494, 108, 0, 2.8),
		new simpleEnemy(612, 612, 494, 108, 0, 2.8),
		new simpleEnemy(637, 637, 494, 108, 0, 2.8),
		new simpleEnemy(662, 662, 494, 108, 0, 2.8),
		new simpleEnemy(687, 687, 494, 108, 0, 2.8),
		
		new simpleEnemy(712, 712, 108, 494, 0, 2.8),
		new simpleEnemy(737, 737, 108, 494, 0, 2.8),
		new simpleEnemy(762, 762, 108, 494, 0, 2.8),
		new simpleEnemy(787, 787, 108, 494, 0, 2.8),
		new simpleEnemy(812, 812, 108, 494, 0, 2.8),
		
		new simpleEnemy(82, 819, 113,113 , 5.3, 0),
		new simpleEnemy(82, 819, 138, 138, 5.3, 0),
		new simpleEnemy(82, 819, 163, 163, 5.3, 0),
		new simpleEnemy(82, 819, 188, 188, 5.3, 0),
		
		new simpleEnemy(819, 82, 213,213 , 5.3, 0),
		new simpleEnemy(819, 82, 238,238 , 5.3, 0),
		new simpleEnemy(819, 82, 263,263 , 5.3, 0),
		new simpleEnemy(819, 82, 288,288 , 5.3, 0),
		
		new simpleEnemy(82, 819, 313,313 , 5.3, 0),
		new simpleEnemy(82, 819, 338,338 , 5.3, 0),
		new simpleEnemy(82, 819, 363,363 , 5.3, 0),
		new simpleEnemy(82, 819, 388,388 , 5.3, 0),
		
		new simpleEnemy(819, 82, 413,413 , 5.3, 0),
		new simpleEnemy(819, 82, 438,438 , 5.3, 0),
		new simpleEnemy(819, 82, 463,463 , 5.3, 0),
		new simpleEnemy(819, 82, 488,488 , 5.3, 0),
		
		new staticEnemy(388, 63),
		new staticEnemy(413, 63),
		new staticEnemy(438, 63),
		
		new staticEnemy(488, 63),
		new staticEnemy(513, 63),
		
		new staticEnemy(87, 112),
		new staticEnemy(212, 112),
		new staticEnemy(337, 112),
		new staticEnemy(462, 112),
		new staticEnemy(587, 112),
		new staticEnemy(712, 112),
		
		new staticEnemy(87, 237),
		new staticEnemy(212, 237),
		new staticEnemy(337, 237),
		new staticEnemy(462, 237),
		new staticEnemy(587, 237),
		new staticEnemy(712, 237),
		
		new staticEnemy(87, 362),
		new staticEnemy(212, 362),
		new staticEnemy(337, 362),
		new staticEnemy(462, 362),
		new staticEnemy(587, 362),
		new staticEnemy(712, 362),
		
		new staticEnemy(87, 487),
		new staticEnemy(212, 487),
		new staticEnemy(337, 487),
		new staticEnemy(462, 487),
		new staticEnemy(587, 487),
		new staticEnemy(712, 487),
		
		new staticEnemy(137, 137),
		new staticEnemy(262, 137),
		new staticEnemy(387, 137),
		new staticEnemy(512, 137),
		new staticEnemy(637, 137),
		new staticEnemy(762, 137),
		
		new staticEnemy(137, 262),
		new staticEnemy(262, 262),
		new staticEnemy(387, 262),
		new staticEnemy(512, 262),
		new staticEnemy(637, 262),
		new staticEnemy(762, 262),
		
		new staticEnemy(137, 387),
		new staticEnemy(262, 387),
		new staticEnemy(387, 387),
		new staticEnemy(512, 387),
		new staticEnemy(637, 387),
		new staticEnemy(762, 387),
		
		new staticEnemy(187, 162),
		new staticEnemy(312, 162),
		new staticEnemy(437, 162),
		new staticEnemy(562, 162),
		new staticEnemy(687, 162),
		new staticEnemy(812, 162),
		
		new staticEnemy(187, 287),
		new staticEnemy(312, 287),
		new staticEnemy(437, 287),
		new staticEnemy(562, 287),
		new staticEnemy(687, 287),
		new staticEnemy(812, 287),
		
		new staticEnemy(187, 412),
		new staticEnemy(312, 412),
		new staticEnemy(437, 412),
		new staticEnemy(562, 412),
		new staticEnemy(687, 412),
		new staticEnemy(812, 412),
		
		new staticEnemy(112, 187),
		new staticEnemy(237, 187),
		new staticEnemy(362, 187),
		new staticEnemy(487, 187),
		new staticEnemy(612, 187),
		new staticEnemy(737, 187),
		
		new staticEnemy(112, 312),
		new staticEnemy(237, 312),
		new staticEnemy(362, 312),
		new staticEnemy(487, 312),
		new staticEnemy(612, 312),
		new staticEnemy(737, 312),
		
		new staticEnemy(112, 337),
		new staticEnemy(237, 337),
		new staticEnemy(362, 337),
		new staticEnemy(487, 337),
		new staticEnemy(612, 337),
		new staticEnemy(737, 337),
		
		new staticEnemy(163, 212),
		new staticEnemy(287, 212),
		new staticEnemy(412, 212),
		new staticEnemy(537, 212),
		new staticEnemy(662, 212),
		new staticEnemy(787, 212),
		
		new staticEnemy(163, 337),
		new staticEnemy(287, 337),
		new staticEnemy(412, 337),
		new staticEnemy(537, 337),
		new staticEnemy(662, 337),
		new staticEnemy(787, 337),
		
		new staticEnemy(163, 462),
		new staticEnemy(287, 462),
		new staticEnemy(412, 462),
		new staticEnemy(537, 462),
		new staticEnemy(662, 462),
		new staticEnemy(787, 462),
	],
	
	// level 24
	[
		new simpleEnemy(88, 88, 109, 495, 0, 3.7),
		new simpleEnemy(113, 113, 109, 495, 0, 3.7),
		new simpleEnemy(113, 113, 495,109, 0, 3.7),
		new simpleEnemy(138, 138, 495,109, 0, 3.7),
		
		new simpleEnemy(294, 82, 114,114, 3, 0),
		new simpleEnemy(294, 82, 139,139, 3, 0),
		new simpleEnemy(82, 294, 164,164, 3, 0),
		new simpleEnemy(82, 294, 139,139, 3, 0),
		
		new simpleEnemy(594, 382, 114,114, 2, 0),
		new simpleEnemy(594, 382, 139,139, 2, 0),
		new simpleEnemy(382, 594, 164,164, 2, 0),
		new simpleEnemy(382, 594, 139,139, 2, 0),
		
		new simpleEnemy(232, 444, 439,439, 2, 0),
		new simpleEnemy(232, 444, 464,464, 2, 0),
		new simpleEnemy(444, 232, 464,464, 2, 0),
		new simpleEnemy(444, 232, 489,489, 2, 0),
		
		new simpleEnemy(532, 744, 439,439, 2, 0),
		new simpleEnemy(532, 744, 464,464, 2, 0),
		new simpleEnemy(744, 532, 464,464, 2, 0),
		new simpleEnemy(744, 532, 489,489, 2, 0),
		
		new linearEnemy([
			[88, 88, 360, 494, 0, 2],
			[88, 88, 494, 108, 0, 2],
			[88, 88, 108, 360, 0, 2]
		]),
		new linearEnemy([
			[113, 113, 360, 494, 0, 2],
			[113, 113, 494, 108, 0, 2],
			[113, 113, 108, 360, 0, 2]
		]),
		
		new linearEnemy([
			[88, 88, 360, 108, 0, 2],
			[88, 88, 108, 494, 0, 2],
			[88, 88, 494, 360, 0, 2]
		]),
		new linearEnemy([
			[113, 113, 360, 108, 0, 2],
			[113, 113, 108, 494, 0, 2],
			[113, 113, 494, 360, 0, 2]
		]),
		
		
		new linearEnemy([
			[113, 113, 242, 108, 0, 2],
			[113, 113, 108, 494, 0, 2],
			[113, 113, 494, 242, 0, 2]
		]),
		
			new linearEnemy([
			[138, 138, 242, 108, 0, 2],
			[138, 138, 108, 494, 0, 2],
			[138, 138, 494, 242, 0, 2]
		]),
		
		new linearEnemy([
			[113, 113, 242, 494, 0, 2],
			[113, 113, 494, 108, 0, 2],
			[113, 113, 108, 242, 0, 2]
		]),
		
			new linearEnemy([
			[138, 138, 242, 494, 0, 2],
			[138, 138, 494, 108, 0, 2],
			[138, 138, 108, 242, 0, 2]
		]),
		
		//
		
		new linearEnemy([
			[388, 388, 360, 494, 0, 2],
			[388, 388, 494, 108, 0, 2],
			[388, 388, 108, 360, 0, 2]
		]),
		new linearEnemy([
			[413, 413, 360, 494, 0, 2],
			[413, 413, 494, 108, 0, 2],
			[413, 413, 108, 360, 0, 2]
		]),
		
		new linearEnemy([
			[388, 388, 360, 108, 0, 2],
			[388, 388, 108, 494, 0, 2],
			[388, 388, 494, 360, 0, 2]
		]),
		new linearEnemy([
			[413, 413, 360, 108, 0, 2],
			[413, 413, 108, 494, 0, 2],
			[413, 413, 494, 360, 0, 2]
		]),
		
		
		new linearEnemy([
			[413, 413, 242, 108, 0, 2],
			[413, 413, 108, 494, 0, 2],
			[413, 413, 494, 242, 0, 2]
		]),
		
			new linearEnemy([
			[438, 438, 242, 108, 0, 2],
			[438, 438, 108, 494, 0, 2],
			[438, 438, 494, 242, 0, 2]
		]),
		
		new linearEnemy([
			[413, 413, 242, 494, 0, 2],
			[413, 413, 494, 108, 0, 2],
			[413, 413, 108, 242, 0, 2]
		]),
		
			new linearEnemy([
			[438, 438, 242, 494, 0, 2],
			[438, 438, 494, 108, 0, 2],
			[438, 438, 108, 242, 0, 2]
		]),
		//
		new linearEnemy([
			[688, 688, 360, 494, 0, 2],
			[688, 688, 494, 108, 0, 2],
			[688, 688, 108, 360, 0, 2]
		]),
		new linearEnemy([
			[713, 713, 360, 494, 0, 2],
			[713, 713, 494, 108, 0, 2],
			[713, 713, 108, 360, 0, 2]
		]),
		
		new linearEnemy([
			[688, 688, 360, 108, 0, 2],
			[688, 688, 108, 494, 0, 2],
			[688, 688, 494, 360, 0, 2]
		]),
		new linearEnemy([
			[713, 713, 360, 108, 0, 2],
			[713, 713, 108, 494, 0, 2],
			[713, 713, 494, 360, 0, 2]
		]),
		
		
		new linearEnemy([
			[713, 713, 242, 108, 0, 2],
			[713, 713, 108, 494, 0, 2],
			[713, 713, 494, 242, 0, 2]
		]),
		
			new linearEnemy([
			[738, 738, 242, 108, 0, 2],
			[738, 738, 108, 494, 0, 2],
			[738, 738, 494, 242, 0, 2]
		]),
		
		new linearEnemy([
			[713, 713, 242, 494, 0, 2],
			[713, 713, 494, 108, 0, 2],
			[713, 713, 108, 242, 0, 2]
		]),
		
			new linearEnemy([
			[738, 738, 242, 494, 0, 2],
			[738, 738, 494, 108, 0, 2],
			[738, 738, 108, 242, 0, 2]
		]),
		//
		
		new linearEnemy([
			[238, 238, 360, 494, 0, 2],
			[238, 238, 494, 108, 0, 2],
			[238, 238, 108, 360, 0, 2]
		]),
		new linearEnemy([
			[263, 263, 360, 494, 0, 2],
			[263, 263, 494, 108, 0, 2],
			[263, 263, 108, 360, 0, 2]
		]),
		
		new linearEnemy([
			[238, 238, 360, 108, 0, 2],
			[238, 238, 108, 494, 0, 2],
			[238, 238, 494, 360, 0, 2]
		]),
		new linearEnemy([
			[263, 263, 360, 108, 0, 2],
			[263, 263, 108, 494, 0, 2],
			[263, 263, 494, 360, 0, 2]
		]),
		
		
		new linearEnemy([
			[263, 263, 242, 108, 0, 2],
			[263, 263, 108, 494, 0, 2],
			[263, 263, 494, 242, 0, 2]
		]),
		
			new linearEnemy([
			[288, 288, 242, 108, 0, 2],
			[288, 288, 108, 494, 0, 2],
			[288, 288, 494, 242, 0, 2]
		]),
		
		new linearEnemy([
			[238, 238, 242, 494, 0, 2],
			[238, 238, 494, 108, 0, 2],
			[238, 238, 108, 242, 0, 2]
		]),
		
			new linearEnemy([
			[288, 288, 242, 494, 0, 2],
			[288, 288, 494, 108, 0, 2],
			[288, 288, 108, 242, 0, 2]
		]),
		
		//
		new linearEnemy([
			[538, 538, 360, 494, 0, 2],
			[538, 538, 494, 108, 0, 2],
			[538, 538, 108, 360, 0, 2]
		]),
		new linearEnemy([
			[563, 563, 360, 494, 0, 2],
			[563, 563, 494, 108, 0, 2],
			[563, 563, 108, 360, 0, 2]
		]),
		
		new linearEnemy([
			[538, 538, 360, 108, 0, 2],
			[538, 538, 108, 494, 0, 2],
			[538, 538, 494, 360, 0, 2]
		]),
		new linearEnemy([
			[563, 563, 360, 108, 0, 2],
			[563, 563, 108, 494, 0, 2],
			[563, 563, 494, 360, 0, 2]
		]),
		
		
		new linearEnemy([
			[563, 563, 242, 108, 0, 2],
			[563, 563, 108, 494, 0, 2],
			[563, 563, 494, 242, 0, 2]
		]),
		
			new linearEnemy([
			[588, 588, 242, 108, 0, 2],
			[588, 588, 108, 494, 0, 2],
			[588, 588, 494, 242, 0, 2]
		]),
		
		new linearEnemy([
			[538, 538, 242, 494, 0, 2],
			[538, 538, 494, 108, 0, 2],
			[538, 538, 108, 242, 0, 2]
		]),
		
			new linearEnemy([
			[588, 588, 242, 494, 0, 2],
			[588, 588, 494, 108, 0, 2],
			[588, 588, 108, 242, 0, 2]
		]),
	],
	
	// level 25
	[
		
		// circularEnemyLinear(movement, radius, startAngle, speed, angle, enemyType,stage) 	
		new circularEnemyLinear([
			
			[337, 337, 137, 212, 0, 2.2],
			[337, 563, 212, 212, 2.2, 0],
			[563, 563, 212, 388, 0, 2.2],
			[563,  337, 388,388, 2.2, 0],
			[337, 337, 388,462, 0, 2.2],
			[337, 337, 462,388, 0, 2.2],
			[337, 563, 388, 388, 2.2, 0],
			[563, 563, 388,212 , 0, 2.2],
			[563, 337, 212,212 , 2.2, 0],
			[337, 337, 212,137 , 0, 2.2]
			
		],25,90,7.9,0),
		
		new circularEnemyLinear([
			
			[337, 337, 137, 212, 0, 2.2],
			[337, 563, 212, 212, 2.2, 0],
			[563, 563, 212, 388, 0, 2.2],
			[563,  337, 388,388, 2.2, 0],
			[337, 337, 388,462, 0, 2.2],
			[337, 337, 462,388, 0, 2.2],
			[337, 563, 388, 388, 2.2, 0],
			[563, 563, 388,212 , 0, 2.2],
			[563, 337, 212,212 , 2.2, 0],
			[337, 337, 212,137 , 0, 2.2]
			
		],25,-90,7.9,0),
		
		
		
		new circularEnemyLinear([
			[563, 563, 223, 214, 0, 2.2],
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 139, 0, 2.2],
			[337, 337, 139, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 223 , 0, 2.2]
			
		],25,-90,7.9,0),
		
		new circularEnemyLinear([
			[563, 563, 223, 214, 0, 2.2],
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 139, 0, 2.2],
			[337, 337, 139, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 223 , 0, 2.2]
			
		],25,90,7.9,0),
		
	
		
		new circularEnemyLinear([
		
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 139, 0, 2.2],
			[337, 337, 139, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			
		],25,90,7.9,0),
		
		new circularEnemyLinear([
		
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 139, 0, 2.2],
			[337, 337, 139, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			
		],25,-90,7.9,0),
		
		new circularEnemyLinear([
		
			[422, 413, 388, 388 , 2.2, 0],
			[413, 337, 388, 388 , 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 137, 0, 2.2],
			[337, 337, 137, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			[563, 563, 214, 388, 0, 2.2],
			[563, 422, 388, 388, 2.2, 0]

	     ],25,-90,7.9,0),
		 
		 new circularEnemyLinear([
		
			[422, 413, 388, 388 , 2.2, 0],
			[413, 337, 388, 388 , 2.2, 0],
			[337, 337, 388, 463 , 0, 2.2],
			[337, 337, 463, 388 , 0, 2.2],
			[337, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			
			[563, 337, 214, 214, 2.2, 0],
			[337, 337, 214, 137, 0, 2.2],
			[337, 337, 137, 214, 0, 2.2],
			[337, 563, 214, 214, 2.2, 0],
			[563, 563, 214, 388, 0, 2.2],
			[563, 422, 388, 388, 2.2, 0]

	     ],25,90,7.9,0),
		 
		 new circularEnemyLinear([
		
			[417, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			[563, 337, 214, 214 , 2.2, 0],
			[337, 337, 214, 137 , 0, 2.2],
			[337, 337, 137, 214 , 0, 2.2],
			[337, 563, 214, 214 , 2.2, 0],
			
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463, 0, 2.2],
			[337, 337, 463, 388, 0, 2.2],
			[337, 417, 388, 388, 2.2, 0]

	     ],25,-90,7.9,0),
		 
		  new circularEnemyLinear([
		
			[417, 563, 388, 388 , 2.2, 0],
			[563, 563, 388, 214 , 0, 2.2],
			[563, 337, 214, 214 , 2.2, 0],
			[337, 337, 214, 137 , 0, 2.2],
			[337, 337, 137, 214 , 0, 2.2],
			[337, 563, 214, 214 , 2.2, 0],
			
			[563, 563, 214, 388, 0, 2.2],
			[563, 337, 388, 388, 2.2, 0],
			[337, 337, 388, 463, 0, 2.2],
			[337, 337, 463, 388, 0, 2.2],
			[337, 417, 388, 388, 2.2, 0]

	     ],25,90,7.9,0),
		/*
		new linearEnemy([
		
			[563, 563, 239, 413 , 0, 2.2],
			[563, 337, 413, 413 , 2.2, 0],
			[337, 337, 413, 488 , 0, 2.2],
			[337, 337, 488, 413 , 0, 2.2],
			[337, 563, 413, 413 , 2.2, 0],
			[563, 563, 413, 239 , 0, 2.2],
			
			[563, 337, 239, 239, 2.2, 0],
			[337, 337, 239, 164, 0, 2.2],
			[337, 337, 164, 239, 0, 2.2],
			[337, 563, 239, 239, 2.2, 0],

		]),
		
		new linearEnemy([
		
			[422, 413, 363, 363 , 2.2, 0],
			[413, 337, 363, 363 , 2.2, 0],
			[337, 337, 363, 438 , 0, 2.2],
			[337, 337, 438, 363 , 0, 2.2],
			[337, 563, 363, 363 , 2.2, 0],
			[563, 563, 363, 189 , 0, 2.2],
			
			[563, 337, 189, 189, 2.2, 0],
			[337, 337, 189, 114, 0, 2.2],
			[337, 337, 114, 189, 0, 2.2],
			[337, 563, 189, 189, 2.2, 0],
			[563, 563, 189, 363, 0, 2.2],
			[563, 422, 363, 363, 2.2, 0]

		]),
		
		new linearEnemy([
		
			[422, 413, 413, 413 , 2.2, 0],
			[413, 337, 413, 413 , 2.2, 0],
			[337, 337, 413, 488 , 0, 2.2],
			[337, 337, 488, 413 , 0, 2.2],
			[337, 563, 413, 413 , 2.2, 0],
			[563, 563, 413, 239 , 0, 2.2],
			
			[563, 337, 239, 239, 2.2, 0],
			[337, 337, 239, 164, 0, 2.2],
			[337, 337, 164, 239, 0, 2.2],
			[337, 563, 239, 239, 2.2, 0],
			[563, 563, 239, 413, 0, 2.2],
			[563, 422, 413, 413, 2.2, 0]

		]),*/
	],
	
	// level 26
	[
		new simpleEnemy(87, 87, 132, 469, 0, 2.3),
		new simpleEnemy(137, 137, 132, 469, 0, 2.3),
		new simpleEnemy(187, 187, 132, 469, 0, 2.3),
		new simpleEnemy(237, 237, 132, 469, 0, 2.3),
		new simpleEnemy(287, 287, 132, 469, 0, 2.3),
		new simpleEnemy(337, 337, 132, 469, 0, 2.3),
		new simpleEnemy(387, 387, 132, 469, 0, 2.3),
		new simpleEnemy(437, 437, 132, 469, 0, 2.3),
		new simpleEnemy(487, 487, 132, 469, 0, 2.3),
		new simpleEnemy(537, 537, 132, 469, 0, 2.3),
		new simpleEnemy(587, 587, 132, 469, 0, 2.3),
		new simpleEnemy(637, 637, 132, 469, 0, 2.3),
		new simpleEnemy(687, 687, 132, 469, 0, 2.3),
		new simpleEnemy(737, 737, 132, 469, 0, 2.3),
		new simpleEnemy(787, 787, 132, 469, 0, 2.3),
		
		new simpleEnemy(112, 112,   469,132, 0, 2.3),
		new simpleEnemy(162, 162, 469,132, 0, 2.3),
		new simpleEnemy(212, 212, 469,132, 0, 2.3),
		new simpleEnemy(262, 262, 469,132, 0, 2.3),
		new simpleEnemy(312, 312, 469,132, 0, 2.3),
		new simpleEnemy(362, 362, 469,132, 0, 2.3),
		new simpleEnemy(412, 412, 469,132, 0, 2.3),
		new simpleEnemy(462, 462, 469,132, 0, 2.3),
		new simpleEnemy(512, 512, 469,132, 0, 2.3),
		new simpleEnemy(562, 562, 469,132, 0, 2.3),
		new simpleEnemy(612, 612, 469,132, 0, 2.3),
		new simpleEnemy(662, 662, 469,132, 0, 2.3),
		new simpleEnemy(712, 712, 469,132, 0, 2.3),
		new simpleEnemy(762, 762, 469,132, 0, 2.3),
		new simpleEnemy(812, 812, 469,132, 0, 2.3),
		
		
		new staticEnemy(187, 237),
		new staticEnemy(212, 237),
		new staticEnemy(237, 237),
		new staticEnemy(262, 237),
		new staticEnemy(287, 237),
		new staticEnemy(312, 237),
		new staticEnemy(337, 237),
		new staticEnemy(362, 237),
		new staticEnemy(387, 237),
		new staticEnemy(387, 262),
		new staticEnemy(387, 287),
		new staticEnemy(387, 312),
		new staticEnemy(387, 337),
		new staticEnemy(387, 362),
		new staticEnemy(387, 387),
		new staticEnemy(387, 412),
		new staticEnemy(387, 437),
		new staticEnemy(387, 462),
		
		
		
		new staticEnemy(487, 237),
		new staticEnemy(512, 237),
		new staticEnemy(537, 237),
		new staticEnemy(562, 237),
		new staticEnemy(587, 237),
		new staticEnemy(612, 237),
		new staticEnemy(637, 237),
		new staticEnemy(662, 237),
		new staticEnemy(687, 237),
		new staticEnemy(712, 237),
		
		new staticEnemy(487, 262),
		new staticEnemy(487, 287),
		new staticEnemy(487, 312),
		new staticEnemy(487, 337),
		new staticEnemy(487, 362),
		new staticEnemy(487, 388),
		new staticEnemy(487, 414),
		new staticEnemy(487, 437),
		new staticEnemy(487, 462),
		
		new staticEnemy(87, 363),
		new staticEnemy(112, 363),
		new staticEnemy(137, 363),
		new staticEnemy(162, 363),
		new staticEnemy(187, 363),
		new staticEnemy(212, 363),
		new staticEnemy(237, 363),
		new staticEnemy(262, 363),
		new staticEnemy(287, 363),
		
		new staticEnemy(587, 363),
		new staticEnemy(612, 363),
		new staticEnemy(637, 363),
		new staticEnemy(662, 363),
		new staticEnemy(687, 363),
		new staticEnemy(712, 363),
		new staticEnemy(737, 363),
		new staticEnemy(762, 363),
		new staticEnemy(787, 363),
		new staticEnemy(812, 363),
		
		new simpleCircularEnemyXY(135, 190, 52, 30, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, 60, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, 90, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, 120, 2.5,0,null,135,316,0,1.7), 
		
		new simpleCircularEnemyXY(135, 190, 52, -60, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, -90, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, -120, 2.5,0,null,135,316,0,1.7), 
		new simpleCircularEnemyXY(135, 190, 52, -150, 2.5,0,null,135,316,0,1.7), 
		
		//
		
		new simpleCircularEnemyXY(337, 409, 52, 30, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, 60, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, 90, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, 120, 2.5,0,null,337,286,0,1.7), 
		
		new simpleCircularEnemyXY(337, 409, 52, -60, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, -90, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, -120, 2.5,0,null,337,286,0,1.7), 
		new simpleCircularEnemyXY(337, 409, 52, -150, 2.5,0,null,337,286,0,1.7), 
		
		//
		new simpleCircularEnemyXY(440, 308, 52, 0, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, 30, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, -30, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, -60, 2.5,0,null,440,184,0,1.7),
		
		new simpleCircularEnemyXY(440, 308, 52, -150, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, -180, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, -210, 2.5,0,null,440,184,0,1.7),
		new simpleCircularEnemyXY(440, 308, 52, -240, 2.5,0,null,440,184,0,1.7),
		
		//
		new simpleCircularEnemyXY(760, 190, 52, -30, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, -60, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, -90, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, -120, -2.5,0,null,637,190,1.7,0),
		
		new simpleCircularEnemyXY(760, 190, 52, 60, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, 90, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, 120, -2.5,0,null,637,190,1.7,0),
		new simpleCircularEnemyXY(760, 190, 52, 150, -2.5,0,null,637,190,1.7,0),
		
		//
		new simpleCircularEnemyXY(540, 412, 52, -30, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, -60, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, -90, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, -120, -2.5,0,null,664,412,1.7,0),
		
		new simpleCircularEnemyXY(540, 412, 52, 60, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, 90, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, 120, -2.5,0,null,664,412,1.7,0),
		new simpleCircularEnemyXY(540, 412, 52, 150, -2.5,0,null,664,412,1.7,0),
		
		
	    new simpleCircularEnemy(238, 186, 52, -60, 2.5),
		new simpleCircularEnemy(238, 186, 52, -90, 2.5),
		new simpleCircularEnemy(238, 186, 52, -120, 2.5),
		new simpleCircularEnemy(238, 186, 52, -150, 2.5),
		
		new simpleCircularEnemy(238, 186, 52, 30, 2.5),
		new simpleCircularEnemy(238, 186, 52, 60, 2.5),
		new simpleCircularEnemy(238, 186, 52, 90, 2.5),
		new simpleCircularEnemy(238, 186, 52, 120, 2.5),
		//
		
		new simpleCircularEnemy(333, 186, 52, -30, -2.5),
    	new simpleCircularEnemy(333, 186, 52, -60, -2.5),
		new simpleCircularEnemy(333, 186, 52, -90, -2.5),
		new simpleCircularEnemy(333, 186, 52, -120, -2.5),
		
		new simpleCircularEnemy(333, 186, 52, 60, -2.5),
		new simpleCircularEnemy(333, 186, 52, 90, -2.5),
		new simpleCircularEnemy(333, 186, 52, 120, -2.5),
		new simpleCircularEnemy(333, 186, 52, 150, -2.5),
		//
		
		new simpleCircularEnemy(137, 412, 52, -30, -2.5),
	    new simpleCircularEnemy(137, 412, 52, -60, -2.5),
	    new simpleCircularEnemy(137, 412, 52, -90, -2.5),
		new simpleCircularEnemy(137, 412, 52, -120, -2.5),
	    
		new simpleCircularEnemy(137, 412, 52, 60, -2.5),
	    new simpleCircularEnemy(137, 412, 52, 90, -2.5),
	    new simpleCircularEnemy(137, 412, 52, 120, -2.5),
	    new simpleCircularEnemy(137, 412, 52, 150, -2.5),
	    //
		new simpleCircularEnemy(233, 412, 52, -60, 2.5),
	    new simpleCircularEnemy(233, 412, 52, -90, 2.5),
	    new simpleCircularEnemy(233, 412, 52, -120, 2.5),
	    new simpleCircularEnemy(233, 412, 52, -150, 2.5),
	    
		new simpleCircularEnemy(233, 412, 52, 30, 2.5),
	   new simpleCircularEnemy(233, 412, 52, 60, 2.5),
	   new simpleCircularEnemy(233, 412, 52, 90, 2.5),
	   new simpleCircularEnemy(233, 412, 52, 120, 2.5),
	   //
	   new simpleCircularEnemy(440, 412, 52, -60, -2.5),
	   new simpleCircularEnemy(440, 412, 52, -90, -2.5),
	   new simpleCircularEnemy(440, 412, 52, -120, -2.5),
	   new simpleCircularEnemy(440, 412, 52, -150, -2.5),
	   
	   new simpleCircularEnemy(440, 412, 52, 30, -2.5),
	   new simpleCircularEnemy(440, 412, 52, 60, -2.5),
	   new simpleCircularEnemy(440, 412, 52, 90, -2.5),
	   new simpleCircularEnemy(440, 412, 52, 120, -2.5),
	   //
	   new simpleCircularEnemy(533, 185, 52, -30, -2.5),
	   new simpleCircularEnemy(533, 185, 52, -60, -2.5),
	   new simpleCircularEnemy(533, 185, 52, -90, -2.5),
	   new simpleCircularEnemy(533, 185, 52, -120, -2.5),
	   
	   new simpleCircularEnemy(533, 185, 52, 60, -2.5),
	   new simpleCircularEnemy(533, 185, 52, 90, -2.5),
	   new simpleCircularEnemy(533, 185, 52, 120, -2.5),
	   new simpleCircularEnemy(533, 185, 52, 150, -2.5),
	   //
	    new simpleCircularEnemy(645, 297, 52, -30, -2.5),
		new simpleCircularEnemy(645, 297, 52, -60, -2.5),
		new simpleCircularEnemy(645, 297, 52, -90, -2.5),
		new simpleCircularEnemy(645, 297, 52, -120, -2.5),
		
		new simpleCircularEnemy(645, 297, 52, 60, -2.5),
		new simpleCircularEnemy(645, 297, 52, 90, -2.5),
		new simpleCircularEnemy(645, 297, 52, 120, -2.5),
		new simpleCircularEnemy(645, 297, 52, 150, -2.5),
		//
		new simpleCircularEnemy(760, 412, 52, -30, -2.5),
		new simpleCircularEnemy(760, 412, 52, -60, -2.5),
		new simpleCircularEnemy(760, 412, 52, -90, -2.5),
		new simpleCircularEnemy(760, 412, 52, -120, -2.5),
		
		new simpleCircularEnemy(760, 412, 52, 60, -2.5),
		new simpleCircularEnemy(760, 412, 52, 90, -2.5),
		new simpleCircularEnemy(760, 412, 52, 120, -2.5),
		new simpleCircularEnemy(760, 412, 52, 150, -2.5),
		
	   ],
	
	// level 27
	[
		new simpleEnemy(87, 87, 132, 469, 0, 5.5),
		new simpleEnemy(137, 137, 132, 469, 0, 5.5),
		new simpleEnemy(187, 187, 132, 469, 0, 5.5),
		new simpleEnemy(237, 237, 132, 469, 0, 5.5),
		new simpleEnemy(287, 287, 132, 469, 0, 5.5),
		new simpleEnemy(337, 337, 132, 469, 0, 5.5),
		new simpleEnemy(387, 387, 132, 469, 0, 5.5),
		new simpleEnemy(437, 437, 132, 469, 0, 5.5),
		new simpleEnemy(487, 487, 132, 469, 0, 5.5),
		new simpleEnemy(537, 537, 132, 469, 0, 5.5),
		new simpleEnemy(587, 587, 132, 469, 0, 5.5),
		new simpleEnemy(637, 637, 132, 469, 0, 5.5),
		new simpleEnemy(687, 687, 132, 469, 0, 5.5),
		new simpleEnemy(737, 737, 132, 469, 0, 5.5),
		new simpleEnemy(787, 787, 132, 469, 0, 5.5),
		
		new simpleEnemy(87, 87, 469, 132 , 0, 5.5),
		new simpleEnemy(137, 137, 469, 132, 0, 5.5),
		new simpleEnemy(187, 187, 469, 132, 0, 5.5),
		new simpleEnemy(237, 237, 469, 132, 0, 5.5),
		new simpleEnemy(287, 287, 469, 132, 0, 5.5),
		new simpleEnemy(337, 337, 469, 132, 0, 5.5),
		new simpleEnemy(387, 387, 469, 132, 0, 5.5),
		new simpleEnemy(437, 437, 469, 132, 0, 5.5),
		new simpleEnemy(487, 487, 469, 132, 0, 5.5),
		new simpleEnemy(537, 537, 469, 132, 0, 5.5),
		new simpleEnemy(587, 587, 469, 132, 0, 5.5),
		new simpleEnemy(637, 637, 469, 132, 0, 5.5),
		new simpleEnemy(687, 687, 469, 132, 0, 5.5),
		new simpleEnemy(737, 737, 469, 132, 0, 5.5),
		new simpleEnemy(787, 787, 469, 132, 0, 5.5),
		
		new simpleEnemy(112, 112,   294,132, 0, 2.8),
		new simpleEnemy(162, 162, 294,132, 0, 2.8),
		new simpleEnemy(212, 212, 294,132, 0, 2.8),
		new simpleEnemy(262, 262, 294,132, 0, 2.8),
		new simpleEnemy(312, 312, 294,132, 0, 2.8),
		new simpleEnemy(362, 362, 294,132, 0, 2.8),
		new simpleEnemy(412, 412, 294,132, 0, 2.8),
		new simpleEnemy(462, 462, 294,132, 0, 2.8),
		new simpleEnemy(512, 512, 294,132, 0, 2.8),
		new simpleEnemy(562, 562, 294,132, 0, 2.8),
		new simpleEnemy(612, 612, 294,132, 0, 2.8),
		new simpleEnemy(662, 662, 294,132, 0, 2.8),
		new simpleEnemy(712, 712, 294,132, 0, 2.8),
		new simpleEnemy(762, 762, 294,132, 0, 2.8),
		new simpleEnemy(812, 812, 294,132, 0, 2.8),
		
		new simpleEnemy(112, 112,   308,469, 0, 2.8),
		new simpleEnemy(162, 162, 308,469, 0, 2.8),
		new simpleEnemy(212, 212, 308,469, 0, 2.8),
		new simpleEnemy(262, 262, 308,469, 0, 2.8),
		new simpleEnemy(312, 312, 308,469, 0, 2.8),
		new simpleEnemy(362, 362, 308,469, 0, 2.8),
		new simpleEnemy(412, 412, 308,469, 0, 2.8),
		new simpleEnemy(462, 462, 308,469, 0, 2.8),
		new simpleEnemy(512, 512, 308,469, 0, 2.8),
		new simpleEnemy(562, 562, 308,469, 0, 2.8),
		new simpleEnemy(612, 612, 308,469, 0, 2.8),
		new simpleEnemy(662, 662, 308,469, 0, 2.8),
		new simpleEnemy(712, 712, 308,469, 0, 2.8),
		new simpleEnemy(762, 762, 308,469, 0, 2.8),
		new simpleEnemy(812, 812, 308,469, 0, 2.8),
		
		new simpleEnemy(82, 320, 137,137, 4, 0),
		new simpleEnemy(82, 320, 187,187, 4, 0),
		new simpleEnemy(82, 320, 237,237, 4, 0),
		new simpleEnemy(82, 320, 287,287, 4, 0),
		new simpleEnemy(82, 320, 338,338, 4, 0),
		new simpleEnemy(82, 320, 387,387, 4, 0),
		new simpleEnemy(82, 320, 437,437, 4, 0),
		
		new simpleEnemy(320, 82, 162,162, 4, 0),
		new simpleEnemy(320, 82, 212,212, 4, 0),
		new simpleEnemy(320, 82, 262,262, 4, 0),
		new simpleEnemy(320, 82, 312,312, 4, 0),
		new simpleEnemy(320, 82, 362,362, 4, 0),
		new simpleEnemy(320, 82, 412,412, 4, 0),
		new simpleEnemy(320, 82, 462,462, 4, 0),
		
		new simpleEnemy(332, 570, 137,137, 4, 0),
		new simpleEnemy(332, 570, 187,187, 4, 0),
		new simpleEnemy(332, 570, 237,237, 4, 0),
		new simpleEnemy(332, 570, 287,287, 4, 0),
		new simpleEnemy(332, 570, 338,338, 4, 0),
		new simpleEnemy(332, 570, 387,387, 4, 0),
		new simpleEnemy(332, 570, 437,437, 4, 0),
		
		new simpleEnemy(570, 332, 162,162, 4, 0),
		new simpleEnemy(570, 332, 212,212, 4, 0),
		new simpleEnemy(570, 332, 262,262, 4, 0),
		new simpleEnemy(570, 332, 312,312, 4, 0),
		new simpleEnemy(570, 332, 362,362, 4, 0),
		new simpleEnemy(570, 332, 412,412, 4, 0),
		new simpleEnemy(570, 332, 462,462, 4, 0),
		
		new simpleEnemy(582, 820, 137,137, 4, 0),
		new simpleEnemy(582, 820, 187,187, 4, 0),
		new simpleEnemy(582, 820, 237,237, 4, 0),
		new simpleEnemy(582, 820, 287,287, 4, 0),
		new simpleEnemy(582, 820, 338,338, 4, 0),
		new simpleEnemy(582, 820, 387,387, 4, 0),
		new simpleEnemy(582, 820, 437,437, 4, 0),
		
		new simpleEnemy(820, 582, 162,162, 4, 0),
		new simpleEnemy(820, 582, 212,212, 4, 0),
		new simpleEnemy(820, 582, 262,262, 4, 0),
		new simpleEnemy(820, 582, 312,312, 4, 0),
		new simpleEnemy(820, 582, 362,362, 4, 0),
		new simpleEnemy(820, 582, 412,412, 4, 0),
		new simpleEnemy(820, 582, 462,462, 4, 0),
		
	],
	
	// level 28
	[
	  new simpleEnemy(237, 237, 134, 196, 0, 2.3),
	  new simpleEnemy(262, 262, 134, 196, 0, 2.3),
	  new simpleEnemy(287, 287, 134, 196, 0, 2.3),
	  new simpleEnemy(312, 312, 134, 196, 0, 2.3),
	  new simpleEnemy(337, 337, 134, 196, 0, 2.3),
	  new simpleEnemy(362, 362, 134, 196, 0, 2.3),
	  
	  new simpleEnemy(237, 237, 208,270, 0, 2.3),
	  new simpleEnemy(262, 262, 208,270, 0, 2.3),
	  new simpleEnemy(287, 287, 208,270, 0, 2.3),
	  new simpleEnemy(312, 312, 208,270, 0, 2.3),
	  new simpleEnemy(337, 337, 208,270, 0, 2.3),
	  new simpleEnemy(362, 362, 208,270, 0, 2.3),
	  //
	  new simpleEnemy(237, 237, 470, 408, 0, 2.3),
	  new simpleEnemy(262, 262, 470, 408, 0, 2.3),
	  new simpleEnemy(287, 287, 470, 408, 0, 2.3),
	  new simpleEnemy(312, 312, 470, 408, 0, 2.3),
	  new simpleEnemy(337, 337, 470, 408, 0, 2.3),
	  new simpleEnemy(362, 362, 470, 408, 0, 2.3),
	  
	  new simpleEnemy(237, 237, 396, 334, 0, 2.3),
	  new simpleEnemy(262, 262, 396, 334, 0, 2.3),
	  new simpleEnemy(287, 287, 396, 334, 0, 2.3),
	  new simpleEnemy(312, 312, 396, 334, 0, 2.3),
	  new simpleEnemy(337, 337, 396, 334, 0, 2.3),
	  new simpleEnemy(362, 362, 396, 334, 0, 2.3),
	  //
	  
	  new simpleEnemy(537, 537, 196, 134, 0, 2.3),
	  new simpleEnemy(562, 562, 196, 134, 0, 2.3),
	  new simpleEnemy(587, 587, 196, 134, 0, 2.3),
	  new simpleEnemy(612, 612, 196, 134, 0, 2.3),
	  new simpleEnemy(637, 637, 196, 134, 0, 2.3),
	  new simpleEnemy(662, 662, 196, 134, 0, 2.3),
	  
	   new simpleEnemy(537, 537, 270, 208, 0, 2.3),
	  new simpleEnemy(562, 562, 270, 208, 0, 2.3),
	  new simpleEnemy(587, 587, 270, 208, 0, 2.3),
	  new simpleEnemy(612, 612, 270, 208, 0, 2.3),
	  new simpleEnemy(637, 637, 270, 208, 0, 2.3),
	  new simpleEnemy(662, 662, 270, 208, 0, 2.3),
	  
	  new simpleEnemy(537, 537, 334, 396, 0, 2.3),
	  new simpleEnemy(562, 562, 334, 396, 0, 2.3),
	  new simpleEnemy(587, 587, 334, 396, 0, 2.3),
	  new simpleEnemy(612, 612, 334, 396, 0, 2.3),
	  new simpleEnemy(637, 637, 334, 396, 0, 2.3),
	  new simpleEnemy(662, 662, 334, 396, 0, 2.3),
	  
	  new simpleEnemy(537, 537, 408, 470, 0, 2.3),
	  new simpleEnemy(562, 562, 408, 470, 0, 2.3),
	  new simpleEnemy(587, 587, 408, 470, 0, 2.3),
	  new simpleEnemy(612, 612, 408, 470, 0, 2.3),
	  new simpleEnemy(637, 637, 408, 470, 0, 2.3),
	  new simpleEnemy(662, 662, 408, 470, 0, 2.3),
		
	   new simpleEnemy(82, 142 , 287, 287, 2.3, 0),
	   new simpleEnemy(82, 142 , 312, 312, 2.3, 0),
	   
	   new simpleEnemy(152, 212 , 287, 287, 2.3, 0),
	   new simpleEnemy(152, 212 , 312, 312, 2.3, 0),
	   
	    new simpleEnemy(682, 742 , 287, 287, 2.3, 0),
	   new simpleEnemy(682, 742 , 312, 312, 2.3, 0),
	   
	   new simpleEnemy(752, 812 , 287, 287, 2.3, 0),
	   new simpleEnemy(752, 812 , 312, 312, 2.3, 0),
	  
       new simpleCircularEnemy(150, 200, 0, 0, 0),
	   new simpleCircularEnemy(150, 200, 18, 45, -3),
	   new simpleCircularEnemy(150, 200, 36, 45, -3),
	   new simpleCircularEnemy(150, 200, 54, 45, -3),
	   new simpleCircularEnemy(150, 200, 72, 45, -3),
	   
	   new simpleCircularEnemy(150, 200, 18, -45, -3),
	   new simpleCircularEnemy(150, 200, 36, -45, -3),
	   new simpleCircularEnemy(150, 200, 54, -45, -3),
	   new simpleCircularEnemy(150, 200, 72, -45, -3),
	   
	   new simpleCircularEnemy(150, 200, 18, 135, -3),
	   new simpleCircularEnemy(150, 200, 36, 135, -3),
	   new simpleCircularEnemy(150, 200, 54, 135, -3),
	   new simpleCircularEnemy(150, 200, 72, 135, -3),
	   
	   new simpleCircularEnemy(150, 200, 18, -135, -3),
	   new simpleCircularEnemy(150, 200, 36, -135, -3),
	   new simpleCircularEnemy(150, 200, 54, -135, -3),
	   new simpleCircularEnemy(150, 200, 72, -135, -3),
	   //
	   
	    new simpleCircularEnemy(450, 200, 0, 0, 0),
	   new simpleCircularEnemy(450, 200, 18, 45, 3),
	   new simpleCircularEnemy(450, 200, 36, 45, 3),
	   new simpleCircularEnemy(450, 200, 54, 45, 3),
	   new simpleCircularEnemy(450, 200, 72, 45, 3),
	   
	   new simpleCircularEnemy(450, 200, 18, -45, 3),
	   new simpleCircularEnemy(450, 200, 36, -45, 3),
	   new simpleCircularEnemy(450, 200, 54, -45, 3),
	   new simpleCircularEnemy(450, 200, 72, -45, 3),
	   
	   new simpleCircularEnemy(450, 200, 18, 135, 3),
	   new simpleCircularEnemy(450, 200, 36, 135, 3),
	   new simpleCircularEnemy(450, 200, 54, 135, 3),
	   new simpleCircularEnemy(450, 200, 72, 135, 3),
	   
	   new simpleCircularEnemy(450, 200, 18, -135, 3),
	   new simpleCircularEnemy(450, 200, 36, -135, 3),
	   new simpleCircularEnemy(450, 200, 54, -135, 3),
	   new simpleCircularEnemy(450, 200, 72, -135, 3),
	   //
	   
	   
	     new simpleCircularEnemy(750, 200, 0, 0, 0),
	   new simpleCircularEnemy(750, 200, 18, 45, -3),
	   new simpleCircularEnemy(750, 200, 36, 45, -3),
	   new simpleCircularEnemy(750, 200, 54, 45, -3),
	   new simpleCircularEnemy(750, 200, 72, 45, -3),
	   
	   new simpleCircularEnemy(750, 200, 18, -45, -3),
	   new simpleCircularEnemy(750, 200, 36, -45, -3),
	   new simpleCircularEnemy(750, 200, 54, -45, -3),
	   new simpleCircularEnemy(750, 200, 72, -45, -3),
	   
	   new simpleCircularEnemy(750, 200, 18, 135, -3),
	   new simpleCircularEnemy(750, 200, 36, 135, -3),
	   new simpleCircularEnemy(750, 200, 54, 135, -3),
	   new simpleCircularEnemy(750, 200, 72, 135, -3),
	   
	   new simpleCircularEnemy(750, 200, 18, -135, -3),
	   new simpleCircularEnemy(750, 200, 36, -135, -3),
	   new simpleCircularEnemy(750, 200, 54, -135, -3),
	   new simpleCircularEnemy(750, 200, 72, -135, -3),
	   //
	    new simpleCircularEnemy(150, 400, 0, 0, 0),
	   new simpleCircularEnemy(150, 400, 18, 45, 3),
	   new simpleCircularEnemy(150, 400, 36, 45, 3),
	   new simpleCircularEnemy(150, 400, 54, 45, 3),
	   new simpleCircularEnemy(150, 400, 72, 45, 3),
	   
	   new simpleCircularEnemy(150, 400, 18, -45, 3),
	   new simpleCircularEnemy(150, 400, 36, -45, 3),
	   new simpleCircularEnemy(150, 400, 54, -45, 3),
	   new simpleCircularEnemy(150, 400, 72, -45, 3),
	   
	   new simpleCircularEnemy(150, 400, 18, 135, 3),
	   new simpleCircularEnemy(150, 400, 36, 135, 3),
	   new simpleCircularEnemy(150, 400, 54, 135, 3),
	   new simpleCircularEnemy(150, 400, 72, 135, 3),
	   
	   new simpleCircularEnemy(150, 400, 18, -135, 3),
	   new simpleCircularEnemy(150, 400, 36, -135, 3),
	   new simpleCircularEnemy(150, 400, 54, -135, 3),
	   new simpleCircularEnemy(150, 400, 72, -135, 3),
	   //
	    new simpleCircularEnemy(450, 400, 0, 0, 0),
	   new simpleCircularEnemy(450, 400, 18, 45, -3),
	   new simpleCircularEnemy(450, 400, 36, 45, -3),
	   new simpleCircularEnemy(450, 400, 54, 45, -3),
	   new simpleCircularEnemy(450, 400, 72, 45, -3),
	   
	   new simpleCircularEnemy(450, 400, 18, -45, -3),
	   new simpleCircularEnemy(450, 400, 36, -45, -3),
	   new simpleCircularEnemy(450, 400, 54, -45, -3),
	   new simpleCircularEnemy(450, 400, 72, -45, -3),
	   
	   new simpleCircularEnemy(450, 400, 18, 135, -3),
	   new simpleCircularEnemy(450, 400, 36, 135, -3),
	   new simpleCircularEnemy(450, 400, 54, 135, -3),
	   new simpleCircularEnemy(450, 400, 72, 135, -3),
	   
	   new simpleCircularEnemy(450, 400, 18, -135, -3),
	   new simpleCircularEnemy(450, 400, 36, -135, -3),
	   new simpleCircularEnemy(450, 400, 54, -135, -3),
	   new simpleCircularEnemy(450, 400, 72, -135, -3),
	   //
	   
	   
	     new simpleCircularEnemy(750, 400, 0, 0, 0),
	   new simpleCircularEnemy(750, 400, 18, 45, 3),
	   new simpleCircularEnemy(750, 400, 36, 45, 3),
	   new simpleCircularEnemy(750, 400, 54, 45, 3),
	   new simpleCircularEnemy(750, 400, 72, 45, 3),
	   
	   new simpleCircularEnemy(750, 400, 18, -45, 3),
	   new simpleCircularEnemy(750, 400, 36, -45, 3),
	   new simpleCircularEnemy(750, 400, 54, -45, 3),
	   new simpleCircularEnemy(750, 400, 72, -45, 3),
	   
	   new simpleCircularEnemy(750, 400, 18, 135, 3),
	   new simpleCircularEnemy(750, 400, 36, 135, 3),
	   new simpleCircularEnemy(750, 400, 54, 135, 3),
	   new simpleCircularEnemy(750, 400, 72, 135, 3),
	   
	   new simpleCircularEnemy(750, 400, 18, -135, 3),
	   new simpleCircularEnemy(750, 400, 36, -135, 3),
	   new simpleCircularEnemy(750, 400, 54, -135, 3),
	   new simpleCircularEnemy(750, 400, 72, -135, 3),
	   //
	],
	
	// level 29
	[
		 
		 
		new simpleCircularEnemy(450, 300, 50, 0, 0.95),
		new simpleCircularEnemy(450, 300, 50, 180, 0.95),
		new simpleCircularEnemy(450, 300, 50, 30, 0.95),
		new simpleCircularEnemy(450, 300, 50, -30, 0.95),
		new simpleCircularEnemy(450, 300, 50, 60, 0.95),
		new simpleCircularEnemy(450, 300, 50, -60, 0.95),
		new simpleCircularEnemy(450, 300, 50, -120, 0.95),
		new simpleCircularEnemy(450, 300, 50, -150, 0.95),
		new simpleCircularEnemy(450, 300, 50, 120, 0.95),
		new simpleCircularEnemy(450, 300, 50, 150, 0.95),
		
		

		new simpleCircularEnemy(450, 300, 75, 25, -0.75),
		new simpleCircularEnemy(450, 300, 75, 45, -0.75),		
		new simpleCircularEnemy(450, 300, 75, 65, -0.75),

		new simpleCircularEnemy(450, 300, 75, 115, -0.75),
		new simpleCircularEnemy(450, 300, 75, 135, -0.75),
		new simpleCircularEnemy(450, 300, 75, 155, -0.75),
		
		new simpleCircularEnemy(450, 300, 75, 205, -0.75),
		new simpleCircularEnemy(450, 300, 75, 225, -0.75),
		new simpleCircularEnemy(450, 300, 75, 245, -0.75),
		
		new simpleCircularEnemy(450, 300, 75, -25, -0.75),
		new simpleCircularEnemy(450, 300, 75, -45, -0.75),		
		new simpleCircularEnemy(450, 300, 75, -65, -0.75),

        //		
		new simpleCircularEnemy(450, 300, 100, 18, 0.62),
		new simpleCircularEnemy(450, 300, 100, 36, 0.62),		
		new simpleCircularEnemy(450, 300, 100, 54, 0.62),
		new simpleCircularEnemy(450, 300, 100, 72, 0.62),
		
		new simpleCircularEnemy(450, 300, 100, 108, 0.62),
		new simpleCircularEnemy(450, 300, 100, 126, 0.62),		
		new simpleCircularEnemy(450, 300, 100, 144, 0.62),
		new simpleCircularEnemy(450, 300, 100, 162, 0.62),
		
		new simpleCircularEnemy(450, 300, 100, -18, 0.62),
		new simpleCircularEnemy(450, 300, 100, -36, 0.62),		
		new simpleCircularEnemy(450, 300, 100, -54, 0.62),
		new simpleCircularEnemy(450, 300, 100, -72, 0.62),
		
		new simpleCircularEnemy(450, 300, 100, -108, 0.62),
		new simpleCircularEnemy(450, 300, 100, -126, 0.62),		
		new simpleCircularEnemy(450, 300, 100, -144, 0.62),
		new simpleCircularEnemy(450, 300, 100, -162, 0.62),
		
		new simpleCircularEnemy(450, 300, 125, 15, -0.54),
		new simpleCircularEnemy(450, 300, 125, 30, -0.54),		
		new simpleCircularEnemy(450, 300, 125, 45, -0.54),
		new simpleCircularEnemy(450, 300, 125, 60, -0.54),
		new simpleCircularEnemy(450, 300, 125, 75, -0.54),
		
		new simpleCircularEnemy(450, 300, 125, 105, -0.54),
		new simpleCircularEnemy(450, 300, 125, 120, -0.54),		
		new simpleCircularEnemy(450, 300, 125, 135, -0.54),
		new simpleCircularEnemy(450, 300, 125, 150, -0.54),
		new simpleCircularEnemy(450, 300, 125, 165, -0.54),
		
		new simpleCircularEnemy(450, 300, 125, -15, -0.54),
		new simpleCircularEnemy(450, 300, 125, -30, -0.54),		
		new simpleCircularEnemy(450, 300, 125, -45, -0.54),
		new simpleCircularEnemy(450, 300, 125, -60, -0.54),
		new simpleCircularEnemy(450, 300, 125, -75, -0.54),
		
		new simpleCircularEnemy(450, 300, 125, -105, -0.54),
		new simpleCircularEnemy(450, 300, 125, -120, -0.54),		
		new simpleCircularEnemy(450, 300, 125, -135, -0.54),
		new simpleCircularEnemy(450, 300, 125, -150, -0.54),
		new simpleCircularEnemy(450, 300, 125, -165, -0.54),
		
		new simpleCircularEnemy(450, 300, 150, 13, 0.46),
		new simpleCircularEnemy(450, 300, 150, 26, 0.46),		
		new simpleCircularEnemy(450, 300, 150, 39, 0.46),
		new simpleCircularEnemy(450, 300, 150, 51, 0.46),
		new simpleCircularEnemy(450, 300, 150, 64, 0.46),
		new simpleCircularEnemy(450, 300, 150, 77, 0.46),
		
		new simpleCircularEnemy(450, 300, 150, 103, 0.46),
		new simpleCircularEnemy(450, 300, 150, 116, 0.46),		
		new simpleCircularEnemy(450, 300, 150, 129, 0.46),
		new simpleCircularEnemy(450, 300, 150, 141, 0.46),
		new simpleCircularEnemy(450, 300, 150, 154, 0.46),
		new simpleCircularEnemy(450, 300, 150, 167, 0.46), 
		
		new simpleCircularEnemy(450, 300, 150, -13, 0.46),
		new simpleCircularEnemy(450, 300, 150, -26, 0.46),		
		new simpleCircularEnemy(450, 300, 150, -39, 0.46),
		new simpleCircularEnemy(450, 300, 150, -51, 0.46),
		new simpleCircularEnemy(450, 300, 150, -64, 0.46),
		new simpleCircularEnemy(450, 300, 150, -77, 0.46),
		
		new simpleCircularEnemy(450, 300, 150, -103, 0.46),
		new simpleCircularEnemy(450, 300, 150, -116, 0.46),		
		new simpleCircularEnemy(450, 300, 150, -129, 0.46),
		new simpleCircularEnemy(450, 300, 150, -141, 0.46),
		new simpleCircularEnemy(450, 300, 150, -154, 0.46),
		new simpleCircularEnemy(450, 300, 150, -167, 0.46), 
		
		new simpleCircularEnemy(450, 300, 175, 10, -0.4),
		new simpleCircularEnemy(450, 300, 175, 20, -0.4),		
		new simpleCircularEnemy(450, 300, 175, 30, -0.4),
		new simpleCircularEnemy(450, 300, 175, 40, -0.4),
		new simpleCircularEnemy(450, 300, 175, 50, -0.4),
		new simpleCircularEnemy(450, 300, 175, 60, -0.4),
		new simpleCircularEnemy(450, 300, 175, 70, -0.4),
		new simpleCircularEnemy(450, 300, 175, 80, -0.4),
		
		new simpleCircularEnemy(450, 300, 175, 100, -0.4),
		new simpleCircularEnemy(450, 300, 175, 110, -0.4),		
		new simpleCircularEnemy(450, 300, 175, 120, -0.4),
		new simpleCircularEnemy(450, 300, 175, 130, -0.4),
		new simpleCircularEnemy(450, 300, 175, 140, -0.4),
		new simpleCircularEnemy(450, 300, 175, 150, -0.4),
		new simpleCircularEnemy(450, 300, 175, 160, -0.4),
		new simpleCircularEnemy(450, 300, 175, 170, -0.4),
		
		new simpleCircularEnemy(450, 300, 175, -10, -0.4),
		new simpleCircularEnemy(450, 300, 175, -20, -0.4),		
		new simpleCircularEnemy(450, 300, 175, -30, -0.4),
		new simpleCircularEnemy(450, 300, 175, -40, -0.4),
		new simpleCircularEnemy(450, 300, 175, -50, -0.4),
		new simpleCircularEnemy(450, 300, 175, -60, -0.4),
		new simpleCircularEnemy(450, 300, 175, -70, -0.4),
		new simpleCircularEnemy(450, 300, 175, -80, -0.4),
		
		new simpleCircularEnemy(450, 300, 175, -100, -0.4),
		new simpleCircularEnemy(450, 300, 175, -110, -0.4),		
		new simpleCircularEnemy(450, 300, 175, -120, -0.4),
		new simpleCircularEnemy(450, 300, 175, -130, -0.4),
		new simpleCircularEnemy(450, 300, 175, -140, -0.4),
		new simpleCircularEnemy(450, 300, 175, -150, -0.4),
		new simpleCircularEnemy(450, 300, 175, -160, -0.4),
		new simpleCircularEnemy(450, 300, 175, -170, -0.4),
	],
	
	// level 30
	[
		 new simpleEnemy(113, 113, 108, 495, 0, 3),
		 new simpleEnemy(163, 163, 108, 495, 0, 3),
		 new simpleEnemy(213, 213, 108, 495, 0, 3),
		 new simpleEnemy(263, 263, 108, 495, 0, 3),
		 new simpleEnemy(313, 313, 108, 495, 0, 3),
		 new simpleEnemy(363, 363, 108, 495, 0, 3),
		 new simpleEnemy(413, 413, 108, 495, 0, 3),
		 new simpleEnemy(463, 463, 108, 495, 0, 3),
		 new simpleEnemy(513, 513, 108, 495, 0, 3),
		 new simpleEnemy(563, 563, 108, 495, 0, 3),
		 new simpleEnemy(613, 613, 108, 495, 0, 3),
		 new simpleEnemy(663, 663, 108, 495, 0, 3),
		 new simpleEnemy(713, 713, 108, 495, 0, 3),
		 new simpleEnemy(763, 763, 108, 495, 0, 3),
		
		 
		 new simpleEnemy(138, 138, 495,108, 0, 3),
		 new simpleEnemy(188, 188, 495,108, 0, 3),
		 new simpleEnemy(238, 238, 495,108, 0, 3),
		 new simpleEnemy(288, 288, 495,108, 0, 3),
		 new simpleEnemy(338, 338, 495,108, 0, 3),
		 
		 new simpleEnemy(388, 388, 495,108, 0, 3),
		 new simpleEnemy(438, 438, 495,108, 0, 3),
		 new simpleEnemy(488, 488, 495,108, 0, 3),
		 new simpleEnemy(538, 538, 495,108, 0, 3),
		 new simpleEnemy(588, 588, 495,108, 0, 3),
		 new simpleEnemy(638, 638, 495,108, 0, 3),
		 new simpleEnemy(688, 688, 495,108, 0, 3),
		 new simpleEnemy(738, 738, 495,108, 0, 3),
		 new simpleEnemy(788, 788, 495,108, 0, 3),
		 
		 
		
		 new simpleEnemy(263, 563, 263,263, 4.5, 0),
		 new simpleEnemy(288, 588, 263,263, 4.5, 0),
		 new simpleEnemy(313, 613, 263,263, 4.5, 0),
		 new simpleEnemy(338, 638, 263,263, 4.5, 0),
		 
		 new simpleEnemy(263, 563, 288,288, 4.5, 0),
		 new simpleEnemy(288, 588, 288,288, 4.5, 0),
		 new simpleEnemy(313, 613, 288,288, 4.5, 0),
		 new simpleEnemy(338, 638, 288,288, 4.5, 0),
		 
		 new simpleEnemy(263, 563, 313, 313, 4.5, 0),
		 new simpleEnemy(288, 588, 313, 313, 4.5, 0),
		 new simpleEnemy(313, 613, 313, 313, 4.5, 0),
		 new simpleEnemy(338, 638, 313, 313, 4.5, 0),
		 
		 new simpleEnemy(263, 563, 338,338, 4.5, 0),
		 new simpleEnemy(288, 588, 338,338, 4.5, 0),
		 new simpleEnemy(313, 613, 338,338, 4.5, 0),
		 new simpleEnemy(338, 638, 338,338, 4.5, 0),
		 
		 
		
		new linearEnemy([
			[113, 738 , 113, 113, 4.5, 0],
			[738, 738, 113, 439, 0, 4.5],
			[738, 113, 439, 439, 4.5, 0],
			[113, 113, 439, 113, 0, 4.5]
		]),
		new linearEnemy([
			[138, 763 , 113, 113, 4.5, 0],
			[763, 763, 113, 439, 0, 4.5],
			[763, 138, 439, 439, 4.5, 0],
			[138, 138, 439, 113, 0, 4.5]
		]),
		new linearEnemy([
			[163, 788 , 113, 113, 4.5, 0],
			[788, 788, 113, 439, 0, 4.5],
			[788, 163, 439, 439, 4.5, 0],
			[163, 163, 439, 113, 0, 4.5]
		]),
		//
		new linearEnemy([
			[113, 738 , 138, 138, 4.5, 0],
			[738, 738, 138, 464, 0, 4.5],
			[738, 113, 464, 464, 4.5, 0],
			[113, 113, 464, 138, 0, 4.5]
		]),
		new linearEnemy([
			[138, 763 , 138, 138, 4.5, 0],
			[763, 763, 138, 464, 0, 4.5],
			[763, 138, 464, 464, 4.5, 0],
			[138, 138, 464, 138, 0, 4.5]
		]),
		new linearEnemy([
			[163, 788 , 138, 138, 4.5, 0],
			[788, 788, 138, 464, 0, 4.5],
			[788, 163, 464, 464, 4.5, 0],
			[163, 163, 464, 138, 0, 4.5]
		]),
		//
		new linearEnemy([
			[113, 738 , 163, 163, 4.5, 0],
			[738, 738, 163, 489, 0, 4.5],
			[738, 113, 489, 489, 4.5, 0],
			[113, 113, 489, 163, 0, 4.5]
		]),
		new linearEnemy([
			[138, 763 , 163, 163, 4.5, 0],
			[763, 763, 163, 489, 0, 4.5],
			[763, 138, 489, 489, 4.5, 0],
			[138, 138, 489, 163, 0, 4.5]
		]),
		new linearEnemy([
			[163, 788 , 163, 163, 4.5, 0],
			[788, 788, 163, 489, 0, 4.5],
			[788, 163, 489, 489, 4.5, 0],
			[163, 163, 489, 163, 0, 4.5]
		]),
		
		//
		
		new linearEnemy([
			[188, 663 , 188, 188, 4.5, 0],
			[663, 663, 188, 363, 0, 4.5],
			[663, 188, 363, 363, 4.5, 0],
			[188, 188, 363, 188, 0, 4.5]
		]),
		
		new linearEnemy([
			[213, 688 , 188, 188, 4.5, 0],
			[688, 688, 188, 363, 0, 4.5],
			[688, 213, 363, 363, 4.5, 0],
			[213, 213, 363, 188, 0, 4.5]
		]),
		
		new linearEnemy([
			[238, 713 , 188, 188, 4.5, 0],
			[713, 713, 188, 363, 0, 4.5],
			[713, 238, 363, 363, 4.5, 0],
			[238, 238, 363, 188, 0, 4.5]
		]),
		/////////////
		new linearEnemy([
			[188, 663 , 213, 213, 4.5, 0],
			[663, 663, 213, 388, 0, 4.5],
			[663, 188, 388, 388, 4.5, 0],
			[188, 188, 388, 213, 0, 4.5]
		]),
		
		new linearEnemy([
			[213, 688 , 213, 213, 4.5, 0],
			[688, 688, 213, 388, 0, 4.5],
			[688, 213, 388, 388, 4.5, 0],
			[213, 213, 388, 213, 0, 4.5]
		]),
		
		new linearEnemy([
			[238, 713 , 213, 213, 4.5, 0],
			[713, 713, 213, 388, 0, 4.5],
			[713, 238, 388, 388, 4.5, 0],
			[238, 238, 388, 213, 0, 4.5]
		]),
		////
		new linearEnemy([
			[188, 663 , 238, 238, 4.5, 0],
			[663, 663, 238, 413, 0, 4.5],
			[663, 188, 413, 413, 4.5, 0],
			[188, 188, 413, 238, 0, 4.5]
		]),
		
		new linearEnemy([
			[213, 688 , 238, 238, 4.5, 0],
			[688, 688, 238, 413, 0, 4.5],
			[688, 213, 413, 413, 4.5, 0],
			[213, 213, 413, 238, 0, 4.5]
		]),
		
		new linearEnemy([
			[238, 713 , 238, 238, 4.5, 0],
			[713, 713, 238, 413, 0, 4.5],
			[713, 238, 413, 413, 4.5, 0],
			[238, 238, 413, 238, 0, 4.5]
		]),
		
		
		///////////////////////////////////////
		
		new linearEnemy([
			
			[738, 113, 439, 439, 4.5, 0],
			[113, 113, 439, 113, 0, 4.5],
			[113, 738 , 113, 113, 4.5, 0],
			[738, 738, 113, 439, 0, 4.5]
		]),
		new linearEnemy([
			
			[763, 138, 439, 439, 4.5, 0],
			[138, 138, 439, 113, 0, 4.5],
			[138, 763 , 113, 113, 4.5, 0],
			[763, 763, 113, 439, 0, 4.5],
		]),
		new linearEnemy([
			
			[788, 163, 439, 439, 4.5, 0],
			[163, 163, 439, 113, 0, 4.5],
			[163, 788 , 113, 113, 4.5, 0],
			[788, 788, 113, 439, 0, 4.5],
		]),
		//
		new linearEnemy([
			[738, 113, 464, 464, 4.5, 0],
			[113, 113, 464, 138, 0, 4.5],
			[113, 738 , 138, 138, 4.5, 0],
			[738, 738, 138, 464, 0, 4.5],
			
		]),
		new linearEnemy([
			
			[763, 138, 464, 464, 4.5, 0],
			[138, 138, 464, 138, 0, 4.5],
			[138, 763 , 138, 138, 4.5, 0],
			[763, 763, 138, 464, 0, 4.5]
		]),
		new linearEnemy([
			[788, 163, 464, 464, 4.5, 0],
			[163, 163, 464, 138, 0, 4.5],
			[163, 788 , 138, 138, 4.5, 0],
			[788, 788, 138, 464, 0, 4.5],
		
		]),
		//
		new linearEnemy([
			[738, 113, 489, 489, 4.5, 0],
			[113, 113, 489, 163, 0, 4.5],
			[113, 738 , 163, 163, 4.5, 0],
			[738, 738, 163, 489, 0, 4.5]
			
		]),
		new linearEnemy([
			[763, 138, 489, 489, 4.5, 0],
			[138, 138, 489, 163, 0, 4.5],
			[138, 763 , 163, 163, 4.5, 0],
			[763, 763, 163, 489, 0, 4.5]
			
		]),
		new linearEnemy([
			[788, 163, 489, 489, 4.5, 0],
			[163, 163, 489, 163, 0, 4.5],
			[163, 788 , 163, 163, 4.5, 0],
			[788, 788, 163, 489, 0, 4.5]
			
		]),
		
		//
		
		new linearEnemy([
			[663, 188, 363, 363, 4.5, 0],
			[188, 188, 363, 188, 0, 4.5],
			[188, 663 , 188, 188, 4.5, 0],
			[663, 663, 188, 363, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[688, 213, 363, 363, 4.5, 0],
			[213, 213, 363, 188, 0, 4.5],
			[213, 688 , 188, 188, 4.5, 0],
			[688, 688, 188, 363, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[713, 238, 363, 363, 4.5, 0],
			[238, 238, 363, 188, 0, 4.5],
			[238, 713 , 188, 188, 4.5, 0],
			[713, 713, 188, 363, 0, 4.5]
			
		]),
		/////////////
		new linearEnemy([
			[663, 188, 388, 388, 4.5, 0],
			[188, 188, 388, 213, 0, 4.5],
			[188, 663 , 213, 213, 4.5, 0],
			[663, 663, 213, 388, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[688, 213, 388, 388, 4.5, 0],
			[213, 213, 388, 213, 0, 4.5],
			[213, 688 , 213, 213, 4.5, 0],
			[688, 688, 213, 388, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[713, 238, 388, 388, 4.5, 0],
			[238, 238, 388, 213, 0, 4.5],
			[238, 713 , 213, 213, 4.5, 0],
			[713, 713, 213, 388, 0, 4.5]
			
		]),
		////
		new linearEnemy([
			[663, 188, 413, 413, 4.5, 0],
			[188, 188, 413, 238, 0, 4.5],
			[188, 663 , 238, 238, 4.5, 0],
			[663, 663, 238, 413, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[688, 213, 413, 413, 4.5, 0],
			[213, 213, 413, 238, 0, 4.5],
			[213, 688 , 238, 238, 4.5, 0],
			[688, 688, 238, 413, 0, 4.5]
			
		]),
		
		new linearEnemy([
			[713, 238, 413, 413, 4.5, 0],
			[238, 238, 413, 238, 0, 4.5],
			[238, 713 , 238, 238, 4.5, 0],
			[713, 713, 238, 413, 0, 4.5]
			
		]),
	],
	
	// level 31
	[
		
		new simpleCircularEnemy(412, 137, 25, 90, 1.8),
		new simpleCircularEnemy(412, 137, 25, -90, 1.8),
		new simpleCircularEnemy(412, 137, 36, -45, 1.8),
		new simpleCircularEnemy(412, 137, 36, 45, 1.8),
		new simpleCircularEnemy(412, 137, 36, -135, 1.8),
		new simpleCircularEnemy(412, 137, 36, 135, 1.8),
        //
        new simpleCircularEnemy(337, 137, 25, 90, -1.8),
		new simpleCircularEnemy(337, 137, 25, -90, -1.8),
		new simpleCircularEnemy(337, 137, 36, -45, -1.8),
		new simpleCircularEnemy(337, 137, 36, 45, -1.8),
		new simpleCircularEnemy(337, 137, 36, -135, -1.8),
		new simpleCircularEnemy(337, 137, 36, 135, -1.8),		
		//
		new simpleCircularEnemy(337, 212, 25, 90, 1.8),
		new simpleCircularEnemy(337, 212, 25, -90, 1.8),
		new simpleCircularEnemy(337, 212, 36, -45, 1.8),
		new simpleCircularEnemy(337, 212, 36, 45, 1.8),
		new simpleCircularEnemy(337, 212, 36, -135, 1.8),
		new simpleCircularEnemy(337, 212, 36, 135, 1.8),
		//
		new simpleCircularEnemy(487, 137, 25, 90, -1.8),
		new simpleCircularEnemy(487, 137, 25, -90, -1.8),
		new simpleCircularEnemy(487, 137, 36, -45, -1.8),
		new simpleCircularEnemy(487, 137, 36, 45, -1.8),
		new simpleCircularEnemy(487, 137, 36, -135, -1.8),
		new simpleCircularEnemy(487, 137, 36, 135, -1.8),	
		//
		new simpleCircularEnemy(487, 212, 25, 90, 1.8),
		new simpleCircularEnemy(487, 212, 25, -90, 1.8),
		new simpleCircularEnemy(487, 212, 36, -45, 1.8),
		new simpleCircularEnemy(487, 212, 36, 45, 1.8),
		new simpleCircularEnemy(487, 212, 36, -135, 1.8),
		new simpleCircularEnemy(487, 212, 36, 135, 1.8),	
		//
		new simpleCircularEnemy(487, 287, 25, 90, -1.8),
		new simpleCircularEnemy(487, 287, 25, -90, -1.8),
		new simpleCircularEnemy(487, 287, 36, -45, -1.8),
		new simpleCircularEnemy(487, 287, 36, 45, -1.8),
		new simpleCircularEnemy(487, 287, 36, -135, -1.8),
		new simpleCircularEnemy(487, 287, 36, 135, -1.8),	
		//
		new simpleCircularEnemy(487, 362, 25, 90, 1.8),
		new simpleCircularEnemy(487, 362, 25, -90, 1.8),
		new simpleCircularEnemy(487, 362, 36, -45, 1.8),
		new simpleCircularEnemy(487, 362, 36, 45, 1.8),
		new simpleCircularEnemy(487, 362, 36, -135, 1.8),
		new simpleCircularEnemy(487, 362, 36, 135, 1.8),	
		//
		new simpleCircularEnemy(487, 437, 25, 90, -1.8),
		new simpleCircularEnemy(487, 437, 25, -90, -1.8),
		new simpleCircularEnemy(487, 437, 36, -45, -1.8),
		new simpleCircularEnemy(487, 437, 36, 45, -1.8),
		new simpleCircularEnemy(487, 437, 36, -135, -1.8),
		new simpleCircularEnemy(487, 437, 36, 135, -1.8),	
		//
		new simpleCircularEnemy(562, 437, 25, 90, 1.8),
		new simpleCircularEnemy(562, 437, 25, -90, 1.8),
		new simpleCircularEnemy(562, 437, 36, -45, 1.8),
		new simpleCircularEnemy(562, 437, 36, 45, 1.8),
		new simpleCircularEnemy(562, 437, 36, -135, 1.8),
		new simpleCircularEnemy(562, 437, 36, 135, 1.8),
		
		//
		new simpleCircularEnemy(637, 437, 25, 90, -1.8),
		new simpleCircularEnemy(637, 437, 25, -90, -1.8),
		new simpleCircularEnemy(637, 437, 36, -45, -1.8),
		new simpleCircularEnemy(637, 437, 36, 45, -1.8),
		new simpleCircularEnemy(637, 437, 36, -135, -1.8),
		new simpleCircularEnemy(637, 437, 36, 135, -1.8),	
		
		
		//
		
		new simpleCircularEnemy(637, 362, 25, 90, 1.8),
		new simpleCircularEnemy(637, 362, 25, -90, 1.8),
		new simpleCircularEnemy(637, 362, 36, -45, 1.8),
		new simpleCircularEnemy(637, 362, 36, 45, 1.8),
		new simpleCircularEnemy(637, 362, 36, -135, 1.8),
		new simpleCircularEnemy(637, 362, 36, 135, 1.8),	
		
		//////////////
		new simpleCircularEnemyXY(186, 136, 25, 0, -1.8,0,null,186,212,0,0.5), 
		new simpleCircularEnemyXY(186, 136, 25, 180, -1.8,0,null,186,212,0,0.5), 
		new simpleCircularEnemyXY(186, 136, 36, 45, -1.8,0,null,186,212,0,0.5), 
		new simpleCircularEnemyXY(186, 136, 36, -45, -1.8,0,null,186,212,0,0.5), 
		new simpleCircularEnemyXY(186, 136, 36, 135, -1.8,0,null,186,212,0,0.5), 
		new simpleCircularEnemyXY(186, 136, 36, -135, -1.8,0,null,186,212,0,0.5), 
		//
		
		new simpleCircularEnemyXY(186, 362, 25, 0, 1.8,0,null,186,287,0,0.5), 
		new simpleCircularEnemyXY(186, 362, 25, 180, 1.8,0,null,186,287,0,0.5), 
		new simpleCircularEnemyXY(186, 362, 36, 45, 1.8,0,null,186,287,0,0.5), 
		new simpleCircularEnemyXY(186, 362, 36, -45, 1.8,0,null,186,287,0,0.5), 
		new simpleCircularEnemyXY(186, 362, 36, 135, 1.8,0,null,186,287,0,0.5), 
		new simpleCircularEnemyXY(186, 362, 36, -135, 1.8,0,null,186,287,0,0.5), 
		
		//
		new simpleCircularEnemyXY(186, 438, 25, 90, -1.8,0,null,262,438,0.5,0), 
		new simpleCircularEnemyXY(186, 438, 25, -90, -1.8,0,null,262,438,0.5,0), 
		new simpleCircularEnemyXY(186, 438, 36, 45, -1.8,0,null,262,438,0.5,0), 
		new simpleCircularEnemyXY(186, 438, 36, -45, -1.8,0,null,262,438,0.5,0), 
		new simpleCircularEnemyXY(186, 438, 36, 135, -1.8,0,null,262,438,0.5,0), 
		new simpleCircularEnemyXY(186, 438, 36, -135, -1.8,0,null,262,438,0.5,0), 
		//
		new simpleCircularEnemyXY(338, 362, 25, 90, -1.8,0,null,338,437,0,0.5), 
		new simpleCircularEnemyXY(338, 362, 25, -90, -1.8,0,null,338,437,0,0.5), 
		new simpleCircularEnemyXY(338, 362, 36, 45, -1.8,0,null,338,437,0,0.5), 
		new simpleCircularEnemyXY(338, 362, 36, -45, -1.8,0,null,338,437,0,0.5), 
		new simpleCircularEnemyXY(338, 362, 36, 135, -1.8,0,null,338,437,0,0.5), 
		new simpleCircularEnemyXY(338, 362, 36, -135, -1.8,0,null,338,437,0,0.5), 
		
		//
		
		new simpleCircularEnemyXY(637, 211, 25, 90, -1.8,0,null,637,137,0,0.5), 
		new simpleCircularEnemyXY(637, 211, 25, -90, -1.8,0,null,637,137,0,0.5), 
		new simpleCircularEnemyXY(637, 211, 36, 45, -1.8,0,null,637,137,0,0.5), 
		new simpleCircularEnemyXY(637, 211, 36, -45, -1.8,0,null,637,137,0,0.5), 
		new simpleCircularEnemyXY(637, 211, 36, 135, -1.8,0,null,637,137,0,0.5), 
		new simpleCircularEnemyXY(637, 211, 36, -135, -1.8,0,null,637,137,0,0.5), 
		//
		new simpleCircularEnemyXY(787, 137, 25, 90, -1.8,0,null,712,137,0.5,0), 
		new simpleCircularEnemyXY(787, 137, 25, -90, -1.8,0,null,712,137,0.5,0), 
		new simpleCircularEnemyXY(787, 137, 36, 45, -1.8,0,null,712,137,0.5,0), 
		new simpleCircularEnemyXY(787, 137, 36, -45, -1.8,0,null,712,137,0.5,0), 
		new simpleCircularEnemyXY(787, 137, 36, 135, -1.8,0,null,712,137,0.5,0), 
		new simpleCircularEnemyXY(787, 137, 36, -135, -1.8,0,null,712,137,0.5,0), 
		//
		
		new simpleCircularEnemyXY(786, 212, 25, 0, 1.8,0,null,786,287,0,0.5), 
		new simpleCircularEnemyXY(786, 212, 25, 180, 1.8,0,null,786,287,0,0.5), 
		new simpleCircularEnemyXY(786, 212, 36, 45, 1.8,0,null,786,287,0,0.5), 
		new simpleCircularEnemyXY(786, 212, 36, -45, 1.8,0,null,786,287,0,0.5), 
		new simpleCircularEnemyXY(786, 212, 36, 135, 1.8,0,null,786,287,0,0.5), 
		new simpleCircularEnemyXY(786, 212, 36, -135, 1.8,0,null,786,287,0,0.5), 
		//
		
		new simpleCircularEnemyXY(786, 437, 25, 0, -1.8,0,null,786,361,0,0.5), 
		new simpleCircularEnemyXY(786, 437, 25, 180, -1.8,0,null,786,361,0,0.5), 
		new simpleCircularEnemyXY(786, 437, 36, 45, -1.8,0,null,786,361,0,0.5), 
		new simpleCircularEnemyXY(786, 437, 36, -45, -1.8,0,null,786,361,0,0.5), 
		new simpleCircularEnemyXY(786, 437, 36, 135, -1.8,0,null,786,361,0,0.5), 
		new simpleCircularEnemyXY(786, 437, 36, -135, -1.8,0,null,786,361,0,0.5), 
		//
		
		
	],
	
	// level 32
	[
	   
		
		
		new staticEnemy(237, 112),
		new staticEnemy(262, 112),
		
		new staticEnemy(287, 112),
		new staticEnemy(312, 112),
		new staticEnemy(337, 112),
		new staticEnemy(362, 112),
		
		new staticEnemy(387, 112),
		new staticEnemy(412, 112),
		new staticEnemy(437, 112),
		new staticEnemy(462, 112),
		
		new staticEnemy(487, 112),
		new staticEnemy(512, 112),
		new staticEnemy(537, 112),
		new staticEnemy(562, 112),
		
		new staticEnemy(587, 112),
		new staticEnemy(612, 112),
		new staticEnemy(637, 112),
		new staticEnemy(662, 112),
		
		new staticEnemy(687, 112),
		new staticEnemy(712, 112),
		new staticEnemy(737, 112),
		new staticEnemy(762, 112),
		
		new staticEnemy(787, 112),
		new staticEnemy(812, 112),
		///
		new staticEnemy(237, 137),
		new staticEnemy(262, 137),
		
		new staticEnemy(287, 137),
		new staticEnemy(312, 137),
		new staticEnemy(337, 137),
		new staticEnemy(362, 137),
		
		new staticEnemy(387, 137),
		new staticEnemy(412, 137),
		new staticEnemy(437, 137),
		new staticEnemy(462, 137),
		
		new staticEnemy(487, 137),
		new staticEnemy(512, 137),
		new staticEnemy(537, 137),
		new staticEnemy(562, 137),
		
		new staticEnemy(587, 137),
		new staticEnemy(612, 137),
		new staticEnemy(637, 137),
		new staticEnemy(662, 137),
		
		new staticEnemy(687, 137),
		new staticEnemy(712, 137),
		new staticEnemy(737, 137),
		new staticEnemy(762, 137),
		
		new staticEnemy(787, 137),
		new staticEnemy(812, 137),
		///
		
		
		new staticEnemy(287, 162),
		new staticEnemy(312, 162),
		
		
		new staticEnemy(587, 162),
		new staticEnemy(612, 162),
		
		
		new staticEnemy(787, 162),
		new staticEnemy(812, 162),
		///
		new staticEnemy(287, 187),
		new staticEnemy(312, 187),
		
		
		new staticEnemy(587, 187),
		new staticEnemy(612, 187),
		
		
		new staticEnemy(787, 187),
		new staticEnemy(812, 187),
		///
		
		
		new staticEnemy(287, 212),
		new staticEnemy(312, 212),
		
		new staticEnemy(587, 212),
		new staticEnemy(612, 212),
		
		new staticEnemy(687, 212),
		new staticEnemy(712, 212),
		
		new staticEnemy(787, 212),
		new staticEnemy(812, 212),
		///
		
		
		new staticEnemy(287, 237),
		new staticEnemy(312, 237),
		
		new staticEnemy(587, 237),
		new staticEnemy(612, 237),
		
		new staticEnemy(687, 237),
		new staticEnemy(712, 237),
		
		new staticEnemy(787, 237),
		new staticEnemy(812, 237),
		///
		new staticEnemy(87, 262),
		new staticEnemy(112, 262),
		new staticEnemy(137, 262),
		new staticEnemy(162, 262),
		
		new staticEnemy(187, 262),
		new staticEnemy(212, 262),
		
		
		new staticEnemy(287, 262),
		new staticEnemy(312, 262),
		
		
		new staticEnemy(587, 262),
		new staticEnemy(612, 262),
		
		
		new staticEnemy(687, 262),
		new staticEnemy(712, 262),
		
		
		new staticEnemy(787, 262),
		new staticEnemy(812, 262),
		///
		new staticEnemy(87, 287),
		new staticEnemy(112, 287),
		new staticEnemy(137, 287),
		new staticEnemy(162, 287),
		
		new staticEnemy(187, 287),
		new staticEnemy(212, 287),
		
		
		new staticEnemy(287, 287),
		new staticEnemy(312, 287),
		
		
		new staticEnemy(587, 287),
		new staticEnemy(612, 287),
		
		
		new staticEnemy(687, 287),
		new staticEnemy(712, 287),
		
		
		new staticEnemy(787, 287),
		new staticEnemy(812, 287),
		///
		new staticEnemy(87, 312),
		new staticEnemy(112, 312),
		
		
		new staticEnemy(287, 312),
		new staticEnemy(312, 312),
		
		
		new staticEnemy(587, 312),
		new staticEnemy(612, 312),
		
		
		new staticEnemy(687, 312),
		new staticEnemy(712, 312),
		
		
		new staticEnemy(787, 312),
		new staticEnemy(812, 312),
		///
		new staticEnemy(87, 337),
		new staticEnemy(112, 337),
		
		
		new staticEnemy(287, 337),
		new staticEnemy(312, 337),
		
		
		new staticEnemy(587, 337),
		new staticEnemy(612, 337),
		
		
		new staticEnemy(687, 337),
		new staticEnemy(712, 337),
		
		
		new staticEnemy(787, 337),
		new staticEnemy(812, 337),
		///
		new staticEnemy(87, 362),
		new staticEnemy(112, 362),
		
		
		new staticEnemy(187, 362),
		new staticEnemy(212, 362),
		new staticEnemy(237, 362),
		new staticEnemy(262, 362),
		
		new staticEnemy(287, 362),
		new staticEnemy(312, 362),
		new staticEnemy(337, 362),
		new staticEnemy(362, 362),
		
		new staticEnemy(387, 362),
		new staticEnemy(412, 362),
		
		
		new staticEnemy(587, 362),
		new staticEnemy(612, 362),
		
		
		new staticEnemy(687, 362),
		new staticEnemy(712, 362),
		
		new staticEnemy(787, 362),
		new staticEnemy(812, 362),
		///
		new staticEnemy(87, 387),
		new staticEnemy(112, 387),
		
		
		new staticEnemy(187, 387),
		new staticEnemy(212, 387),
		new staticEnemy(237, 387),
		new staticEnemy(262, 387),
		
		new staticEnemy(287, 387),
		new staticEnemy(312, 387),
		new staticEnemy(337, 387),
		new staticEnemy(362, 387),
		
		new staticEnemy(387, 387),
		new staticEnemy(412, 387),
		
		
		new staticEnemy(587, 387),
		new staticEnemy(612, 387),
		
		
		new staticEnemy(687, 387),
		new staticEnemy(712, 387),
		
		new staticEnemy(787, 387),
		new staticEnemy(812, 387),
		///
		new staticEnemy(87, 412),
		new staticEnemy(112, 412),
		
		
		new staticEnemy(687, 412),
		new staticEnemy(712, 412),
		
		
		new staticEnemy(787, 412),
		new staticEnemy(812, 412),
		///
		
		new staticEnemy(87, 437),
		new staticEnemy(112, 437),
		
		
		new staticEnemy(687, 437),
		new staticEnemy(712, 437),
		
		
		new staticEnemy(787, 437),
		new staticEnemy(812, 437),
		
		///
		new staticEnemy(87, 462),
		new staticEnemy(112, 462),
		new staticEnemy(137, 462),
		new staticEnemy(162, 462),
		
		new staticEnemy(187, 462),
		new staticEnemy(212, 462),
		new staticEnemy(237, 462),
		new staticEnemy(262, 462),
		
		new staticEnemy(287, 462),
		new staticEnemy(312, 462),
		new staticEnemy(337, 462),
		new staticEnemy(362, 462),
		
		new staticEnemy(387, 462),
		new staticEnemy(412, 462),
		new staticEnemy(437, 462),
		new staticEnemy(462, 462),
		
		new staticEnemy(487, 462),
		new staticEnemy(512, 462),
		new staticEnemy(537, 462),
		new staticEnemy(562, 462),
		
		new staticEnemy(587, 462),
		new staticEnemy(612, 462),
		new staticEnemy(637, 462),
		new staticEnemy(662, 462),
		
		new staticEnemy(687, 462),
		new staticEnemy(712, 462),
		
		///
		new staticEnemy(87, 487),
		new staticEnemy(112, 487),
		new staticEnemy(137, 487),
		new staticEnemy(162, 487),
		
		new staticEnemy(187, 487),
		new staticEnemy(212, 487),
		new staticEnemy(237, 487),
		new staticEnemy(262, 487),
		
		new staticEnemy(287, 487),
		new staticEnemy(312, 487),
		new staticEnemy(337, 487),
		new staticEnemy(362, 487),
		
		new staticEnemy(387, 487),
		new staticEnemy(412, 487),
		new staticEnemy(437, 487),
		new staticEnemy(462, 487),
		
		new staticEnemy(487, 487),
		new staticEnemy(512, 487),
		new staticEnemy(537, 487),
		new staticEnemy(562, 487),
		
		new staticEnemy(587, 487),
		new staticEnemy(612, 487),
		new staticEnemy(637, 487),
		new staticEnemy(662, 487),
		
		new staticEnemy(687, 487),
		new staticEnemy(712, 487),
		
		/*new simpleEnemyPause(287,337,162,162,2.5,0,0,(460-20),0,0),
		new simpleEnemyPause(312,362,162,162,2.5,0,0,(460-20),0,0),
		new simpleEnemyPause(287,337,187,187,2.5,0,0,(460-20),0,0),
		new simpleEnemyPause(312,362,187,187,2.5,0,0,(460-20),0,0),
		//
		new simpleEnemyPause(337,287,212,212,2.5,0,0,20+20,460,0),
		new simpleEnemyPause(362,312,212,212,2.5,0,0,20+20,460,0),
		new simpleEnemyPause(337,287,237,237,2.5,0,0,20+20,460,0),
		new simpleEnemyPause(362,312,237,237,2.5,0,0,20+20,460,0),
		//
		new simpleEnemyPause(337,287,262,262,2.5,0,40,20,460,0),
		new simpleEnemyPause(362,312,262,262,2.5,0,40,20,460,0),
		new simpleEnemyPause(337,287,287,287,2.5,0,40,20,460,0),
		new simpleEnemyPause(362,312,287,287,2.5,0,40,20,460,0),
		//
		
		new simpleEnemyPause(337,287,312,312,2.5,0,40,20,460,0),
		new simpleEnemyPause(362,312,312,312,2.5,0,40,20,460,0),
		new simpleEnemyPause(337,287,337,337,2.5,0,40,20,460,0),
		new simpleEnemyPause(362,312,337,337,2.5,0,40,20,460,0),
		
		//
		
		new simpleEnemyPause(387,387,362,312,0,2.5,40,20,460,0),
		new simpleEnemyPause(412,412,362,312,0,2.5,40,20,460,0),
		new simpleEnemyPause(387,387,387,337,0,2.5,40,20,460,0),
		new simpleEnemyPause(412,412,387,337,0,2.5,40,20,460,0),
		//
		
		new simpleEnemyPause(537,487,413,413,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,512,413,413,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,487,437,437,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,512,437,437,2.5,0,40,20,460,0),
		//
		new simpleEnemyPause(537,587,363,363,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,363,363,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,587,388,388,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,388,388,2.5,0,40,20,460,0),
		
		new simpleEnemyPause(537,587,313,313,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,313,313,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,587,338,338,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,338,338,2.5,0,40,20,460,0),
	
	    new simpleEnemyPause(537,587,263,263,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,263,263,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,587,288,288,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,288,288,2.5,0,40,20,460,0),
		
		new simpleEnemyPause(537,587,213,213,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,213,213,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,587,238,238,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,238,238,2.5,0,40,20,460,0),
		
		new simpleEnemyPause(537,587,163,163,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,163,163,2.5,0,40,20,460,0),
		new simpleEnemyPause(537,587,188,188,2.5,0,40,20,460,0),
		new simpleEnemyPause(562,612,188,188,2.5,0,40,20,460,0),
		
		new simpleEnemyPause(487,487,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(512,512,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(487,487,188,138,0,2.5,40,20,460,0),
		new simpleEnemyPause(512,512,188,138,0,2.5,40,20,460,0),
		
		new simpleEnemyPause(437,437,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(462,462,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(437,437,188,138,0,2.5,40,20,460,0),
		new simpleEnemyPause(462,462,188,138,0,2.5,40,20,460,0),
		
		new simpleEnemyPause(387,387,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(412,412,163,113,0,2.5,40,20,460,0),
		new simpleEnemyPause(387,387,188,138,0,2.5,40,20,460,0),
		new simpleEnemyPause(412,412,188,138,0,2.5,40,20,460,0),
		*/
		////////////////////////////////////////////////////////
		
		new simpleEnemyPause(787,787,462,412,0,2.5,20,20,580,580),
		new simpleEnemyPause(812,812,462,412,0,2.5,20,20,580,580),
		new simpleEnemyPause(787,787,487,437,0,2.5,20,20,580,580),
		new simpleEnemyPause(812,812,487,437,0,2.5,20,20,580,580),
		
		new simpleEnemyPause(737,687,462,462,2.5,0,40,20,540,580),
		new simpleEnemyPause(762,712,462,462,2.5,0,40,20,540,580),
		new simpleEnemyPause(737,687,487,487,2.5,0,40,20,540,580),
		new simpleEnemyPause(762,712,487,487,2.5,0,40,20,540,580),
		
		new simpleEnemyPause(737,687,412,412,2.5,0,60,20,500,580),
		new simpleEnemyPause(762,712,412,412,2.5,0,60,20,500,580),
		new simpleEnemyPause(737,687,437,437,2.5,0,60,20,500,580),
		new simpleEnemyPause(762,712,437,437,2.5,0,60,20,500,580),
		
		new simpleEnemyPause(737,687,362,362,2.5,0,80,20,460,580),
		new simpleEnemyPause(762,712,362,362,2.5,0,80,20,460,580),
		new simpleEnemyPause(737,687,387,387,2.5,0,80,20,460,580),
		new simpleEnemyPause(762,712,387,387,2.5,0,80,20,460,580),
		
		new simpleEnemyPause(737,687,312,312,2.5,0,100,20,420,580),
		new simpleEnemyPause(762,712,312,312,2.5,0,100,20,420,580),
		new simpleEnemyPause(737,687,337,337,2.5,0,100,20,420,580),
		new simpleEnemyPause(762,712,337,337,2.5,0,100,20,420,580),
		
		new simpleEnemyPause(737,687,262,262,2.5,0,120,20,380,580),
		new simpleEnemyPause(762,712,262,262,2.5,0,120,20,380,580),
		new simpleEnemyPause(737,687,287,287,2.5,0,120,20,380,580),
		new simpleEnemyPause(762,712,287,287,2.5,0,120,20,380,580),
		
		new simpleEnemyPause(737,687,212,212,2.5,0,140,20,340,580),
		new simpleEnemyPause(762,712,212,212,2.5,0,140,20,340,580),
		new simpleEnemyPause(737,687,237,237,2.5,0,140,20,340,580),
		new simpleEnemyPause(762,712,237,237,2.5,0,140,20,340,580),
		
		new simpleEnemyPause(737,737,162,112,0,2.5,160,20,300,580),
		new simpleEnemyPause(762,762,162,112,0,2.5,160,20,300,580),
		new simpleEnemyPause(737,737,187,137,0,2.5,160,20,300,580),
		new simpleEnemyPause(762,762,187,137,0,2.5,160,20,300,580),
		
		new simpleEnemyPause(687,687,162,112,0,2.5,180,20,260,580),
		new simpleEnemyPause(712,712,162,112,0,2.5,180,20,260,580),
		new simpleEnemyPause(687,687,187,137,0,2.5,180,20,260,580),
		new simpleEnemyPause(712,712,187,137,0,2.5,180,20,260,580),
		
		new simpleEnemyPause(637,637,162,112,0,2.5,200,20,220,580),
		new simpleEnemyPause(662,662,162,112,0,2.5,200,20,220,580),
		new simpleEnemyPause(637,637,187,137,0,2.5,200,20,220,580),
		new simpleEnemyPause(662,662,187,137,0,2.5,200,20,220,580),
		
		new simpleEnemyPause(637,687,212,212,2.5,0,220,20,180,580),
		new simpleEnemyPause(662,712,212,212,2.5,0,220,20,180,580),
		new simpleEnemyPause(637,687,237,237,2.5,0,220,20,180,580),
		new simpleEnemyPause(662,712,237,237,2.5,0,220,20,180,580),
		
		new simpleEnemyPause(637,687,262,262,2.5,0,240,20,140,580),
		new simpleEnemyPause(662,712,262,262,2.5,0,240,20,140,580),
		new simpleEnemyPause(637,687,287,287,2.5,0,240,20,140,580),
		new simpleEnemyPause(662,712,287,287,2.5,0,240,20,140,580),
		
		new simpleEnemyPause(637,687,312,312,2.5,0,260,20,100,580),
		new simpleEnemyPause(662,712,312,312,2.5,0,260,20,100,580),
		new simpleEnemyPause(637,687,337,337,2.5,0,260,20,100,580),
		new simpleEnemyPause(662,712,337,337,2.5,0,260,20,100,580),
		
		new simpleEnemyPause(637,687,362,362,2.5,0,280,20,60,580),
		new simpleEnemyPause(662,712,362,362,2.5,0,280,20,60,580),
		new simpleEnemyPause(637,687,387,387,2.5,0,280,20,60,580),
		new simpleEnemyPause(662,712,387,387,2.5,0,280,20,60,580),
		
		new simpleEnemyPause(637,687,412,412,2.5,0,300,20,20,580),
		new simpleEnemyPause(662,712,412,412,2.5,0,300,20,20,580),
		new simpleEnemyPause(637,687,437,437,2.5,0,300,20,20,580),
		new simpleEnemyPause(662,712,437,437,2.5,0,300,20,20,580),
		/*
		
		//
		new simpleEnemyPause(487,487,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(512,512,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(487,487,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(512,512,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(437,437,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(462,462,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(437,437,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(462,462,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(387,387,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(412,412,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(387,387,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(412,412,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(337,337,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(362,362,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(337,337,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(362,362,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(287,287,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(312,312,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(287,287,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(312,312,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(237,237,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(262,262,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(237,237,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(262,262,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(187,187,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(212,212,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(187,187,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(212,212,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(137,137,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(162,162,412,462,0,2.5,20,20,20,580),
		new simpleEnemyPause(137,137,437,487,0,2.5,20,20,20,580),
		new simpleEnemyPause(162,162,437,487,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(137,87,362,362,2.5,0,20,20,20,580),
		new simpleEnemyPause(162,112,362,362,2.5,0,20,20,20,580),
		new simpleEnemyPause(137,87,387,387,2.5,0,20,20,20,580),
		new simpleEnemyPause(162,112,387,387,2.5,0,20,20,20,580),
		
		new simpleEnemyPause(137,87,312,312,2.5,0,20,20,20,580),
		new simpleEnemyPause(162,112,312,312,2.5,0,20,20,20,580),
		new simpleEnemyPause(137,87,337,337,2.5,0,20,20,20,580),
		new simpleEnemyPause(162,112,337,337,2.5,0,20,20,20,580),
		
		new simpleEnemyPause(187,187,312,262,0,2.5,20,20,20,580),
		new simpleEnemyPause(212,212,312,262,0,2.5,20,20,20,580),
		new simpleEnemyPause(187,187,337,287,0,2.5,20,20,20,580),
		new simpleEnemyPause(212,212,337,287,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(237,237,312,362,0,2.5,20,20,20,580),
		new simpleEnemyPause(262,262,312,362,0,2.5,20,20,20,580),
		new simpleEnemyPause(237,237,337,387,0,2.5,20,20,20,580),
		new simpleEnemyPause(262,262,337,387,0,2.5,20,20,20,580),
		
		new simpleEnemyPause(237,287,262,262,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,262,262,2.5,0,20,20,20,580),
		new simpleEnemyPause(237,287,287,287,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,287,287,2.5,0,20,20,20,580),
		
		new simpleEnemyPause(237,287,212,212,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,212,212,2.5,0,20,20,20,580),
		new simpleEnemyPause(237,287,237,237,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,237,237,2.5,0,20,20,20,580),
		
		new simpleEnemyPause(237,287,162,162,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,162,162,2.5,0,20,20,20,580),
		new simpleEnemyPause(237,287,187,187,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,187,187,2.5,0,20,20,20,580),
		
		new simpleEnemyPause(237,287,112,112,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,112,112,2.5,0,20,20,20,580),
		new simpleEnemyPause(237,287,137,137,2.5,0,20,20,20,580),
		new simpleEnemyPause(262,312,137,137,2.5,0,20,20,20,580),
		*/
		//function simpleEnemyPause(startX, endX, startY, endY, xSpeed, ySpeed,initialPause,shortPause,longPause,secondPause, stage, enemyType) {
		
	],
	
	// level 33
	[
		new reverseCircularEnemy(300, 150, 0, 0, 0, 0),
		new reverseCircularEnemy(300, 150, 28, 45, 405, 4.5),
		new reverseCircularEnemy(300, 150, 56, 45, 405, 4.5),
		
		new reverseCircularEnemy(300, 150, 28, -135,225 , 4.5),
		new reverseCircularEnemy(300, 150, 56, -135, 225, 4.5),
//
		new reverseCircularEnemy(300, 450, 0, 0, 0, 0),
		new reverseCircularEnemy(300, 450, 28, -45, 315, 4.5),
		new reverseCircularEnemy(300, 450, 56, -45, 315, 4.5),
		
		new reverseCircularEnemy(300, 450, 28, 135,495 , 4.5),
		new reverseCircularEnemy(300, 450, 56,  135,495, 4.5),
		
		
		new reverseCircularEnemy(425, 125, 16, 45, -135,-4.5),
		new reverseCircularEnemy(425, 125, 52, 45, -135, -4.5),
		new reverseCircularEnemy(425, 125, 16, -135, 45, -4.5),
		new reverseCircularEnemy(425, 125, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(575, 125, 16, 45, -135,-4.5),
		new reverseCircularEnemy(575, 125, 52, 45, -135, -4.5),
		new reverseCircularEnemy(575, 125, 16, -135, 45, -4.5),
		new reverseCircularEnemy(575, 125, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(725, 125, 16, 45, -135,-4.5),
		new reverseCircularEnemy(725, 125, 52, 45, -135, -4.5),
		new reverseCircularEnemy(725, 125, 16, -135, 45, -4.5),
		new reverseCircularEnemy(725, 125, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(350, 300, 16, 45, -135,-4.5),
		new reverseCircularEnemy(350, 300, 52, 45, -135, -4.5),
		new reverseCircularEnemy(350, 300, 16, -135, 45, -4.5),
		new reverseCircularEnemy(350, 300, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(725, 300, 16, 45, -135,-4.5),
		new reverseCircularEnemy(725, 300, 52, 45, -135, -4.5),
		new reverseCircularEnemy(725, 300, 16, -135, 45, -4.5),
		new reverseCircularEnemy(725, 300, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(425, 475, 16, 45, -135,-4.5),
		new reverseCircularEnemy(425, 475, 52, 45, -135, -4.5),
		new reverseCircularEnemy(425, 475, 16, -135, 45, -4.5),
		new reverseCircularEnemy(425, 475, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(575, 475, 16, 45, -135,-4.5),
		new reverseCircularEnemy(575, 475, 52, 45, -135, -4.5),
		new reverseCircularEnemy(575, 475, 16, -135, 45, -4.5),
		new reverseCircularEnemy(575, 475, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(725, 475, 16, 45, -135,-4.5),
		new reverseCircularEnemy(725, 475, 52, 45, -135, -4.5),
		new reverseCircularEnemy(725, 475, 16, -135, 45, -4.5),
		new reverseCircularEnemy(725, 475, 52, -135, 45, -4.5),
		
		new reverseCircularEnemy(500, 125, 16, -45, 135, 4.5),
		new reverseCircularEnemy(500, 125, 52, -45, 135, 4.5),
		new reverseCircularEnemy(500, 125, 16, 135, -45, 4.5),
		new reverseCircularEnemy(500, 125, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(650, 125, 16, -45, 135, 4.5),
		new reverseCircularEnemy(650, 125, 52, -45, 135, 4.5),
		new reverseCircularEnemy(650, 125, 16, 135, -45, 4.5),
		new reverseCircularEnemy(650, 125, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(275, 300, 16, -45, 135, 4.5),
		new reverseCircularEnemy(275, 300, 52, -45, 135, 4.5),
		new reverseCircularEnemy(275, 300, 16, 135, -45, 4.5),
		new reverseCircularEnemy(275, 300, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(650, 300, 16, -45, 135, 4.5),
		new reverseCircularEnemy(650, 300, 52, -45, 135, 4.5),
		new reverseCircularEnemy(650, 300, 16, 135, -45, 4.5),
		new reverseCircularEnemy(650, 300, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(800, 300, 16, -45, 135, 4.5),
		new reverseCircularEnemy(800, 300, 52, -45, 135, 4.5),
		new reverseCircularEnemy(800, 300, 16, 135, -45, 4.5),
		new reverseCircularEnemy(800, 300, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(500, 475, 16, -45, 135, 4.5),
		new reverseCircularEnemy(500, 475, 52, -45, 135, 4.5),
		new reverseCircularEnemy(500, 475, 16, 135, -45, 4.5),
		new reverseCircularEnemy(500, 475, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(650, 475, 16, -45, 135, 4.5),
		new reverseCircularEnemy(650, 475, 52, -45, 135, 4.5),
		new reverseCircularEnemy(650, 475, 16, 135, -45, 4.5),
		new reverseCircularEnemy(650, 475, 52, 135, -45, 4.5),
		
		new reverseCircularEnemy(509, 300, 0, 0, 0, 2.2),
		new reverseCircularEnemy(509, 300, 25, 45, -135, -2.2),
		new reverseCircularEnemy(509, 300, 50, 45, -135, -2.2),
		new reverseCircularEnemy(509, 300, 75, 45, -135, -2.2),
		new reverseCircularEnemy(509, 300, 100, 45, -135, -2.2),
		
		new reverseCircularEnemy(509, 300, 25,-135,45, -2.2),
		new reverseCircularEnemy(509, 300, 50,-135,45, -2.2),
		new reverseCircularEnemy(509, 300, 75, -135,45, -2.2),
		new reverseCircularEnemy(509, 300, 100, -135,45, -2.2),
		
		new reverseCircularEnemy(509, 300, 25, -45, 135, -2.2),
		new reverseCircularEnemy(509, 300, 50, -45, 135, -2.2),
		new reverseCircularEnemy(509, 300, 75, -45, 135, -2.2),
		new reverseCircularEnemy(509, 300, 100, -45, 135, -2.2),
		
		new reverseCircularEnemy(509, 300, 25,135,-45, -2.2),
		new reverseCircularEnemy(509, 300, 50,135,-45, -2.2),
		new reverseCircularEnemy(509, 300, 75, 135,-45, -2.2),
		new reverseCircularEnemy(509, 300, 100, 135,-45, -2.2),
		
		
	],
	
	// level 34
	[
	 new staticEnemy(487, 137),	
	 new staticEnemy(512, 137),	
	 new staticEnemy(537, 137),	
	 new staticEnemy(562, 137),	
	 new staticEnemy(587, 137),
	 new staticEnemy(487, 162),	
	 new staticEnemy(512, 162),	
	 new staticEnemy(537, 162),
     new staticEnemy(487, 187),	
	 new staticEnemy(512, 187),	
	 new staticEnemy(487, 212),	
	 new staticEnemy(487, 237),	
	
	 new staticEnemy(712, 137),
	  new staticEnemy(737, 137),
	   new staticEnemy(762, 137),
	    new staticEnemy(787, 137),
		 new staticEnemy(812, 137),
	  new staticEnemy(762, 162),
	    new staticEnemy(787, 162),
		 new staticEnemy(812, 162),
		 new staticEnemy(787, 187),
		 new staticEnemy(812, 187),
		 new staticEnemy(812, 212),
		 new staticEnemy(812, 237),
	 	 
		 new staticEnemy(487, 362),
		 new staticEnemy(487, 387),
		 new staticEnemy(487, 412),
		 new staticEnemy(487, 437),
		 new staticEnemy(487, 462),
		 
		 new staticEnemy(512, 412),
		 new staticEnemy(512, 437),
		 new staticEnemy(512, 462),
		 
		 new staticEnemy(537, 437),
		 new staticEnemy(537, 462),
		 
		 new staticEnemy(562, 462),
		 new staticEnemy(562, 462),
		 
		 
		 new staticEnemy(812, 362),
		 new staticEnemy(812, 387),
		 new staticEnemy(812, 412),
		 new staticEnemy(812, 437),
		 new staticEnemy(812, 462),
		 
		 new staticEnemy(787, 412),
		 new staticEnemy(787, 437),
		 new staticEnemy(787, 462),
		 
		 new staticEnemy(762, 437),
		 new staticEnemy(762, 462),
		 
		 new staticEnemy(737, 462),
		 new staticEnemy(712, 462),
		 
		  
		 new simpleEnemy(487, 487, 467, 132, 0, 5),
		 new simpleEnemy(537, 537, 467, 132, 0, 5),
		 new simpleEnemy(587, 587, 467, 132, 0, 5),
		 new simpleEnemy(637, 637, 467, 132, 0, 5),
		 new simpleEnemy(687, 687, 467, 132, 0, 5),
		 new simpleEnemy(737, 737, 467, 132, 0, 5),
		 new simpleEnemy(787, 787, 467, 132, 0, 5),
		 
		 new simpleEnemy(512, 512, 132, 467, 0, 5),
		 new simpleEnemy(562, 562, 132, 467, 0, 5),
		 new simpleEnemy(612, 612, 132, 467, 0, 5),
		 new simpleEnemy(662, 662, 132, 467, 0, 5),
		 new simpleEnemy(712, 712, 132, 467, 0, 5),
		 new simpleEnemy(762, 762, 132, 467, 0, 5),
		 new simpleEnemy(812, 812, 132, 467, 0, 5),
		 
		 new simpleCircularEnemy(650, 300, 0, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 25, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 50, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 75, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 100, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 125, 0, 1.35),
		 new simpleCircularEnemy(650, 300, 150, 0, 1.35),
		 
		 new simpleCircularEnemy(650, 300, 25, 90, 1.35),
		 new simpleCircularEnemy(650, 300, 50, 90, 1.35),
		 new simpleCircularEnemy(650, 300, 75, 90, 1.35),
		 new simpleCircularEnemy(650, 300, 100, 90, 1.35),
		 new simpleCircularEnemy(650, 300, 125, 90, 1.35),
		 new simpleCircularEnemy(650, 300, 150, 90, 1.35),
		 
		 new simpleCircularEnemy(650, 300, 25, -90, 1.35),
		 new simpleCircularEnemy(650, 300, 50, -90, 1.35),
		 new simpleCircularEnemy(650, 300, 75, -90, 1.35),
		 new simpleCircularEnemy(650, 300, 100, -90, 1.35),
		 new simpleCircularEnemy(650, 300, 125, -90, 1.35),
		 new simpleCircularEnemy(650, 300, 150, -90, 1.35),
		 
		 new simpleCircularEnemy(650, 300, 25, 180, 1.35),
		 new simpleCircularEnemy(650, 300, 50, 180, 1.35),
		 new simpleCircularEnemy(650, 300, 75, 180, 1.35),
		 new simpleCircularEnemy(650, 300, 100, 180, 1.35),
		 new simpleCircularEnemy(650, 300, 125, 180, 1.35),
		 new simpleCircularEnemy(650, 300, 150, 180, 1.35),
		 
		 new pauseCircularEnemy_1_4(250, 300, 13, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 38, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 63, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 88, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 113, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 138, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 163, 0, 90, 1.9, 10,0),
		  new pauseCircularEnemy_1_4(250, 300, 188, 0, 90, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 213, 0, 90, 1.9, 10,0),
		 
		 new pauseCircularEnemy_1_4(250, 300, 13, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 38, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 63, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 88, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 113, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 138, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 163, 90, 180, 1.9, 10,0),
		  new pauseCircularEnemy_1_4(250, 300, 188, 90, 180, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 213, 90, 180, 1.9, 10,0),
		 
		 new pauseCircularEnemy_1_4(250, 300, 13, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 38, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 63, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 88, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 113, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 138, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 163, 180, 270, 1.9, 10,0),
		  new pauseCircularEnemy_1_4(250, 300, 188, 180, 270, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 213, 180, 270, 1.9, 10,0),
		 
		 new pauseCircularEnemy_1_4(250, 300, 13, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 38, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 63, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 88, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 113, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 138, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 163, 270, 360, 1.9, 10,0),
		  new pauseCircularEnemy_1_4(250, 300, 188, 270, 360, 1.9, 10,0),
		 new pauseCircularEnemy_1_4(250, 300, 213, 270, 360, 1.9, 10,0),
		 
		 
		 
		 /*
		 new pauseCircularEnemy_1_4(250, 300, 25, 90, 180, 2, 5,0),
		 new pauseCircularEnemy_1_4(250, 300, 25, 180, 270, 2, 5,0),
		 new pauseCircularEnemy_1_4(250, 300, 25, 270, 360, 2, 5,0),*/
		 // pauseCircularEnemy_1_4(centerX, centerY, radius, startAngle, endAngle, speed, pauseTotal, stage, angle, enemyType) {
		 
    ],
	
	// level 35
	[
		new circularEnemyLinear([
			
			[125, 250, 175, 175, 2, 0],
			[250, 250, 175, 300, 0, 2],
			[250, 375, 300, 300, 2, 0],
            [375, 375, 300, 425, 0, 2],
			[375, 375, 425, 300, 0, 2],
			[375, 250, 300, 300, 2, 0],
			[250, 250, 300, 175, 0, 2],
			[250, 125, 175, 175, 2, 0],
			
			
		],42,90,2,0),
		
		new circularEnemyLinear([
			
			[125, 250, 175, 175, 2, 0],
			[250, 250, 175, 300, 0, 2],
			[250, 375, 300, 300, 2, 0],
            [375, 375, 300, 425, 0, 2],
			[375, 375, 425, 300, 0, 2],
			[375, 250, 300, 300, 2, 0],
			[250, 250, 300, 175, 0, 2],
			[250, 125, 175, 175, 2, 0],
			
			
		],42,-90,2,0),
		
		new circularEnemyLinear([
			
			[125, 250, 175, 175, 2, 0],
			[250, 250, 175, 300, 0, 2],
			[250, 375, 300, 300, 2, 0],
            [375, 375, 300, 425, 0, 2],
			[375, 375, 425, 300, 0, 2],
			[375, 250, 300, 300, 2, 0],
			[250, 250, 300, 175, 0, 2],
			[250, 125, 175, 175, 2, 0],
			
			
		],12,90,2,0),
		////////////
		new circularEnemyLinear([
			
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2],
            [375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2]
			
			
		],42,90,2,0),
		
		new circularEnemyLinear([
			
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2],
            [375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2]
			
			
		],42,-90,2,0),
		
		new circularEnemyLinear([
			
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2],
            [375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2]
			
			
		],12,-90,2,0),
		
		//
		//
		
		new circularEnemyLinear([
			
			[375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2],
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2]
            
			
			
		],42,90,2,0),
		
		new circularEnemyLinear([
			
			
            [375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2],
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2]
			
			
		],42,-90,2,0),
		
		new circularEnemyLinear([
			
			
            [375, 375, 175, 425, 0, 2],
			[375, 125, 425, 425, 2, 0],
			[125, 125, 425, 300, 0, 2],
			[125, 125, 300, 425, 0, 2],
			[125, 375, 425, 425, 2, 0],
			[375, 375, 425, 175, 0, 2]
			
			
		],12,90,2,0),
		
	new circularEnemyLinear([
			
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2],
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2]
            
			
			
		],42,90,2,0),	
		
		new circularEnemyLinear([
			
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2],
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2]
            
			
			
		],42,-90,2,0),
		
		new circularEnemyLinear([
			
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2],
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2]
            
			
			
		],13,90,2,0),
		//
	new circularEnemyLinear([
			
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2],
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2]
				
		],42,90,2,0),	
		
		new circularEnemyLinear([
			
			
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2],
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2]
            
			
			
		],42,-90,2,0),
		
		new circularEnemyLinear([
			
			[500, 500, 425, 300, 0, 2],
			[500, 775, 300, 300, 2, 0],
			[775, 775, 300, 175, 0, 2],
			[775, 775, 175, 300, 0, 2],
			[775, 500, 300, 300, 2, 0],
			[500, 500, 300, 425, 0, 2]
			
            
			
			
		],13,-90,2,0),	
		///////
		
		//
	new circularEnemyLinear([
			
			[775, 625, 425, 425, 2, 0],
			[625, 625, 425, 300, 0, 2],
			[625, 625, 300, 425, 0, 2],
			[625, 775, 425, 425, 2, 0]
				
		],42,90,2,0),
	new circularEnemyLinear([
			
			[775, 625, 425, 425, 2, 0],
			[625, 625, 425, 300, 0, 2],
			[625, 625, 300, 425, 0, 2],
			[625, 775, 425, 425, 2, 0]
				
		],42,-90,2,0),	
		
	new circularEnemyLinear([
			
			[775, 625, 425, 425, 2, 0],
			[625, 625, 425, 300, 0, 2],
			[625, 625, 300, 425, 0, 2],
			[625, 775, 425, 425, 2, 0]
				
		],13,90,2,0),
		/////
	new circularEnemyLinear([
			
			[375, 775, 175, 175, 2, 0],
			[775, 375, 175, 175, 2, 0]
				
		],42,-90,2,0),
	new circularEnemyLinear([
			
			[375, 775, 175, 175, 2, 0],
			[775, 375, 175, 175, 2, 0]
				
		],42,90,2,0),
		
	new circularEnemyLinear([
			
			[375, 775, 175, 175, 2, 0],
			[775, 375, 175, 175, 2, 0]
				
		],13,-90,2,0),	

	//
	new circularEnemyLinear([
			
			[775, 375, 175, 175, 2, 0],
			[375, 775, 175, 175, 2, 0]
				
		],42,-90,2,0),
	new circularEnemyLinear([
			
			
			[775, 375, 175, 175, 2, 0],
			[375, 775, 175, 175, 2, 0]
				
		],42,90,2,0),
		
	new circularEnemyLinear([
			
			
			[775, 375, 175, 175, 2, 0],
			[375, 775, 175, 175, 2, 0]
				
		],13,90,2,0),	
	],
	
	// level 36
	[
		
		new staticEnemy(337, 137),
		new staticEnemy(362, 137),
		new staticEnemy(387, 137),
		new staticEnemy(412, 137),
		new staticEnemy(437, 137),
		new staticEnemy(462, 137),
		new staticEnemy(487, 137),
		new staticEnemy(512, 137),
		new staticEnemy(537, 137),
		new staticEnemy(562, 137),
		new staticEnemy(587, 137),
		
		new staticEnemy(362, 162),
		new staticEnemy(387, 162),
		new staticEnemy(412, 162),
		new staticEnemy(437, 162),
		new staticEnemy(462, 162),
		new staticEnemy(487, 162),
		new staticEnemy(512, 162),
		new staticEnemy(537, 162),
		new staticEnemy(562, 162),
		
		new staticEnemy(387, 187),
		new staticEnemy(412, 187),
		new staticEnemy(437, 187),
		new staticEnemy(462, 187),
		new staticEnemy(487, 187),
		new staticEnemy(512, 187),
		new staticEnemy(537, 187),
		
		new staticEnemy(412, 212),
		new staticEnemy(437, 212),
		new staticEnemy(462, 212),
		new staticEnemy(487, 212),
		new staticEnemy(512, 212),
		
		new staticEnemy(437, 237),
		new staticEnemy(462, 237),
		new staticEnemy(487, 237),
		
		new staticEnemy(462, 262),
		
		new staticEnemy(337, 462),
		new staticEnemy(362, 462),
		new staticEnemy(387, 462),
		new staticEnemy(412, 462),
		new staticEnemy(437, 462),
		new staticEnemy(462, 462),
		new staticEnemy(487, 462),
		new staticEnemy(512, 462),
		new staticEnemy(537, 462),
		new staticEnemy(562, 462),
		new staticEnemy(587, 462),
		
		new staticEnemy(362, 437),
		new staticEnemy(387, 437),
		new staticEnemy(412, 437),
		new staticEnemy(437, 437),
		new staticEnemy(462, 437),
		new staticEnemy(487, 437),
		new staticEnemy(512, 437),
		new staticEnemy(537, 437),
		new staticEnemy(562, 437),
		
		new staticEnemy(387, 412),
		new staticEnemy(412, 412),
		new staticEnemy(437, 412),
		new staticEnemy(462, 412),
		new staticEnemy(487, 412),
		new staticEnemy(512, 412),
		new staticEnemy(537, 412),
		
		new staticEnemy(412, 387),
		new staticEnemy(437, 387),
		new staticEnemy(462, 387),
		new staticEnemy(487, 387),
		new staticEnemy(512, 387),
		
		new staticEnemy(437, 362),
		new staticEnemy(462, 362),
		new staticEnemy(487, 362),
  
		new staticEnemy(462, 337),
		
		new simpleEnemy(82, 817, 137, 137, 4.5, 0),
		new simpleEnemy(82, 817, 187, 187, 4.5, 0),
		new simpleEnemy(82, 817, 237, 237, 4.5, 0),
		new simpleEnemy(82, 817, 282, 282, 4.5, 0),
		new simpleEnemy(82, 817, 332, 332, 4.5, 0),
		new simpleEnemy(82, 817, 382, 382, 4.5, 0),
		new simpleEnemy(82, 817, 432, 432, 4.5, 0),
		
		new simpleEnemy(817,82, 162, 162, 4.5, 0),
		new simpleEnemy(817,82, 212, 212, 4.5, 0),
		new simpleEnemy(817,82, 262, 262, 4.5, 0),
		new simpleEnemy(817,82, 312, 312, 4.5, 0),
		new simpleEnemy(817,82, 362, 362, 4.5, 0),
		new simpleEnemy(817,82, 412, 412, 4.5, 0),
		new simpleEnemy(817,82, 462, 462, 4.5, 0),
		
		new simpleEnemy(162,162, 133, 470, 0, 4.8),
		new simpleEnemy(187,187, 133, 470, 0, 4.8),
		new simpleEnemy(212,212, 133, 470, 0, 4.8),
		
		new simpleEnemy(312,312, 133, 470, 0, 4.8),
		new simpleEnemy(337,337, 133, 470, 0, 4.8),
		new simpleEnemy(362,362, 133, 470, 0, 4.8),
		
		new simpleEnemy(462,462, 133, 470, 0, 4.8),
		new simpleEnemy(487,487, 133, 470, 0, 4.8),
		new simpleEnemy(512,512, 133, 470, 0, 4.8),
		
		new simpleEnemy(612,612, 133, 470, 0, 4.8),
		new simpleEnemy(637,637, 133, 470, 0, 4.8),
		new simpleEnemy(662,662, 133, 470, 0, 4.8),
		
		new simpleEnemy(762,762, 133, 470, 0, 4.8),
		new simpleEnemy(787,787, 133, 470, 0, 4.8),
		new simpleEnemy(812,812, 133, 470, 0, 4.8),
		
		new simpleEnemy(87,87, 470,133,  0, 4.8),
		new simpleEnemy(112,112, 470,133, 0, 4.8),
		new simpleEnemy(137,137, 470,133, 0, 4.8),
		
		new simpleEnemy(237,237, 470,133,  0, 4.8),
		new simpleEnemy(262,262, 470,133, 0, 4.8),
		new simpleEnemy(287,287, 470,133, 0, 4.8),
		
		new simpleEnemy(387,387, 470,133,  0, 4.8),
		new simpleEnemy(412,412, 470,133, 0, 4.8),
		new simpleEnemy(437,437, 470,133, 0, 4.8),
		
		new simpleEnemy(537,537, 470,133,  0, 4.8),
		new simpleEnemy(562,562, 470,133, 0, 4.8),
		new simpleEnemy(587,587, 470,133, 0, 4.8),
		
		new simpleEnemy(687,687, 470,133,  0, 4.8),
		new simpleEnemy(712,712, 470,133, 0, 4.8),
		new simpleEnemy(737,737, 470,133, 0, 4.8),
		
		
	],
	
	// level 37
	[
		//new simpleEnemy(108, 243, 113, 113, 3, 0),
		//
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],0,0,1.1,0),
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],50,0,1.1,0),
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],75,0,1.1,0),
		
		//
		
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],50,90,1.1,0),
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],75,90,1.1,0),
		//
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],50,-90,1.1,0),
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],75,-90,1.1,0),
		//
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],50,180,1.1,0),
		
		new circularEnemyLinear([
			
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2]
			
		],75,180,1.1,0),
		
		
		//////////////////////
		
		new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],0,0,1.1,0),
		new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],50,0,1.1,0),
		
			new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],75,0,1.1,0),
		//
		
		new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],50,90,1.1,0),
		
			new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],75,90,1.1,0),
		//
		new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],50,-90,1.1,0),
		
			new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],75,-90,1.1,0),
		//
		new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],50,180,1.1,0),
		
			new circularEnemyLinear([
			
			[537, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2],
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 537, 213, 213, 2, 0],
			
			
		],75,180,1.1,0),
		///
		
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],0,0,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],50,0,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],75,0,1.1,0),
		//
		
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],50,90,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],75,90,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],0,0,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],50,-90,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],75,-90,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],0,0,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],50,180,1.1,0),
		
		new circularEnemyLinear([
			
			[738, 162, 387, 387, 2, 0],
            [162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
			[738, 738, 213, 387, 0, 2]
			
		],75,180,1.1,0),
		///////////////
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],0,0,1.1,0),
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],50,0,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],75,0,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],50,90,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],75,90,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],50,-90,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],75,-90,1.1,0),
		
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],50,180,1.1,0),
		
		new circularEnemyLinear([
			
			[362, 162, 387, 387, 2, 0],
			[162, 162, 387, 213, 0, 2],
			[162, 737, 213, 213, 2, 0],
            [737, 737, 213, 387, 0, 2],
			[737, 362, 387, 387, 2, 0],
			
			
		],75,180,1.1,0),
		
		new staticEnemy(87, 137),
		new staticEnemy(112, 137),
		new staticEnemy(137, 137),
		new staticEnemy(162, 137),
		
		new staticEnemy(187, 137),
		new staticEnemy(212, 137),
		new staticEnemy(237, 137),
		new staticEnemy(262, 137),
		
		new staticEnemy(287, 137),
		new staticEnemy(312, 137),
		new staticEnemy(337, 137),
		new staticEnemy(362, 137),
		
		new staticEnemy(387, 137),
		new staticEnemy(412, 137),
		new staticEnemy(437, 137),
		new staticEnemy(462, 137),
		
		new staticEnemy(487, 137),
		new staticEnemy(512, 137),
		new staticEnemy(537, 137),
		new staticEnemy(562, 137),
		
		new staticEnemy(587, 137),
		new staticEnemy(612, 137),
		//new staticEnemy(637, 137),
		new staticEnemy(662, 137),
		
		new staticEnemy(687, 137),
		new staticEnemy(712, 137),
		new staticEnemy(737, 137),
		new staticEnemy(762, 137),
		
		new staticEnemy(787, 137),
		new staticEnemy(812, 137),
		//
		new staticEnemy(87, 162),
		
		
		new staticEnemy(187, 162),
		new staticEnemy(212, 162),
		
		new staticEnemy(462, 162),
		
		
		new staticEnemy(512, 162),
		
		new staticEnemy(612, 162),
		
		new staticEnemy(712, 162),
		
		new staticEnemy(812, 162),
		//
		new staticEnemy(87, 187),
		
		new staticEnemy(137, 187),
		
		
		new staticEnemy(187, 187),
		new staticEnemy(212, 187),
		
		new staticEnemy(262, 187),
		
		new staticEnemy(287, 187),
		new staticEnemy(312, 187),
		
		new staticEnemy(412, 187),
		
		new staticEnemy(462, 187),
		
		
		new staticEnemy(512, 187),
		
		new staticEnemy(562, 187),
		
		
		new staticEnemy(662, 187),
		
		
		new staticEnemy(762, 187),
		
		
		new staticEnemy(812, 187),
		
		//
		 new staticEnemy(87, 212),
	
		new staticEnemy(137, 212),
		
		
		new staticEnemy(187, 212),
		new staticEnemy(212, 212),
		
		new staticEnemy(262, 212),
		
		
		new staticEnemy(362, 212),
		
		new staticEnemy(387, 212),
		new staticEnemy(412, 212),
		
		new staticEnemy(462, 212),
		
		
		new staticEnemy(562, 212),
		
		
		new staticEnemy(612, 212),
		new staticEnemy(637, 212),
		new staticEnemy(662, 212),
		
		
		new staticEnemy(712, 212),
		new staticEnemy(737, 212),
		new staticEnemy(762, 212),
		
		
		new staticEnemy(812, 212),
		//
		new staticEnemy(87, 237),
		
		new staticEnemy(137, 237),
		
		new staticEnemy(262, 237),
		
		
		new staticEnemy(312, 237),
		new staticEnemy(337, 237),
		new staticEnemy(362, 237),
		
		
		new staticEnemy(462, 237),
		
		new staticEnemy(487, 237),
		new staticEnemy(512, 237),
		new staticEnemy(537, 237),
		new staticEnemy(562, 237),
		
		
		new staticEnemy(712, 237),
		
		new staticEnemy(812, 237),
		
		//
		new staticEnemy(87, 262),
		
		new staticEnemy(137, 262),
		new staticEnemy(162, 262),
		
		new staticEnemy(187, 262),
		new staticEnemy(212, 262),
		new staticEnemy(237, 262),
		new staticEnemy(262, 262),
		
		
		new staticEnemy(312, 262),
		new staticEnemy(337, 262),
		
		new staticEnemy(412, 262),
		new staticEnemy(437, 262),
		new staticEnemy(462, 262),
		
		new staticEnemy(487, 262),
		
		new staticEnemy(612, 262),
		new staticEnemy(637, 262),
		new staticEnemy(662, 262),
		
		new staticEnemy(687, 262),
		new staticEnemy(712, 262),
		
		new staticEnemy(762, 262),
		
		new staticEnemy(787, 262),
		new staticEnemy(812, 262),
		
		//
		
		new staticEnemy(212, 287),
		
		new staticEnemy(312, 287),
		
		
		new staticEnemy(387, 287),
		new staticEnemy(412, 287),
		
		
		new staticEnemy(487, 287),
		
		new staticEnemy(537, 287),
		new staticEnemy(562, 287),
		
		new staticEnemy(587, 287),
		new staticEnemy(612, 287),
		
		
		new staticEnemy(687, 287),
		
		new staticEnemy(812, 287),
		
		//
		new staticEnemy(87, 312),
		new staticEnemy(112, 312),
		new staticEnemy(137, 312),
		new staticEnemy(162, 312),
		
		
		new staticEnemy(212, 312),
		
		
		new staticEnemy(287, 312),
		new staticEnemy(312, 312),
		
		new staticEnemy(362, 312),
		
		new staticEnemy(387, 312),
		
		
		new staticEnemy(487, 312),
		
		new staticEnemy(612, 312),
		
		new staticEnemy(737, 312),
		new staticEnemy(762, 312),
		
		
		new staticEnemy(812, 312),
		//
		new staticEnemy(87, 337),
		
		new staticEnemy(212, 337),
		new staticEnemy(237, 337),
		new staticEnemy(262, 337),
		
		new staticEnemy(287, 337),
		new staticEnemy(312, 337),
		
		new staticEnemy(362, 337),
		
		
		new staticEnemy(437, 337),
		new staticEnemy(462, 337),
		
		new staticEnemy(487, 337),
		new staticEnemy(512, 337),
		new staticEnemy(537, 337),
		new staticEnemy(562, 337),
		
		
		new staticEnemy(612, 337),
		new staticEnemy(637, 337),
		new staticEnemy(662, 337),
		
		new staticEnemy(687, 337),
		new staticEnemy(712, 337),
		new staticEnemy(737, 337),
		
		new staticEnemy(812, 337),
		
		//
		new staticEnemy(87, 362),
		
		new staticEnemy(137, 362),
		new staticEnemy(162, 362),
		
		new staticEnemy(187, 362),
		new staticEnemy(212, 362),
		new staticEnemy(237, 362),
		new staticEnemy(262, 362),
		
		
		new staticEnemy(412, 362),
		new staticEnemy(437, 362),
		
		
		new staticEnemy(787, 362),
		new staticEnemy(812, 362),
		//
		 new staticEnemy(87, 387),
		
		new staticEnemy(137, 387),
		
		new staticEnemy(237, 387),
		new staticEnemy(262, 387),
		
		
		new staticEnemy(312, 387),
		
		new staticEnemy(362, 387),
		
		new staticEnemy(387, 387),
		new staticEnemy(412, 387),
		new staticEnemy(437, 387),
		
		
		new staticEnemy(487, 387),
		
		new staticEnemy(537, 387),
		new staticEnemy(562, 387),
		
		new staticEnemy(587, 387),
		new staticEnemy(612, 387),
		new staticEnemy(637, 387),
		new staticEnemy(662, 387),
		
		new staticEnemy(687, 387),
		new staticEnemy(712, 387),
		new staticEnemy(737, 387),
	
		new staticEnemy(812, 387),
		
		//
		 new staticEnemy(87, 412),
		
		new staticEnemy(137, 412),
		
		
		new staticEnemy(187, 412),
		
		new staticEnemy(237, 412),
		new staticEnemy(262, 412),
		
		
		new staticEnemy(312, 412),
		
		new staticEnemy(437, 412),
		
		
		new staticEnemy(487, 412),
		
		new staticEnemy(537, 412),
		
		new staticEnemy(637, 412),
		
		new staticEnemy(737, 412),
		new staticEnemy(762, 412),
		
		
		new staticEnemy(812, 412),
		
		//
		new staticEnemy(87, 437),
		
		
		new staticEnemy(187, 437),
		
		new staticEnemy(312, 437),
		new staticEnemy(337, 437),
		new staticEnemy(362, 437),
		
		new staticEnemy(387, 437),
		
		new staticEnemy(487, 437),
		
		
		new staticEnemy(587, 437),
		
		
		new staticEnemy(687, 437),
		
		new staticEnemy(812, 437), 
		//
		
	    new staticEnemy(87, 462),
		new staticEnemy(112, 462),
		new staticEnemy(137, 462),
		new staticEnemy(162, 462),
		
		new staticEnemy(187, 462),
		new staticEnemy(212, 462),
		new staticEnemy(237, 462),
		new staticEnemy(262, 462),
		
		new staticEnemy(287, 462),
		new staticEnemy(312, 462),
		new staticEnemy(337, 462),
		new staticEnemy(362, 462),
		
		new staticEnemy(387, 462),
		new staticEnemy(412, 462),
		new staticEnemy(437, 462),
		new staticEnemy(462, 462),
		
		new staticEnemy(487, 462),
		new staticEnemy(512, 462),
		new staticEnemy(537, 462),
		new staticEnemy(562, 462),
		
		new staticEnemy(587, 462),
	
		new staticEnemy(637, 462),
		new staticEnemy(662, 462),
		
		new staticEnemy(687, 462),
		new staticEnemy(712, 462),
		new staticEnemy(737, 462),
		new staticEnemy(762, 462),
		
		new staticEnemy(787, 462),
		new staticEnemy(812, 462)
	   
		
	],
	
	// level 38
	[
		new staticEnemy(87, 114),
		new staticEnemy(112, 114),
		new staticEnemy(137, 114),
		new staticEnemy(162, 114),
		
		new staticEnemy(187, 114),
		new staticEnemy(212, 114),
		
		
		new staticEnemy(287, 114),
		new staticEnemy(312, 114),
		new staticEnemy(337, 114),
		new staticEnemy(362, 114),
		
		new staticEnemy(387, 114),
		new staticEnemy(412, 114),
		new staticEnemy(437, 114),
		new staticEnemy(462, 114),
		
		new staticEnemy(487, 114),
		new staticEnemy(512, 114),
		new staticEnemy(537, 114),
		new staticEnemy(562, 114),
		
		new staticEnemy(587, 114),
		new staticEnemy(612, 114),
		new staticEnemy(637, 114),
		new staticEnemy(662, 114),
		
		new staticEnemy(687, 114),
		new staticEnemy(712, 114),
		new staticEnemy(737, 114),
		new staticEnemy(762, 114),
		
		new staticEnemy(787, 114),
		new staticEnemy(812, 114),
		//
		new staticEnemy(87, 487),
		new staticEnemy(112, 487),
		new staticEnemy(137, 487),
		new staticEnemy(162, 487),
		
		new staticEnemy(187, 487),
		new staticEnemy(212, 487),
		//new staticEnemy(237, 487),
		//new staticEnemy(262, 487),
		
		new staticEnemy(287, 487),
		new staticEnemy(312, 487),
		new staticEnemy(337, 487),
		new staticEnemy(362, 487),
		
		new staticEnemy(387, 487),
		new staticEnemy(412, 487),
		new staticEnemy(437, 487),
		new staticEnemy(462, 487),
		
		new staticEnemy(487, 487),
		new staticEnemy(512, 487),
		new staticEnemy(537, 487),
		new staticEnemy(562, 487),
		
		new staticEnemy(587, 487),
		new staticEnemy(612, 487),
		
		
		new staticEnemy(687, 487),
		new staticEnemy(712, 487),
		new staticEnemy(737, 487),
		new staticEnemy(762, 487),
		
		new staticEnemy(787, 487),
		new staticEnemy(812, 487),
		//
		
		//new staticEnemy(87, 137),
		//new staticEnemy(87, 162),
		new staticEnemy(87, 187),
		new staticEnemy(87, 212),
		
		new staticEnemy(87, 237),
		new staticEnemy(87, 262),
		new staticEnemy(87, 287),
		new staticEnemy(87, 312),
		
		new staticEnemy(87, 337),
		new staticEnemy(87, 362),
		new staticEnemy(87, 387),
		new staticEnemy(87, 412),
		
		new staticEnemy(87, 437),
		new staticEnemy(87, 462),
		new staticEnemy(87, 487),
		
		
		//
		new staticEnemy(437, 137),
		new staticEnemy(437, 162),
		new staticEnemy(437, 187),
		new staticEnemy(437, 212),
		
		new staticEnemy(437, 237),
		new staticEnemy(437, 262),
		new staticEnemy(437, 287),
		new staticEnemy(437, 312),
		
		
		new staticEnemy(437, 337),
		new staticEnemy(437, 362),
		new staticEnemy(437, 387),
		new staticEnemy(437, 412),
		
		new staticEnemy(437, 437),
		new staticEnemy(437, 462),
		new staticEnemy(437, 487),
		
		//
		new staticEnemy(462, 137),
		new staticEnemy(462, 162),
		new staticEnemy(462, 187),
		new staticEnemy(462, 212),
		
		new staticEnemy(462, 237),
		new staticEnemy(462, 262),
		new staticEnemy(462, 287),
		new staticEnemy(462, 312),
		
		new staticEnemy(462, 337),
		new staticEnemy(462, 362),
		new staticEnemy(462, 387),
		new staticEnemy(462, 412),
		
		new staticEnemy(462, 437),
		new staticEnemy(462, 462),
		new staticEnemy(462, 487),
		//
		new staticEnemy(587, 137),
		new staticEnemy(587, 162),
		new staticEnemy(587, 187),
		new staticEnemy(587, 212),
		
		new staticEnemy(587, 237),
		new staticEnemy(587, 262),
		new staticEnemy(587, 287),
		new staticEnemy(587, 312),
		
		new staticEnemy(587, 337),
		new staticEnemy(587, 362),
		new staticEnemy(587, 387),
		new staticEnemy(587, 412),
		
		new staticEnemy(587, 437),
		//new staticEnemy(587, 462),
		//new staticEnemy(587, 487),
		
		//
		new staticEnemy(812, 137),
		new staticEnemy(812, 162),
		new staticEnemy(812, 187),
		new staticEnemy(812, 212),
		
		new staticEnemy(812, 237),
		new staticEnemy(812, 262),
		new staticEnemy(812, 287),
		new staticEnemy(812, 312),
		
		new staticEnemy(812, 337),
		new staticEnemy(812, 362),
		new staticEnemy(812, 387),
		new staticEnemy(812, 412),
		
		new staticEnemy(812, 437),
		new staticEnemy(812, 462),
		new staticEnemy(812, 487),
		
		//
		
		new staticEnemy(487, 187),
		new staticEnemy(512, 187),
		new staticEnemy(587, 187),
		new staticEnemy(662, 187),
		//
		new staticEnemy(487, 337),
		new staticEnemy(512, 337),
		new staticEnemy(587, 337),
		new staticEnemy(662, 337),
			
		new staticEnemy(537, 262),
		new staticEnemy(562, 262),
		
		new staticEnemy(737, 137),
		new staticEnemy(737, 162),
		
		new staticEnemy(662, 187),
		new staticEnemy(662, 212),
		new staticEnemy(662, 237),
		new staticEnemy(687, 237),
		new staticEnemy(712, 237),
		new staticEnemy(737, 237),
		new staticEnemy(762, 237),
		new staticEnemy(787, 237),
		
		new staticEnemy(662, 337),
		
		new staticEnemy(662, 312),
		new staticEnemy(687, 312),
		new staticEnemy(712, 312),
		new staticEnemy(737, 312),
		new staticEnemy(762, 312),
		new staticEnemy(787, 312),
		
		
		new staticEnemy(537, 412),
		new staticEnemy(562, 412),
		new staticEnemy(587, 412),
		new staticEnemy(612, 412),
		new staticEnemy(637, 412),
		new staticEnemy(662, 412),
		new staticEnemy(687, 412),
		new staticEnemy(712, 412),
		new staticEnemy(737, 412),
		new staticEnemy(737, 387),
		//
		
		new simpleEnemy(266, 291, 134, 109, 0.38, 0.38),

		
		new simpleEnemy(366, 391, 134, 109, 0.38, 0.38),
		//
		
		new simpleEnemy(141, 166,159 ,134, 0.38, 0.38),
		new simpleEnemy(166, 191, 159 ,134, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 159 ,134, 0.38, 0.38),
		new simpleEnemy(216, 241, 159 , 0.38, 0.38),
		
		new simpleEnemy(266, 291, 159,134, 0.38, 0.38),

		
		new simpleEnemy(316, 341, 159,134, 0.38, 0.38),
		
		new simpleEnemy(366, 391, 159,134, 0.38, 0.38),
		//
		new simpleEnemy(91, 116,184 ,159, 0.38, 0.38),
		new simpleEnemy(116, 141, 184 ,159, 0.38, 0.38),
		new simpleEnemy(141, 166, 184 ,159, 0.38, 0.38),
		new simpleEnemy(166, 191, 184 ,159, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 184 ,159, 0.38, 0.38),
		new simpleEnemy(216, 241, 184 ,159, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 184 ,159, 0.38, 0.38),

		
		new simpleEnemy(316, 341, 184 ,159, 0.38, 0.38),
		
		new simpleEnemy(366, 391, 184 ,159, 0.38, 0.38),
		
		new simpleEnemy(416, 441, 184 ,159, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 209, 184, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 209, 184, 0.38, 0.38),

		
		new simpleEnemy(316, 341, 209, 184, 0.38, 0.38),
		
		new simpleEnemy(366, 391, 209, 184, 0.38, 0.38),
		
		new simpleEnemy(416, 441, 209, 184, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 234, 209, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 234, 209, 0.38, 0.38),
		new simpleEnemy(166, 191, 234, 209, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 234, 209, 0.38, 0.38),
		new simpleEnemy(216, 241, 234, 209, 0.38, 0.38),
		new simpleEnemy(241, 266, 234, 209, 0.38, 0.38),
		new simpleEnemy(266, 291, 234, 209, 0.38, 0.38),

		
		new simpleEnemy(316, 341, 234, 209, 0.38, 0.38),
		
		new simpleEnemy(366, 391, 234, 209, 0.38, 0.38),
		
		new simpleEnemy(416, 441, 234, 209, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 259, 234, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 259, 234, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 259, 234, 0.38, 0.38),

		
		new simpleEnemy(316, 341, 259, 234, 0.38, 0.38),
		
		new simpleEnemy(416, 441, 259, 234, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 284, 259, 0.38, 0.38),
		
		
		new simpleEnemy(191, 216, 284, 259, 0.38, 0.38),
		new simpleEnemy(216, 241, 284, 259, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 284, 259, 0.38, 0.38),

		new simpleEnemy(316, 341, 284, 259, 0.38, 0.38),
		new simpleEnemy(341, 366, 284, 259, 0.38, 0.38),
		new simpleEnemy(366, 391, 284, 259, 0.38, 0.38),
		
		new simpleEnemy(391, 416, 284, 259, 0.38, 0.38),
		new simpleEnemy(416, 441, 284, 259, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 309, 284, 0.38, 0.38),
		new simpleEnemy(116, 141, 309, 284, 0.38, 0.38),
		new simpleEnemy(141, 166, 309, 284, 0.38, 0.38),
		new simpleEnemy(166, 191, 309, 284, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 309, 284, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 309, 284, 0.38, 0.38),
        
		//
		new simpleEnemy(91, 116, 334, 309, 0.38, 0.38),
		
		
		new simpleEnemy(191, 216, 334, 309, 0.38, 0.38),
		
		new simpleEnemy(241, 266, 334, 309, 0.38, 0.38),
		new simpleEnemy(266, 291, 334, 309, 0.38, 0.38),

		new simpleEnemy(291, 316, 334, 309, 0.38, 0.38),
		new simpleEnemy(316, 341, 334, 309, 0.38, 0.38),
		new simpleEnemy(341, 366, 334, 309, 0.38, 0.38),
		new simpleEnemy(366, 391, 334, 309, 0.38, 0.38),
		
		new simpleEnemy(391, 416, 334, 309, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 359, 334, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 359, 334, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 359, 334, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 359, 334, 0.38, 0.38),

		//
		new simpleEnemy(91, 116, 384, 359, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 384, 359, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 384, 359, 0.38, 0.38),
		new simpleEnemy(216, 241, 384, 359, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 384, 359, 0.38, 0.38),

		new simpleEnemy(316, 341, 384, 359, 0.38, 0.38),
		new simpleEnemy(341, 366, 384, 359, 0.38, 0.38),
		new simpleEnemy(366, 391, 384, 359, 0.38, 0.38),
		
		new simpleEnemy(391, 416, 384, 359, 0.38, 0.38),
		new simpleEnemy(416, 441, 384, 359, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 409, 384, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 409, 384, 0.38, 0.38),
		
		new simpleEnemy(266, 291, 409, 384, 0.38, 0.38),

		//
		new simpleEnemy(91, 116, 434, 409, 0.38, 0.38),
		
		new simpleEnemy(141, 166, 434, 409, 0.38, 0.38),
		new simpleEnemy(166, 191, 434, 409, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 434, 409, 0.38, 0.38),
		new simpleEnemy(216, 241, 434, 409, 0.38, 0.38),
		new simpleEnemy(241, 266, 434, 409, 0.38, 0.38),
		new simpleEnemy(266, 291, 434, 409, 0.38, 0.38),

		new simpleEnemy(291, 316, 434, 409, 0.38, 0.38),
		new simpleEnemy(316, 341, 434, 409, 0.38, 0.38),
		new simpleEnemy(341, 366, 434, 409, 0.38, 0.38),
		new simpleEnemy(366, 391, 434, 409, 0.38, 0.38),
		
		new simpleEnemy(391, 416, 434, 409, 0.38, 0.38),
		
		//
		new simpleEnemy(91, 116, 459, 434, 0.38, 0.38),
		//
		new simpleEnemy(91, 116, 484, 459, 0.38, 0.38),
		new simpleEnemy(116, 141, 484, 459, 0.38, 0.38),
		new simpleEnemy(141, 166, 484, 459, 0.38, 0.38),
		new simpleEnemy(166, 191, 484, 459, 0.38, 0.38),
		
		new simpleEnemy(191, 216, 484, 459, 0.38, 0.38),
		new simpleEnemy(216, 241, 484, 459, 0.38, 0.38),
		

		new simpleEnemy(291, 316, 484, 459, 0.38, 0.38),
		new simpleEnemy(316, 341, 484, 459, 0.38, 0.38),
		new simpleEnemy(341, 366, 484, 459, 0.38, 0.38),
		new simpleEnemy(366, 391, 484, 459, 0.38, 0.38),
		
		new simpleEnemy(391, 416, 484, 459, 0.38, 0.38),
		new simpleEnemy(416, 441, 484, 459, 0.38, 0.38),
		
		
		
		
		
		
		
		new linearEnemy([
			[562, 537, 162, 162, 2.3, 0],
			[537, 537, 163, 137, 0, 2.3],
			[537, 562, 137, 137, 2.3, 0],
			[562, 562, 137, 162, 0, 2.3]
		]),
		
		new linearEnemy([
			[612, 637, 137, 137, 2.3, 0],
			[637, 637, 137, 162, 0, 2.3],
			[637, 612, 162, 162, 2.3, 0],
			[612, 612, 162, 137, 0, 2.3]
		]),
		
		new linearEnemy([
			[662, 712, 137, 137, 2.3, 0],
			[712, 712, 137, 162, 0, 2.3],
			[712, 662, 162, 162, 2.3, 0],
			[662, 662, 162, 137, 0, 2.3]
		]),
		
		new linearEnemy([
			[637, 637, 187, 237, 0, 2.3],
			[637, 612, 237, 237, 2.3, 0 ],
			[612, 612, 237, 187, 0, 2.3],
			[612, 637, 187, 187, 2.3, 0]
		]),
		
		new linearEnemy([
			[687, 712, 212, 212, 2.3, 0],
			[712, 712, 212, 187, 0, 2.3],
			[712, 687, 187, 187, 2.3, 0],
			[687, 687, 187, 212, 0, 2.3]
		]),
		
		new linearEnemy([
			[787, 737, 212, 212, 2.3, 0],
			[737, 737, 212, 187, 0, 2.3],
			[737, 787, 187, 187, 2.3, 0],
			[787, 787, 187, 212, 0, 2.3]
		]),
		
		new linearEnemy([
			[537, 537, 237, 187, 0, 2.3],
			[537, 562, 187, 187, 2.3, 0],
			[562, 562, 187, 237, 0, 2.3],
			[562, 537, 237, 237, 2.3, 0]
		]),
		
		new linearEnemy([
			[512, 512, 262, 212, 0, 2.3],
			[512, 487, 212, 212, 2.3, 0 ],
			[487, 487, 212, 262, 0, 2.3],
			[487, 512, 262, 262, 2.3, 0]
		]),
		
		new linearEnemy([
			[712, 662, 262, 262, 2.3, 0],
			[662, 662, 262, 287, 0, 2.3],
			[662, 712, 287, 287, 2.3, 0],
			[712, 712, 287, 262, 0, 2.3]
		]),
		
		new linearEnemy([
			[762, 737, 262, 262, 2.3, 0],
			[737, 737, 262, 287, 0, 2.3],
			[737, 762, 287, 287, 2.3, 0],
			[762, 762, 287, 262, 0, 2.3]
		]),
		new linearEnemy([
			[787, 812, 262, 262, 2.3, 0],
			[812, 812, 262, 287, 0, 2.3],
			[812, 787, 287, 287, 2.3, 0],
			[787, 787, 287, 262, 0, 2.3]
		]),
		new linearEnemy([
			[487, 512, 287, 287, 2.3, 0],
			[512, 512, 287, 312, 0, 2.3],
			[512, 487, 312, 312, 2.3, 0],
			[487, 487, 312, 287, 0, 2.3]
		]),
		
		new linearEnemy([
			[562, 562, 287, 337, 0, 2.3],
			[562, 537, 337, 337, 2.3, 0 ],
			[537, 537, 337, 287, 0, 2.3],
			[537, 562, 287, 287, 2.3, 0]
		]),
		new linearEnemy([
			[612, 637, 287, 287, 2.3, 0],
			[637, 637, 287, 262, 0, 2.3],
			[637, 612, 262, 262, 2.3, 0],
			[612, 612, 262, 287, 0, 2.3]
		]),
		
		new linearEnemy([
			[612, 637, 287, 287, 2.3, 0],
			[637, 637, 287, 262, 0, 2.3],
			[637, 612, 262, 262, 2.3, 0],
			[612, 612, 262, 287, 0, 2.3]
		]),
		
		new linearEnemy([
			[637, 612, 337, 337, 2.3, 0],
			[612, 612, 337, 312, 0, 2.3],
			[612, 637, 312, 312, 2.3, 0],
			[637, 637, 312, 337, 0, 2.3]
		]),
		new linearEnemy([
			[712, 712, 337, 387, 0, 2.3],
			[712, 687, 387, 387, 2.3, 0],
			[687, 687, 387, 337, 0, 2.3],
			[687, 712, 337, 337, 2.3, 0]
		]),
		new linearEnemy([
			[612, 662, 337, 337, 2.3, 0],
			[662, 662, 337, 312, 0, 2.3],
			[662, 612, 312, 312, 2.3, 0],
			[612, 612, 312, 337, 0, 2.3]
		]),
		
		new linearEnemy([
			[737, 787, 362, 362, 2.3, 0],
			[787, 787, 362, 337, 0, 2.3],
			[787, 737, 337, 337, 2.3, 0],
			[737, 612, 337, 362, 0, 2.3]
		]),
		
		
		new linearEnemy([
			[537, 562, 387, 387, 2.3, 0],
			[562, 562, 387, 362, 0, 2.3],
			[562, 537, 362, 362, 2.3, 0],
			[537, 537, 362, 387, 0, 2.3]
		]),
		
		new linearEnemy([
			[762, 787, 387, 387, 2.3, 0],
			[787, 787, 387, 412, 0, 2.3],
			[787, 762, 412, 412, 2.3, 0],
			[762, 762, 412, 387, 0, 2.3]
		]),
		
		new linearEnemy([
			[487, 487, 413, 362, 0, 2.3],
			[487, 512, 362, 362, 2.3, 0 ],
			[512, 512, 362, 413, 0, 2.3],
			[512, 487, 413, 413, 2.3, 0]
		]),
		new linearEnemy([
			[487, 537, 437, 437, 2.3, 0],
			[537, 537, 437, 462, 0, 2.3],
			[537, 487, 462, 462, 2.3, 0],
			[487, 487, 462, 437, 0, 2.3]
		]),
		
		new linearEnemy([
			[612, 562, 437, 437, 2.3, 0],
			[562, 562, 437, 462, 0, 2.3],
			[562, 612, 462, 462, 2.3, 0],
			[612, 612, 462, 437, 0, 2.3]
		]),
		
		new linearEnemy([
			[637, 662, 437, 437, 2.3, 0],
			[662, 662, 437, 462, 0, 2.3],
			[662, 637, 462, 462, 2.3, 0],
			[637, 637, 462, 437, 0, 2.3]
		]),
		
		new linearEnemy([
			[687, 737, 437, 437, 2.3, 0],
			[737, 737, 437, 462, 0, 2.3],
			[737, 687, 462, 462, 2.3, 0],
			[687, 687, 462, 437, 0, 2.3]
		]),
		
		new linearEnemy([
			[787, 762, 437, 437, 2.3, 0],
			[762, 762, 437, 462, 0, 2.3],
			[762, 787, 462, 462, 2.3, 0],
			[787, 787, 462, 437, 0, 2.3]
		]),
		
	],
	
	// level 39
	[
		new simpleEnemy(112, 112, 133, 469, 0, 2.5),
		new simpleEnemy(137, 137, 133, 469, 0, 2.5),
		new simpleEnemy(162, 162, 133, 469, 0, 3.3),
		new simpleEnemy(187, 187, 133, 469, 0, 3.3),
		
		new simpleEnemy(212, 212, 133, 469, 0, 5),
		new simpleEnemy(237, 237, 133, 469, 0, 5),
		new simpleEnemy(262, 262, 133, 469, 0, 2.5),
		new simpleEnemy(287, 287, 133, 469, 0, 2.5),
		
		new simpleEnemy(312, 312, 133, 469, 0, 3.3),
		new simpleEnemy(337, 337, 133, 469, 0, 3.3),
		new simpleEnemy(362, 362, 133, 469, 0, 5),
		new simpleEnemy(387, 387, 133, 469, 0, 5),
		
		new simpleEnemy(412, 412, 133, 469, 0, 2.5),
		new simpleEnemy(437, 437, 133, 469, 0, 2.5),
		new simpleEnemy(462, 462, 133, 469, 0, 3.3),
		new simpleEnemy(487, 487, 133, 469, 0, 3.3),
		
		new simpleEnemy(512, 512, 133, 469, 0, 5),
		new simpleEnemy(537, 537, 133, 469, 0, 5),
		new simpleEnemy(562, 562, 133, 469, 0, 2.5),
		new simpleEnemy(587, 587, 133, 469, 0, 2.5),
		
		new simpleEnemy(612, 612, 133, 469, 0, 3.3),
		new simpleEnemy(637, 637, 133, 469, 0, 3.3),
		new simpleEnemy(662, 662, 133, 469, 0, 5),
		new simpleEnemy(687, 687, 133, 469, 0, 5),
		
		new simpleEnemy(712, 712, 133, 469, 0, 2.5),
		new simpleEnemy(737, 737, 133, 469, 0, 2.5),
		new simpleEnemy(762, 762, 133, 469, 0, 3.3),
		new simpleEnemy(787, 787, 133, 469, 0, 3.3),
		//
		new simpleEnemy(107, 793, 137, 137, 5, 0),
		new simpleEnemy(107, 793, 162, 162, 5, 0),
		new simpleEnemy(107, 793, 187, 187, 3.4, 0),
		new simpleEnemy(107, 793, 212, 212, 3.4, 0),
		
		new simpleEnemy(107, 793, 237, 237, 2.5, 0),
		new simpleEnemy(107, 793, 262, 262, 2.5, 0),
		new simpleEnemy(107, 793, 287, 287, 5, 0),
		new simpleEnemy(107, 793, 312, 312, 5, 0),
		
		new simpleEnemy(107, 793, 337, 337, 3.4, 0),
		new simpleEnemy(107, 793, 362, 362, 3.4, 0),
		new simpleEnemy(107, 793, 387, 387, 2.5, 0),
		new simpleEnemy(107, 793, 412, 412, 2.5, 0),
		
		new simpleEnemy(107, 793, 437, 437, 5, 0),
		new simpleEnemy(107, 793, 462, 462, 5, 0),
		
		//
		new simpleEnemy(793,107, 137, 137, 5, 0),
		new simpleEnemy(793,107, 162, 162, 5, 0),
		new simpleEnemy(793,107, 187, 187, 3.4, 0),
		new simpleEnemy(793,107, 212, 212, 3.4, 0),
		
		new simpleEnemy(793,107, 237, 237, 2.5, 0),
		new simpleEnemy(793,107, 262, 262, 2.5, 0),
		new simpleEnemy(793,107, 287, 287, 5, 0),
		new simpleEnemy(793,107, 312, 312, 5, 0),
		
		new simpleEnemy(793,107, 337, 337, 3.4, 0),
		new simpleEnemy(793,107, 362, 362, 3.4, 0),
		new simpleEnemy(793,107, 387, 387, 2.5, 0),
		new simpleEnemy(793,107, 412, 412, 2.5, 0),
		
		new simpleEnemy(793,107, 437, 437, 5, 0),
		new simpleEnemy(793,107, 462, 462, 5, 0)
		
	],
	
	// level 40
	[
		new simpleEnemy(162, 162, 269, 132 , 0, 2.9),
		new simpleEnemy(212, 212, 269, 132, 0, 2.9),
		new simpleEnemy(262, 262, 269, 132, 0, 2.9),
		new simpleEnemy(312, 312, 269, 132, 0, 2.9),
		new simpleEnemy(362, 362, 269, 132, 0, 2.9),
		new simpleEnemy(412, 412, 269, 132, 0, 2.9),
		new simpleEnemy(462, 462, 269, 132, 0, 2.9),
		new simpleEnemy(512, 512, 269, 132, 0, 2.9),
		new simpleEnemy(562, 562, 269, 132, 0, 2.9),
		new simpleEnemy(612, 612, 269, 132, 0, 2.9),
		new simpleEnemy(662, 662, 269, 132, 0, 2.9),
		new simpleEnemy(712, 712, 269, 132, 0, 2.9),
		new simpleEnemy(762, 762, 269, 132, 0, 2.9),
		
		new simpleEnemy(137, 137, 132 ,269, 0, 2.9),
		new simpleEnemy(187, 187, 132 ,269, 0, 2.9),
		new simpleEnemy(237, 237, 132 ,269, 0, 2.9),
		new simpleEnemy(287, 287, 132 ,269, 0, 2.9),
		new simpleEnemy(337, 337, 132 ,269, 0, 2.9),
		new simpleEnemy(387, 387, 132 ,269, 0, 2.9),
		new simpleEnemy(437, 437, 132 ,269, 0, 2.9),
		new simpleEnemy(487, 487, 132 ,269, 0, 2.9),
		new simpleEnemy(537, 537, 132 ,269, 0, 2.9),
		new simpleEnemy(587, 587, 132 ,269, 0, 2.9),
		new simpleEnemy(637, 637, 132 ,269, 0, 2.9),
		new simpleEnemy(687, 687, 132 ,269, 0, 2.9),
		new simpleEnemy(737, 737, 132 ,269, 0, 2.9),
		
		new simpleEnemy(267, 132, 137 ,137, 2.9, 0),
		new simpleEnemy(267, 132, 162 ,162, 2.9, 0),
		new simpleEnemy(267, 132, 187 ,187, 2.9, 0),
		new simpleEnemy(267, 132, 212 ,212, 2.9, 0),
		
		new simpleEnemy(392, 257, 237 ,237, 2.9, 0),
		new simpleEnemy(392, 257, 262 ,262, 2.9, 0),
		new simpleEnemy(392, 257, 187 ,187, 2.9, 0),
		new simpleEnemy(392, 257, 212 ,212, 2.9, 0),
		
		new simpleEnemy(517, 382, 137 ,137, 2.9, 0),
		new simpleEnemy(517, 382, 162 ,162, 2.9, 0),
		new simpleEnemy(517, 382, 187 ,187, 2.9, 0),
		new simpleEnemy(517, 382, 212 ,212, 2.9, 0),
		
		new simpleEnemy(642, 507, 237 ,237, 2.9, 0),
		new simpleEnemy(642, 507, 262 ,262, 2.9, 0),
		new simpleEnemy(642, 507, 187 ,187, 2.9, 0),
		new simpleEnemy(642, 507, 212 ,212, 2.9, 0),
		
		new simpleEnemy(767, 632, 137 ,137, 2.9, 0),
		new simpleEnemy(767, 632, 162 ,162, 2.9, 0),
		new simpleEnemy(767, 632, 187 ,187, 2.9, 0),
		new simpleEnemy(767, 632, 212 ,212, 2.9, 0),
		//
		new simpleEnemy(137, 137, 333 ,469, 0, 2.9),
		
		new simpleEnemy(162, 162, 469 ,333, 0, 2.9),
		new simpleEnemy(187, 187, 469 ,333, 0, 2.9),
		new simpleEnemy(212, 212, 469 ,333, 0, 2.9),
		new simpleEnemy(237, 237, 469 ,333, 0, 2.9),
		
		new simpleEnemy(262, 262, 333 ,469, 0, 2.9),
		
		new simpleEnemy(287, 287, 469 ,333, 0, 2.9),
		new simpleEnemy(312, 312, 469 ,333, 0, 2.9),
		new simpleEnemy(337, 337, 469 ,333, 0, 2.9),
		new simpleEnemy(362, 362, 469 ,333, 0, 2.9),
		
		new simpleEnemy(387, 387, 333 ,469, 0, 2.9),
		
		new simpleEnemy(412, 412, 469 ,333, 0, 2.9),
		new simpleEnemy(437, 437, 469 ,333, 0, 2.9),
		new simpleEnemy(462, 462, 469 ,333, 0, 2.9),
		new simpleEnemy(487, 487, 469 ,333, 0, 2.9),
		
		new simpleEnemy(512, 512, 333 ,469, 0, 2.9),
		
		new simpleEnemy(537,537, 469 ,333, 0, 2.9),
		new simpleEnemy(562, 562, 469 ,333, 0, 2.9),
		new simpleEnemy(587, 587, 469 ,333, 0, 2.9),
		new simpleEnemy(612, 612, 469 ,333, 0, 2.9),
		
		new simpleEnemy(637, 637, 333 ,469, 0, 2.9),
		
		new simpleEnemy(662, 662, 469 ,333, 0, 2.9),
		new simpleEnemy(687, 687, 469 ,333, 0, 2.9),
		new simpleEnemy(712, 712, 469 ,333, 0, 2.9),
		new simpleEnemy(737, 737, 469 ,333, 0, 2.9),
		
		new simpleEnemy(762, 762, 333 ,469, 0, 2.9),
		
		new staticEnemy(225, 400),
		new staticEnemy(250, 400),
		new staticEnemy(275, 400),
		new staticEnemy(300, 400),
		
		new staticEnemy(325, 400),
		new staticEnemy(350, 400),
		new staticEnemy(375, 400),
		new staticEnemy(400, 400),
		
		new staticEnemy(425, 400),
		new staticEnemy(450, 400),
		new staticEnemy(475, 400),
		new staticEnemy(500, 400),
		
		new staticEnemy(525, 400),
		new staticEnemy(550, 400),
		new staticEnemy(575, 400),
		new staticEnemy(600, 400),
		
		new staticEnemy(625, 400),
		new staticEnemy(650, 400),
		new staticEnemy(675, 400),
		new staticEnemy(700, 400),
		
		new staticEnemy(725, 400),
		new staticEnemy(200, 425),
		new staticEnemy(200, 450),
		
		
	],
	
	// level 41
	[
		/*new staticEnemy(237, 187),
		new staticEnemy(562, 262),
		new staticEnemy(687, 213),
		*/
		new simpleEnemy(537, 537 , 82, 219, 0, 2.9),
		new simpleEnemy(487, 487 , 219, 82, 0, 1.8),
		
		new simpleEnemy(382, 644 , 112, 112, 3.5, 0),
		new simpleEnemy(132, 344 , 87, 87, 2.9, 0),
		new simpleEnemy(307, 443 , 162, 162, 1.8, 0),
		
		new simpleEnemy(637, 637 , 158, 294, 0, 1.8),
		new simpleEnemy(338, 338 , 294, 83, 0, 2.9),
		
		new simpleEnemy(238, 238 , 294, 183, 0, 2.9),
		new simpleEnemy(294, 181 , 288, 288, 2.9, 0),
		new simpleEnemy(343, 238 , 387, 387, 2.9, 0),
		new simpleEnemy(257,  394 , 464, 464, 1.8, 0),
		
		new simpleEnemy(314, 314 , 333, 468, 0, 1.8),
		new simpleEnemy(388, 388 , 469, 282, 0, 2.9),
		new simpleEnemy(484, 619 , 362, 362, 1.8, 0),
		new simpleEnemy(514, 644 , 412, 412, 1.8, 0),
		
		new simpleEnemy(418, 282  , 237, 237, 1.8, 0),
		new simpleEnemy(382, 520 , 287, 287, 1.8, 0),
		new simpleEnemy(694,  558, 262, 262, 1.8, 0),
		new simpleEnemy(714,  714, 218, 83, 0, 1.8),
		
		new simpleEnemy(513, 513 , 416, 283, 0, 1.8),
		new simpleEnemy(820, 683 , 213, 213, 1.8, 0),
		
		new simpleEnemy(657, 793  , 337, 337, 1.8, 0),
		new simpleEnemy(532, 668 , 212, 212, 1.8, 0),
		
		new simpleEnemy(688, 688 , 395, 257, 0, 1.8),
		new simpleEnemy(763, 763 , 395, 183, 0, 2.9),
		
	],
	
	// level 42
	[
		new staticEnemy(62, 488),
		new staticEnemy(87, 488),
		new staticEnemy(112, 488),
		new staticEnemy(137, 488),
		
		new staticEnemy(162, 488),
		new staticEnemy(187, 488),
		new staticEnemy(212, 488),
		new staticEnemy(237, 488),
		
		new staticEnemy(262, 488),
		new staticEnemy(287, 488),
		new staticEnemy(312, 488),
		new staticEnemy(337, 488),
		
		new staticEnemy(362, 488),
		new staticEnemy(387, 488),
		new staticEnemy(412, 488),
		new staticEnemy(437, 488),
		
		new staticEnemy(462, 488),
		new staticEnemy(487, 488),
		new staticEnemy(512, 488),
		new staticEnemy(537, 488),
		
		new staticEnemy(562, 488),
		new staticEnemy(587, 488),
		new staticEnemy(612, 488),
		new staticEnemy(637, 488),
		
		new staticEnemy(662, 488),
		new staticEnemy(687, 488),
		new staticEnemy(712, 488),
		new staticEnemy(737, 488),
		
		new staticEnemy(762, 488),
		new staticEnemy(787, 488),
		new staticEnemy(812, 488),
		/////
		new staticEnemy(62, 62),
		new staticEnemy(62, 87),
		new staticEnemy(62, 112),
		new staticEnemy(62, 137),
		
		new staticEnemy(62, 162),
		new staticEnemy(62, 187),
		new staticEnemy(62, 212),
		new staticEnemy(62, 237),
		
		new staticEnemy(62, 262),
		new staticEnemy(62, 287),
		new staticEnemy(62, 312),
		new staticEnemy(62, 337),
		
		new staticEnemy(62, 362),
		new staticEnemy(62, 387),
		new staticEnemy(62, 412),
		new staticEnemy(62, 437),
		//
		
		new staticEnemy(313, 62),
		new staticEnemy(313, 87),
		new staticEnemy(313, 112),
		new staticEnemy(313, 137),
		
		new staticEnemy(313, 162),
		new staticEnemy(313, 187),
		new staticEnemy(313, 212),
		new staticEnemy(313, 237),
		
		new staticEnemy(313, 262),
		new staticEnemy(313, 287),
		new staticEnemy(313, 312),
		new staticEnemy(313, 337),
		
		//
		
		new staticEnemy(187, 62),
		new staticEnemy(187, 87),
		new staticEnemy(187, 112),
		new staticEnemy(187, 137),
		
		new staticEnemy(187, 162),
		new staticEnemy(187, 187),
		new staticEnemy(187, 212),
		new staticEnemy(187, 237),
		
		new staticEnemy(187, 262),
		new staticEnemy(187, 287),
		new staticEnemy(187, 312),
		new staticEnemy(187, 337),
		//
		
		new staticEnemy(436, 62),
		new staticEnemy(436, 87),
		new staticEnemy(436, 112),
		new staticEnemy(436, 137),
		
		new staticEnemy(436, 162),
		new staticEnemy(436, 187),
		new staticEnemy(436, 212),
		new staticEnemy(436, 237),
		
		new staticEnemy(436, 262),
		new staticEnemy(436, 287),
		new staticEnemy(436, 312),
		new staticEnemy(436, 337),
		
		//
		
		new staticEnemy(562, 62),
		new staticEnemy(562, 87),
		new staticEnemy(562, 112),
		new staticEnemy(562, 137),
		
		new staticEnemy(562, 162),
		new staticEnemy(562, 187),
		new staticEnemy(562, 212),
		new staticEnemy(562, 237),
		
		new staticEnemy(562, 262),
		new staticEnemy(562, 287),
		new staticEnemy(562, 312),
		new staticEnemy(562, 337),
		
		//
		new staticEnemy(687, 62),
		new staticEnemy(687, 87),
		new staticEnemy(687, 112),
		new staticEnemy(687, 137),
		
		new staticEnemy(687, 162),
		new staticEnemy(687, 187),
		new staticEnemy(687, 212),
		new staticEnemy(687, 237),
		
		new staticEnemy(687, 262),
		new staticEnemy(687, 287),
		new staticEnemy(687, 312),
		new staticEnemy(687, 337),
		//
		
		new staticEnemy(812, 62),
		new staticEnemy(812, 87),
		new staticEnemy(812, 112),
		new staticEnemy(812, 137),
		
		new staticEnemy(812, 162),
		new staticEnemy(812, 187),
		new staticEnemy(812, 212),
		new staticEnemy(812, 237),
		
		//
		
		new staticEnemy(212, 62),
		new staticEnemy(262, 62),
		new staticEnemy(287, 62),
		
		new staticEnemy(212, 87),
		new staticEnemy(262, 87),
		new staticEnemy(287, 87),
		//
		
		new staticEnemy(462, 62),
		new staticEnemy(487, 62),
		new staticEnemy(512, 62),
		
		new staticEnemy(462, 87),
		new staticEnemy(487, 87),
		new staticEnemy(512, 87),
		
		new staticEnemy(712, 62),
		new staticEnemy(737, 62),
		new staticEnemy(762, 62),
		new staticEnemy(712, 87),
		new staticEnemy(737, 87),
		new staticEnemy(762, 87),
		
		new staticEnemy(712, 237),
		new staticEnemy(737, 237),
		new staticEnemy(762, 237),
		new staticEnemy(787, 237),
		
		new staticEnemy(812, 362),
		new staticEnemy(812, 387),
		new staticEnemy(812, 412),
		new staticEnemy(812, 437),
		new staticEnemy(812, 462),
		
		new staticEnemy(712, 237),
		
		
		new simpleCircularEnemy(250, 300, 13, 0, 2),
		new simpleCircularEnemy(250, 300, 63, 0, 2),
		new simpleCircularEnemy(250, 300, 113, 0, 2),
		new simpleCircularEnemy(250, 300, 163, 0, 2),
		
		new simpleCircularEnemy(250, 300, 13, -180, 2),
		new simpleCircularEnemy(250, 300, 63, -180, 2),
		new simpleCircularEnemy(250, 300, 113, -180, 2),
		new simpleCircularEnemy(250, 300, 163, -180, 2),
		
		new simpleCircularEnemy(250, 300, 38, 90, 2),
		new simpleCircularEnemy(250, 300, 88, 90, 2),
		new simpleCircularEnemy(250, 300, 138, 90, 2),
		new simpleCircularEnemy(250, 300, 188, 90, 2),
		
		new simpleCircularEnemy(250, 300, 38, -90, 2),
		new simpleCircularEnemy(250, 300, 88, -90, 2),
		new simpleCircularEnemy(250, 300, 138, -90, 2),
		new simpleCircularEnemy(250, 300, 188, -90, 2),
		
		
		//
		new simpleCircularEnemy(650, 300, 38, 0, -2),
		new simpleCircularEnemy(650, 300, 88, 0, -2),
		new simpleCircularEnemy(650, 300, 138, 0, -2),
		new simpleCircularEnemy(650, 300, 188, 0, -2),
		
		new simpleCircularEnemy(650, 300, 38, -180, -2),
		new simpleCircularEnemy(650, 300, 88, -180, -2),
		new simpleCircularEnemy(650, 300, 138, -180, -2),
		new simpleCircularEnemy(650, 300, 188, -180, -2),
		
		new simpleCircularEnemy(650, 300, 13, 90, -2),
		new simpleCircularEnemy(650, 300, 68, 90, -2),
		new simpleCircularEnemy(650, 300, 118, 90, -2),
		new simpleCircularEnemy(650, 300, 168, 90, -2),
		
		new simpleCircularEnemy(650, 300, 13, -90, -2),
		new simpleCircularEnemy(650, 300, 68, -90, -2),
		new simpleCircularEnemy(650, 300, 118, -90, -2),
		new simpleCircularEnemy(650, 300, 168, -90, -2),
		
		
		
		
	],
	
	// level 43
	[
		new staticEnemy(62, 112),
		new staticEnemy(87, 112),
		new staticEnemy(112, 112),
		new staticEnemy(137, 112),
		
		new staticEnemy(162, 112),
		new staticEnemy(187, 112),
		new staticEnemy(212, 112),
		new staticEnemy(237, 112),
		
		new staticEnemy(262, 112),
		new staticEnemy(287, 112),
		new staticEnemy(312, 112),
		new staticEnemy(337, 112),
		
		new staticEnemy(362, 112),
		new staticEnemy(387, 112),
		new staticEnemy(412, 112),
		new staticEnemy(437, 112),
		
		new staticEnemy(462, 112),
		new staticEnemy(487, 112),
		new staticEnemy(512, 112),
		new staticEnemy(537, 112),
		
		new staticEnemy(562, 112),
		new staticEnemy(587, 112),
		new staticEnemy(612, 112),
		new staticEnemy(637, 112),
		
		new staticEnemy(662, 112),
		new staticEnemy(687, 112),
		new staticEnemy(712, 112),
		new staticEnemy(737, 112),
		
		new staticEnemy(762, 112),
		new staticEnemy(787, 112),
		new staticEnemy(812, 112),
		/////
		
		new staticEnemy(62, 112),
		new staticEnemy(62, 137),
		
		new staticEnemy(62, 162),
		new staticEnemy(62, 187),
		new staticEnemy(62, 212),
		new staticEnemy(62, 237),
		
		new staticEnemy(62, 262),
		new staticEnemy(62, 287),
		new staticEnemy(62, 312),
		new staticEnemy(62, 337),
		
		new staticEnemy(62, 362),
		new staticEnemy(62, 387),
		new staticEnemy(62, 412),
		new staticEnemy(62, 437),
		
		new staticEnemy(62, 462),
		new staticEnemy(62, 487),
		new staticEnemy(62, 512),
		new staticEnemy(62, 537),
		//
		new staticEnemy(187, 237),
		new staticEnemy(187, 262),
		new staticEnemy(187, 287),
		new staticEnemy(187, 312),
		
		new staticEnemy(187, 337),
		new staticEnemy(187, 362),
		new staticEnemy(187, 387),
		new staticEnemy(187, 412),
		
		new staticEnemy(187, 437),
		new staticEnemy(187, 462),
		new staticEnemy(187, 487),
		new staticEnemy(187, 512),
		
		new staticEnemy(187, 537),
		
		//
		new staticEnemy(437, 237),
		new staticEnemy(437, 262),
		new staticEnemy(437, 287),
		new staticEnemy(437, 312),
		
		new staticEnemy(437, 337),
		new staticEnemy(437, 362),
		new staticEnemy(437, 387),
		new staticEnemy(437, 412),
		
		new staticEnemy(437, 437),
		new staticEnemy(437, 462),
		new staticEnemy(437, 487),
		new staticEnemy(437, 512),
		
		new staticEnemy(437, 537),
		
		//
		
		new staticEnemy(687, 237),
		new staticEnemy(687, 262),
		new staticEnemy(687, 287),
		new staticEnemy(687, 312),
		
		new staticEnemy(687, 337),
		new staticEnemy(687, 362),
		new staticEnemy(687, 387),
		new staticEnemy(687, 412),
		
		new staticEnemy(687, 437),
		new staticEnemy(687, 462),
		new staticEnemy(687, 487),
		new staticEnemy(687, 512),
		
		new staticEnemy(687, 537),
		//
		
		new staticEnemy(312, 362),
		new staticEnemy(312, 387),
		new staticEnemy(312, 412),
		
		new staticEnemy(312, 437),
		new staticEnemy(312, 462),
		new staticEnemy(312, 487),
		new staticEnemy(312, 512),
		
		new staticEnemy(312, 537),
		//
		new staticEnemy(562, 362),
		new staticEnemy(562, 387),
		new staticEnemy(562, 412),
		
		new staticEnemy(562, 437),
		new staticEnemy(562, 462),
		new staticEnemy(562, 487),
		new staticEnemy(562, 512),
		
		new staticEnemy(562, 537),
		
		//
		
		new staticEnemy(112, 512),
		new staticEnemy(137, 512),
		new staticEnemy(162, 512),
		
		
		new staticEnemy(337, 512),
		new staticEnemy(387, 512),
		new staticEnemy(412, 512),
		
		new staticEnemy(587, 512),
		new staticEnemy(612, 512),
		
		new staticEnemy(662, 512),
		//
		new staticEnemy(112, 537),
		new staticEnemy(137, 537),
		new staticEnemy(162, 537),
		
		
		new staticEnemy(337, 537),
		new staticEnemy(387, 537),
		new staticEnemy(412, 537),
		
		new staticEnemy(587, 537),
		new staticEnemy(612, 537),
		
		new staticEnemy(662, 537),
		//
		new staticEnemy(212, 237),
		new staticEnemy(237, 237),
		new staticEnemy(262, 237),
		new staticEnemy(287, 237),
		
		new staticEnemy(212, 237),
		new staticEnemy(237, 237),
		new staticEnemy(262, 237),
		new staticEnemy(287, 237),
		
		new staticEnemy(312, 237),
		new staticEnemy(337, 237),
		new staticEnemy(362, 237),
		new staticEnemy(387, 237),
		
		new staticEnemy(412, 237),
		new staticEnemy(437, 237),
		new staticEnemy(462, 237),
		new staticEnemy(487, 237),
		
		new staticEnemy(512, 237),
		new staticEnemy(537, 237),
		new staticEnemy(562, 237),
		new staticEnemy(587, 237),
		
		new staticEnemy(612, 237),
		new staticEnemy(637, 237),
		new staticEnemy(662, 237),
		new staticEnemy(687, 237),
		
		
		new linearEnemy([
			[437, 462 , 125, 112, 3, 1.5],
			[462, 512, 112, 137, 3, 1.5],
			[512, 562, 137, 112, 3, 1.5],
			[562, 612, 112, 137, 3, 1.5],
			[612, 662, 137, 112, 3, 1.5],
			[662, 712, 112, 137, 3, 1.5],
			[712, 762, 137, 112, 3, 1.5],
			[762, 812, 112, 137, 3, 1.5],
			[812,762, 137, 112, 3, 1.5],
			[762,712, 112, 137, 3, 1.5],
			[712, 662, 137, 112, 3, 1.5],
			[662, 612, 112, 137, 3, 1.5],
			[612, 562, 137, 112, 3, 1.5],
			[562, 512, 112,137, 3, 1.5],
			[512, 462, 137,112, 3, 1.5],
			[462, 437 , 112, 125, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 462 , 175, 162, 3, 1.5],
			[462, 512, 162, 187, 3, 1.5],
			[512, 562, 187, 162, 3, 1.5],
			[562, 612, 162, 187, 3, 1.5],
			[612, 662, 187, 162, 3, 1.5],
			[662, 712, 162, 187, 3, 1.5],
			[712, 762, 187, 162, 3, 1.5],
			[762, 812, 162, 187, 3, 1.5],
			[812,762, 187, 162, 3, 1.5],
			[762,712, 162, 187, 3, 1.5],
			[712, 662, 187, 162, 3, 1.5],
			[662, 612, 162, 187, 3, 1.5],
			[612, 562, 187, 162, 3, 1.5],
			[562, 512, 162, 187, 3, 1.5],
			[512, 462, 187, 162, 3, 1.5],
			[462, 437 , 162, 175, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 462 , 225, 212, 3, 1.5],
			[462, 512, 212, 237, 3, 1.5],
			[512, 562, 237, 212, 3, 1.5],
			[562, 612, 212, 237, 3, 1.5],
			[612, 662, 237, 212, 3, 1.5],
			[662, 712, 212, 237, 3, 1.5],
			[712, 762, 237, 212, 3, 1.5],
			[762, 812, 212, 237, 3, 1.5],
			[812,762, 237, 212, 3, 1.5],
			[762,712, 212, 237, 3, 1.5],
			[712, 662, 237, 212, 3, 1.5],
			[662, 612, 212, 237, 3, 1.5],
			[612, 562, 237, 212, 3, 1.5],
			[562, 512, 212,237, 3, 1.5],
			[512, 462, 237,212, 3, 1.5],
			[462, 437 , 212, 225, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 462 , 275, 262, 3, 1.5],
			[462, 512, 262, 287, 3, 1.5],
			[512, 562, 287, 262, 3, 1.5],
			[562, 612, 262, 287, 3, 1.5],
			[612, 662, 287, 262, 3, 1.5],
			[662, 712, 262, 287, 3, 1.5],
			[712, 762, 287, 262, 3, 1.5],
			[762, 812, 262, 287, 3, 1.5],
			[812,762, 287, 262, 3, 1.5],
			[762,712, 262, 287, 3, 1.5],
			[712, 662, 287, 262, 3, 1.5],
			[662, 612, 262, 287, 3, 1.5],
			[612, 562, 287, 262, 3, 1.5],
			[562, 512, 262, 287, 3, 1.5],
			[512, 462, 287, 262, 3, 1.5],
			[462, 437 , 262, 275, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 462 , 325, 312, 3, 1.5],
			[462, 512, 312, 337, 3, 1.5],
			[512, 562, 337, 312, 3, 1.5],
			[562, 612, 312, 337, 3, 1.5],
			[612, 662, 337, 312, 3, 1.5],
			[662, 712, 312, 337, 3, 1.5],
			[712, 762, 337, 312, 3, 1.5],
			[762, 812, 312, 337, 3, 1.5],
			[812,762, 337, 312, 3, 1.5],
			[762,712, 312, 337, 3, 1.5],
			[712, 662, 337, 312, 3, 1.5],
			[662, 612, 312, 337, 3, 1.5],
			[612, 562, 337, 312, 3, 1.5],
			[562, 512, 312,337, 3, 1.5],
			[512, 462, 337,312, 3, 1.5],
			[462, 437 , 312, 325, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 462 , 375, 362, 3, 1.5],
			[462, 512, 362, 387, 3, 1.5],
			[512, 562, 387, 362, 3, 1.5],
			[562, 612, 362, 387, 3, 1.5],
			[612, 662, 387, 362, 3, 1.5],
			[662, 712, 362, 387, 3, 1.5],
			[712, 762, 387, 362, 3, 1.5],
			[762, 812, 362, 387, 3, 1.5],
			[812,762, 387, 362, 3, 1.5],
			[762,712, 362, 387, 3, 1.5],
			[712, 662, 387, 362, 3, 1.5],
			[662, 612, 362, 387, 3, 1.5],
			[612, 562, 387, 362, 3, 1.5],
			[562, 512, 362, 387, 3, 1.5],
			[512, 462, 387, 362, 3, 1.5],
			[462, 437 , 362, 375, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 462 , 425, 412, 3, 1.5],
			[462, 512, 412, 437, 3, 1.5],
			[512, 562, 437, 412, 3, 1.5],
			[562, 612, 412, 437, 3, 1.5],
			[612, 662, 437, 412, 3, 1.5],
			[662, 712, 412, 437, 3, 1.5],
			[712, 762, 437, 412, 3, 1.5],
			[762, 812, 412, 437, 3, 1.5],
			[812,762, 437, 412, 3, 1.5],
			[762,712, 412, 437, 3, 1.5],
			[712, 662, 437, 412, 3, 1.5],
			[662, 612, 412, 437, 3, 1.5],
			[612, 562, 437, 412, 3, 1.5],
			[562, 512, 412,437, 3, 1.5],
			[512, 462, 437,412, 3, 1.5],
			[462, 437 , 412, 425, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 462 , 475, 462, 3, 1.5],
			[462, 512, 462, 487, 3, 1.5],
			[512, 562, 487, 462, 3, 1.5],
			[562, 612, 462, 487, 3, 1.5],
			[612, 662, 487, 462, 3, 1.5],
			[662, 712, 462, 487, 3, 1.5],
			[712, 762, 487, 462, 3, 1.5],
			[762, 812, 462, 487, 3, 1.5],
			[812,762, 487, 462, 3, 1.5],
			[762,712, 462, 487, 3, 1.5],
			[712, 662, 487, 462, 3, 1.5],
			[662, 612, 462, 487, 3, 1.5],
			[612, 562, 487, 462, 3, 1.5],
			[562, 512, 462, 487, 3, 1.5],
			[512, 462, 487, 462, 3, 1.5],
			[462, 437 , 462, 475, 3, 1.5],
	
		]),
		//
		new linearEnemy([
			[812,762, 137, 112, 3, 1.5],
			[762,712, 112, 137, 3, 1.5],
			[712, 662, 137, 112, 3, 1.5],
			[662, 612, 112, 137, 3, 1.5],
			[612, 562, 137, 112, 3, 1.5],
			[562, 512, 112,137, 3, 1.5],
			[512, 462, 137,112, 3, 1.5],
			[462, 437 , 112, 125, 3, 1.5],
			[437, 462 , 125, 112, 3, 1.5],
			[462, 512, 112, 137, 3, 1.5],
			[512, 562, 137, 112, 3, 1.5],
			[562, 612, 112, 137, 3, 1.5],
			[612, 662, 137, 112, 3, 1.5],
			[662, 712, 112, 137, 3, 1.5],
			[712, 762, 137, 112, 3, 1.5],
			[762, 812, 112, 137, 3, 1.5]
			
	
		]),
		new linearEnemy([
			[812,762, 187, 162, 3, 1.5],
			[762,712, 162, 187, 3, 1.5],
			[712, 662, 187, 162, 3, 1.5],
			[662, 612, 162, 187, 3, 1.5],
			[612, 562, 187, 162, 3, 1.5],
			[562, 512, 162, 187, 3, 1.5],
			[512, 462, 187, 162, 3, 1.5],
			[462, 437 , 162, 175, 3, 1.5],
			[437, 462 , 175, 162, 3, 1.5],
			[462, 512, 162, 187, 3, 1.5],
			[512, 562, 187, 162, 3, 1.5],
			[562, 612, 162, 187, 3, 1.5],
			[612, 662, 187, 162, 3, 1.5],
			[662, 712, 162, 187, 3, 1.5],
			[712, 762, 187, 162, 3, 1.5],
			[762, 812, 162, 187, 3, 1.5]
			
	
		]),
		
		new linearEnemy([
			
			[812,762, 237, 212, 3, 1.5],
			[762,712, 212, 237, 3, 1.5],
			[712, 662, 237, 212, 3, 1.5],
			[662, 612, 212, 237, 3, 1.5],
			[612, 562, 237, 212, 3, 1.5],
			[562, 512, 212,237, 3, 1.5],
			[512, 462, 237,212, 3, 1.5],
			[462, 437 , 212, 225, 3, 1.5],
			[437, 462 , 225, 212, 3, 1.5],
			[462, 512, 212, 237, 3, 1.5],
			[512, 562, 237, 212, 3, 1.5],
			[562, 612, 212, 237, 3, 1.5],
			[612, 662, 237, 212, 3, 1.5],
			[662, 712, 212, 237, 3, 1.5],
			[712, 762, 237, 212, 3, 1.5],
			[762, 812, 212, 237, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[812,762, 287, 262, 3, 1.5],
			[762,712, 262, 287, 3, 1.5],
			[712, 662, 287, 262, 3, 1.5],
			[662, 612, 262, 287, 3, 1.5],
			[612, 562, 287, 262, 3, 1.5],
			[562, 512, 262, 287, 3, 1.5],
			[512, 462, 287, 262, 3, 1.5],
			[462, 437 , 262, 275, 3, 1.5],
			[437, 462 , 275, 262, 3, 1.5],
			[462, 512, 262, 287, 3, 1.5],
			[512, 562, 287, 262, 3, 1.5],
			[562, 612, 262, 287, 3, 1.5],
			[612, 662, 287, 262, 3, 1.5],
			[662, 712, 262, 287, 3, 1.5],
			[712, 762, 287, 262, 3, 1.5],
			[762, 812, 262, 287, 3, 1.5]
	
		]),
		
		new linearEnemy([
			
			[812,762, 337, 312, 3, 1.5],
			[762,712, 312, 337, 3, 1.5],
			[712, 662, 337, 312, 3, 1.5],
			[662, 612, 312, 337, 3, 1.5],
			[612, 562, 337, 312, 3, 1.5],
			[562, 512, 312,337, 3, 1.5],
			[512, 462, 337,312, 3, 1.5],
			[462, 437 , 312, 325, 3, 1.5],
			[437, 462 , 325, 312, 3, 1.5],
			[462, 512, 312, 337, 3, 1.5],
			[512, 562, 337, 312, 3, 1.5],
			[562, 612, 312, 337, 3, 1.5],
			[612, 662, 337, 312, 3, 1.5],
			[662, 712, 312, 337, 3, 1.5],
			[712, 762, 337, 312, 3, 1.5],
			[762, 812, 312, 337, 3, 1.5]
	
		]),
		
		new linearEnemy([
		
			[812,762, 387, 362, 3, 1.5],
			[762,712, 362, 387, 3, 1.5],
			[712, 662, 387, 362, 3, 1.5],
			[662, 612, 362, 387, 3, 1.5],
			[612, 562, 387, 362, 3, 1.5],
			[562, 512, 362, 387, 3, 1.5],
			[512, 462, 387, 362, 3, 1.5],
			[462, 437 , 362, 375, 3, 1.5],
				[437, 462 , 375, 362, 3, 1.5],
			[462, 512, 362, 387, 3, 1.5],
			[512, 562, 387, 362, 3, 1.5],
			[562, 612, 362, 387, 3, 1.5],
			[612, 662, 387, 362, 3, 1.5],
			[662, 712, 362, 387, 3, 1.5],
			[712, 762, 387, 362, 3, 1.5],
			[762, 812, 362, 387, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[812,762, 437, 412, 3, 1.5],
			[762,712, 412, 437, 3, 1.5],
			[712, 662, 437, 412, 3, 1.5],
			[662, 612, 412, 437, 3, 1.5],
			[612, 562, 437, 412, 3, 1.5],
			[562, 512, 412,437, 3, 1.5],
			[512, 462, 437,412, 3, 1.5],
			[462, 437 , 412, 425, 3, 1.5],
			[437, 462 , 425, 412, 3, 1.5],
			[462, 512, 412, 437, 3, 1.5],
			[512, 562, 437, 412, 3, 1.5],
			[562, 612, 412, 437, 3, 1.5],
			[612, 662, 437, 412, 3, 1.5],
			[662, 712, 412, 437, 3, 1.5],
			[712, 762, 437, 412, 3, 1.5],
			[762, 812, 412, 437, 3, 1.5]
	
		]),
		
		new linearEnemy([
			
			[812,762, 487, 462, 3, 1.5],
			[762,712, 462, 487, 3, 1.5],
			[712, 662, 487, 462, 3, 1.5],
			[662, 612, 462, 487, 3, 1.5],
			[612, 562, 487, 462, 3, 1.5],
			[562, 512, 462, 487, 3, 1.5],
			[512, 462, 487, 462, 3, 1.5],
			[462, 437 , 462, 475, 3, 1.5],
			[437, 462 , 475, 462, 3, 1.5],
			[462, 512, 462, 487, 3, 1.5],
			[512, 562, 487, 462, 3, 1.5],
			[562, 612, 462, 487, 3, 1.5],
			[612, 662, 487, 462, 3, 1.5],
			[662, 712, 462, 487, 3, 1.5],
			[712, 762, 487, 462, 3, 1.5],
			[762, 812, 462, 487, 3, 1.5]
	
		]),
		//
		
		new linearEnemy([
			[437, 412 , 125, 137, 3, 1.5],
			[412, 362, 137, 112, 3, 1.5],
			[362, 312, 112, 137, 3, 1.5],
			[312,262, 137, 112, 3, 1.5],
			[262, 212, 112, 137, 3, 1.5],
			[212, 162, 137, 112, 3, 1.5],
			[162, 112, 112, 137, 3, 1.5],
			[112, 62, 137, 112, 3, 1.5],
			[62,112, 112, 137, 3, 1.5],
			[112,162, 137, 112, 3, 1.5],
			[162, 212, 112, 137, 3, 1.5],
			[212, 262, 137, 112, 3, 1.5],
			[262, 312, 112, 137, 3, 1.5],
			[312, 362, 137, 112, 3, 1.5],
			[362, 412, 112, 137, 3, 1.5],
			[412, 437 , 137, 125, 3, 1.5],
	
		]),
		//
		new linearEnemy([
			[437, 412 , 175, 187, 3, 1.5],
			[412, 362, 187, 162, 3, 1.5],
			[362, 312, 162, 187, 3, 1.5],
			[312,262, 187, 162, 3, 1.5],
			[262, 212, 162, 187, 3, 1.5],
			[212, 162, 187, 162, 3, 1.5],
			[162, 112, 162, 187, 3, 1.5],
			[112, 62, 187, 162, 3, 1.5],
			[62,112, 162, 187, 3, 1.5],
			[112,162, 187, 162, 3, 1.5],
			[162, 212, 162, 187, 3, 1.5],
			[212, 262, 187, 162, 3, 1.5],
			[262, 312, 162, 187, 3, 1.5],
			[312, 362, 187, 162, 3, 1.5],
			[362, 412, 162, 187, 3, 1.5],
			[412, 437 , 187, 175, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 412 , 225, 237, 3, 1.5],
			[412, 362, 237, 212, 3, 1.5],
			[362, 312, 212, 237, 3, 1.5],
			[312,262, 237, 212, 3, 1.5],
			[262, 212, 212, 237, 3, 1.5],
			[212, 162, 237, 212, 3, 1.5],
			[162, 112, 212, 237, 3, 1.5],
			[112, 62, 237, 212, 3, 1.5],
			[62,112, 212, 237, 3, 1.5],
			[112,162, 237, 212, 3, 1.5],
			[162, 212, 212, 237, 3, 1.5],
			[212, 262, 237, 212, 3, 1.5],
			[262, 312, 212, 237, 3, 1.5],
			[312, 362, 237, 212, 3, 1.5],
			[362, 412, 212, 237, 3, 1.5],
			[412, 437 , 237, 225, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 412 , 275, 287, 3, 1.5],
			[412, 362, 287, 262, 3, 1.5],
			[362, 312, 262, 287, 3, 1.5],
			[312,262, 287, 262, 3, 1.5],
			[262, 212, 262, 287, 3, 1.5],
			[212, 162, 287, 262, 3, 1.5],
			[162, 112, 262, 287, 3, 1.5],
			[112, 62, 287, 262, 3, 1.5],
			[62,112, 262, 287, 3, 1.5],
			[112,162, 287, 262, 3, 1.5],
			[162, 212, 262, 287, 3, 1.5],
			[212, 262, 287, 262, 3, 1.5],
			[262, 312, 262, 287, 3, 1.5],
			[312, 362, 287, 262, 3, 1.5],
			[362, 412, 262, 287, 3, 1.5],
			[412, 437 , 287, 275, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 412 , 325, 337, 3, 1.5],
			[412, 362, 337, 312, 3, 1.5],
			[362, 312, 312, 337, 3, 1.5],
			[312,262, 337, 312, 3, 1.5],
			[262, 212, 312, 337, 3, 1.5],
			[212, 162, 337, 312,3, 1.5],
			[162, 112, 312, 337, 3, 1.5],
			[112, 62, 337, 312,3, 1.5],
			[62,112, 312, 337, 3, 1.5],
			[112,162, 337, 312, 3, 1.5],
			[162, 212, 312, 337, 3, 1.5],
			[212, 262, 337, 312, 3, 1.5],
			[262, 312, 312, 337, 3, 1.5],
			[312, 362, 337, 312, 3, 1.5],
			[362, 412, 312, 337, 3, 1.5],
			[412, 437 , 337, 325, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 412 , 375, 387, 3, 1.5],
			[412, 362, 387, 362, 3, 1.5],
			[362, 312, 362, 387, 3, 1.5],
			[312,262, 387, 362, 3, 1.5],
			[262, 212, 362, 387, 3, 1.5],
			[212, 162, 387, 362, 3, 1.5],
			[162, 112, 362, 387, 3, 1.5],
			[112, 62, 387, 362, 3, 1.5],
			[62,112, 362, 387, 3, 1.5],
			[112,162, 387, 362, 3, 1.5],
			[162, 212, 362, 387, 3, 1.5],
			[212, 262, 387, 362, 3, 1.5],
			[262, 312, 362, 387, 3, 1.5],
			[312, 362, 387, 362, 3, 1.5],
			[362, 412, 362, 387, 3, 1.5],
			[412, 437 , 387, 375, 3, 1.5],
	
		]),
		new linearEnemy([
			[437, 412 , 425, 437, 3, 1.5],
			[412, 362, 437, 412, 3, 1.5],
			[362, 312, 412, 437, 3, 1.5],
			[312,262, 437, 412,3, 1.5],
			[262, 212, 412, 437, 3, 1.5],
			[212, 162, 437, 412, 3, 1.5],
			[162, 112, 412, 437, 3, 1.5],
			[112, 62, 437, 412, 3, 1.5],
			[62,112, 412, 437, 3, 1.5],
			[112,162, 437, 412, 3, 1.5],
			[162, 212, 412, 437, 3, 1.5],
			[212, 262, 437, 412, 3, 1.5],
			[262, 312, 412, 437, 3, 1.5],
			[312, 362, 437, 412, 3, 1.5],
			[362, 412, 412, 437, 3, 1.5],
			[412, 437 , 437, 425, 3, 1.5],
	
		]),
		
		new linearEnemy([
			[437, 412 , 475, 487, 3, 1.5],
			[412, 362, 487, 462, 3, 1.5],
			[362, 312, 462, 487, 3, 1.5],
			[312,262, 487, 462, 3, 1.5],
			[262, 212, 462, 487, 3, 1.5],
			[212, 162, 487, 462, 3, 1.5],
			[162, 112, 462, 487, 3, 1.5],
			[112, 62, 487, 462, 3, 1.5],
			[62,112, 462, 487, 3, 1.5],
			[112,162, 487, 462, 3, 1.5],
			[162, 212, 462, 487, 3, 1.5],
			[212, 262, 487, 462, 3, 1.5],
			[262, 312, 462, 487, 3, 1.5],
			[312, 362, 487, 462, 3, 1.5],
			[362, 412, 462, 487, 3, 1.5],
			[412, 437 , 487, 475, 3, 1.5],
	
		]),
		//
		new linearEnemy([
			
			[62,112, 112, 137, 3, 1.5],
			[112,162, 137, 112, 3, 1.5],
			[162, 212, 112, 137,3, 1.5],
			[212, 262, 137, 112, 3, 1.5],
			[262, 312, 112, 137,3, 1.5],
			[312, 362, 137, 112, 3, 1.5],
			[362, 412, 112, 137, 3, 1.5],
			[412, 437 , 137, 125, 3, 1.5],
			[437, 412 , 125, 137, 3, 1.5],
			[412, 362, 137, 112, 3, 1.5],
			[362, 312, 112, 137, 3, 1.5],
			[312,262, 137, 112, 3, 1.5],
			[262, 212, 112, 137,3, 1.5],
			[212, 162, 137, 112, 3, 1.5],
			[162, 112, 112, 137,3, 1.5],
			[112, 62, 137, 112, 3, 1.5]
	
		]),

		new linearEnemy([
			
			[62,112, 162, 187, 3, 1.5],
			[112,162, 187, 162,3, 1.5],
			[162, 212, 162, 187, 3, 1.5],
			[212, 262, 187, 162,3, 1.5],
			[262, 312, 162, 187, 3, 1.5],
			[312, 362, 187, 162,3, 1.5],
			[362, 412, 162, 187, 3, 1.5],
			[412, 437 , 187, 175, 3, 1.5],
			[437, 412 , 175, 187, 3, 1.5],
			[412, 362, 187, 162, 3, 1.5],
			[362, 312, 162, 187, 3, 1.5],
			[312,262, 187, 162, 3, 1.5],
			[262, 212, 162, 187, 3, 1.5],
			[212, 162, 187, 162, 3, 1.5],
			[162, 112, 162, 187, 3, 1.5],
			[112, 62, 187, 162, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[62,112, 212, 237, 3, 1.5],
			[112,162, 237, 212, 3, 1.5],
			[162, 212, 212, 237, 3, 1.5],
			[212, 262, 237, 212, 3, 1.5],
			[262, 312, 212, 237, 3, 1.5],
			[312, 362, 237, 212, 3, 1.5],
			[362, 412, 212, 237, 3, 1.5],
			[412, 437 , 237, 225, 3, 1.5],
			[437, 412 , 225, 237, 3, 1.5],
			[412, 362, 237, 212, 3, 1.5],
			[362, 312, 212, 237, 3, 1.5],
			[312,262, 237, 212, 3, 1.5],
			[262, 212, 212, 237, 3, 1.5],
			[212, 162, 237, 212, 3, 1.5],
			[162, 112, 212, 237, 3, 1.5],
			[112, 62, 237, 212, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[62,112, 262, 287, 3, 1.5],
			[112,162, 287, 262, 3, 1.5],
			[162, 212, 262, 287, 3, 1.5],
			[212, 262, 287, 262, 3, 1.5],
			[262, 312, 262, 287,3, 1.5],
			[312, 362, 287, 262, 3, 1.5],
			[362, 412, 262, 287, 3, 1.5],
			[412, 437 , 287, 275, 3, 1.5],
			[437, 412 , 275, 287, 3, 1.5],
			[412, 362, 287, 262,3, 1.5],
			[362, 312, 262, 287, 3, 1.5],
			[312,262, 287, 262, 3, 1.5],
			[262, 212, 262, 287,3, 1.5],
			[212, 162, 287, 262,3, 1.5],
			[162, 112, 262, 287,3, 1.5],
			[112, 62, 287, 262, 3, 1.5]
	
		]),
		
		new linearEnemy([
			
			[62,112, 312, 337,3, 1.5],
			[112,162, 337, 312, 3, 1.5],
			[162, 212, 312, 337,3, 1.5],
			[212, 262, 337, 312,3, 1.5],
			[262, 312, 312, 337, 3, 1.5],
			[312, 362, 337, 312, 3, 1.5],
			[362, 412, 312, 337, 3, 1.5],
			[412, 437 , 337, 325, 3, 1.5],
			[437, 412 , 325, 337,3, 1.5],
			[412, 362, 337, 312, 3, 1.5],
			[362, 312, 312, 337, 3, 1.5],
			[312,262, 337, 312, 3, 1.5],
			[262, 212, 312, 337, 3, 1.5],
			[212, 162, 337, 312, 3, 1.5],
			[162, 112, 312, 337, 3, 1.5],
			[112, 62, 337, 312, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[62,112, 362, 387,3, 1.5],
			[112,162, 387, 362, 3, 1.5],
			[162, 212, 362, 387, 3, 1.5],
			[212, 262, 387, 362, 3, 1.5],
			[262, 312, 362, 387, 3, 1.5],
			[312, 362, 387, 362, 3, 1.5],
			[362, 412, 362, 387, 3, 1.5],
			[412, 437 , 387, 375, 3, 1.5],
			[437, 412 , 375, 387, 3, 1.5],
			[412, 362, 387, 362, 3, 1.5],
			[362, 312, 362, 387,3, 1.5],
			[312,262, 387, 362,3, 1.5],
			[262, 212, 362, 387,3, 1.5],
			[212, 162, 387, 362,3, 1.5],
			[162, 112, 362, 387,3, 1.5],
			[112, 62, 387, 362, 3, 1.5]
	
		]),
		new linearEnemy([
			
			[62,112, 412, 437, 3, 1.5],
			[112,162, 437, 412, 3, 1.5],
			[162, 212, 412, 437,3, 1.5],
			[212, 262, 437, 412, 3, 1.5],
			[262, 312, 412, 437,3, 1.5],
			[312, 362, 437, 412,3, 1.5],
			[362, 412, 412, 437,3, 1.5],
			[412, 437 , 437, 425, 3, 1.5],
			[437, 412 , 425, 437, 3, 1.5],
			[412, 362, 437, 412, 3, 1.5],
			[362, 312, 412, 437, 3, 1.5],
			[312,262, 437, 412, 3, 1.5],
			[262, 212, 412, 437, 3, 1.5],
			[212, 162, 437, 412, 3, 1.5],
			[162, 112, 412, 437, 3, 1.5],
			[112, 62, 437, 412, 3, 1.5]
	
		]),
		
		new linearEnemy([
			
			[62,112, 462, 487, 3, 1.5],
			[112,162, 487, 462,3, 1.5],
			[162, 212, 462, 487, 3, 1.5],
			[212, 262, 487, 462, 3, 1.5],
			[262, 312, 462, 487, 3, 1.5],
			[312, 362, 487, 462, 3, 1.5],
			[362, 412, 462, 487, 3, 1.5],
			[412, 437 , 487, 475, 3, 1.5],
			[437, 412 , 475, 487, 3, 1.5],
			[412, 362, 487, 462, 3, 1.5],
			[362, 312, 462, 487, 3, 1.5],
			[312,262, 487, 462, 3, 1.5],
			[262, 212, 462, 487, 3, 1.5],
			[212, 162, 487, 462, 3, 1.5],
			[162, 112, 462, 487, 3, 1.5],
			[112, 62, 487, 462, 3, 1.5]
	
		]),
	],
	
	// level 44
	[
		
		new staticEnemy(112, 287),
		new staticEnemy(137, 287),
		
		new staticEnemy(162, 300),
		new staticEnemy(187, 300),
		
		new staticEnemy(212, 287),
		new staticEnemy(237, 287),
		new staticEnemy(262, 287),
		new staticEnemy(287, 287),
		
		new staticEnemy(312, 287),
		new staticEnemy(337, 287),
		
		new staticEnemy(362, 300),
		new staticEnemy(387, 300),
		
		new staticEnemy(412, 287),
		new staticEnemy(437, 287),
		new staticEnemy(462, 287),
		new staticEnemy(487, 287),
		
		new staticEnemy(512, 287),
		new staticEnemy(537, 287),
		
		new staticEnemy(562, 300),
		new staticEnemy(587, 300),
		
		new staticEnemy(612, 287),
		new staticEnemy(637, 287),
		new staticEnemy(662, 287),
		new staticEnemy(687, 287),
		
		new staticEnemy(712, 287),
		new staticEnemy(737, 287),
		
		new staticEnemy(762, 300),
		new staticEnemy(787, 300),
		
		//
		
		new staticEnemy(112, 312),
		new staticEnemy(137, 312),
		
		
		new staticEnemy(212, 312),
		new staticEnemy(237, 312),
		new staticEnemy(262, 312),
		new staticEnemy(287, 312),
		
		new staticEnemy(262, 262),
		new staticEnemy(287, 262),
		
		new staticEnemy(262, 337),
		new staticEnemy(287, 337),
		
		new staticEnemy(312, 312),
		new staticEnemy(337, 312),
		
		
		
		new staticEnemy(412, 312),
		new staticEnemy(437, 312),
		new staticEnemy(462, 312),
		new staticEnemy(487, 312),
		
		new staticEnemy(462, 262),
		new staticEnemy(487, 262),
		
		new staticEnemy(462, 337),
		new staticEnemy(487, 337),
		
		new staticEnemy(512, 312),
		new staticEnemy(537, 312),
		
		
		
		new staticEnemy(612, 312),
		new staticEnemy(637, 312),
		new staticEnemy(662, 312),
		new staticEnemy(687, 312),
		
		new staticEnemy(662, 337),
		new staticEnemy(687, 337),
		
		new staticEnemy(662, 262),
		new staticEnemy(687, 262),
		
		new staticEnemy(712, 312),
		new staticEnemy(737, 312),
		
		
		
		
		
		
		new simpleEnemy(112, 112 , 107,187, 0, 2),
		new simpleEnemy(137, 137 , 107,187, 0, 2),
		
		new simpleEnemy(212, 212 , 107,187, 0, 2),
		new simpleEnemy(237, 237 , 107,187, 0, 2),
		
		new simpleEnemy(312, 312 , 107,187, 0, 2),
		new simpleEnemy(337, 337 , 107,187, 0, 2),
		
		new simpleEnemy(412, 412 , 107,187, 0, 2),
		new simpleEnemy(437, 437 , 107,187, 0, 2),
		
		new simpleEnemy(512, 512 , 107,187, 0, 2),
		new simpleEnemy(537, 537 , 107,187, 0, 2),
		
		new simpleEnemy(612, 612 , 107,187, 0, 2),
		new simpleEnemy(637, 637 , 107,187, 0, 2),
		
		new simpleEnemy(712, 712 , 107,187, 0, 2),
		new simpleEnemy(737, 737 , 107,187, 0, 2),
		
		//
		new simpleEnemy(112, 112 , 197,277, 0, 2),
		new simpleEnemy(137, 137 , 197,277, 0, 2),
		
		new simpleEnemy(212, 212 , 197,277, 0, 2),
		new simpleEnemy(237, 237 , 197,277, 0, 2),
		
		new simpleEnemy(312, 312 , 197,277, 0, 2),
		new simpleEnemy(337, 337 , 197,277, 0, 2),
		
		new simpleEnemy(412, 412 , 197,277, 0, 2),
		new simpleEnemy(437, 437 , 197,277, 0, 2),
		
		new simpleEnemy(512, 512 , 197,277, 0, 2),
		new simpleEnemy(537, 537 , 197,277, 0, 2),
		
		new simpleEnemy(612, 612 , 197,277, 0, 2),
		new simpleEnemy(637, 637 , 197,277, 0, 2),
		
		new simpleEnemy(712, 712 , 197,277, 0, 2),
		new simpleEnemy(737, 737 , 197,277, 0, 2),
		//
		new simpleEnemy(112, 112 , 404,324, 0, 2),
		new simpleEnemy(137, 137 , 404,324, 0, 2),
		
		new simpleEnemy(212, 212 , 404,324, 0, 2),
		new simpleEnemy(237, 237 , 404,324, 0, 2),
		
		new simpleEnemy(312, 312 , 404,324, 0, 2),
		new simpleEnemy(337, 337 , 404,324, 0, 2),
		
		new simpleEnemy(412, 412 , 404,324, 0, 2),
		new simpleEnemy(437, 437 , 404,324, 0, 2),
		
		new simpleEnemy(512, 512 , 404,324, 0, 2),
		new simpleEnemy(537, 537 , 404,324, 0, 2),
		
		new simpleEnemy(612, 612 , 404,324, 0, 2),
		new simpleEnemy(637, 637 , 404,324, 0, 2),
		
		new simpleEnemy(712, 712 , 404,324, 0, 2),
		new simpleEnemy(737, 737 , 404,324, 0, 2),
		//
		new simpleEnemy(112, 112 , 494,414, 0, 2),
		new simpleEnemy(137, 137 , 494,414, 0, 2),
		
		new simpleEnemy(212, 212 , 494,414, 0, 2),
		new simpleEnemy(237, 237 , 494,414, 0, 2),
		
		new simpleEnemy(312, 312 , 494,414, 0, 2),
		new simpleEnemy(337, 337 , 494,414, 0, 2),
		
		new simpleEnemy(412, 412 , 494,414, 0, 2),
		new simpleEnemy(437, 437 , 494,414, 0, 2),
		
		new simpleEnemy(512, 512 , 494,414, 0, 2),
		new simpleEnemy(537, 537 , 494,414, 0, 2),
		
		new simpleEnemy(612, 612 , 494,414, 0, 2),
		new simpleEnemy(637, 637 , 494,414, 0, 2),
		
		new simpleEnemy(712, 712 , 494,414, 0, 2),
		new simpleEnemy(737, 737 , 494,414, 0, 2),
		//
		new simpleEnemy(162, 162 , 82,177, 0, 1.7),
		new simpleEnemy(187, 187 , 82,177, 0, 1.7),
	
		new simpleEnemy(362, 362 , 82,177, 0, 1.7),
		new simpleEnemy(387, 387 , 82,177, 0, 1.7),
		
		new simpleEnemy(562, 562 , 82,177, 0, 1.7),
		new simpleEnemy(587, 587 , 82,177, 0, 1.7),
		
		new simpleEnemy(762, 762 , 82,177, 0, 1.7),
		new simpleEnemy(787, 787 , 82,177, 0, 1.7),
		//
		
		new simpleEnemy(162, 162 , 192,287, 0, 1.7),
		new simpleEnemy(187, 187 , 192,287, 0, 1.7),
	
		new simpleEnemy(362, 362 , 192,287, 0, 1.7),
		new simpleEnemy(387, 387 , 192,287, 0, 1.7),
		
		new simpleEnemy(562, 562 , 192,287, 0, 1.7),
		new simpleEnemy(587, 587 , 192,287, 0, 1.7),
		
		new simpleEnemy(762, 762 , 192,287, 0, 1.7),
		new simpleEnemy(787, 787 , 192,287, 0, 1.7),
		//
		
		new simpleEnemy(162, 162 , 520,425, 0, 1.7),
		new simpleEnemy(187, 187 , 520,425, 0, 1.7),
	
		new simpleEnemy(362, 362 , 520,425, 0, 1.7),
		new simpleEnemy(387, 387 , 520,425, 0, 1.7),
		
		new simpleEnemy(562, 562 , 520,425, 0, 1.7),
		new simpleEnemy(587, 587 , 520,425, 0, 1.7),
		
		new simpleEnemy(762, 762 , 520,425, 0, 1.7),
		new simpleEnemy(787, 787 , 520,425, 0, 1.7),
		
		//
		new simpleEnemy(162, 162 , 410,315, 0, 1.7),
		new simpleEnemy(187, 187 , 410,315, 0, 1.7),
	
		new simpleEnemy(362, 362 , 410,315, 0, 1.7),
		new simpleEnemy(387, 387 , 410,315, 0, 1.7),
		
		new simpleEnemy(562, 562 , 410,315, 0, 1.7),
		new simpleEnemy(587, 587 , 410,315, 0, 1.7),
		
		new simpleEnemy(762, 762 , 410,315, 0, 1.7),
		new simpleEnemy(787, 787 , 410,315, 0, 1.7),
		//
		
		new simpleEnemy(262, 262 , 132,182, 0, 1.7),
		new simpleEnemy(287, 287 , 132,182, 0, 1.7),
		
		new simpleEnemy(462, 462 , 132,182, 0, 1.7),
		new simpleEnemy(487, 487 , 132,182, 0, 1.7),
		
		new simpleEnemy(662, 662 , 132,182, 0, 1.7),
		new simpleEnemy(687, 687 , 132,182, 0, 1.7),
		//
		new simpleEnemy(262, 262 , 198,248, 0, 1.7),
		new simpleEnemy(287, 287 , 198,248, 0, 1.7),
		
		new simpleEnemy(462, 462 , 198,248, 0, 1.7),
		new simpleEnemy(487, 487 , 198,248, 0, 1.7),
		
		new simpleEnemy(662, 662 , 198,248, 0, 1.7),
		new simpleEnemy(687, 687 , 198,248, 0, 1.7),
		//

		new simpleEnemy(262, 262 , 402,352, 0, 1.7),
		new simpleEnemy(287, 287 , 402,352, 0, 1.7),
		
		new simpleEnemy(462, 462 , 402,352, 0, 1.7),
		new simpleEnemy(487, 487 , 402,352, 0, 1.7),
		
		new simpleEnemy(662, 662 , 402,352, 0, 1.7),
		new simpleEnemy(687, 687 , 402,352, 0, 1.7),
		//
		new simpleEnemy(262, 262 , 468,418, 0, 1.7),
		new simpleEnemy(287, 287 , 468,418, 0, 1.7),
		
		new simpleEnemy(462, 462 , 468,418, 0, 1.7),
		new simpleEnemy(487, 487 , 468,418, 0, 1.7),
		
		new simpleEnemy(662, 662 , 468,418, 0, 1.7),
		new simpleEnemy(687, 687 , 468,418, 0, 1.7),
		//
	],
	
	// level 45
	[   
	   //function simpleEnemyPause(startX, endX, startY, endY, xSpeed, ySpeed,initialPause,shortPause,longPause,secondPause, stage, enemyType) {
		   new simpleEnemyPause(-37,937,138,138,10,0,750,750,750,10),
		   new simpleEnemyPause(-37,937,163,163,10,0,750,750,750,10),
		    new simpleEnemyPause(-37,937,188,188,10,0,750,750,750,10),
			 new simpleEnemyPause(-37,937,213,213,10,0,750,750,750,10),
			  new simpleEnemyPause(-37,937,238,238,10,0,750,750,750,10),
			   new simpleEnemyPause(-37,937,263,263,10,0,750,750,750,10),
			    new simpleEnemyPause(-37,937,288,288,10,0,750,750,750,10),
				 new simpleEnemyPause(-37,937,313,313,10,0,750,750,750,10),
				  new simpleEnemyPause(-37,937,338,338,10,0,750,750,750,10),
				   new simpleEnemyPause(-37,937,363,363,10,0,750,750,750,10),
				    new simpleEnemyPause(-37,937,388,388,10,0,750,750,750,10),
					 new simpleEnemyPause(-37,937,413,413,10,0,750,750,750,10),
					  new simpleEnemyPause(-37,937,438,438,10,0,750,750,750,10),
					   new simpleEnemyPause(-37,937,463,463,10,0,750,750,750,10),
		   
		   
	],
	
	// level 46
	[
		
		new staticEnemy(87, 113),
		new staticEnemy(87, 138),
		new staticEnemy(87, 163),
		new staticEnemy(87, 188),
		
		new staticEnemy(87, 213),
		new staticEnemy(87, 238),
		new staticEnemy(87, 263),
		new staticEnemy(87, 288),
		
		new staticEnemy(87, 313),
		new staticEnemy(87, 338),
		new staticEnemy(87, 363),
		new staticEnemy(87, 388),
		
		new staticEnemy(87, 413),
		new staticEnemy(87, 438),
		new staticEnemy(87, 463),
		new staticEnemy(87, 488),
		
		//
		
		new staticEnemy(212, 113),
		new staticEnemy(212, 138),
		new staticEnemy(212, 163),
		new staticEnemy(212, 188),
		
		new staticEnemy(212, 213),
		new staticEnemy(212, 238),
		new staticEnemy(212, 263),
		new staticEnemy(212, 288),
		
		new staticEnemy(212, 313),
		new staticEnemy(212, 338),
		new staticEnemy(212, 363),
		new staticEnemy(212, 388),
		
	    //

      
		
		new staticEnemy(337, 213),
		new staticEnemy(337, 238),
		new staticEnemy(337, 263),
		new staticEnemy(337, 288),
		
		new staticEnemy(337, 313),
		new staticEnemy(337, 338),
		new staticEnemy(337, 363),
		new staticEnemy(337, 388),
		
		new staticEnemy(337, 413),
		new staticEnemy(337, 438),
		new staticEnemy(337, 463),
		new staticEnemy(337, 488),		
		
		//
		new staticEnemy(462, 113),
		new staticEnemy(462, 138),
		new staticEnemy(462, 163),
		new staticEnemy(462, 188),
		
		new staticEnemy(462, 213),
		new staticEnemy(462, 238),
		new staticEnemy(462, 263),
		new staticEnemy(462, 288),
		
		new staticEnemy(462, 313),
		new staticEnemy(462, 338),
		new staticEnemy(462, 363),
		new staticEnemy(462, 388),
		
		//
		
		
		new staticEnemy(587, 213),
		new staticEnemy(587, 238),
		new staticEnemy(587, 263),
		new staticEnemy(587, 288),
		
		new staticEnemy(587, 313),
		new staticEnemy(587, 338),
		new staticEnemy(587, 363),
		new staticEnemy(587, 388),
		
		new staticEnemy(587, 413),
		new staticEnemy(587, 438),
		new staticEnemy(587, 463),
		new staticEnemy(587, 488),
		
		//
		new staticEnemy(712, 113),
		new staticEnemy(712, 138),
		new staticEnemy(712, 163),
		new staticEnemy(712, 188),
		
		new staticEnemy(712, 213),
		new staticEnemy(712, 238),
		new staticEnemy(712, 263),
		new staticEnemy(712, 288),
		
		new staticEnemy(712, 313),
		new staticEnemy(712, 338),
		new staticEnemy(712, 363),
		new staticEnemy(712, 388),
		///
		new staticEnemy(137, 137),
		new staticEnemy(162, 137),
		new staticEnemy(137, 162),
		new staticEnemy(162, 162),
		
		new staticEnemy(262, 137),
		new staticEnemy(287, 137),
		new staticEnemy(262, 162),
		new staticEnemy(287, 162),
		
		new staticEnemy(387, 137),
		new staticEnemy(412, 137),
		new staticEnemy(387, 162),
		new staticEnemy(412, 162),
		
		new staticEnemy(512, 137),
		new staticEnemy(538, 137),
		new staticEnemy(512, 162),
		new staticEnemy(538, 162),
		
		new staticEnemy(638, 137),
		new staticEnemy(663, 137),
		new staticEnemy(638, 162),
		new staticEnemy(663, 162),
		
		new staticEnemy(763, 137),
		new staticEnemy(788, 137),
		new staticEnemy(763, 162),
		new staticEnemy(788, 162),
		//
		
		///
		new staticEnemy(137, 237),
		new staticEnemy(162, 237),
		new staticEnemy(137, 262),
		new staticEnemy(162, 262),
		
		new staticEnemy(262, 237),
		new staticEnemy(287, 237),
		new staticEnemy(262, 262),
		new staticEnemy(287, 262),
		
		new staticEnemy(387, 237),
		new staticEnemy(412, 237),
		new staticEnemy(387, 262),
		new staticEnemy(412, 262),
		
		new staticEnemy(512, 237),
		new staticEnemy(538, 237),
		new staticEnemy(512, 262),
		new staticEnemy(538, 262),
		
		new staticEnemy(638, 237),
		new staticEnemy(663, 237),
		new staticEnemy(638, 262),
		new staticEnemy(663, 262),
		
		new staticEnemy(763, 237),
		new staticEnemy(788, 237),
		new staticEnemy(763, 262),
		new staticEnemy(788, 262),
		//
		
		///
		new staticEnemy(137, 337),
		new staticEnemy(162, 337),
		new staticEnemy(137, 362),
		new staticEnemy(162, 362),
		
		new staticEnemy(262, 337),
		new staticEnemy(287, 337),
		new staticEnemy(262, 362),
		new staticEnemy(287, 362),
		
		new staticEnemy(387, 337),
		new staticEnemy(412, 337),
		new staticEnemy(387, 362),
		new staticEnemy(412, 362),
		
		new staticEnemy(512, 337),
		new staticEnemy(538, 337),
		new staticEnemy(512, 362),
		new staticEnemy(538, 362),
		
		new staticEnemy(638, 337),
		new staticEnemy(663, 337),
		new staticEnemy(638, 362),
		new staticEnemy(663, 362),
		
		new staticEnemy(763, 337),
		new staticEnemy(788, 337),
		new staticEnemy(763, 362),
		new staticEnemy(788, 362),
		//
		///
		new staticEnemy(137, 437),
		new staticEnemy(162, 437),
		new staticEnemy(137, 462),
		new staticEnemy(162, 462),
		
		new staticEnemy(262, 437),
		new staticEnemy(287, 437),
		new staticEnemy(262, 462),
		new staticEnemy(287, 462),
		
		new staticEnemy(387, 437),
		new staticEnemy(412, 437),
		new staticEnemy(387, 462),
		new staticEnemy(412, 462),
		
		new staticEnemy(512, 437),
		new staticEnemy(538, 437),
		new staticEnemy(512, 462),
		new staticEnemy(538, 462),
		
		new staticEnemy(638, 437),
		new staticEnemy(663, 437),
		new staticEnemy(638, 462),
		new staticEnemy(663, 462),
		
		new staticEnemy(763, 437),
		new staticEnemy(788, 437),
		new staticEnemy(763, 462),
		new staticEnemy(788, 462),
		//
		
		new simpleEnemy(212, 212, 492, 402, 0, 3),
		new simpleEnemy(462, 462, 492, 402, 0, 3),
		new simpleEnemy(7122, 712, 492, 402, 0, 3),
		
		new simpleEnemy(337, 337, 106, 196, 0, 3),
		new simpleEnemy(587, 587, 106, 196, 0, 3),
		
		//
		
		new linearEnemy([
			[113, 188, 113, 113, 5, 0],
			[188, 188, 113, 188, 0, 5],
			[188, 113, 188, 188, 5, 0],
            [113, 113, 188, 113, 0, 5]
						
		]),
		
		new linearEnemy([
			[238, 313, 113, 113, 5, 0],
			[313, 313, 113, 188, 0, 5],
			[313, 238, 188, 188, 5, 0],
            [238, 238, 188, 113, 0, 5]
						
		]),
		new linearEnemy([
			[363, 438, 113, 113, 5, 0],
			[438, 438, 113, 188, 0, 5],
			[438, 363, 188, 188, 5, 0],
            [363, 363, 188, 113, 0, 5]
						
		]),
		
		new linearEnemy([
			[488, 563, 113, 113, 5, 0],
			[563, 563, 113, 188, 0, 5],
			[563, 488, 188, 188, 5, 0],
            [488, 488, 188, 113, 0, 5]
						
		]),
		
		new linearEnemy([
			[613, 688, 113, 113, 5, 0],
			[688, 688, 113, 188, 0, 5],
			[688, 613, 188, 188, 5, 0],
            [613, 613, 188, 113, 0, 5]
						
		]),
		
		new linearEnemy([
			[738, 813, 113, 113, 5, 0],
			[813, 813, 113, 188, 0, 5],
			[813, 738, 188, 188, 5, 0],
            [738, 738, 188, 113, 0, 5]
						
		]),
		//
		new linearEnemy([
			[113, 188, 213, 213, 5, 0],
			[188, 188, 213, 288, 0, 5],
			[188, 113, 288, 288, 5, 0],
            [113, 113, 288, 213, 0, 5]
						
		]),
		
		new linearEnemy([
			[238, 313, 213, 213, 5, 0],
			[313, 313, 213, 288, 0, 5],
			[313, 238, 288, 288, 5, 0],
            [238, 238, 288, 213, 0, 5]
						
		]),
		new linearEnemy([
			[363, 438, 213, 213, 5, 0],
			[438, 438, 213, 288, 0, 5],
			[438, 363, 288, 288, 5, 0],
            [363, 363, 288, 213, 0, 5]
						
		]),
		
		new linearEnemy([
			[488, 563, 213, 213, 5, 0],
			[563, 563, 213, 288, 0, 5],
			[563, 488, 288, 288, 5, 0],
            [488, 488, 288, 213, 0, 5]
						
		]),
		
		new linearEnemy([
			[613, 688, 213, 213, 5, 0],
			[688, 688, 213, 288, 0, 5],
			[688, 613, 288, 288, 5, 0],
            [613, 613, 288, 213, 0, 5]
						
		]),
		
		new linearEnemy([
			[738, 813, 213, 213, 5, 0],
			[813, 813, 213, 288, 0, 5],
			[813, 738, 288, 288, 5, 0],
            [738, 738, 288, 213, 0, 5]
						
		]),
		//
		
		//
		new linearEnemy([
			[113, 188, 313, 313, 5, 0],
			[188, 188, 313, 388, 0, 5],
			[188, 113, 388, 388, 5, 0],
            [113, 113, 388, 313, 0, 5]
						
		]),
		
		new linearEnemy([
			[238, 313, 313, 313, 5, 0],
			[313, 313, 313, 388, 0, 5],
			[313, 238, 388, 388, 5, 0],
            [238, 238, 388, 313, 0, 5]
						
		]),
		new linearEnemy([
			[363, 438, 313, 313, 5, 0],
			[438, 438, 313, 388, 0, 5],
			[438, 363, 388, 388, 5, 0],
            [363, 363, 388, 313, 0, 5]
						
		]),
		
		new linearEnemy([
			[488, 563, 313, 313, 5, 0],
			[563, 563, 313, 388, 0, 5],
			[563, 488, 388, 388, 5, 0],
            [488, 488, 388, 313, 0, 5]
						
		]),
		
		new linearEnemy([
			[613, 688, 313, 313, 5, 0],
			[688, 688, 313, 388, 0, 5],
			[688, 613, 388, 388, 5, 0],
            [613, 613, 388, 313, 0, 5]
						
		]),
		
		new linearEnemy([
			[738, 813, 313, 313, 5, 0],
			[813, 813, 313, 388, 0, 5],
			[813, 738, 388, 388, 5, 0],
            [738, 738, 388, 313, 0, 5]
						
		]),
		//
		//
		new linearEnemy([
			[113, 188, 413, 413, 5, 0],
			[188, 188, 413, 488, 0, 5],
			[188, 113, 488, 488, 5, 0],
            [113, 113, 488, 413, 0, 5]
						
		]),
		
		new linearEnemy([
			[238, 313, 413, 413, 5, 0],
			[313, 313, 413, 488, 0, 5],
			[313, 238, 488, 488, 5, 0],
            [238, 238, 488, 413, 0, 5]
						
		]),
		new linearEnemy([
			[363, 438, 413, 413, 5, 0],
			[438, 438, 413, 488, 0, 5],
			[438, 363, 488, 488, 5, 0],
            [363, 363, 488, 413, 0, 5]
						
		]),
		
		new linearEnemy([
			[488, 563, 413, 413, 5, 0],
			[563, 563, 413, 488, 0, 5],
			[563, 488, 488, 488, 5, 0],
            [488, 488, 488, 413, 0, 5]
						
		]),
		
		new linearEnemy([
			[613, 688, 413, 413, 5, 0],
			[688, 688, 413, 488, 0, 5],
			[688, 613, 488, 488, 5, 0],
            [613, 613, 488, 413, 0, 5]
						
		]),
		
		new linearEnemy([
			[738, 813, 413, 413, 5, 0],
			[813, 813, 413, 488, 0, 5],
			[813, 738, 488, 488, 5, 0],
            [738, 738, 488, 413, 0, 5]
						
		]),
		//
		new linearEnemy([
			[187, 112, 187, 187, 5, 0],
			[112, 112, 187, 112, 0, 5],
			[112, 187, 112, 112, 5, 0],
            [112, 112, 112, 187, 0, 5]
						
		]),
		
		new linearEnemy([
			[312, 237, 187, 187, 5, 0],
			[237, 237, 187, 112, 0, 5],
			[237, 312, 112, 112, 5, 0],
            [312, 312, 112, 187, 0, 5]
						
		]),
		
		new linearEnemy([
			[437, 362, 187, 187, 5, 0],
			[362, 362, 187, 112, 0, 5],
			[362, 437, 112, 112, 5, 0],
            [437, 437, 112, 187, 0, 5]
						
		]),
		
		new linearEnemy([
			[562, 487, 187, 187, 5, 0],
			[487, 487, 187, 112, 0, 5],
			[487, 562, 112, 112, 5, 0],
            [562, 562, 112, 187, 0, 5]
						
		]),
		
		new linearEnemy([
			[687, 612, 187, 187, 5, 0],
			[612, 612, 187, 112, 0, 5],
			[612, 687, 112, 112, 5, 0],
            [687, 687, 112, 187, 0, 5]
						
		]),
		
		new linearEnemy([
			[812, 737, 187, 187, 5, 0],
			[737, 737, 187, 112, 0, 5],
			[737, 812, 112, 112, 5, 0],
            [812, 812, 112, 187, 0, 5]
						
		]),
		//
		
		//
		new linearEnemy([
			[187, 112, 287, 287, 5, 0],
			[112, 112, 287, 212, 0, 5],
			[112, 187, 212, 212, 5, 0],
            [112, 112, 212, 287, 0, 5]
						
		]),
		
		new linearEnemy([
			[312, 237, 287, 287, 5, 0],
			[237, 237, 287, 212, 0, 5],
			[237, 312, 212, 212, 5, 0],
            [312, 312, 212, 287, 0, 5]
						
		]),
		
		new linearEnemy([
			[437, 362, 287, 287, 5, 0],
			[362, 362, 287, 212, 0, 5],
			[362, 437, 212, 212, 5, 0],
            [437, 437, 212, 287, 0, 5]
						
		]),
		
		new linearEnemy([
			[562, 487, 287, 287, 5, 0],
			[487, 487, 287, 212, 0, 5],
			[487, 562, 212, 212, 5, 0],
            [562, 562, 212, 287, 0, 5]
						
		]),
		
		new linearEnemy([
			[687, 612, 287, 287, 5, 0],
			[612, 612, 287, 212, 0, 5],
			[612, 687, 212, 212, 5, 0],
            [687, 687, 212, 287, 0, 5]
						
		]),
		
		new linearEnemy([
			[812, 737, 287, 287, 5, 0],
			[737, 737, 287, 212, 0, 5],
			[737, 812, 212, 212, 5, 0],
            [812, 812, 212, 287, 0, 5]
						
		]),
		//
		//
		new linearEnemy([
			[187, 112, 387, 387, 5, 0],
			[112, 112, 387, 312, 0, 5],
			[112, 187, 312, 312, 5, 0],
            [112, 112, 312, 387, 0, 5]
						
		]),
		
		new linearEnemy([
			[312, 237, 387, 387, 5, 0],
			[237, 237, 387, 312, 0, 5],
			[237, 312, 312, 312, 5, 0],
            [312, 312, 312, 387, 0, 5]
						
		]),
		
		new linearEnemy([
			[437, 362, 387, 387, 5, 0],
			[362, 362, 387, 312, 0, 5],
			[362, 437, 312, 312, 5, 0],
            [437, 437, 312, 387, 0, 5]
						
		]),
		
		new linearEnemy([
			[562, 487, 387, 387, 5, 0],
			[487, 487, 387, 312, 0, 5],
			[487, 562, 312, 312, 5, 0],
            [562, 562, 312, 387, 0, 5]
						
		]),
		
		new linearEnemy([
			[687, 612, 387, 387, 5, 0],
			[612, 612, 387, 312, 0, 5],
			[612, 687, 312, 312, 5, 0],
            [687, 687, 312, 387, 0, 5]
						
		]),
		
		new linearEnemy([
			[812, 737, 387, 387, 5, 0],
			[737, 737, 387, 312, 0, 5],
			[737, 812, 312, 312, 5, 0],
            [812, 812, 312, 387, 0, 5]
						
		]),
		//
		new linearEnemy([
			[187, 112, 487, 487, 5, 0],
			[112, 112, 487, 412, 0, 5],
			[112, 187, 412, 412, 5, 0],
            [112, 112, 412, 487, 0, 5]
						
		]),
		
		new linearEnemy([
			[312, 237, 487, 487, 5, 0],
			[237, 237, 487, 412, 0, 5],
			[237, 312, 412, 412, 5, 0],
            [312, 312, 412, 487, 0, 5]
						
		]),
		
		new linearEnemy([
			[437, 362, 487, 487, 5, 0],
			[362, 362, 487, 412, 0, 5],
			[362, 437, 412, 412, 5, 0],
            [437, 437, 412, 487, 0, 5]
						
		]),
		
		new linearEnemy([
			[562, 487, 487, 487, 5, 0],
			[487, 487, 487, 412, 0, 5],
			[487, 562, 412, 412, 5, 0],
            [562, 562, 412, 487, 0, 5]
						
		]),
		
		new linearEnemy([
			[687, 612, 487, 487, 5, 0],
			[612, 612, 487, 412, 0, 5],
			[612, 687, 412, 412, 5, 0],
            [687, 687, 412, 487, 0, 5]
						
		]),
		
		new linearEnemy([
			[812, 737, 487, 487, 5, 0],
			[737, 737, 487, 412, 0, 5],
			[737, 812, 412, 412, 5, 0],
            [712, 812, 412, 487, 0, 5]
						
		]),
	],
	
	// level 47
	[
		new staticEnemy(62, 187),
		
		new staticEnemy(162, 187),
		new staticEnemy(187, 187),
		new staticEnemy(212, 187),
		new staticEnemy(237, 187),
		
		new staticEnemy(262, 187),
		new staticEnemy(287, 187),
		new staticEnemy(212, 187),
		new staticEnemy(237, 187),
		
		new staticEnemy(337, 187),
		new staticEnemy(362, 187),
		new staticEnemy(387, 187),
		new staticEnemy(412, 187),
		
		new staticEnemy(437, 187),
		new staticEnemy(462, 187),
		new staticEnemy(487, 187),
		new staticEnemy(512, 187),
		
		new staticEnemy(612, 187),
		new staticEnemy(637, 187),
		new staticEnemy(662, 187),
		new staticEnemy(687, 187),
		new staticEnemy(712, 187),
		new staticEnemy(737, 187),
		//
		new staticEnemy(312, 212),
		new staticEnemy(312, 237),
		new staticEnemy(312, 262),
		new staticEnemy(312, 287),
		
		new staticEnemy(312, 312),
		new staticEnemy(312, 337),
		new staticEnemy(312, 362),
		new staticEnemy(312, 387),
		
		new staticEnemy(312, 412),
		new staticEnemy(312, 437),
		new staticEnemy(312, 462),
		new staticEnemy(312, 487),
		
		//
		new staticEnemy(587, 212),
		new staticEnemy(587, 237),
		new staticEnemy(587, 262),
		new staticEnemy(587, 287),
		
		new staticEnemy(587, 312),
		new staticEnemy(587, 337),
		new staticEnemy(587, 362),
		new staticEnemy(587, 387),
		
		new staticEnemy(587, 412),
		new staticEnemy(587, 437),
		new staticEnemy(587, 462),
		new staticEnemy(587, 487),
		
		new staticEnemy(313, 187),
		new staticEnemy(587, 187),
		
		new simpleCircularEnemy(132, 227, 15, 190, 4.6),
		new simpleCircularEnemy(190, 230, 15, -90, -4.6),
		new simpleCircularEnemy(280, 240, 15, -145, 4.6),
		new simpleCircularEnemy(243, 245, 15, 85, 4.6),
		new simpleCircularEnemy(85, 237, 15, 130, 4.6),
		new simpleCircularEnemy(140, 162, 15, 0, 4.6),
		
		new simpleCircularEnemy(215, 287, 15, -80, 4.6),
		new simpleCircularEnemy(277, 295, 15, -110, -4.6),
		new simpleCircularEnemy(75, 304, 15, -90, 4.6),
		new simpleCircularEnemy(130, 297, 15, 180, -4.6),
		
		new simpleCircularEnemy(166, 295, 15, 0, -4.6),
		new simpleCircularEnemy(219, 231, 15, -45, -4.6),
		new simpleCircularEnemy(77, 346, 15, -45, 4.6),
		
		new simpleCircularEnemy(191, 362, 15, -45, 4.6),
		new simpleCircularEnemy(135, 358, 15, 0, 4.6),
		
		new simpleCircularEnemy(275, 349, 15, 135, -4.6),
		
		new simpleCircularEnemy(234, 371, 15, 135, 4.6),
		
		new simpleCircularEnemy(82, 407, 15, -60, 4.6),
		
		new simpleCircularEnemy(124, 403, 15, 50, 4.6),
		new simpleCircularEnemy(192, 413, 15, 15, 4.6),
		new simpleCircularEnemy(266, 411, 15, 0, -4.6),
		new simpleCircularEnemy(162, 411, 15, 90, -4.6),
		new simpleCircularEnemy(231, 428, 15, 45, 4.6),
		new simpleCircularEnemy(88, 464, 15, -115, -4.6),
		new simpleCircularEnemy(150, 458, 15, 45, -4.6),
		new simpleCircularEnemy(200, 476, 15, -90, 4.6),
		new simpleCircularEnemy(262, 464, 15, 50, -4.6),
		
		
		new simpleEnemy(325, 425, 212, 212, 2.5, 0),
		new simpleEnemy(400, 500, 212, 212, 2.5, 0),
		new simpleEnemy(475, 575, 212, 212, 2.5, 0),
		
		new simpleEnemy(425, 325, 237, 237, 2.5, 0),
		new simpleEnemy(500, 400, 237, 237, 2.5, 0),
		new simpleEnemy(575, 475, 237, 237, 2.5, 0),
		
		new simpleEnemy(325, 475, 263, 263, 3.7, 0),
		new simpleEnemy(350, 500, 263, 263, 3.7, 0),
		new simpleEnemy(375, 525, 263, 263, 3.7, 0),
		new simpleEnemy(400, 550, 263, 263, 3.7, 0),
		new simpleEnemy(425, 575, 263, 263, 3.7, 0),
		
		new simpleEnemy(475,325, 312, 312, 3.7, 0),
		new simpleEnemy(500,350, 312, 312, 3.7, 0),
		new simpleEnemy(525,375, 312, 312, 3.7, 0),
		new simpleEnemy(550,400, 312, 312, 3.7, 0),
		new simpleEnemy(575, 425, 312, 312, 3.7, 0),
		
		new simpleEnemy(475,325, 362, 362, 3.7, 0),
		new simpleEnemy(500,350, 362, 362, 3.7, 0),
		new simpleEnemy(525,375, 362, 362, 3.7, 0),
		new simpleEnemy(550,400, 362, 362, 3.7, 0),
		new simpleEnemy(575, 425, 362, 362, 3.7, 0),
		
		new simpleEnemy(325, 475, 462, 462, 3.7, 0),
		new simpleEnemy(350, 500, 462, 462, 3.7, 0),
		new simpleEnemy(375, 525, 462, 462, 3.7, 0),
		new simpleEnemy(400, 550, 462, 462, 3.7, 0),
		new simpleEnemy(425, 575, 462, 462, 3.7, 0),
		
		new simpleEnemy(325, 475, 487, 487, 3.7, 0),
		new simpleEnemy(350, 500, 487, 487, 3.7, 0),
		new simpleEnemy(375, 525, 487, 487, 3.7, 0),
		new simpleEnemy(400, 550, 487, 487, 3.7, 0),
		new simpleEnemy(425, 575, 487, 487,3.7, 0),
		
		new simpleEnemy(325, 393, 287, 287, 1.7, 0),
		new simpleEnemy(350, 418, 287, 287, 1.7, 0),
		new simpleEnemy(375, 443, 287, 287, 1.7, 0),
		
		new simpleEnemy(525,456, 287, 287, 1.7, 0),
		new simpleEnemy(550,481, 287, 287, 1.7, 0),
		new simpleEnemy(575, 506, 287, 287, 1.7, 0),
		
		new simpleEnemy(325, 425, 337, 337, 2.5, 0),
		new simpleEnemy(400, 500, 337, 337, 2.5, 0),
		new simpleEnemy(475, 575, 337, 337, 2.5, 0),
		
		new simpleEnemy(325, 425, 412, 412, 2.5, 0),
		new simpleEnemy(400, 500, 412, 412, 2.5, 0),
		new simpleEnemy(475, 575, 412, 412, 2.5, 0),
		
		new simpleEnemy(425, 325, 437, 437, 2.5, 0),
		new simpleEnemy(500, 400, 437, 437, 2.5, 0),
		new simpleEnemy(575, 475, 437, 437, 2.5, 0),
		
		new simpleEnemy(325, 393, 387, 387, 1.7, 0),
		new simpleEnemy(350, 418, 387, 387, 1.7, 0),
		new simpleEnemy(375, 443, 387, 387, 1.7, 0),
		
		new simpleEnemy(525,456, 387, 387, 1.7, 0),
		new simpleEnemy(550,481, 387, 387, 1.7, 0),
		new simpleEnemy(575, 506, 387, 387, 1.7, 0),
		
		new simpleEnemy(612, 612, 494, 202, 0, 2.9), 
		new simpleEnemy(662, 662, 494, 202, 0, 2.9), 
		new simpleEnemy(712, 712, 494, 202, 0, 2.9), 
		new simpleEnemy(762, 762, 494, 202, 0, 2.9), 
		new simpleEnemy(812, 812, 494, 202, 0, 2.9), 
		
		new simpleEnemy(587, 587, 202, 494, 0, 2.9), 
		new simpleEnemy(637, 637, 202, 494, 0, 2.9), 
		new simpleEnemy(687, 687, 202, 494, 0, 2.9), 
		new simpleEnemy(737, 737, 202, 494, 0, 2.9), 
		new simpleEnemy(787, 787, 202, 494, 0, 2.9), 
		
		new simpleEnemy(600, 844 , 212, 212, 2.4, 0),
		new simpleEnemy(600,844 , 262, 262, 2.4, 0),
		new simpleEnemy(600,844 , 312, 312, 2.4, 0),
		new simpleEnemy(600,844 , 362, 362, 2.4, 0),
		new simpleEnemy(600,844 , 412, 412, 2.4, 0),
		new simpleEnemy(600,844 , 462, 462, 2.4, 0),
		
		new simpleEnemy(844,600 , 237, 237, 2.4, 0),
		new simpleEnemy(844,600 , 287, 287, 2.4, 0),
		new simpleEnemy(844,600 , 337, 337, 2.4, 0),
		new simpleEnemy(844,600 , 387, 387, 2.4, 0),
		new simpleEnemy(844,600 , 437, 437, 2.4, 0),
		new simpleEnemy(844,600 , 487, 487, 2.4, 0),
		
	],
	
	// level 48
	[
		 // new staticEnemy(487, 262),
		 
  		 new staticEnemy(187, 312),
		 new staticEnemy(212, 312),
		 new staticEnemy(237, 312),
		 new staticEnemy(262, 312),
		 
		 new staticEnemy(287, 312),
		 new staticEnemy(312, 312),
		 new staticEnemy(337, 312),
		 new staticEnemy(362, 312),
		 
		 new staticEnemy(387, 312),
		 new staticEnemy(412, 312),
		 
		 
		 new staticEnemy(487, 312),
		 new staticEnemy(512, 312),
		 new staticEnemy(537, 312),
		 new staticEnemy(562, 312),
		 
		 new staticEnemy(587, 312),
		 new staticEnemy(612, 312),
		 new staticEnemy(637, 312),
		 new staticEnemy(662, 312),
		 
		 new staticEnemy(687, 312),
		 new staticEnemy(712, 312),
		 
		// new simpleEnemyPause(-37,937,138,138,10,0,750,750,750,10),
		  new simpleEnemyPause(387,387,640,513,0,1,200,10000,0,0),
		  new simpleEnemyPause(412,412,640,513,0,1,200,10000,0,0),
		  new simpleEnemyPause(437,437,640,513,0,1,200,10000,0,0),
		  new simpleEnemyPause(462,462,640,513,0,1,200,10000,0,0),
		  new simpleEnemyPause(487,487,640,513,0,1,200,10000,0,0),
		  new simpleEnemyPause(512,512,640,513,0,1,200,10000,0,0),
		  //
		  
		  new simpleEnemyPause(187,425,337,337,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,362,362,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,387,387,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,412,412,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,437,437,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,462,462,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(187,425,487,487,0.5,0,300,10000,0,0),
		  
		  new simpleEnemyPause(712,475,337,337,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,362,362,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,387,387,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,412,412,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,437,437,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,462,462,0.5,0,300,10000,0,0),
		  new simpleEnemyPause(712,475,487,487,0.5,0,300,10000,0,0),
		  
		  new simpleEnemyPause(437,412,312,312,2,0,1000,10000,0,0),
		  new simpleEnemyPause(462,487,312,312,2,0,1000,10000,0,0),
		  
		 // simpleEnemyPause(startX, endX, startY, endY, xSpeed, ySpeed,initialPause,shortPause,longPause,secondPause, stage, enemyType) {
		 
	],
	
	// level 49
	[
		 new staticEnemy(138, 237),
		new staticEnemy(163, 237),
		new staticEnemy(138, 262),
		new staticEnemy(163, 262),
		 new staticEnemy(188, 250),
		new staticEnemy(538, 237),
		new staticEnemy(563, 237),
		new staticEnemy(538, 262),
		new staticEnemy(563, 262),
		 new staticEnemy(513, 250),
		 
		 new simpleEnemy(133,568 , 113, 113, 5, 0),
		 new simpleEnemy(133,568 , 163, 163, 5, 0),
		 new simpleEnemy(133,568,  213, 213, 5, 0),
		 new simpleEnemy(133,568 , 263, 263, 5, 0),
		 new simpleEnemy(133,568 , 313, 313, 5, 0),
		 new simpleEnemy(133,568 , 363, 363, 5, 0),
		 new simpleEnemy(133,568 , 413, 413, 5, 0),
		 
		 new simpleEnemy(568,133 , 88, 88, 5, 0),
		  new simpleEnemy(568,133 , 138, 138, 5, 0),
		 new simpleEnemy(568,133 , 188, 188, 5, 0),
		 new simpleEnemy(568,133,  238, 238, 5, 0),
		 new simpleEnemy(568,133 , 288, 288, 5, 0),
		 new simpleEnemy(568,133 , 338, 338, 5, 0),
		 new simpleEnemy(568,133 , 388, 388, 5, 0),
		 
		 new simpleEnemy(138,138 , 83, 418, 0, 5),
		 new simpleEnemy(163,163 , 83, 418, 0, 5),
		 new simpleEnemy(188,188 , 83, 418, 0, 5),
		 
		 new simpleEnemy(288,288 , 83, 418, 0, 5),
		 new simpleEnemy(313,313 , 83, 418, 0, 5),
		 new simpleEnemy(333,333 , 83, 418, 0, 5),
		 
		 new simpleEnemy(438,438 , 83, 418, 0, 5),
		 new simpleEnemy(463,463 , 83, 418, 0, 5),
		 new simpleEnemy(488,488 , 83, 418, 0, 5),
		 
		 new simpleEnemy(212,212 , 418, 83, 0, 5),
		 new simpleEnemy(237,237 , 418, 83, 0, 5),
		 new simpleEnemy(262,262 , 418, 83, 0, 5),
		 
		 new simpleEnemy(362,362 , 418, 83, 0, 5),
		 new simpleEnemy(387,387 , 418, 83, 0, 5),
		 new simpleEnemy(412,412 , 418, 83, 0, 5),
		 
		 new simpleEnemy(512,512 , 418, 83, 0, 5),
		 new simpleEnemy(537,537 , 418, 83, 0, 5),
		 new simpleEnemy(562,562 , 418, 83, 0, 5),
		 
		 
		 
		
		
	],
	
	// level 50
	[
		new staticEnemy(238, 137),
		new staticEnemy(263, 137),
		new staticEnemy(288, 137),
		
		new staticEnemy(238, 162),
		new staticEnemy(263, 162),
		new staticEnemy(238, 187),
		
		
		new staticEnemy(413, 137),
		new staticEnemy(438, 137),
		new staticEnemy(462, 137),
		
		new staticEnemy(438, 162),
		new staticEnemy(462, 162),
		
		new staticEnemy(462, 187),
		
		
		
		new staticEnemy(238, 362),
		new staticEnemy(263, 362),
		new staticEnemy(288, 362),
		
		new staticEnemy(238, 337),
		new staticEnemy(263, 337),
		new staticEnemy(238, 312),
		
		
		
		
		
		new staticEnemy(413, 362),
		new staticEnemy(438, 362),
		new staticEnemy(462, 362),
		
		new staticEnemy(438, 337),
		new staticEnemy(462, 337),
		new staticEnemy(462, 312),
		
		
		new simpleEnemy(263,263 , 133, 368, 0, 3.6),
		new simpleEnemy(313,313 , 133, 368, 0, 3.6),
		new simpleEnemy(363,363 , 133, 368, 0, 3.6),
		new simpleEnemy(413,413 , 133, 368, 0, 3.6),
		new simpleEnemy(463,463 , 133, 368, 0, 3.6),
		
		new simpleEnemy(238,238 , 368,133, 0, 3.6),
		new simpleEnemy(288,288 , 368,133, 0, 3.6),
		new simpleEnemy(338,338 , 368,133, 0, 3.6),
		new simpleEnemy(388,388 , 368,133, 0, 3.6),
		new simpleEnemy(433,433 , 368,133, 0, 3.6),
		
		new simpleEnemy(187,187 , 293,208, 0, 2.6),
		new simpleEnemy(212,212 , 208,293, 0, 2.6),
		
		new simpleEnemy(487,487 , 293,208, 0, 2.6),
		new simpleEnemy(512,512 , 208,293, 0, 2.6),
		
		new simpleCircularEnemy(350, 250, 12, 0,   3),
		new simpleCircularEnemy(350, 250, 37, 0,   3),
		new simpleCircularEnemy(350, 250, 62, 0,   3),
		new simpleCircularEnemy(350, 250, 87, 0,   3),
		new simpleCircularEnemy(350, 250, 112, 0,   3),
		
		new simpleCircularEnemy(350, 250, -12, 0,   3),
		new simpleCircularEnemy(350, 250, -37, 0,   3),
		new simpleCircularEnemy(350, 250, -62, 0,   3),
		new simpleCircularEnemy(350, 250, -87, 0,   3),
		new simpleCircularEnemy(350, 250, -112, 0,   3),
		
		
		
		
		
	]
];

function staticEnemy(x, y, enemyType) {
	if(enemyType==null)
		enemyType = "static";
	this.x = x;
	this.y = y;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.enemyType = enemyType;
}

function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
	
	if(enemyType==null)
		enemyType = "simple";
	if(stage==null)
	  stage = 0;
    //xSpeed = 0;
	//ySpeed = 0;
	
	this.x = startX;
	this.y = startY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = startX;
	this.endX = endX;
	this.startY = startY;
	this.endY = endY;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.stage = stage;
	this.enemyType = enemyType;
}
function simpleEnemyPause(startX, endX, startY, endY, xSpeed, ySpeed,initialPause,shortPause,longPause,secondPause, stage, enemyType) {
	
	
	if(enemyType==null)
		enemyType = "simplePause";
	if(stage==null)
	  stage = 0;
    //xSpeed = 0;
	//ySpeed = 0;
	this.pare = false;
	this.x = startX;
	this.y = startY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = startX;
	this.endX = endX;
	this.startY = startY;
	this.endY = endY;
	
	this.longPause = longPause;
	this.initialPause = initialPause;
	this.shortPause = shortPause;
	if(secondPause==null)
		 this.secondPause = 0;
	else 
   		this.secondPause = secondPause;
	
	this.pauseTotal = initialPause;
	
	
	this.pauseTimer = 0;
	
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.stage = stage;
	this.enemyType = enemyType;
}
function linearEnemy(movement, stage, enemyType) {
	if(enemyType==null)
		enemyType = "linear";
	
	if(stage==null)
	  stage = 0;
  
	this.x = movement[0][0];
	this.y = movement[0][2];
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.movement = movement;
	this.stage = stage;
	this.enemyType = enemyType;
}


function simpleCircularEnemy(centerX, centerY, radius, startAngle, speed, angle, enemyType) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "simpleCircular";
	
	
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
}

function circularEnemyLinear(movement, radius, startAngle, speed, angle, enemyType,stage) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "linearCircular";
	
    if(stage==null)
	  stage = 0;
    
	this.x = movement[0][0];
	this.y = movement[0][2];
	
	centerX = movement[0][0];
	centerY = movement[0][2];
	
	
	
	//function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
	this.movement = movement;	
	this.x = movement[0][0];// radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = movement[0][2];//radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = movement[0][0] / 40;
	this.simpleY = movement[0][2] / 40;
	this.startX = centerX;//+radius;
	this.startY = centerY;//+radius;
	this.oldX = movement[0][0];
	this.oldY = movement[0][2];
	
	//
	//this.endX = endX;//+radius;
	//this.endY = endY;//+radius;
	//this.xSpeed = xSpeed;
	//this.ySpeed = ySpeed;
	this.stage = stage;
	//
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
	
	

    //xSpeed = 0;
	//ySpeed = 0;
	
	
}

function simpleCircularEnemyXY(centerX, centerY, radius, startAngle, speed, angle, enemyType,endX,endY,xSpeed, ySpeed,stage) {
	
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "simpleCircularXY";
	
    if(stage==null)
	  stage = 0;
    
	//function simpleEnemy(startX, endX, startY, endY, xSpeed, ySpeed, stage, enemyType) {
		
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.startX = centerX;//+radius;
	this.startY = centerY;//+radius;
	this.oldX = centerX;
	this.oldY = centerY;
	
	//
	this.endX = endX;//+radius;
	this.endY = endY;//+radius;
	this.xSpeed = xSpeed;
	this.ySpeed = ySpeed;
	this.stage = stage;
	//
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.speed = speed;
	this.startAngle = startAngle;
	this.angle = startAngle;
	this.enemyType = enemyType;
	
	

    //xSpeed = 0;
	//ySpeed = 0;
	
	
}

function addSquared2x2(centerX, centerY, toX,toY) {
	
}

function pauseCircularEnemy_1_4(centerX, centerY, radius, startAngle, endAngle, speed, pauseTotal, stage, angle, enemyType) {
	
	if(stage==null)
		stage = 0;
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "pauseCircular_1_4";
	if(pauseTotal==null)
		pauseTotal = 0;
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.speed = speed;
	this.pauseTotal = pauseTotal;
	this.pauseTimer = 0;
	this.angle = startAngle;
	this.stage = stage;
	this.enemyType = enemyType;
}

function reverseCircularEnemy(centerX, centerY, radius, startAngle, endAngle, speed, stage, angle, enemyType) {
	
	
	if(stage==null)
		stage = 0;
	if(angle==null)
		angle = startAngle;
	if(enemyType == null)
		enemyType = "reverseCircular";
	
	this.angleCounter = 0;
	this.x = radius * Math.cos(angle * (Math.PI / 180)) + centerX;
	this.y = radius * Math.sin(angle * (Math.PI / 180)) + centerY;
	this.simpleX = this.x / 40;
	this.simpleY = this.y / 40;
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.startAngle = startAngle;
	this.endAngle = endAngle;
	this.speed = speed;
	this.angle = startAngle;
	
	this.modAngle = endAngle -  startAngle;
	if(this.modAngle<0)
		this.modAngle = this.modAngle * -1;
	
	
	this.stage = stage;
	this.enemyType = enemyType;
}

function resetEnemies(l) {
	for (var i = 0; i < enemies[l].length; i++) {
		if (enemies[l][i].enemyType == "simple") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		}
		else if (enemies[l][i].enemyType == "linear") {
			enemies[l][i].x = enemies[l][i].movement[0][0];
			enemies[l][i].y = enemies[l][i].movement[0][2];
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		}
		else if (enemies[l][i].enemyType == "simpleCircular") {
			enemies[l][i].angle = enemies[l][i].startAngle;
			enemies[l][i].x = enemies[l][i].radius * Math.cos(enemies[l][i].angle * (Math.PI / 180)) + enemies[l][i].centerX;
			enemies[l][i].y = enemies[l][i].radius * Math.sin(enemies[l][i].angle * (Math.PI / 180)) + enemies[l][i].centerY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
		}
       else if (enemies[l][i].enemyType == "simplePause") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].pauseTimer = 0;
			enemies[l][i].pare = false;
			enemies[l][i].stage = 0;
		} 
        else if (enemies[l][i].enemyType == "simpleCircularXY") {
			enemies[l][i].x = enemies[l][i].startX;
			enemies[l][i].y = enemies[l][i].startY;
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		} 				
		
		 else if (enemies[l][i].enemyType == "linearCircular") {
			enemies[l][i].x = enemies[l][i].movement[0][0];
			enemies[l][i].y = enemies[l][i].movement[0][2];
			enemies[l][i].oldX = enemies[l][i].x;
			enemies[l][i].oldY = enemies[l][i].y;
			
			enemies[l][i].simpleX = enemies[l][i].x / 40;
			enemies[l][i].simpleY = enemies[l][i].y / 40;
			enemies[l][i].stage = 0;
		} 	
		
	}
}

function drawEnemies() {
	if (state == "game" || state == "main_menu") {
		// colors
		var enemyFillColor, enemyOutlineColor;
		if (level >= WALLS_RED) {
			enemyFillColor = ENEMY_FILL_COLOR_2;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_2;
		} else if (level >= WALLS_PURPLE) {
			enemyFillColor = ENEMY_FILL_COLOR_1;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_1;
		} else {
			enemyFillColor = ENEMY_FILL_COLOR_0;
			enemyOutlineColor = ENEMY_OUTLINE_COLOR_0;
		}
		
		for (var i = 0; i < enemies[level].length; i++) {
			canvas.beginPath();
			canvas.arc(cwh(enemies[level][i].x) + os.x, cwh(enemies[level][i].y) + os.y, cwh(ENEMY_SIZE) / 2, 0, 2 * Math.PI, false);
			canvas.fillStyle = enemyFillColor;
			canvas.fill();
			canvas.lineWidth = cwh(4);
			canvas.strokeStyle = enemyOutlineColor;
			canvas.stroke();
		}
	}
}

function updateEnemies() {
	if ((state == "game" || state == "level_select" || state == "main_menu") && !paused && !player.dying) {
		// game
		if (state == "game" || state == "main_menu") {
			for (var n = 0; n < enemies[level].length; n++) {
				updateSimpleEnemy(n);
				updateLinearEnemy(n);
				updateSimpleCircularEnemy(n);
				updateSimpleCircularEnemyXY(n);
				updateCircularEnemyLinear(n);
				updatePauseCircularEnemy_1_4(n);
				updateReverseCircularEnemy(n);
				updateSimpleEnemyPause(n);
			}
		}

		// level select
		else if (state == "level_select" && !mobile) {
			for (var i = 1; i < LS_ALL_TOT + 1; i++) {
				for (var n = 0; n < enemies[i].length; n++) {
					updateSimpleEnemy(n, i);
					updateLinearEnemy(n, i);
					updateSimpleCircularEnemy(n, i);
					updateSimpleCircularEnemyXY(n,i);
					updateCircularEnemyLinear(n,i);
					updatePauseCircularEnemy_1_4(n, i);
					updateReverseCircularEnemy(n, i);
					updateSimpleEnemyPause(n,i);
				}
			}
		}

	}
}

function updateSimpleCircularEnemy(n,l) {
	
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "simpleCircular") {
		var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
	    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
	    
	    e.x = newX + e.centerX;
	    e.y = newY + e.centerY;
	    
	    e.angle += e.speed;
	    
		e.simpleX = e.x / 40;
		e.simpleY = e.y / 40;
	}
}

function updateReverseCircularEnemy(n, l) {
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "reverseCircular") {
		if (e.stage == 0) {
			var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
		    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
		    
		    e.x = newX + e.centerX;
		    e.y = newY + e.centerY;
		    
		    e.angle += e.speed;
			
			if(e.speed>0)
		     e.angleCounter += e.speed;
		    else 
			 e.angleCounter -= e.speed;
		    	
			
			e.simpleX = e.x / 40;
			e.simpleY = e.y / 40;
			
			if (e.angleCounter >= e.modAngle) {
				e.stage = 1;
				e.angle = e.endAngle;
				e.angleCounter = 0;
			}
			
			/*if (e.angle >= e.endAngle) {
				e.stage = 1;
				e.angle = e.endAngle;
			}*/
		} else if (e.stage == 1) {
			var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
		    var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
		    
		    e.x = newX + e.centerX;
		    e.y = newY + e.centerY;
		    
		    e.angle -= e.speed;
		    
			if(e.speed>0)
		     e.angleCounter += e.speed;
		    else 
			 e.angleCounter -= e.speed;
			
			
			e.simpleX = e.x / 40;
			e.simpleY = e.y / 40;
			
			if (e.angleCounter >= e.modAngle) {
				e.stage = 0;
				e.angle = e.startAngle;
				e.angleCounter = 0;
			}
		}
	}
}

function updatePauseCircularEnemy_1_4(n, l) {
	if(l==null)
		l = level;
	var e = enemies[l][n];
	if (e.enemyType == "pauseCircular_1_4") {
		if (e.stage == 0) {
			if (e.pauseTimer < e.pauseTotal) {
				e.pauseTimer++;
			} else {
				e.pauseTimer = 0;
				e.stage = 1;
			}
		} else {
			if (e.startAngle < e.endAngle) {
				if (e.angle < e.endAngle) {
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.angle += e.speed;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
				} else {
					e.angle = e.startAngle;
	
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
	
					e.pauseTimer = 0;
					e.stage = 0;
				}
			} else if (e.startAngle > e.endAngle) {
				if (e.angle > e.endAngle) {
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.angle -= e.speed;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
				} else {
					e.angle = e.startAngle;
	
					var newX = e.radius * Math.cos(e.angle * (Math.PI / 180));
					var newY = e.radius * Math.sin(e.angle * (Math.PI / 180));
					
					e.x = newX + e.centerX;
					e.y = newY + e.centerY;
					
					e.simpleX = e.x / 40;
					e.simpleY = e.y / 40;
	
					e.pauseTimer = 0;
					e.stage = 0;
				}
			}
			
		}
	}
}

function updateSimpleEnemyPause(n, l) {
    if(l==null)
		l = level;
	
	//var e = enemies[l][n];
	
   if (enemies[l][n].enemyType == "simplePause") {
	   
	   switch (enemies[l][n].stage){
		   case 0:
		    if (enemies[l][n].pauseTimer < enemies[l][n].initialPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				enemies[l][n].stage = 1;
				
			}
			break;
	       case 3:
		  
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
				    
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					
					if(enemies[l][n].secondPause==0)
				        enemies[l][n].stage = 4;
				    else if(enemies[l][n].pare == true){
				             enemies[l][n].stage = 5;
							 enemies[l][n].pare = false;
					     }
						 else {
							enemies[l][n].stage = 4; 
							enemies[l][n].pare = true;
						 }
				
					enemies[l][n].pauseTimer = 0;
				}
			}
			break;
		case 2:
            if (enemies[l][n].pauseTimer < enemies[l][n].shortPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				
				enemies[l][n].stage = 3;
				
			}
		break;
		
        case 5:
            if (enemies[l][n].pauseTimer < enemies[l][n].secondPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				
				enemies[l][n].stage = 1;
				
			}
		break;		
		case 1:
		  
		   	if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 2;
					enemies[l][n].pauseTimer = 0;
				}
			}
		  break;
		  
          case 4:
		  
		    if (enemies[l][n].pauseTimer < enemies[l][n].longPause) {
				enemies[l][n].pauseTimer++;
			} else {
				enemies[l][n].pauseTimer = 0;
				 
				    enemies[l][n].stage = 1;
					
			}	
		  break; 
		
	}
	    enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
   }
  
}

function updateSimpleCircularEnemyXY(n, l) {
	if(l==null)
		l = level;
	if (enemies[l][n].enemyType == "simpleCircularXY") {
		
		enemies[l][n].x = enemies[l][n].oldX;
		enemies[l][n].y = enemies[l][n].oldY;
		
		// stage 0
		if (enemies[l][n].stage == 0) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
				
				
				
				
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
		}

		// stage 1
		else if (enemies[l][n].stage == 1) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
		}
		//enemies[l][n].simpleX = enemies[l][n].x / 40;
		//enemies[l][n].simpleY = enemies[l][n].y / 40;
		enemies[l][n].oldX = enemies[l][n].x;
	enemies[l][n].oldY = enemies[l][n].y;
	
	var newX = enemies[l][n].radius * Math.cos(enemies[l][n].angle * (Math.PI / 180));
	var newY = enemies[l][n].radius * Math.sin(enemies[l][n].angle * (Math.PI / 180));
	    
	            enemies[l][n].x = newX + enemies[l][n].x;
	            enemies[l][n].y = newY + enemies[l][n].y;
	    
	            enemies[l][n].angle += enemies[l][n].speed;
	}
	
	    
		        //enemies[l][n].simpleX = enemies[l][n].oldX / 40;
		        //enemies[l][n].simpleY = enemies[l][n].oldY / 40;
}


function updateSimpleEnemy(n, l) {
	if(l==null)
		l = level;
	if (enemies[l][n].enemyType == "simple") {
		// stage 0
		if (enemies[l][n].stage == 0) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].endX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].endX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].endX) {
					enemies[l][n].x = enemies[l][n].endX;
					enemies[l][n].stage = 1;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].endY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].endY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].endY) {
					enemies[l][n].y = enemies[l][n].endY;
					enemies[l][n].stage = 1;
				}
			}
		}

		// stage 1
		else if (enemies[l][n].stage == 1) {
			// x
			if (enemies[l][n].startX < enemies[l][n].endX) {
				if (enemies[l][n].x > enemies[l][n].startX) {
					enemies[l][n].x -= enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x <= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startX > enemies[l][n].endX) {
				if (enemies[l][n].x < enemies[l][n].startX) {
					enemies[l][n].x += enemies[l][n].xSpeed;
				}
				if (enemies[l][n].x >= enemies[l][n].startX) {
					enemies[l][n].x = enemies[l][n].startX;
					enemies[l][n].stage = 0;
				}
			}

			// y
			if (enemies[l][n].startY < enemies[l][n].endY) {
				if (enemies[l][n].y > enemies[l][n].startY) {
					enemies[l][n].y -= enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y <= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
			else if (enemies[l][n].startY > enemies[l][n].endY) {
				if (enemies[l][n].y < enemies[l][n].startY) {
					enemies[l][n].y += enemies[l][n].ySpeed;
				}
				if (enemies[l][n].y >= enemies[l][n].startY) {
					enemies[l][n].y = enemies[l][n].startY;
					enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	}
}
function updateCircularEnemyLinear(n, l) {
	if(l==null)
		l = level;
	
	if (enemies[l][n].enemyType == "linearCircular") {
		
		enemies[l][n].x = enemies[l][n].oldX;
		enemies[l][n].y = enemies[l][n].oldY;
		
		var startX = enemies[l][n].movement[enemies[l][n].stage][0];
		var endX   = enemies[l][n].movement[enemies[l][n].stage][1];
		var startY = enemies[l][n].movement[enemies[l][n].stage][2];
		var endY   = enemies[l][n].movement[enemies[l][n].stage][3];
		var xSpeed = enemies[l][n].movement[enemies[l][n].stage][4];
		var ySpeed = enemies[l][n].movement[enemies[l][n].stage][5];
		var stages = enemies[l][n].movement.length;
		var changedStage = false;
		
		// x
		if (startX < endX) {
			if (enemies[l][n].x < endX) {
				enemies[l][n].x += xSpeed;
			}
			if (enemies[l][n].x >= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}
		else if (startX > endX) {
			if (enemies[l][n].x > endX) {
				enemies[l][n].x -= xSpeed;
			}
			if (enemies[l][n].x <= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}

		// y
		if (startY < endY) {
			if (enemies[l][n].y < endY) {
				enemies[l][n].y += ySpeed;
			}
			if (enemies[l][n].y >= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		else if (startY > endY) {
			if (enemies[l][n].y > endY) {
				enemies[l][n].y -= ySpeed;
			}
			if (enemies[l][n].y <= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	    
		enemies[l][n].oldX = enemies[l][n].x;
	    enemies[l][n].oldY = enemies[l][n].y;
	
	var newX = enemies[l][n].radius * Math.cos(enemies[l][n].angle * (Math.PI / 180));
	var newY = enemies[l][n].radius * Math.sin(enemies[l][n].angle * (Math.PI / 180));
	    
	            enemies[l][n].x = newX + enemies[l][n].x;
	            enemies[l][n].y = newY + enemies[l][n].y;
	    
	            enemies[l][n].angle += enemies[l][n].speed;
		
	}
	
	
}
function updateLinearEnemy(n, l) {
	if(l==null)
		l = level;
	
	if (enemies[l][n].enemyType == "linear") {
		var startX = enemies[l][n].movement[enemies[l][n].stage][0];
		var endX   = enemies[l][n].movement[enemies[l][n].stage][1];
		var startY = enemies[l][n].movement[enemies[l][n].stage][2];
		var endY   = enemies[l][n].movement[enemies[l][n].stage][3];
		var xSpeed = enemies[l][n].movement[enemies[l][n].stage][4];
		var ySpeed = enemies[l][n].movement[enemies[l][n].stage][5];
		var stages = enemies[l][n].movement.length;
		var changedStage = false;
		
		// x
		if (startX < endX) {
			if (enemies[l][n].x < endX) {
				enemies[l][n].x += xSpeed;
			}
			if (enemies[l][n].x >= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}
		else if (startX > endX) {
			if (enemies[l][n].x > endX) {
				enemies[l][n].x -= xSpeed;
			}
			if (enemies[l][n].x <= endX) {
				enemies[l][n].x = endX;
				enemies[l][n].stage++;
				changedStage = true;
				if (enemies[l][n].stage >= stages)
					enemies[l][n].stage = 0;
			}
		}

		// y
		if (startY < endY) {
			if (enemies[l][n].y < endY) {
				enemies[l][n].y += ySpeed;
			}
			if (enemies[l][n].y >= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		else if (startY > endY) {
			if (enemies[l][n].y > endY) {
				enemies[l][n].y -= ySpeed;
			}
			if (enemies[l][n].y <= endY) {
				enemies[l][n].y = endY;
				if (!changedStage) {
					enemies[l][n].stage++;
					if (enemies[l][n].stage >= stages)
						enemies[l][n].stage = 0;
				}
			}
		}
		enemies[l][n].simpleX = enemies[l][n].x / 40;
		enemies[l][n].simpleY = enemies[l][n].y / 40;
	}
}