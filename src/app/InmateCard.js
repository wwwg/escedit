class InmateCard {
	constructor(inmateNum, inmate) {
		this.num = inmateNum;
		this.i = inmate;
		this.elm = $(`
			<div id="inmate-card-${this.num}" class="inmate-card">
				<span class="inmate-card-row">
				<span style="float:left;">Name</span><input id="inmate-name-${this.num}" class="inmate-name-box" type="text" value="${inmate[0]}"><br>
				</span><span class="inmate-card-row">
				<span style="float:left;">Strength</span><input id="inmate-str-${this.num}" class="inmate-stats-box" type="number" value="${inmate[1]}"></input><br>
				</span><span class="inmate-card-row">
				<span style="float:left;">Speed</span><input id="inmate-speed-${this.num}" class="inmate-stats-box" type="number" value="${inmate[2]}"></input><br>
				</span><span class="inmate-card-row">
				<span style="float:left;">Intellect</span><input id="inmate-int-${this.num}" class="inmate-stats-box" type="number" value="${inmate[3]}"></input><br>
				<span class="inmate-card-row">
				<span style="float:left;">Opinion</span><input id="inmate-opi-${this.num}" class="inmate-stats-box" type="number" value="${inmate[4]}"></input>
				</span>
			</div>
		`);
	}
	addTo(parent) {
		$(parent).append(this.elm);
	}
}

window.InmateCard = InmateCard;