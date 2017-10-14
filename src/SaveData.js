const Blowfish = require('./lib/Blowfish'),
	key = require('./lib/Key'),
	fss = require('./lib/fss'),
	SaveData = class SaveData {
		constructor(rawSave, saveNum) {
			if (!rawSave instanceof Buffer) {
				throw new Error("SaveData must be constructed with a raw buffer.");
			}
			this.raw = rawSave.toString('utf8');
			this.num = saveNum;
			// Decrypt the save into plaintext
			let bf = new Blowfish(key);
			this.dec = bf.decrypt(this.raw);
			console.log('Decrypted save #' + this.num);
		}
	}
module.exports = SaveData;