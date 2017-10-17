class JobCard {
	constructor(jobName, jobVal) {
		this.val = jobVal;
		this.name = jobName;
		this.elm = $(`<center class="job-card">
			<span class="job-label">${jobName}</span> &nbsp; <select id="job-${jobName}"></select><br>
		</center><br>`);
	}
	addTo(parent) {
		$(parent).append(this.elm);
		const me = this,
			sel = $(`#job-${me.name}`);
		for (const iid in newSav["Inmates"]) {
			const inmate = newSav["Inmates"][iid],
				name = inmate[0];
			sel.append($(`<option value="${iid}"> ${name} </option>`));
		}
		sel.append($(`<option value="-1">${newSav['Player']['Name']} (You)</option>`));
		sel.val(this.val);
	}
}

window.JobCard = JobCard;