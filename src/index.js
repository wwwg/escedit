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