class InmateCard {
	constructor(inmateNum, inmate) {
		this.num = inmateNum;
		this.i = inmate;
		this.elm = $(`
			<div id="inmate-card-${this.num}" class="inmate-card">
				<span style="float:left;">Name</span> &nbsp; <input id="inmate-name-${this.num}" type="text">${inmate[0]}</span><br>
			</div>
		`);
	}
	addTo(parent) {
		$(parent).append(this.elm);
	}
}