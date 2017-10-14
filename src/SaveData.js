const Blowfish = require('./lib/Blowfish'),
	key = require('./lib/Key'),
	fss = require('./lib/fss'),
	SaveData = class SaveData {
		constructor(rawSave) {
			if (!rawSave instanceof Buffer) {
				throw new Error("SaveData must be constructed with a raw buffer.");
			}
			this.raw = rawSave;
			// Decrypt the save into plaintext
			let bf = new Blowfish(key);
		}
	}
module.exports = SaveData;