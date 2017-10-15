const SaveContent = require('./saves/SaveContent'),
	MCrypt = require('mcrypt').MCrypt,
	key = require('./lib/Key');
class Export {
	constructor(nameContent, saveContent, saveNumber, session) {
		this.num = saveNumber;
		this.nameAST = nameContent.tree;
		this.saveAST = saveContent;
		this.saveCont = new SaveContent(this.saveAST);
		this.nameCont = new SaveContent(this.nameAST);
		// To be re-encrypted
		this.decryptedSave = this.saveCont.str;
		this.name = this.nameCont.str;
		this.session = session;
		this.outDir = session.saveDir + "/save" + this.num + "/";
		// Both files need to be exported
		this.outSaveFile = this.outDir + "save.dat";
		this.outNameFile = this.outDir + "mname.dat";
		// Encrypted save buffer
		this.encryptedSave = null;
	}
	static encrypt(exp) {
		// Encrypts the save file into a buffer.
		// NOTE : This MUST be done on the main process due to a bug in electron.
		const saveBuf = new Buffer(exp.decryptedSave, 'utf8'),
			keyBuf = new Buffer(key, 'utf8'),
			cipher = new MCrypt('blowfish-compat', 'ecb');
		cipher.validateKeySize(false);
		cipher.open(keyBuf);
		exp.encryptedSave = cipher.encrypt(saveBuf);
	}
}

module.exports = Export;