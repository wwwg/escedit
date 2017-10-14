// Parses raw save strings into an abstract syntax tree
const SaveContent = class SaveContent {
	constructor(str) {
		this.str = str;
		this.tree = {};
		this.parse();
	}
	parse() {
		let str = this.str,
		lns = str.split('\n');
		for (var i = 0; i < lns.length; ++i) {
			const ln = lns[i];
			if (ln.startsWith('[')) {
				// Category
				console.log("Category:", ln);
			}
		}
	}
}

module.exports = SaveContent;