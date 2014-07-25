'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('wiredep', function () {
    var wiredep = require('wiredep').stream;

    gulp.src(config.app+'/*.html')
        .pipe(wiredep({
            directory: config.app+'/bower_components'
        }))
        .pipe(gulp.dest(config.app));
});
