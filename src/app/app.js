const {
	remote,
	dialog
} = require('electron');
console.log('escedit v0.0.1');
// Get the session object from main process
let s = remote.getGlobal("session");
s.on('load', () => {
	console.log('Session has loaded.');
	$("#save-loading").remove(); // Remove "loading" element
	for (var i = 0; i < s.saves.length; ++i) {
		const saveNumber = (i + 1).toString(),
			nameData = s.saves[i].nameContent.tree["Data"],
			pname = nameData["Name"],
			day = nameData["Day"],
			map = nameData["Map"],
			saveElem = $(`
				<div id="save${saveNumber}" class="save">
					Name: <b id="save${saveNumber}-name"></b><br>
					Day: <b>${day}</b><br>
					Map: <b>${map}</b><br>
				</div>
			`);
		$("#save-list").append(saveElem);
		$(`#save${saveNumber}-name`).text(pname); // To avoid odd XSS issues
		saveElem.click(e => {
			const savNum = parseInt(e.target.id.charAt(e.target.id.length - 1));
			console.log(`Save number ${savNum} was selected.`);
			const save = s.saves[savNum - 1];
		});
	}
});