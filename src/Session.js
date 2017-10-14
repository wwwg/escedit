const Save = require('./Save'),
	fss = require('./lib/fss'),
	os = require('os'),
	Session = class Session {
		constructor() {
			this.saveDir = os.homedir() + "/The Escapists";
			this.saves = [];
			console.log('Reading saves directory "' + this.saveDir + '"');
			this.load.call(this, this)
				.catch(console.log);
		}
	}
	Session.prototype.loadSave = async (s, num) => {
		const save = new Save(s.saveDir + ("/save" + num));
		save.load(save);
		console.log("Loaded save " + num + " with content:");
		console.log(save.content);
		s.saves.push(save);
		return save;
	}
	Session.prototype.load = async s => {
		s.dirs = await fss.readDir(s.saveDir);
		for (var i = 1; i < 4; ++i) {
			if (s.dirs.includes('save' + 1)) {
				console.log("Loading save " + i);
				s.loadSave(s, i);
			}
		}
	}
module.exports = Session;