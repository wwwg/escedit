const ENABLE_DEV_TOOLS = false,
	Session = require('./Session'),
	url = require('url'),
	path = require('path'), {
		app,
		BrowserWindow,
		ipcMain
	} = require('electron'),
	fss = require('./lib/fss'),
	Export = require('./Export');
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
	/*
	w.webContents.executeJavaScript(`
		let path = require('path');
		module.paths.push(path.resolve('node_modules'));
		module.paths.push(path.resolve('../node_modules'));
		module.paths.push(path.resolve(__dirname, '..', '..', 'electron', 'node_modules'));
		module.paths.push(path.resolve(__dirname, '..', '..', 'electron.asar', 'node_modules'));
		module.paths.push(path.resolve(__dirname, '..', '..', 'app', 'node_modules'));
		module.paths.push(path.resolve(__dirname, '..', '..', 'app.asar', 'node_modules'));
		path = undefined;
	`);
	*/
	if (ENABLE_DEV_TOOLS) {
		w.webContents.openDevTools();
	}
	w.on('closed', () => {
		w = null;
	});
	// Load session; this is NOT done on the electron renderer thread due to a double-free bug
	global.session = new Session();
	global.session.load(global.session);
});
app.on('window-all-closed', () => {
	if (process.platform != 'darwin') app.quit();
});
ipcMain.on('export', async (evt, exp) => {
	console.log(`Recieved export #${exp.num} via IPC. Encrypting...`);
	Export.encrypt(exp);
	console.log(`Encryption finished. Writing to '${exp.outDir}'`);
	await fss.write(exp.outSaveFile, exp.encryptedSave);
	await fss.write(exp.outNameFile, exp.name);
	console.log('Write finished.');
	setTimeout(() => {
		// Delay a little just in case
		w.webContents.send('writeFinish');
	}, 750);
});