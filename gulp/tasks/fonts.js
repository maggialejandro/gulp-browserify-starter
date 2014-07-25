'use strict';

var gulp = require('gulp');
var filter = require('gulp-filter');
var flatten = require('gulp-flatten');
var size = require('gulp-size');

var config = require('../config');

gulp.task('fonts', function () {
    var streamqueue = require('streamqueue');

    return streamqueue({objectMode: true},
        gulp.src(config.app+'/fonts/**/*')
    )
        .pipe(filter('**/*.{eot,svg,ttf,woff}'))
        .pipe(flatten())
        .pipe(gulp.dest(config.dist+'/fonts'))
        .pipe(size());
});
