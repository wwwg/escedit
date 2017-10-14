const Blowfish = require('./lib/Blowfish'),
	key = require('./lib/Key'),
	fss = require('./lib/fss'),
	SaveData = class SaveData {
		constructor(rawSave) {
			if (!rawSave instanceof Buffer) {
				throw new Error("SaveData must be constructed with a raw buffer.");
			}
		}
	}
SaveData.prototype.load = async s => {
	// TODO
}
module.exports = SaveData;