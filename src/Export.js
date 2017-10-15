const SaveContent = require('./saves/SaveContent');
class Export {
	constructor(nameContent, saveContent, saveNumber, session) {
		this.num = saveNumber;
		this.nameAST = nameContent;
		this.saveAST = saveContent;
		this.saveCont = new SaveContent(this.saveAST);
		this.nameCont = new SaveContent(this.nameAST);
		this.session = session;
	}
}

module.exports = Export;