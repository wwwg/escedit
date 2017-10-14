const key = require('../lib/Key'),
	crypto = require('crypto'),
	MCrypt = require('mcrypt').MCrypt,
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
			let raw = rawSave,
				padding = (8 - (raw.length % 8)) % 8;
			// Append the padding accordingly in null bytes
			for (var i = 0; i < padding; ++i) {
				raw += '\0';
			}
			const decipher = new MCrypt('blowfish-compat', 'ecb');
			decipher.validateKeySize(false);
			decipher.open(key);
			let dec = decipher.decrypt(raw);
			console.log(new Buffer(dec).toString('utf8'));
		}
		/*
		export() {
			// Serializes and encrypts the save file back into a buffer
			const serialized = this.cont.serialize(),
				buf = Buffer.from(serialized, 'utf8'),
				crypt = new MCrypt('blowfish-compat', 'ecb');
			bf.validateKeySize(false);
			bf.open(key, bf.generateIv());
			let out = bf.encrypt(buf);
			return out;
		}
		*/
	}
module.exports = SaveData;