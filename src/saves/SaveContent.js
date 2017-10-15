// Parses raw save strings into an abstract syntax tree
const SaveContent = class SaveContent {
	constructor(data) {
		if (typeof data == "string") {
			this.str = data;
			this.tree = {};
			this.parse();
		} else if (typeof data === "object") {
			this.tree = data;
			this.str = this.serialize();
		} else throw new Error('SaveContent constructed with invalid data');
	}
	parse(str) {
		if (!str) {
			str = this.str;
		}
		let lns = str.split('\n'),
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
				if (vvalue.includes('@')) {
					// Variables are split into arrays with an "@" char as a deliminator
					vvalue = vvalue.split('@');
					/*
					for (let j = 0; j < vvalue.length; ++j) {
						if (!isNaN(vvalue[j]) && !vvalue.includes('_')) {
							// Convert to number as needed
							const newVal = parseFloat(vvalue[j]);
							if (!isNaN(newVal)) {
								vvalue[j] = parseFloat(vvalue[j]);
							}
						}
					}
					*/
				}
				/*
				// Convert variable name to number if needed
				if (!isNaN(vname)) {
					vname = parseFloat(vname);
				}
				*/
				// Assign the value on the AST
				this.tree[lastc][vname] = vvalue;
			}
		}
		return this.tree;
	}
	serialize() {
		let out = '';
		for (const cat in this.tree) {
			out += `[${cat}]\n`;
			for (const vname in this.tree[cat]) {
				let vval = this.tree[cat][vname];
				if (Number.isInteger(out)) {
					out += `${(vname + 1).toString()}=`;
				} else {
					out += `${vname.toString()}=`;
				}
				if (vval instanceof Array) {
					// Convert array back into "@" deliminated string
					out += `${vval.join('@')}\n`;
				} else {
					// Append the raw value to the line
					out += `${vval.toString()}\n`;
				}
			}
			out += '\n';
		}
		// Align by 8 bytes so the save can be re-encrypted via blowfish-compat
		let padding = (8 - (out.length % 8)) % 8;
		out += ('\0'.repeat(padding));
		return out;
	}
}

module.exports = SaveContent;