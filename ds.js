const fs = require('fs'), path = 'C:/Users/Alex/Desktop', now = new Date().toLocaleDateString().replaceAll(/\//g, '.');
fs.mkdir(`C:/Users/Alex/Desktop/f/[${now}]`, (err) => {
	switch (true) {
		case (err.code === 'EEXIST'): clear(); break;
		case (err): console.error(err); break;
		default: clear();
	};
});

function clear() {
	fs.readdir(path, null, (err, files) => {
		files.forEach((p) => {
			/^\d+\-\d+\-\d+\_\d+\-(\d+|\d+\_\d+)\.\w+$|^IMG\_\d+\_\d+\.\w+$|^DSC\_\d+\.\w+$/g.test(p) ? fs.renameSync(`${path}/${p}`, `${path}/f/[${now}]/${p}`) : null;
		});
	});
};