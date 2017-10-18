module.exports = function isDurable(item) {
	let id = -1;
	if (typeof item === "object") {
		id = item.id;
	} else {
		id = item;
	}
	switch (id) {
		case 25:
		case 119:
		case 115:
		case 114:
		case 62:
		case 121:
		case 120:
		case 61:
		case 181:
		case 184:
		case 118:
		case 39:
		case 5:
			return true;
			break;
		default:
			return false;
			break;
	}
}