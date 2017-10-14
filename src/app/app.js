const {
	remote,
	dialog
} = require('electron');
window.currsav = null; // Current active save
window.selectedTab = null; // Current tab selected
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
					Day <b id="save${saveNumber}">#${day}</b><br>
					Map: <b id="save${saveNumber}">${map}</b><br>
				</div><br>
			`);
		$("#save-list").append(saveElem);
		$(`#save${saveNumber}-name`).text(pname); // To avoid odd XSS issues
		saveElem.hide();
		saveElem.fadeIn(800 + (i * 250));
	}
	$(".save").click(e => {
		let target = e.target,
			saveNum = -1;
		if (isNaN(target.id.charAt(target.id.length - 1))) {
			target = target.parentElement;
		}
		savNum = parseInt(target.id.charAt(target.id.length - 1));
		console.log(`Save number ${savNum} was selected.`);
		const save = s.saves[savNum - 1];
		currsav = save;
		launchEditor();
	});
	$(".panel-selection").click(e => {
		// Change tabs
		let oldTab = selectedTab;
		selectedTab = $("#" + e.target.id.split('-')[1]);
		oldTab.fadeOut(200);
		$(e.target).css("border-bottom", "2px solid #FFF");
		$(e.target).css("color", "#FFF");
		$(e.target).css("font-weight", "bold");
		$("#select-" + oldTab[0].id).css("border-bottom", "");
		$("#select-" + oldTab[0].id).css("color", "#bfbfbf");
		$("#select-" + oldTab[0].id).css("font-weight", "normal");
		setTimeout(() => {
			selectedTab.fadeIn(200);
		}, 210);
	});
	$("#exit").click(e => {
		alert("this button does absolutely nothing right now");
	});
});
let launchEditor = () => {
	if (!currsav) {
		throw new Error("Current save doesn't exist, something went terribly wrong.");
		return;
	}
	$("#sec-start").fadeOut(300);
	setTimeout(() => {
		$("#sec-edit").fadeIn(400);
	}, 310);
	$("#title").text("escedit - editing save #" + currsav.num);
	$("#title").css("font-size", "250%");
	// The player tab is the default tab
	selectedTab = $("#player");
	selectedTab.fadeIn(200);
	// Underline and highlight player tab
	$("#select-player").css("border-bottom", "2px solid #FFF");
	$("#select-player").css("color", "#FFF");
	$("#select-player").css("font-weight", "bold");
}