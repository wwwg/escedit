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
			// Compute the amount of padding needed in order for the algorithm to accept the string
			const padding = (8 - (this.raw.length % 8)) % 8;
			// Append the padding accordingly in null bytes
			for (var i = 0; i < padding; ++i) {
				this.raw += '\0';
			}
			// Decrypt the save into plaintext
			let bf = new Blowfish(key);
			this.dec = bf.decrypt(this.raw);
			console.log('Decrypted save #' + this.num);
		}
	}
module.exports = SaveData;