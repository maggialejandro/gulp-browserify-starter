var path = require('path');
var production = (process.env.NODE_ENV === 'production');

var config = {
	app: 'app',
	dist: production ? 'dist' : '.tmp',
	bower: 'app/bower_components',
	livereloadPort: 35729,
    debug: true,
	port: 9000,
	root: path.resolve('./')
}

config.scripts = {
    src: [
        "./" + config.app + "/scripts/main.js"
    ],
    dest: 'js',
    filename: 'main.js'
}

module.exports = config;
