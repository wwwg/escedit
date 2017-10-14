const fs = require('fs'),
	fss = class fss {
		static dirExists(dirname) {
			return new Promise((resolve, reject) => {
				fs.stat(dirname, (err, stats) => {
					if (err || !stats.isDirectory()) {
						resolve(false);
						return;
					}
					resolve(true);
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