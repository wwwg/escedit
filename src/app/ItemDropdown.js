const ItemDict = require('../lib/ItemDict');
class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"</select>`);
		const me = this;
		ItemDict.forEach(i => {
			me.elm.append($(`
				<option name="${i.id}">
					${i.name}
				</option>
			`));
		})
	}
	addTo(parentElem) {
		$(parentElem).append(this.elm);
	}
}
window.ItemDropdown = ItemDropdown; // Verify the class is global