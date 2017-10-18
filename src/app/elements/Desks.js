window.initDesksTab = () => {
	let desks = newSav["Desks"]; // For convenience
	for (const deskId in desks) {
		let name = '(none)';
		if (newSav.Inmates[deskId]) {
			name = newSav.Inmates[deskId][0] + "'s Desk";
		} else if (deskId == 0) {
			// Player's personal desk
			name = "Your desk";
		}
		$("#desk-selector").append(`
			<option value="${deskId}">
				${name}
			</option>
		`);
	}
}