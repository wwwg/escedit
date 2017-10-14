// Abstract representation of an entire The Escapists save directory.
const fss = require('./lib/fss'),
	SaveData = require('./SaveData'),
	Save = class Save {
		constructor(path) {
			if (!path) {
				throw new Error("Save constructed with invalid path.");
				return;
			}
			this.path = path;
			this.content = null;
			this.loaded = false;
		}
	}
Save.prototype.load = async s => {
	s.content = await fss.readDir(s.path);
	if (!s.content.includes(Save.NAME_FILE) ||
		!s.content.includes(Save.SAVE_FILE)) {
		// throw new Error("Corrupt save file");
		console.log("WARN: Not loading invalid save file with path '" + s.path + "'.");
		s.loaded = false;
		return;
	}
	s.rawSave = await fss.read(s.path + '/' + Save.SAVE_FILE);
	s.rawName = await fss.read(s.path + '/' + Save.NAME_FILE);
	s.loaded = true;
}
// Constants
Save.NAME_FILE = 'mname.dat';
Save.SAVE_FILE = 'save.dat'; // Encrypted via Blowfish compat ECB
module.exports = Save;