'use strict';

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

// Clean
gulp.task('clean', function () {
    return gulp.src([
    	'.tmp',
    	config.dist+'/**/*',
    	'!'+config.dist+'/.git'
    ], { read: false })
    .pipe(clean());
});
