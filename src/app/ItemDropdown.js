class ItemDropdown {
	constructor(initItem) {
		this.initial = initItem;
		this.elm = $(`<select class="item-dropdown>"</select>`);
	}
	addTo(parentElem) {
		$(parentElem).append(this.elm);
	}
}
window.ItemDropdown = ItemDropdown; // Verify the class is global