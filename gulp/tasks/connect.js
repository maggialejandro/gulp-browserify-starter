'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('connect', function () {
    var connect = require('connect');

    var app = connect()
        .use(require('connect-livereload')({
            port: config.livereloadPort
        }))
        .use(connect.static(config.app))
        .use(connect.static('.tmp'))
        .use(connect.directory(config.app));

    require('http').createServer(app)
        .listen(config.port)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:'+config.port);
        });
});
