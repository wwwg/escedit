const SaveData = require('./SaveData'),
	fss = require('./lib/fss'),
	os = require('os'),
	Session = class Session {
		constructor() {
			this.saveDir = os.homedir() + "/The Escapists";
			console.log('Reading saves directory "' + this.saveDir + '"');
			this.load.call(this, this)
				.catch(console.log);
		}
	}
	Session.prototype.load = async s => {
		s.savePaths = await fss.readDir(s.saveDir);
	}
module.exports = Session;