const Session = require('../Session');
let s = new Session;
s.load(s).then(() => {
	console.log('Session loaded.');
});