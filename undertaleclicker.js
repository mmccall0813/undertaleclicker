////////////////////////////////////
//
//  Undertale Clicker
//  A parody of Cookie Clicker
//  © 2016 BlockWorld
//  
//  Undertale is love, Undertale is life.
//
////////////////////////////////////
// Variables
version = "v.0.2 (beta)"
clicks = 0;
souls = 0;
total_souls = 0;
sps = 0;
gpc = 1;
gcm_bonus = 0;
click_mult = 1;
global_mult = 1;
expps = 0;
soul = {
	"exp": 0,
	"level": 1
};
characters = ["alphys", "annoying_dog", "asgore", "asriel", "burgerpants", "chara", "flowey", "frisk", "froggit", "mettaton_ex", "monster_kid", "muffet", "napstablook", "nice_cream_guy", "papyrus", "sans", "so_sorry", "temmie", "toriel", "undyne", "w_d_gaster"]
bgs = ["", "red_", "orange_", "purple_"]
bgcolors = ["#7968ac", "#ff3333", "#cc6633", "#ff00ff"]
//Digit Grouping Function from here: http://stackoverflow.com/questions/2901102/
function digitgroup(x, d) {
	d = typeof d !== "undefined" ? d : 0;
	var parts = x.toFixed(d).split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return parts.join(".");
}
function init_game(){
	//Load item data
	for(item in items){
		items[item].cost = items[item].base_cost;
		$("#rightbar").append(
			sprintf("<div id='%s'></div>", item)
		);
		$(sprintf("#%s", item)).append("<table></table>");
		$(sprintf("#%s table", item)).append(sprintf("<tr><td rowspan='3'><img src='images/icon_%s.png' /></td><td>%s<span id='%s_count'></span></td></tr><tr><td class='itemsps' id='%s_sps'></td></tr><tr><td class='cost'>%s</td></tr>", item, items[item].name, item, item, digitgroup(items[item].cost)));
		function bi(item){
			return function(){
				buy_item(item);
			}
		}
		$(sprintf("#%s", item)).click(bi(item));
	}
	for(var a = 0; a < upgrades.length; ++a){
		$("#upgrade_bar").append(sprintf("<div id='upgrade%d'></div>", a));
		$(sprintf("#upgrade%d", a)).append("<table></table>");
		$(sprintf("#upgrade%d", a)).prop("title", upgrades[a].ftext);
		$(sprintf("#upgrade%d table", a)).append(sprintf("<tr><td>%s - %s SOULs</td></tr><tr><td class='udesc'>%s</td></tr>", upgrades[a].name, digitgroup(upgrades[a].cost), upgrades[a].description));
		$(sprintf("#upgrade%d", a)).hide();
		function bu(upgrade){
			return function(){
				buy_upgrade(upgrade);
			}
		}
		$(sprintf("#upgrade%d", a)).click(bu(a));
	}
	$("#soul_container").click(function(e){
		click_on_soul(e.pageX - $("#soul_container").offset().left, e.pageY - $("#soul_container").offset().top);
	});
	$("#soul_container").mousedown(function(){
		$("#great_character").css({"height": "360px", "top": "20px", "left": "50px"});
	});
	$("#soul_container").mouseup(function(){
		$("#great_character").css({"height": "400px", "top": "0px", "left": "30px"});
	});
	//If loading is available, load the game data.
	load_game();
	$("#save_button").click(save_game);
	$("#export_button").click(export_save);
	$("#import_button").click(show_import);
	$("#close_export").click(close_export);
	$("#import_savefile").click(import_save);
	update();
	setInterval(save_game, 60000);
	$(".version").html(version);
}
function buy_item(item){
	if(souls < items[item].cost) return;
	souls -= items[item].cost;
	items[item].count += 1;
	recalc();
}
function buy_upgrade(upgrade_id){	
	if(upgrades[upgrade_id].bought == true) return;
	if(souls < upgrades[upgrade_id].cost) return;
	if(soul.level < upgrades[upgrade_id].unlock_level) return;
	upgrades[upgrade_id].bought = true;
	souls -= upgrades[upgrade_id].cost;
	$("#upgrade" + upgrade_id).hide();
	recalc();
}
//Actual Clicking Function
function click_on_soul(x, y){
	clicks += 1;
	plus_souls = gpc * click_mult * global_mult;
	souls += plus_souls;
	total_souls += plus_souls;
	plus_markers.push(new plus_marker(x, y, plus_souls));
	soul.exp += Math.sqrt(soul.level);
	display_exp();
}
//Graphics and Interface
plus_markers = [];
marker_id = 0;
plus_marker_anims = 1000;
plus_marker_anidist = 100;
plus_marker_origradius = 100;
function plus_marker(x, y, number){
	this.anims = plus_marker_anims;
	this.number = number;
	this.id = marker_id;
	marker_id += 1;
	this.init_pos_y = y - plus_marker_origradius / 2 + Math.random() * plus_marker_origradius;
	this.pos_x = x - plus_marker_origradius / 2 + Math.random() * plus_marker_origradius;
	this.pos_y = y - plus_marker_origradius / 2 + Math.random() * plus_marker_origradius;
	this.update = update;
	function update(ms){
		if(this.anims - ms <= 0){
			//Delete it
			$("#plus_marker" + this.id).remove();
			delete plus_markers[this.id];
		}
		this.anims -= ms;
		var aniprop = this.anims / plus_marker_anims;
		this.pos_y = this.init_pos_y - plus_marker_anidist + (aniprop * aniprop * plus_marker_anidist);
		$("#plus_marker" + this.id).css("top", this.pos_y + "px");
	}
	$("#soul_container").append(sprintf(
		"<div id='plus_marker%s' class='plus_marker'>+%s</div>",
		this.id, digitgroup(this.number)
	));
	$("#plus_marker" + this.id).css("top", this.pos_y + "px");
	$("#plus_marker" + this.id).css("left", this.pos_x - $("#plus_marker" + this.id).width() / 2) + "px";
	return this;
}
function display_exp(){
	if(soul.exp >= soul.level * soul.level * 100){
		soul.level += 1;
		recalc();
	}
	$("#level").html(soul.level);
	$("#expbar").attr("max", ((soul.level * 2 - 1) * 100));
	$("#expbar").attr("value", soul.exp - ((soul.level - 1) * (soul.level - 1) * 100));
}
last_update_time = new Date();
function update(){
	var curtime = new Date();
	delta_ms = curtime.getTime() - last_update_time.getTime();
	last_update_time.setTime(curtime.getTime());
	souls += sps * global_mult * (delta_ms / 1000);
	total_souls += sps * global_mult * (delta_ms / 1000);
	soul.exp += expps * (delta_ms / 1000);
	$("#soulcount").html(sprintf("%s SOULs", digitgroup(Math.floor(souls))));
	//document.title = sprintf("%s SOULs - SOUL Clicker", digitgroup(Math.floor(souls)));
	$("#sps").html(sprintf("%s SOULs per second", digitgroup(sps * global_mult, 1)));
	display_exp();
	for(marker in plus_markers){
		plus_markers[marker].update(delta_ms);
	}
	//Scale info, from scale.js
	$("#info_soulcount").html(digitgroup(Math.floor(souls)));
	var length_comp = compare_length(soul_length * Math.floor(souls));
	$("#total_length").html(repr_length(soul_length * Math.floor(souls)));
	$("#length_comparison").html(length_comp);
	$("#comparison").html(length_comp);
	$("#total_volume").html(repr_volume(soul_volume * Math.floor(souls)));
	$("#volume_comparison").html(compare_volume(soul_volume * Math.floor(souls)));
	$("#total_weight").html(repr_weight(soul_weight * Math.floor(souls)));
	$("#weight_comparison").html(compare_weight(soul_weight * Math.floor(souls)));
	setTimeout(update, 20);	
}
function change_character2(x) {
	character = document.getElementById("great_character");
	character.src = "images/great_" + characters[x] + ".png";
}
function change_bg2(x) {
	bg = document.getElementById("background");
	bg.src = "images/" + bgs[x] + "bg.jpg";
	$("#body").css("background", bgcolors[x] + " url('images/" + bgs[x] + "bg.jpg')");
	$("#body").css("background-repeat", "no-repeat");
	$("#body").css("background-size", "100% 100%");
	$("#container").css("background", bgcolors[x]);
}