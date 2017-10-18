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
		case 185:
		case 113:
		case 31:
		case 0:
		case 7:
		case 6:
		case 1:
		case 43:
		case 23:
		case 27:
		case 28:
		case 116:
		case 174:
		case 44:
		case 125:
		case 67:
		case 45:
		case 40:
		case 32:
		case 24:
		case 14:
		case 81:
		case 186:
		case 34:
		case 35:
		case 58:
		case 85:
		case 86:
		case 87:
		case 88:
		case 117:
			return true;
			break;
		default:
			return false;
			break;
	}
}