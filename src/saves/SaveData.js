let key = require('../lib/Key');
const crypto = require('crypto'),
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
		}
		decrypt() {
			// NOTE: this method MUST be called on the electron main thread due to a double-free bug in v8
			let raw = this.raw;
			// Compute the amount of padding needed in order for the algorithm to accept the string
			let padding = (8 - (raw.length % 8)) % 8;
			// Append the padding accordingly in null bytes
			for (var i = 0; i < padding; ++i) {
				raw += '\0';
			}
			// Decrypt
			let decipher = new MCrypt('blowfish-compat', 'ecb');
			let data = new Buffer(raw, 'binary');
			let _key = new Buffer(key, 'binary');
			decipher.validateKeySize(false);
			decipher.open(_key);
			let dec = decipher.decrypt(data); // Double-free is caused here on the electron renderer process
			dec = new Buffer(dec).toString('utf8');
			decipher = null;
			this.decrypted = dec;
			return dec;
		}
	}
module.exports = SaveData;