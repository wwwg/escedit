const SaveContent = require('./saves/SaveContent'),
	MCrypt = require('mcrypt').MCrypt,
	key = require('./lib/Key');
class Export {
	constructor(nameContent, saveContent, saveNumber, session) {
		this.num = saveNumber;
		this.nameAST = nameContent;
		this.saveAST = saveContent;
		this.saveCont = new SaveContent(this.saveAST);
		this.nameCont = new SaveContent(this.nameAST);
		// To be re-encrypted
		this.decryptedSave = this.saveCont.str;
		this.decryptedName = this.nameCont.str;
		this.session = session;
		this.outDir = session.saveDir + "/save" + this.num + "/";
		// Both files need to be exported
		this.outSaveFile = this.outDir + "save.dat";
		this.outNameFile = this.outDir + "mname.dat";
		// Encrypted name/save buffers
		this.encryptedSave = null;
		this.encryptedName = null;
	}
	encrypt() {
		// Encrypts the two save files into buffers.
		// NOTE : This MUST be done on the main process due to a bug in electron.
		const saveBuf = new Buffer(this.decryptedSave, 'utf8'),
			nameBuf = new Buffer(this.decryptedName, 'utf8'),
			keyBuf = new Buffer(key, 'utf8'),
			cipher = new MCrypt('blowfish-compat', 'ecb');
		cipher.validateKeySize(false);
		cipher.open(keyBuf);
		this.encryptedSave = cipher.encrypt(saveBuf);
		this.encryptedName = cipher.encrypt(nameBuf);
	}
}

module.exports = Export;