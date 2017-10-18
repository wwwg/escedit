window.initDeskTab = () => {
	let deskContent = newSav["Desks"][0][3].split('?');
	for (var i = 0; i < deskContent.length; ++i) {
		let container = $(`<span class="desk-entry"></span>`),
			label = $(`<span class="desk-label">${i + 1} &nbsp;</span>`),
			dropdown = new ItemDropdown(deskContent[i]);
		container.append(label);
		dropdown.addTo(container);
		$("#desk-panel").append(container);
		$(dropdown.elm).addClass("desk-dropdown");
	}
}