'use strict';

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var size = require('gulp-size');

var config = require('../config');

gulp.task('styles', function () {
    return gulp.src(config.app+'/styles/main.css')
        .pipe(autoprefixer('last 1 version'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(size());
});
