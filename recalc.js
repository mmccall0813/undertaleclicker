// Recalculation functions.
function recalc(){
	recalc_sps();
	recalc_spc();
	recalc_click_mult();
	recalc_global_mult();
	for(item in items){
		recalc_itemcost(item);
	}
	unlock_upgrades();
}
function recalc_spc(){	
	var new_spc = soul.level;
	recalc_scm();
	new_spc += scm_bonus;
	//After level 100, start giving click bonus as a proportion of SpS.
	if(soul.level > 100){
		new_spc += sps * (soul.level / 100 - 1);
	}
	spc = new_spc;
}
function recalc_sps(){
	sps = 0;
	for (item in items){
		//Calculate total upgraded cost
		upgraded = 0;
		for(var a = 0; a < upgrades.length; ++a){
			if(upgrades[a].bought == true && $.inArray(item, upgrades[a].upgrades) != -1){
				++upgraded;
			}
		}
		items[item].sps = items[item].spslist[upgraded];
		if(item == "cursor"){
			sps += items[item].sps * soul.level * click_mult * items[item].count;
			$(sprintf("#%s_sps", item)).html(sprintf("Produces %s SpS", digitgroup(items[item].sps * soul.level * click_mult * global_mult, 1)));
		}else{
			sps += items[item].sps * items[item].count;
			$(sprintf("#%s_sps", item)).html(sprintf("Produces %s SpS", digitgroup(items[item].sps * global_mult, 1)));
		}
	}
	expps = items["cursor"].count / 5;
	$("#sps").html(sprintf("%s SOULs per second", digitgroup(sps * global_mult, 1)));
}
function recalc_scm(){	
	total_generators = 0;
	for (item in items){
		total_generators += items[item].count;
	}
	level_mult = 0;
	if(soul.level >= 10 && soul.level < 20)
		level_mult = (soul.level - 10) * 0.1 + 0;
	else if(soul.level >= 20 && soul.level < 40)
		level_mult = (soul.level - 20) * 0.2 + 1;
	else if(soul.level >= 40 && soul.level < 60)
		level_mult = (soul.level - 40) * 0.5 + 5;
	else if(soul.level >= 60 && soul.level < 70)
		level_mult = (soul.level - 60) * 1.0 + 15;
	else if(soul.level >= 70 && soul.level < 90)
		level_mult = (soul.level - 70) * 2.5 + 25;
	else if(soul.level >= 90 && soul.level < 100)
		level_mult = (soul.level - 90) * 5.0 + 75;
	else if(soul.level >= 100)
		level_mult = 125;
	scm_bonus = total_generators * level_mult;
	// 0, 1, 3, 5, 10, 15, 25, 50, 75, 125
}
function recalc_click_mult(){
	click_mult = 1;
	if(soul.level >= 30 && soul.level < 80)
		click_mult = (soul.level - 30) * 0.1 + 1;
	else if(soul.level >= 80 && soul.level < 100)
		click_mult = (soul.level - 80) * 0.2 + 6;
	else if(soul.level >= 100)
		click_mult = 10;
}
function recalc_global_mult(){	
	global_mult = Math.max(1, (soul.level) * 0.02);
}
function recalc_itemcost(item){	
	//items[item].cost = Math.floor(items[item].base_cost * Math.pow(1.1, items[item].count));
	//New experimental cost formula
	var damping_factor = 10;
	items[item].cost = Math.floor( items[item].base_cost * Math.pow(2, Math.pow(items[item].count + damping_factor, 0.5) - Math.pow(damping_factor, 0.5)) )
	$("#" + item + "_count").html(" - " + items[item].count);
	$("#" + item).find(".cost").html(digitgroup(items[item].cost));
}
function unlock_upgrades(){	
	for(var a = 0; a < upgrades.length; ++a){
		if(upgrades[a].unlock_level <= soul.level && upgrades[a].bought == false){
			$("#upgrade" + a).show();
		}else{
			$("#upgrade" + a).hide();
		}
	}
}