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
	}
module.exports = fss;