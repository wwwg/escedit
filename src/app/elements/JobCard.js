class JobCard {
	constructor(jobName, job) {
		this.data = job;
		this.name = jobName;
		this.elm = $(`<div class="inmate-card">
			<span class="inmate-label">${jobName}</span> &nbsp; <select id="job-${jobName}"></select><br>
		</div>`);
	}
	addTo(parent) {
		const me = this;
		$(parent).append(this.elm);
	}
}

window.JobCard = JobCard;