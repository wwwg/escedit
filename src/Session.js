const SaveData = require('./SaveData'),
	fss = require('./lib/fss'),
	os = require('os'),
	Session = class Session {
		constructor() {
			this.saveDir = os.homedir() + "/The Escapists";
			console.log('Reading saves directory "' + this.saveDir + '"');
			this.load().catch(console.log);
		}
	}
	Session.prototype.load = async () => {
		this.savePaths = await fss.readDir(this.saveDir);
	}
module.exports = Session;