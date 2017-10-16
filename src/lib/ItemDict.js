// Dictionary of all items in The Escapists
const Item = require('./Item');
let ItemDict = [
	new Item(13, "Roll of Duct Tape"),
	new Item(25, "Crowbar"),
	new Item(12, "Timber"),
	new Item(76, "Sheet of Metal"),
	new Item(122, "Tool Handle"),
	new Item(119, "Lightweight Pickaxe"),
	new Item(115, "Flimsy Shovel"),
	new Item(114, "Lightweight Shovel"),
	new Item(62, "File"),
	new Item(121, "Lightweight Cutters"),
	new Item(120, "Flimsy Cutters"),
	new Item(61, "Sturdy Cutters"),
	new Item(181, "Multitool"),
	new Item(111, "Knuckle Duster"),
	new Item(19, "Glass Shank"),
	new Item(192, "Wooden Bat"),
	new Item(183, "Spiked Bat"),
	new Item(184, "Durable Contraband Pouch"),
	new Item(99, "Poster"),
	new Item(15, "Magazine"),
	new Item(179, "Nails"),
	new Item(112, "Grapple Head"),
	new Item(180, "Stinger Strip"),
	new Item(93, "Paper Clip"),
	new Item(4, "Inmate Outfit"),
	new Item(127, "POW Outfit"),
	new Item(50, "Book"),
	new Item(95, "Pillow"),
	new Item(144, "Plated POW Outfit"),
	new Item(129, "Padded Inmate Outfit"),
	new Item(130, "Plated Inmate Outfit"),
	new Item(128, "Cushioned Inmate Outfit"),
	new Item(118, "Flimsy Pickaxe"),
	new Item(39, "Sturdy Pickaxe"),
	new Item(5, "Sturdy Shovel"),
	new Item(94, "Razor Blade"),
	new Item(124, "Comb Blade"),
	new Item(110, "Whip"),
	new Item(17, "Comb"),
	new Item(98, "Wire"),
	new Item(10, "Foil"),
	new Item(108, "Nunchucks"),
	new Item(72, "Timber Brace"),
	new Item(75, "Unvarnished Chair"),
	new Item(185, "Cutting Floss"),
	new Item(106, "Game Set"),
	new Item(18, "Glass Shard"),
	new Item(113, "Grappling Hook"),
	new Item(3, "Guard Outfit"),
	new Item(31, "Hoe"),
	new Item(36, "Jar of Ink"),
	new Item(0, "Cell Key"),
	new Item(7, "Utility Key"),
	new Item(6, "Entrance Key"),
	new Item(1, "Staff Key"),
	new Item(43, "Work Key"),
	new Item(84, "Molten Plastic"),
	new Item(96, "Toothbrush"),
	new Item(8, "Lighter"),
	new Item(90, "Cup"),
	new Item(23, "Plastic Spoon"),
	new Item(27, "Plastic Knife"),
	new Item(28, "Plastic Fork"),
	new Item(165, "Family Photo"),
	new Item(116, "Fake Wall Block"),
	new Item(174, "Fake Fence"),
	new Item(137, "Fabric"),
	new Item(44, "Length of Rope"),
	new Item(92, "Circuit Board"),
	new Item(109, "Comb Shiv"),
	new Item(125, "Contraband Pouch"),
	new Item(66, "Cooked Food"),
	new Item(148, "Cookie"),
	new Item(190, "Dodo Donut"),
	new Item(157, "Deluxe Toilet Roll"),
	new Item(126, "Bed Dummy"),
	new Item(69, "Bed Sheet"),
	new Item(73, "Battery"),
	new Item(29, "Baton"),
	new Item(103, "Sock Mace"),
	new Item(46, "Bar of Chocolate"),
	new Item(151, "Bananas"),
	new Item(56, "Balsa Wood"),
	new Item(79, "Bag of Cement"),
	new Item(167, "Dog Tag"),
	new Item(64, "Dirty Inmate Outfit"),
	new Item(26, "Dirt"),
	new Item(153, "ID Papers"),
	new Item(38, "Infirmary Overalls"),
	new Item(101, "Paper Mache"),
	new Item(162, "Pedicure Kit"),
	new Item(191, "Penarium Barrel"),
	new Item(164, "Pocket Watch"),
	new Item(161, "Postcard"),
	new Item(187, "Raft Base"),
	new Item(67, "Vent Cover"),
	new Item(149, "Muffin"),
	new Item(131, "Medkit"),
	new Item(170, "Mango"),
	new Item(261, "Magnet"),
	new Item(146, "Sponge"),
	new Item(68, "Stepladder"),
	new Item(45, "Tube of Toothpaste"),
	new Item(51, "Tube of Super Glue"),
	new Item(52, "Tub of Talcum Powder"),
	new Item(37, "Tub of Bleach"),
	new Item(40, "Trowel"),
	new Item(97, "Toothbrush Shiv"),
	new Item(159, "Teddy Bear"),
	new Item(176, "Uncooked Burrito"),
	new Item(65, "Uncooked Food"),
	new Item(152, "Unsigned ID Papers"),
	new Item(175, "Poncho"),
	new Item(189, "Zipline Hook"),
	new Item(9, "Watch"),
	new Item(53, "Wad of Putty"),
	new Item(32, "Broom"),
	new Item(24, "Screwdriver"),
	new Item(14, "Shaving Cream"),
	new Item(81, "Sheet Rope"),
	new Item(80, "Plunger"),
	new Item(186, "Powered Screwdriver"),
	new Item(60, "Flashlight"),
	new Item(34, "Hammer"),
	new Item(35, "Mop"),
	new Item(150, "Exotic Feather"),
	new Item(16, "Bottle of Sleeping Pills"),
	new Item(10, "Bottle of Medicine"),
	new Item(177, "Burrito"),
	new Item(54, "Candle"),
	new Item(105, "Cup of Molten Chocolate"),
	new Item(260, "Baseball Bat"),
	new Item(0, "Cell Key"),
	new Item(2, "Pack of Mints"),
	new Item(11, "Stun Rod"),
	new Item(20, "Dead Rat"), // Hidden item?
	new Item(21, "Fire Extinguisher"), // Hidden item? in the .dat file but not game
	new Item(22, "Radio Reciever"),
	new Item(30, "Spatula"),
	new Item(33, "Shears"),
	new Item(41, "Wall Block"),
	new Item(42, "Concrete"),
	new Item(47, "Roll of Toilet Paper"),
	new Item(48, "Soap"),
	new Item(49, "Pack of Playing Cards"),
	new Item(57, "Sail"),
	new Item(58, "Plastic Work Key"),
	new Item(59, "Work Key Mold"),
	new Item(63, "Dirty Guard Outfit"),
	new Item(70, "Woodshop key"), // Another hidden item
	new Item(71, "Staff Key Mold"),
	new Item(74, "Sock"),
	new Item(77, "License Plate"),
	new Item(78, "Metalshop key"), // Another hidden item
	new Item(82, "Utility Key Mold"),
	new Item(83, "Cell Key Mold"),
	new Item(85, "Plastic Utility Key"),
	new Item(86, "Plastic Staff Key"),
	new Item(87, "Plastic Cell Key"),
	new Item(88, "Plastic Entrance Key"),
	new Item(89, "Entrance Key Mold"),
	new Item(91, "Small Speaker"), // Hidden item
	new Item(100, "Foil"),
	new Item(102, "DIY Tattoo Kit"),
	new Item(104, "Super Sock Mace"),
	new Item(107, "Die"),
	new Item(117, "Fake Vent Cover"),
	new Item(123, "Crafting Note"),
	new Item(132, "Hat"),
	new Item(133, "Vest"),
	new Item(134, "Underpants"),
	new Item(135, "Shorts"),
	new Item(136, "Needle & Thread"),
	new Item(138, "Package (1)"),
	new Item(139, "Package (2)"),
	new Item(140, "Package (3)"),
	new Item(141, "Letter"),
	new Item(142, "Cushioned POW Outfit"),
	new Item(143, "Padded POW Outfit"),
	new Item(145, "TV Remote"),
	new Item(147, "DVD"),
	new Item(154, "Green Herb"),
	new Item(155, "Red Herb"),
	new Item(156, "Silk Handkerchief"),
	new Item(158, "Dental Floss"),
	new Item(160, "Hand Cream"),
	new Item(163, "Hand Fan"),
	new Item(166, "Service Medal"),
	new Item(168, "Vines"),
	new Item(169, "Coconut"),
	new Item(171, "Red Chili"),
	new Item(172, "Sand"),
	new Item(173, "Sombrero"),
	new Item(178, "Tribal Drum"),
	new Item(182, "Wooden Bat"),
	new Item(188, "Makeshift Raft"),
	new Item(193, "Mixing Container"),
	new Item(194, "Corrugated Iron"),
	new Item(195, "Explosive Mix"),
	new Item(196, "Fertilizer"),
	new Item(197, "Makeshift Explosive Round"),
	new Item(198, "Explosive Compound"),
	new Item(199, "Makeshift Fuse"),
	new Item(200, "Makeshift Tank Barrel"),
	new Item(201, "Makeshift Tank Firing Base"),
	new Item(202, "Makeshift Tank Turret"),
	new Item(203, "Metal Cone"),
	new Item(204, "Metal Tube"),
	new Item(205, "Potassium"),
	new Item(206, "Sovereign Ring"),
	new Item(207, "Taper"),
	new Item(208, "Trash Bag"),
	new Item(209, "Aftershave"),
	new Item(210, "Prisoner Outfit"),
	new Item(211, "Soldier Outfit"),
	new Item(212, "Tape Player"),
	new Item(213, "Voice Recording"),
	new Item(214, "Memoir Tapes"),
	new Item(215, "Tux Outfit"),
	new Item(216, "Dirty Tux Outfit"),
	new Item(217, "Blue Putty"),
	new Item(218, "Sticky Tape"),
	new Item(219, "Dirty Glass"),
	new Item(220, "Keycard"),
	new Item(221, "Fake Fingerprint"),
	new Item(222, "Bomb Surprise"),
	new Item(224, "Fake Decorated Egg"),
	new Item(225, "Flamethrower"),
	new Item(226, "Hairspray"),
	new Item(227, "Fake Shoe"),
	new Item(228, "Henchman Outfit"),
	new Item(229, "Dirty Henchman Outfit"),
	new Item(230, "Shoe Knife"),
	new Item(231, "Cutting Laser Watch"),
	new Item(232, "Metal Rimmed Hat"),
	new Item(233, "Pork Pie Hat"),
	new Item(234, "Stun Pen"),
	new Item(235, "Garotting Wire Watch"),
	new Item(236, "Weak Fingerprint"),
	new Item(237, "Sharp Tea Tray"),
	new Item(238, "Elf Outfit"),
	new Item(239, "Guard Elf Outfit"),
	new Item(240, "Bulbs"),
	new Item(241, "Cracker"),
	new Item(242, "Fairy Lights"),
	new Item(243, "Glitter"),
	new Item(244, "Candy Cane Lever"),
	new Item(245, "Giant Lollipop"),
	new Item(246, "Mince Pie"),
	new Item(247, "Presents"),
	new Item(248, "Stocking"),
	new Item(249, "Tinsel"),
	new Item(250, "Wooden Ball"),
	new Item(251, "Wooden Block"),
	new Item(252, "Wooden Doll"),
	new Item(253, "Wooden Scooter"),
	new Item(254, "Wrapping Paper"),
	new Item(255, "Naughty Letter"),
	new Item(256, "Nice Letter"),
	new Item(257, "Chisel"),
	new Item(258, "Wooden Joystick"),
	new Item(259, "Worms Game"),
	new Item(261, "Magnet"),
	new Item(262, "Cork"),
	new Item(263, "Empty Bottle"),
	new Item(264, "Work Hat"),
	new Item(265, "Needle"),
	new Item(266, "Magnetized Needle"),
	new Item(267, "Fuel"),
	new Item(268, "High Beam Flashlight"),
	new Item(269, "Halogen Bulb"),
	new Item(270, "Navigation Lighting"),
	new Item(271, "Reindeer Bowl"),
	new Item(272, "Bottle of Water"),
	new Item(273, "Bowl of Water"),
	new Item(274, "Raw Nasty Carrots"),
	new Item(275, "Juicy Cooked Carrots"),
	new Item(276, "Makeshift Compass"),
	new Item(277, "Red Herring"),
	new Item(278, "Thruster")
];
// Sort according to name
ItemDict.sort((a, b) => {
	if (a.name < b.name) return -1;
	if (a.name > b.name) return 1;
	return 0;
});
module.exports = ItemDict;