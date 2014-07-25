'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var size = require('gulp-size');

var config = require('../config');

gulp.task('scripts', function () {
    return gulp.src(config.app+'/scripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(require('jshint-stylish')))
        .pipe(size());
});
