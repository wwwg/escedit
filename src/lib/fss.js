const fs = require('fs'),
	fss = class fss {
		static dirExists(dirname) {
			return new Promise((resolve, reject) => {
				fs.stat(dirname, (err, stats) => {
					if (err) {
						reject(err);
						return;
					}
					if (!stats.isDirectory()) {
						reject(new Error("Not a directory"));
						return;
					}
				});
			});
		}
		static read(path) {
			return new Promise((resolve, reject) => {
				fs.readFile(path, (err, data) => {
					if (err) {
						reject(err);
						return;
					}
					resolve(data);
				});
			});
		}
	}
module.exports = fss;