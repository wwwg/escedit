const Save = require('./saves/Save'),
	fss = require('./lib/fss'),
	os = require('os'),
	EventEmitter = require('events');
class Session extends EventEmitter {
		constructor() {
			super();
			this.saveDir = os.homedir() + "/The Escapists";
			this.saves = [];
		}
	}
	Session.prototype.loadSave = async (s, num) => {
		const save = new Save(s.saveDir + ("/save" + num));
		await save.load(save);
		if (save.loaded) {
			// Successfully loaded, add to array
			console.log("Successfully loaded and parsed save " + num + ".");
			s.saves.push(save);
		} else {
			console.log("Failed to load save " + num + ". Moving on.");
		}
		return save;
	}
	Session.prototype.load = async s => {
		console.log('Reading saves directory "' + s.saveDir + '"');
		s.dirs = await fss.readDir(s.saveDir);
		for (var i = 1; i < 4; ++i) {
			if (s.dirs.includes('save' + i)) {
				console.log("Loading save " + i + "...");
				s.loadSave(s, i);
			}
		}
		setTimeout(() => {
			s.emit("load");
		}, 2500);
	}
module.exports = Session;