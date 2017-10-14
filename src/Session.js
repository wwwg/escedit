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
	Session.prototype.load = async s => {
		s.dirs = await fss.readDir(s.saveDir);
		if (s.dirs.includes('save1')) {
			console.log("Loading save 1");
			const save = new Save(s.saveDir + "/save1");
			s.saves.push(save);
		}
	}
module.exports = Session;