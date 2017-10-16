class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"

			</select>`);
	}
}

module.exports = ItemDropdown;
window.ItemDropdown = ItemDropdown; // Verify the class is global