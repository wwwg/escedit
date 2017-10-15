const SaveContent = require('./saves/SaveContent');
class Export {
	constructor(nameContent, saveContent, saveNumber, session) {
		this.num = saveNumber;
		this.nameAST = nameContent;
		this.saveAST = saveContent;
		this.saveCont = new SaveContent(this.saveAST);
		this.nameCont = new SaveContent(this.nameAST);
		this.session = session;
		this.outDir = session.saveDir + "/save" + this.num + "/";
		console.log("Export created to write to directory '" + this.outDir + "'");
	}
}

module.exports = Export;