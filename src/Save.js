// Abstract representation of an entire The Escapists save directory.
const fss = require('./lib/fss'),
	Save = class Save {
		constructor(path) {
			if (!path) {
				throw new Error("Save constructed with invalid path.");
				return;
			}
			this.path = path;
			this.content = null;
		}
	}
Save.prototype.load = async s => {
	s.content = fss.readDir(s.path);
}
module.exports = Save;