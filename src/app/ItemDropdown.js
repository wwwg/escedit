class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"

			</select>`);
	}
}

module.exports = ItemDropdown;