class InmateCard {
	constructor(inmateNum, inmate) {
		this.num = inmateNum;
		this.i = inmate;
		this.elm = $(`
			<div id="inmate-card-${this.num}" class="inmate-card">
				<div class="inmate-card-row">
					<span class="inmate-label">Name</span>
					<input id="inmate-name-${this.num}" class="inmate-name-box" type="text" value="${inmate[0]}">
				</div>
				<div class="inmate-card-row">
					<span class="inmate-label">Strength</span>
					<input id="inmate-str-${this.num}" class="inmate-stats-box" type="number" value="${inmate[1]}"></input>
				</div>
				<div class="inmate-card-row">
					<span class="inmate-label">Speed</span>
					<input id="inmate-speed-${this.num}" class="inmate-stats-box" type="number" value="${inmate[2]}"></input>
				</div>
				<div class="inmate-card-row">
					<span class="inmate-label">Intellect</span>
					<input id="inmate-int-${this.num}" class="inmate-stats-box" type="number" value="${inmate[3]}"></input>
				</div>
				<div class="inmate-card-row">
					<span class="inmate-label">Opinion</span>
					<input id="inmate-opi-${this.num}" class="inmate-stats-box" type="number" value="${inmate[4]}"></input>
				</div>
			</div>
		`);
	}
	addTo(parent) {
		$(parent).append(this.elm);
		const me = this;
		$(`#inmate-name-${me.num}`).change(e => {
			const num = e.target.id.split('-')[2],
				name = $(e.target).val();
			newSav["Inmates"][num][0] = name; // Update name
		});
		$(`#inmate-str-${me.num}`).change(e => {
			const num = e.target.id.split('-')[2],
				str = $(e.target).val();
			newSav["Inmates"][num][1] = str; // Update strength
		});
		$(`#inmate-speed-${me.num}`).change(e => {
			const num = e.target.id.split('-')[2],
				spd = $(e.target).val();
			newSav["Inmates"][num][2] = spd; // Update speed
		});
		$(`#inmate-int-${me.num}`).change(e => {
			const num = e.target.id.split('-')[2],
				int = $(e.target).val();
			newSav["Inmates"][num][3] = int; // Update intellect
		});
		$(`#inmate-opi-${me.num}`).change(e => {
			const num = e.target.id.split('-')[2],
				opi = $(e.target).val();
			newSav["Inmates"][num][4] = opi; // Update opinion
		});
	}
}

window.InmateCard = InmateCard;