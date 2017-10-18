window.initDeskTab = () => {
	let deskContent = newSav["Desks"][0][3].split('?');
	for (var i = 0; i < deskContent.length; ++i) {
		let container = $(`<span class="desk-entry"></span>`),
			label = $(`<span class="desk-label">${i + 1} &nbsp;</span>`),
			dropdown = new ItemDropdown(deskContent[i], `desk-selector-${i.toString()}`);
		container.append(label);
		dropdown.addTo(container);
		$("#desk-panel").append(container);
		$(dropdown.elm).addClass("desk-dropdown");
	}
	$(`.desk-dropdown`).change(e => {
		let id = parseInt(e.target.id.split('-')[2]),
			newItem = parseInt($(e.target).val()),
			cnt = newSav["Desks"][0][3].split('?');
		if (isDurable(newItem)) {
			 // Assign 100 durability
			newItem += "_100";
		}
		cnt[id] = newItem;
		newSav["Desks"][0][3] = cnt.join('?'); // Rejoin array to recreate desk object
	});
}