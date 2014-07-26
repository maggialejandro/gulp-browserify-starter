'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', function() {
	return gulp.src(config.app+'/**')
		.pipe(gulp.dest(config.dist));
});
