const ItemDict = require('../lib/ItemDict');
class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"</select>`);
		this.elm.append(`<option value="-1">None</option>`);
		const me = this;
		ItemDict.forEach(i => {
			me.elm.append($(`
				<option value="${i.id}">
					${i.name}
				</option>
			`));
		});
		if (initItem != '') {
			this.elm.val(initItem.toString());
		} else {
			this.elm.val('-1'); // No item
		}
		itemDropdowns.push(this);
	}
	addTo(parentElem) {
		$(parentElem).append(this.elm);
	}
}
window.ItemDropdown = ItemDropdown; // Verify the class is global
window.itemDropdowns = [];