const MCrypt = require('mcrypt').MCrypt,
	key = require('../lib/Key'),
	fss = require('../lib/fss'),
	SaveContent = require('./SaveContent'),
	SaveData = class SaveData {
		constructor(rawSave, saveNum) {
			if (!rawSave instanceof Buffer) {
				throw new Error("SaveData must be constructed with a raw buffer.");
			}
			this.raw = rawSave;
			this.num = saveNum;
			// Compute the amount of padding needed in order for the algorithm to accept the string
			const padding = (8 - (this.raw.length % 8)) % 8;
			// Append the padding accordingly in null bytes
			for (var i = 0; i < padding; ++i) {
				this.raw += '\0';
			}
			// Decrypt the save into plaintext
			let bf = new MCrypt('blowfish-compat', 'ecb');
			bf.validateKeySize(false);
			bf.open(key, bf.generateIv());
			this.dec = bf.decrypt(this.raw);
			console.log('Decrypted save ' + this.num + " (length: " + this.dec.length + ")");
			// Parse save into an AST for easy manipulation
			this.cont = new SaveContent(this.dec.toString());
		}
		export() {
			// Serializes and encrypts the save file back into a buffer
			const serialized = this.cont.serialize();
		}
	}
module.exports = SaveData;