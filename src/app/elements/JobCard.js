class JobCard {
	constructor(jobName, jobVal) {
		this.val = jobVal;
		this.name = jobName;
		this.elm = $(`<center class="job-card">
			<span class="job-label">${jobName}</span>
			<br><br>
			<select id="job-${jobName}" class="job-selector"></select><br>
		</center>`);
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
		sel.change(e => {
			const jobName = e.target.id.split('-')[1],
				newJobVal = $(e.target).val();
			if (newJobVal == "-1") {
				// Reassignment of the player's own job
				newSav["Player"]["Job"] = jobName;
			}
			newSav["Jobs"][jobName] = newJobVal;
		});
	}
}

window.JobCard = JobCard;