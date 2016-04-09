items = {	
	"cursor": {
		"name": "Cursor",
		"base_cost": 10,
		"sps": 0.2,
		"spslist": [0.2],
		"count": 0
	},
	"human": {
		"name": "Human",
		"base_cost": 50,
		"sps": 1.0,
		"spslist": [1.0, 1.5, 3.0, 6.0, 12.0, 24.0, 48.0, 96.0, 192.0, 384.0, 768.0, 1536.0, 6144.0, 24864.0, 99456.0, 994560.0],
		"count": 0
	},
	"garbage_dump": {
		"name": "Garbage Dump",
		"base_cost": 200,
		"sps": 2.5,
		"spslist": [2.5, 3.0, 6.0, 12.0, 24.0, 48.0],
		"count": 0
	},
	"tem_village": {
		"name": "Tem Village",
		"base_cost": 1500,
		"sps": 10,
		"spslist": [10, 14, 28, 56, 112, 224],
		"count": 0
	},
	"fountain": {
		"name": "Royal Fountain",
		"base_cost": 8000,
		"sps": 25,
		"spslist": [25, 40, 80, 160, 320, 640],
		"count": 0
	},
	"artifact_room": {
		"name": "Artifact Room",
		"base_cost": 36000,
		"sps": 60,
		"spslist": [60, 90, 180, 360, 720, 1440],
		"count": 0
	},
	"bake_sale": {
		"name": "Spider Bake Sale",
		"base_cost": 150000,
		"sps": 200,
		"spslist": [200, 300, 600, 1200, 2400, 4800],
		"count": 0
	},
	"cloning": {
		"name": "Lab",
		"base_cost": 999999,
		"sps": 1200,
		"spslist": [1200, 1800, 3600, 7200, 14400, 28800],
		"count": 0
	},
	"ruins": {
		"name": "The Ruins",
		"base_cost": 5256000,
		"sps": 5840,
		"spslist": [5840, 9000, 18000, 36000, 72000, 144000],
		"count": 0
	},
};
upgrades = [
	//Human
	{
		"name": "Golden Flower",
		"description": "Makes Humans gain <b>0.5</b> base SpS.",
		"ftext": "Golden Flowers fill you with DETERMINATION.",
		"upgrades": ["human"],
		"cost": 400,
		"unlock_level": 2,
		"bought": false
	},
	{
		"name": "Stick",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "Its bark is worse than its bite.",
		"upgrades": ["human"],
		"cost": 800,
		"unlock_level": 4,
		"bought": false
	},
	{
		"name": "Bandage",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "It has already been used many times.",
		"upgrades": ["human"],
		"cost": 2000,
		"unlock_level": 7,
		"bought": false
	},
	{
		"name": "Toy Knife",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "Made of plastic. A rarity nowadays.",
		"upgrades": ["human"],
		"cost": 5000,
		"unlock_level": 12,
		"bought": false
	},
	{
		"name": "Faded Ribbon",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "If you're cuter, monsters won't hit you as hard.",
		"upgrades": ["human"],
		"cost": 20000,
		"unlock_level": 17,
		"bought": false
	},
	{
		"name": "Ballet Shoes",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "These used shoes make you feel incredibly dangerous.",
		"upgrades": ["human"],
		"cost": 800000,
		"unlock_level": 29,
		"bought": false
	},
	{
		"name": "Old Tutu",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "Finally, a protective piece of armor.",
		"upgrades": ["human"],
		"cost": 4000000,
		"unlock_level": 34,
		"bought": false
	},
	{
		"name": "Torn Notebook",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "Contains illegible scrawls.",
		"upgrades": ["human"],
		"cost": 30000000,
		"unlock_level": 40,
		"bought": false
	},
	{
		"name": "Cloudy Glasses",
		"description": "Makes Humans <b>twice</b> as efficient.",
		"ftext": "Glasses marred with wear.",
		"upgrades": ["human"],
		"cost": 324000000,
		"unlock_level": 50,
		"bought": false
	},
	{
		"name": "Empty Gun",
		"description": "Makes Humans <b>four times</b> as efficient.",
		"ftext": "An antique revolver. It has no ammo. Must be used precisely, or damage will be low.",
		"upgrades": ["human"],
		"cost": 400000000000,
		"unlock_level": 80,
		"bought": false
	},
	{
		"name": "Cowboy Hat",
		"description": "Makes Humans <b>four times</b> as efficient.",
		"ftext": "This battle-worn hat makes you want to grow a beard.",
		"upgrades": ["human"],
		"cost": 4000000000000,
		"unlock_level": 90,
		"bought": false
	},
	//Garbage Dump
	{
		"name": "Alphys",
		"description": "Makes garbage dumps gain <b>0.5</b> base SpS.",
		"ftext": "An Alphys to visit the garbage dump.",
		"upgrades": ["garbage_dump"],
		"cost": 1000,
		"unlock_level": 5,
		"bought": false
	},
	{
		"name": "Undyne",
		"description": "Makes garbage dumps <b>twice</b> as efficient.",
		"ftext": "An Undyne to visit the garbage dump with Alphys.",
		"upgrades": ["garbage_dump"],
		"cost": 3000,
		"unlock_level": 10,
		"bought": false
	},
	{
		"name": "Astronaut Food",
		"description": "Makes garbage dumps <b>twice</b> as efficient.",
		"ftext": "For feeding a pet astronaut.",
		"upgrades": ["garbage_dump"],
		"cost": 15000,
		"unlock_level": 16,
		"bought": false
	},
	{
		"name": "Anime",
		"description": "Makes garbage dumps <b>twice</b> as efficient.",
		"ftext": "Stay inside and watch anime like a total loser!",
		"upgrades": ["garbage_dump"],
		"cost": 80000,
		"unlock_level": 22,
		"bought": false
	},
	{
		"name": "Yellow Names",
		"description": "Makes garbage dumps <b>twice</b> as efficient.",
		"ftext": "I hope you're satisfied.",
		"upgrades": ["garbage_dump"],
		"cost": 600000,
		"unlock_level": 28,
		"bought": false
	},
	//Tem Village
	{
		"name": "Tem Shop",
		"description": "Makes Tem villages gain <b>4</b> base SpS.",
		"ftext": "hOI!! welcom to... da TEM SHOP!!!",
		"upgrades": ["tem_village"],
		"cost": 10000,
		"unlock_level": 15,
		"bought": false
	},
	{
		"name": "Bob",
		"description": "Makes Tem villages <b>twice</b> as efficient.",
		"ftext": "Hi. I'm Bob.",
		"upgrades": ["tem_village"],
		"cost": 90000,
		"unlock_level": 23,
		"bought": false
	},
	{
		"name": "Ragel",
		"description": "Makes Tem villages <b>twice</b> as efficient.",
		"ftext": "Whatever could it mean?",
		"upgrades": ["tem_village"],
		"cost": 400000,
		"unlock_level": 27,
		"bought": false
	},
	{
		"name": "Temmie Armor",
		"description": "Makes Tem villages <b>twice</b> as efficient.",
		"ftext": "The things you can do with a college education!",
		"upgrades": ["tem_village"],
		"cost": 1600000,
		"unlock_level": 32,
		"bought": false
	},
	{
		"name": "Premiem Tem Flake",
		"description": "Makes Tem villages <b>twice</b> as efficient.",
		"ftext": "FOOB!!!",
		"upgrades": ["tem_village"],
		"cost": 5000000,
		"unlock_level": 28,
		"bought": false
	},
	//Royal Fountain
	{
		"name": "Waterfall Source",
		"description": "Makes fountains gain <b>15</b> base SpS.",
		"ftext": "SOULs that have fresh water in them are healthier in general. Or just plumper, I can't tell.",
		"upgrades": ["fountain"],
		"cost": 50000,
		"unlock_level": 20,
		"bought": false
	},
	{
		"name": "Geyser",
		"description": "Makes fountains <b>twice</b> as efficient.",
		"ftext": "Agitating the water makes it more prone to inducing the chemical reactions required to create and sustain DETERMINATION.",
		"upgrades": ["fountain"],
		"cost": 256000,
		"unlock_level": 26,
		"bought": false
	},
	{
		"name": "Old Faithful",
		"description": "Makes fountains <b>twice</b> as efficient.",
		"ftext": "Agitating the water even more gives it even more energy.",
		"upgrades": ["fountain"],
		"cost": 1250000,
		"unlock_level": 31,
		"bought": false
	},
	{
		"name": "Fountain of Youth",
		"description": "Makes fountains <b>twice</b> as efficient.",
		"ftext": "Prevents old Monsters' SOULs from turning into dust.",
		"upgrades": ["fountain"],
		"cost": 24000000,
		"unlock_level": 39,
		"bought": false
	},
	{
		"name": "Mettaton Statue",
		"description": "Makes fountains <b>twice</b> as efficient.",
		"ftext": "Sexy.",
		"upgrades": ["fountain"],
		"cost": 400000000,
		"unlock_level": 52,
		"bought": false
	},
	//Artifact Room
	{
		"name": "Annoying Dog",
		"description": "Makes artifact rooms gain <b>30</b> base SpS.",
		"ftext": "You're carrying too many dogs.",
		"upgrades": ["artifact_room"],
		"cost": 180000,
		"unlock_level": 25,
		"bought": false
	},
	{
		"name": "Dog Residue",
		"description": "Makes artifact rooms <b>twice</b> as efficient.",
		"ftext": "Shiny trail left behind by a dog.",
		"upgrades": ["artifact_room"],
		"cost": 2000000,
		"unlock_level": 33,
		"bought": false
	},
	//Spider Bake Sale
	{
		"name": "Advertisement",
		"description": "Makes Spider Bake Sales gain <b>100</b> base SpS.",
		"ftext": "Come eat food made by spiders, for spiders, of spiders!",
		"upgrades": ["bake_sale"],
		"cost": 1000000,
		"unlock_level": 30,
		"bought": false
	},
	{
		"name": "Croissant",
		"description": "Makes Spider Bake Sales <b>twice</b> as efficient.",
		"ftext": "It looks like some powerful bracelet.",
		"upgrades": ["bake_sale"],
		"cost": 9600000,
		"unlock_level": 36,
		"bought": false
	},
	{
		"name": "Muffet's Pet",
		"description": "Makes Spider Bake Sales <b>twice</b> as efficient.",
		"ftext": "Ahuhuhu~",
		"upgrades": ["bake_sale"],
		"cost": 160000000,
		"unlock_level": 47,
		"bought": false
	},
	//Lab
	{
		"name": "Instant Noodles",
		"description": "Makes labs gain <b>600</b> base SpS.",
		"ftext": "They're better dry.",
		"upgrades": ["cloning"],
		"cost": 6666666,
		"unlock_level": 35,
		"bought": false
	},
	{
		"name": "True Lab",
		"description": "Makes labs <b>twice</b> as efficient.",
		"ftext": "I KNOW WHAT YOU DID",
		"upgrades": ["cloning"],
		"cost": 128000000,
		"unlock_level": 46,
		"bought": false
	},
	{
		"name": "Popato Chisps",
		"description": "Makes labs <b>twice</b> as efficient.",
		"ftext": "Regular old popato chisps.",
		"upgrades": ["cloning"],
		"cost": 900000000,
		"unlock_level": 57,
		"bought": false
	},
	//The Ruins
	{
		"name": "Monster Candy",
		"description": "Makes The Ruins <b>twice</b> as efficient.",
		"ftext": "Has a distinct, non-licorice flavor.",
		"upgrades": ["ruins"],
		"cost": 8000000000,
		"unlock_level": 67,
		"bought": false
	},
	{
		"name": "Napstablook",
		"description": "Makes The Ruins <b>twice</b> as efficient.",
		"ftext": "REALLY NOT FEELIN UP TO IT RIGHT NOW. SORRY.",
		"upgrades": ["ruins"],
		"cost": 200000000000,
		"unlock_level": 78,
		"bought": false
	},
];
