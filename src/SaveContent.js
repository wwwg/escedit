// Parses raw save strings into an abstract syntax tree
const SaveContent = class SaveContent {
	constructor(str) {
		this.str = str;
		this.tree = {};
		this.parse();
	}
	parse() {
		let str = this.str,
			lns = str.split('\n'),
			lastc = ''; // Lazy abbreviation for "lastCategory"
		for (var i = 0; i < lns.length; ++i) {
			const ln = lns[i];
			if (ln.startsWith(' ') ||
				ln.startsWith('\n')) {
				// Skip whitespace
				continue;
			} else if (ln.startsWith('[')) {
				// Category
				const cname = ln.substr(1, ln.length - 2); // Extract category name
				this.tree[cname] = {}; // Create new object in the tree
				lastc = cname;
			} else if (ln.includes('=')) {
				// Variable assignment within category
				let parts = ln.split('='),
					vname = parts[0],
					vvalue;
				if (parts.length == 2) {
					// Assignment with only one = char
					vvalue = parts[1];
				} else {
					// Assignment with multiple = chars, join the rest back together
					vvalue = parts.slice(1).join('=');
				}
				// Variables are split into arrays with an "@" char as a deliminator
				if (vvalue.includes('@')) {
					vvalue = vvalue.split('@');
				}
				// Assign the value on the AST
				this.tree[lastc][vname] = vvalue;
			}
		}
	}
}

module.exports = SaveContent;