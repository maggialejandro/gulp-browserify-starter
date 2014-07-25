'use strict';

var gulp = require('gulp');
var filter = require('gulp-filter');
var uglify = require('gulp-uglify');
var useref = require('gulp-useref');
var size = require('gulp-size');
var csso = require('gulp-csso');

var config = require('../config');

gulp.task('html', ['styles', 'scripts'], function () {
    var jsFilter = filter('**/*.js');
    var cssFilter = filter('**/*.css');
    var path = '{.tmp,'+config.app+'}';

    return gulp.src(config.app+'/*.html')
        .pipe(useref.assets({searchPath: path}))
        .pipe(jsFilter)
        .pipe(uglify())
        .pipe(jsFilter.restore())
        .pipe(cssFilter)
        .pipe(csso())
        .pipe(cssFilter.restore())
        .pipe(useref.restore())
        .pipe(useref())
        .pipe(gulp.dest(config.dist))
        .pipe(size());
});
