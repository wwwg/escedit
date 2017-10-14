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
		static fileExists(path) {
			return new Promise((resolve, reject) => {
				fs.stat(path, (err, stats) => {
					if (err || stats.isDirectory()) {
						resolve(false);
						return;
					}
					resolve(true);
				});
			});
		}
		static read(path, encoding = "utf8") {
			return new Promise((resolve, reject) => {
				fs.readFile(path, encoding, (err, data) => {
					if (err) {
						reject(err);
						return;
					}
					resolve(data);
				});
			});
		}
		static write(path, data) {
			return new Promise((resolve, reject) => {
				fs.writeFile(path, data, err => {
					if (err) {
						reject(err);
						return;
					}
					resolve(true);
				})
			});
		}
		static readDir(path) {
			return new Promise((resolve, reject) => {
				fs.readdir(path, (err, files) => {
					if (err) {
						reject(err);
						return;
					}
					resolve(files);
				});
			});
		}
	}
module.exports = fss;