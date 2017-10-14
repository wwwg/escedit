const ENABLE_DEV_TOOLS = true,
	Session = require('./Session'),
	url = require('url'),
	path = require('path'),
	{ app, BrowserWindow } = require('electron');
let w; // Browser window

app.on('ready', () => {
	w = new BrowserWindow({
		center: true,
		minWidth: 500,
		minHeight: 500,
		resizable: true,
		fullscreenable: true,
		backgroundColor: '#000'
	});
});