class InmateCard {
	constructor(inmateNum, inmate) {
		this.num = inmateNum;
		this.i = inmate;
		this.elm = $(`
			<div id="inmate-card-${this.num}" class="inmate-card">
				<span>Name</span> &nbsp; <input id="inmate-name-${this.num}" type="text" value="${inmate[0]}"></span><br>
			</div>
		`);
	}
	addTo(parent) {
		$(parent).append(this.elm);
	}
}

window.InmateCard = InmateCard;