'use strict';

var gulp = require('gulp');

gulp.task('build', [
    'html',
    'browserify',
    'images',
    'fonts'
]);
