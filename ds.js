const fs = require('fs'), path = 'C:/Users/Alex/Desktop', now = new Date().toLocaleDateString('en-GB', {day: '2-digit', month: '2-digit', year: 'numeric'}).replaceAll('/', '.');
fs.mkdir(`C:/Users/Alex/Desktop/f/[${now}]`, null, (err) => {
	if (err) {
		if (err.code === 'EEXIST') {clear()}
		else {console.error(err)};
	} else {clear()};
});

function clear() {
	fs.readdir(path, null, (err, files) => {
		files.forEach((p) => {
			/^\d+\-\d+\-\d+\_\d+\-(\d+|\d+\_\d+)\.\w+$|^IMG\_\d+\_\d+\.\w+$|^DSC\_\d+\.\w+$/g.test(p) ? fs.renameSync(`${path}/${p}`, `${path}/f/[${now}]/${p}`) : null;
		});
	});
};