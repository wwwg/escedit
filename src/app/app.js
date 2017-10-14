const Session = require('../Session');
let s = new Session;
s.load().then(() => {
	console.log('Session loaded.');
});