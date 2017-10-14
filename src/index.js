const ENABLE_DEV_TOOLS = true,
	Session = require('./Session'),
	url = require('url'),
	path = require('path'),
	{ app, BrowserWindow } = require('electron');
let w, // Browser window
	session; // escedit session in which saves are loaded

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
});
app.on('window-all-closed', () => {
	if (process.platform != 'darwin') app.quit();
});