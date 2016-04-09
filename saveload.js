//Local storage in saving
function save_game(){
	//Store all saved data.
	localStorage["undertaleclicker.soul.level"] = soul.level;
	localStorage["undertaleclicker.soul.exp"] = soul.exp;
	localStorage["undertaleclicker.souls"] = souls;
	localStorage["undertaleclicker.total_souls"] = total_souls;
	for(item in items){
		localStorage["undertaleclicker.items." + item + ".count"] = items[item].count;
	}
	for(var a = 0; a < upgrades.length; ++a){
		localStorage["undertaleclicker.upgrades." + a + ".bought"] = upgrades[a].bought;
	}
	$("#save_dialog").show();
	setTimeout(function(){$("#save_dialog").hide();}, 3000);
}
function load_game(){	
	if(localStorage.getItem("undertaleclicker.soul.level") !== null)
		soul.level = parseFloat(localStorage["undertaleclicker.soul.level"]);
	if(localStorage.getItem("undertaleclicker.soul.exp") !== null)
		soul.exp = parseFloat(localStorage["undertaleclicker.soul.exp"]);
	if(localStorage.getItem("undertaleclicker.souls") !== null)
		souls = parseFloat(localStorage["undertaleclicker.souls"]);
	if(localStorage.getItem("undertaleclicker.total_souls") !== null)
		total_souls = parseFloat(localStorage["undertaleclicker.total_souls"]);
	for(item in items){
		if(localStorage.getItem("undertaleclicker.items." + item + ".count") !== null){
			items[item].count = parseInt(localStorage["undertaleclicker.items." + item + ".count"]);
			if(items[item].count > 0) $("#" + item + "_count").html(" - " + items[item].count);
		}
	}
	for(var a = 0; a < upgrades.length; ++a){
		if(localStorage.getItem("undertaleclicker.upgrades." + a + ".bought") === "true"){
			upgrades[a].bought = true;
		}
	}
	recalc();
}
function reset_game(){
	soul.level = 1;
	soul.exp = 0;
	souls = 0;
	total_souls = 0;
	for(item in items){
		items[item].count = 0;
	}
	for(upgrade in upgrades){
		upgrades[upgrade].bought = false;
	}
	recalc();
}
function query_reset(){
	if(confirm("Really reset your game?")){
		reset_game();
	}
}
// Text import/export
savetextstring = "0123456789.-,|e`";
savetextmap = {
	"0": "0000",
	"1": "0001",
	"2": "0010",
	"3": "0011",
	"4": "0100",
	"5": "0101",
	"6": "0110",
	"7": "0111",
	"8": "1000",
	"9": "1001",
	".": "1010", //Decimal
	"-": "1011", //Negative
	",": "1100", //Level 2 Separator
	"|": "1101", //Level 1 Separator
	"e": "1110", //Exponent
	"`": "1111"  //Symbol Escape
};
base64string = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/=";
//base64string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
//This encoding type is extensible from base16!
/////////
// Save export starts here.
/////////
function sstr_to_bin(sstr){
	var bin = "";
	for(var a = 0; a < sstr.length; ++a){
		if(sstr[a] == "+") continue; //Ignore plus signs completely
		if(savetextstring.indexOf(sstr[a]) == -1){
			return "Export error";
		}
		bin += savetextmap[sstr[a]];
	}
	return bin;
}
function bin_to_b64(bin){
	if(bin == "Export error") return bin;
	if(bin.length % 2 != 0){
		return "Export error";
	}
	var b64 = "";
	var padding = "";
	while(bin.length % 6 != 0){
		bin += "00";
		padding += base64string[64];
	}
	var strlength = 0;
	for(; strlength < bin.length; strlength += 6){
		b64 += base64string[parseInt(bin.substr(strlength, 6), 2)];
	}
	return b64 + padding;
}
function sstr_to_b64(sstr){
	return bin_to_b64(sstr_to_bin(sstr));
}
function export_save(){
	var d01_level = soul.level;
	var d02_exp = Math.floor(soul.exp);
	var d03_souls = Math.floor(souls);
	var d04_items = "";
	for(item in items){
		d04_items += items[item].count + ",";
	}
	d04_items = d04_items.slice(0, -1); //Remove trailing
	var d05_totalsouls = Math.floor(total_souls);
	var d06_upgrades = "";
	for(var a = 0; a < upgrades.length; ++a){
		if(upgrades[a].bought){
			d06_upgrades += a + ",";
		}
	}
	d06_upgrades = d06_upgrades.slice(0, -1); //Remove trailing
	var save_string = sprintf("%s|%s|%s|%s|%s|%s", d01_level, d02_exp, d03_souls, d04_items, d05_totalsouls, d06_upgrades);
	$("#export_string").val(sstr_to_b64(save_string));
	$("#export_dialog").toggle();
	$("#import_dialog").hide();
}
function close_export(){
	$("#export_dialog").hide();
}
/////////
// Save import starts here.
/////////
function show_import(){
	$("#import_dialog").toggle();
	$("#export_dialog").hide();
}
function b64_to_bin(b64){
	var bin = "";
	for(var a = 0; a < b64.length; ++a){
		if(b64[a] == "="){
			bin = bin.slice(0, -2);
			continue;
		}
		for(var b = 0; b < 64; ++b){
			if(b64[a] == base64string[b]){
				bin += sprintf("%06b", b);
				break;
			}
		}
	}
	return bin;
}
function bin_to_sstr(bin){
	var sstr = "";
	for(var a = 0; a < bin.length; a += 4){
		sstr += savetextstring[parseInt(bin.substr(a, 4), 2)];
	}
	return sstr;
}
function b64_to_sstr(b64){
	return bin_to_sstr(b64_to_bin(b64));
}
function import_save(){
	var save_b64 = $("#import_string").val();
	var save_string = b64_to_sstr(save_b64);
	var data = save_string.split("|");
	var d01_level = parseInt(data[0]);
	if(isNaN(d01_level)) d01_level = 0;
		soul.level = d01_level;
	var d02_exp = parseInt(data[1]);
	if(isNaN(d02_exp)) d02_exp = 0;
		souly.exp = d02_exp;
	var d03_souls = parseFloat(data[2]);
	if(isNaN(d03_souls)) d03_souls = 0;
		souls = d03_souls;
	var d04_items = data[3].split(",");
	var seeker = 0;
	for(item in items){
		if(typeof(d04_items[seeker]) != "undefined"){
			items[item].count = parseInt(d04_items[seeker]);
			seeker += 1;
		}else{
			items[item].count = 0;
		}
	}
	var d05_totalsouls = parseFloat(data[4]);
	if(isNaN(d05_totalsouls)) d05_totalsouls = 0;
		total_souls = d05_totalsouls;
	if(data[5] != null){	
		var d06_upgrades = data[5].split(",");
		for(var a = 0; a < d06_upgrades.length; ++a){
			var upgrade = parseInt(d06_upgrades[a]);
			if(!isNaN(upgrade)){
				upgrades[upgrade] = true;
			}
		}
	}
	recalc();
	$("#import_dialog").hide();
}