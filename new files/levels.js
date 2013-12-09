// 0 means empty
// 1 means wall
// 2 means destructible wall

var levelmaps = 
[
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,0,0,0],
		[0,0,1,1,1,0,1,0,0,0],
		[0,0,2,2,0,0,2,0,0,0],
		[0,0,2,2,0,0,2,0,0,0],
		[0,0,1,1,1,0,1,0,0,0],
		[0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],

	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,1,1,0,0,1,1,0,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,0,0,0,2,2,0,0,0,0],
		[0,0,0,0,2,2,0,0,0,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,0,1,1,0,0,1,1,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],

	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,2,0,0,0,0,0,0,0,0],
		[0,2,0,0,0,1,1,2,1,1],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,1,2,1,1,0,0,0,2,0],
		[0,0,0,0,0,0,0,0,2,0],
		[0,0,0,0,0,0,0,0,0,0]
	],

	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,1,1,1,1,1,1,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[2,2,1,1,0,0,1,1,2,2],
		[0,0,1,1,0,0,1,1,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],

	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,1,0,0,1,0,0,0],
		[1,2,1,1,0,0,1,1,2,1],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[1,2,1,1,0,0,1,1,2,1],
		[0,0,0,1,0,0,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,1,2,2,1,0,0,0],
		[0,0,0,2,2,2,2,0,0,0],
		[0,0,0,2,2,2,2,0,0,0],
		[0,0,0,1,2,2,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,1,2,2,1,0,0,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,0,0,0,0,0,0,2,0,0],
		[0,0,0,0,0,0,0,2,0,0],
		[0,0,1,0,0,0,0,1,0,0],
		[0,0,0,1,2,2,1,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,1,0,0,2,0,0],
		[0,0,0,1,1,0,0,0,0,0],
		[0,0,1,1,0,0,0,1,1,0],
		[0,1,1,0,0,0,1,1,0,0],
		[0,0,0,0,0,1,1,0,0,0],
		[0,0,2,0,0,1,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,0,0],
		[0,0,0,0,0,0,0,1,1,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0],
		[0,1,1,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	],
	//1
	[
		[0,0,0,0,0,0,0,0,0,0],
		[0,0,1,0,0,0,0,0,0,0],
		[0,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0],
		[0,0,0,0,0,0,1,0,0,0],
		[0,0,0,0,0,0,0,1,0,0],
		[0,0,0,0,0,0,0,0,0,0]
	]
];

// player initial position for each level
var levelPlayerTank =
[
	[100,100],
	[100,100],
	[150,300],
	[100,100],
	[100,100],
	[100,100],
	[100,100],
	[100,100],
	[100,100],
	[100,100]
];

// enemies initial position for each level
// [x,y,type]
var levelEnemyTanks = 
[
	[[500,500,0],[600,400,0],[400,100,0]], //done
	[[100,500,0],[600,100,0],[600,500,0],[430,300,0]], //done
	[[100,500,0],[200,500,0],[300,500,0],[400,500,0],[500,100,0]], //done
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]],
	[[100,100,0],[200,100,0],[300,100,0]]
];

var levelsColors =
[
	["yellow","red"],
	["yellow","red"],
	["orange","red"],
	["orange","red"],
	["green","red"],
	["green","red"],
	["blue","red"],
	["blue","red"],
	["cyan","red"],
	["cyan","red"]
];

//[x, y, upgradeLevel]
var bulletUpgrades = 
[
	[],
	[],
	[300, 100, 2],
	[],
	[],
	[200, 100, 3],
	[],
	[],
	[],
	[]
]

//[x, y, type]
var powerUps = 
[
	[[]],
	[[300, 200, 1]],
	[[550, 100, 0]],
	[[300, 100, 0]],
	[[]],
	[[300,100,0],[300,300,1]],
	[[]],
	[[]],
	[[]],
	[[]]
]