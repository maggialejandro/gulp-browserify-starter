'use strict';

var gulp = require('gulp');
var size = require('gulp-size');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var config = require('../config');

gulp.task('images', function () {
    return gulp.src(config.app+'/images/**/*')
        .pipe(cache(imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest(config.dist+'/images'))
        .pipe(size());
});
