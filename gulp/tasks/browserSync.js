'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync');

var config = require('../config');

gulp.task('browserSync', ['build'], function() {
	browserSync.init([config.dist+'/**'], {
		server: {
			baseDir: config.dist
		}
	});
});