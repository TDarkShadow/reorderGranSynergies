Game.registerMod("reorder gran synergies",{
	init:function(){
		//this function is called as soon as the mod is registered
		//declare hooks here
		let tempUpgradeVarArray = ['Cosmic grandmas','Transmuted grandmas','Altered grandmas','Grandmas\' grandmas'];
		for (const tempUpgradeVarName of tempUpgradeVarArray){
			let tempUpgradeVar = Game.Upgrades[tempUpgradeVarName];
			tempUpgradeVar.order = 251+tempUpgradeVar.id*0.001;
		}	
		Game.GrandmaSynergies.splice(Game.GrandmaSynergies.indexOf('Cosmic grandmas'), 0, ...(Game.GrandmaSynergies.splice(Game.GrandmaSynergies.indexOf('Banker grandmas'), 3)));
	},
	save:function(){
		//use this to store persistent data associated with your mod
	},
	load:function(str){
		//do stuff with the string data you saved previously
	},
});

/*

Breakdown of info.txt:
	"Name": "Sample Mod",
		the visibly displayed name of your mod
	"ID": "sample mod",
		the text id of your mod (alphanumeric characters and spaces only), used as its key when saving or loading data
		also used as identifiers in other mods' dependencies
		this id must be the same as the first parameter used in your Game.registerMod(id,hooks)
	"Author": "Orteil",
		your name here!
	"Description": "A bare-bones sample mod.",
		a description of your mod
	"ModVersion": 1,
		a number value for your mod's version
	"GameVersion": 2.031,
		the last version of Cookie Clicker this mod was confirmed to run on
	"Date": "13/08/2021",
		the date your mod was released or last updated
	"Dependencies": [],
		optional; an array of IDs of other mods that must be loaded before this one, ie. ["cool mod preloader","extra stuff"]
	"LanguagePacks": ["lang.js"],
		optional; an array of local files containing localization data (ie. changing game text, adding translations etc)
	"Disabled": 1,
		optional; if set to 1, this mod will be disabled by default
	"AllowSteamAchievs":1,
		optional; by default, mods (unless they only consist of language files) block the unlocking of Steam achievements while enabled; set this to 1 if this is a good honest mod that does not incredibly unbalance the game

*/
