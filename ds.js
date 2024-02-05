const 
	fs = require(`fs`),
	FROM = `C:/Users/Alex/Desktop`,
	TO = `C:/Users/Alex/Pictures/f`,
	regex = /^\d+\-\d+\-\d+\_\d+\-[\d_]+\.\w+$/
	// /^IMG\_\d+\_\d+\.\w+$|^DSC\_\d+\.\w+$/g
;

if (!fs.existsSync(TO)) fs.mkdirSync(TO);

fs.readdir(FROM, null, (err, files) => {
	files.forEach((path) => {
		if (regex.test(path)) {
			const FOLDER = `${TO}/[${path.split(`_`)[0].split(`-`).reverse().join(`.`)}]`;

			fs.mkdir(FOLDER, null, (err) => {
				if (err && err.code != `EEXIST`) console.error;

				fs.renameSync(`${FROM}/${path}`, `${FOLDER}/${path}`)
			});
		};
	});
});