const SaveData = class SaveData {
	constructor(rawSave) {
		if (!rawSave instanceof Buffer) {
			throw new Error("SaveData must be constructed with a raw buffer.");
		}
	}
}