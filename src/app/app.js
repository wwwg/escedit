const {
	remote,
	dialog
} = require('electron');
console.log('escedit v0.0.1');
// Get the session object from main process
let s = remote.getGlobal("session");
s.on('load', () => {
	console.log('Session has loaded.');
});