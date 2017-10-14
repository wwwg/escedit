// Abstract representation of an entire The Escapists save directory.
const Save = class Save {
	constructor(path) {
		if (!path) {
			throw new Error("Save constructed with invalid path.");
			return;
		}
	}
}
Save.prototype.load = async s => {
	console.log(s);
}
module.exports = Save;