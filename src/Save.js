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
	s.content = await fss.readDir(s.path);
	if (!s.content.includes(Save.NAME_FILE) ||
		!s.content.includes(Save.SAVE_FILE)) {
		throw new Error("Corrupt save file");
		return;
	}
}
// Constants
Save.NAME_FILE = 'mname.dat';
Save.SAVE_FILE = 'save.dat'; // Encrypted via Blowfish compat ECB
module.exports = Save;