const SaveContent = require('./saves/SaveContent');
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
	}
}

module.exports = Export;