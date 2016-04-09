var soul_volume = 0.01601725;  //Volume in m^3
var soul_length = 0.2875;  //Length in metres
var soul_area = 0.07065; //Area in m^2
function show_info(){
	$("#info").show();
	$("#info").css("height", $("#centre").height() - 24);
	$("#info").css("width", Math.min(400, $("#centre").width() - 44));
	$("#info").css("top", "0px");
	$("#info").css("left", $("#centre").width() / 2 - $("#info").width() / 2 - 22);
}
function hide_info(){
	$("#info").hide();
}
function change_character(){
	$("#characters").show();
	$("#characters").css("top", "0px");
}
function hide_characters(){
	$("#characters").hide();
}
function change_bg(){
	$("#bgs").show()
	$("#bgs").css("top", "0px");
}
function hide_bgs(){
	$("#bgs").hide();
}
