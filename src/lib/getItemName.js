// Tiny module that converts item IDs to item names
const ItemDict = require('./ItemDict');
module.exports = id => {
	for (var i = 0; i < ItemDict.length; ++i) {
		if (ItemDict[i].id == id) {
			return ItemDict[i].name;
		}
	}
	return "ID " + id;
}