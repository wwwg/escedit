class JobCard {
	constructor(jobName, job) {
		this.data = job;
		this.name = jobName;
		this.elm = $(`<div class="inmate-card">
			
		</div>`);
	}
	addTo(parent) {
		const me = this;
		$(parent).append(this.elm);
	}
}

window.JobCard = JobCard;