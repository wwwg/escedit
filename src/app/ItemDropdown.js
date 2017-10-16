class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"</select>`);
	}
}
window.ItemDropdown = ItemDropdown; // Verify the class is global