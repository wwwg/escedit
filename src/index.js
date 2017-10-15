const ENABLE_DEV_TOOLS = true,
	Session = require('./Session'),
	url = require('url'),
	path = require('path'),
	{ app, BrowserWindow } = require('electron');
let w = null; // Browser window
global.session = null; // escedit session in which saves are loaded

app.on('ready', () => {
	// Set up Electron window
	w = new BrowserWindow({
		minWidth: 500,
		minHeight: 500,
		resizable: true,
		fullscreenable: true,
		backgroundColor: '#000',

		width: 1000,
		height: 800
	});
	w.loadURL(url.format({
		pathname: path.join(__dirname + '/app', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));
	if (ENABLE_DEV_TOOLS) {
		w.webContents.openDevTools();
	}
	w.on('closed', () => {
		w = null;
	});
	// Load session; this is NOT done on the electron renderer thread due to a double-free bug
	global.session = new Session();
	global.session.load(global.session);
	global.session.on('export', exp => {
		console.log('Recieved export:', exp);
	})
});
app.on('window-all-closed', () => {
	if (process.platform != 'darwin') app.quit();
});