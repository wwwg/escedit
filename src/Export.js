const SaveContent = require('./saves/SaveContent');
class Export {
	constructor(nameContent, saveContent, saveNumber) {
		this.num = saveNumber;
		this.nameAST = nameContent;
		this.saveAST = saveContent;
		this.saveCont = new SaveContent(this.saveAST);
		this.nameCont = new SaveContent(this.nameAST);
	}
}

module.exports = Export;