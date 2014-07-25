'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var config = require('../config');

gulp.task('watch', ['connect', 'serve'], function () {
    var server = livereload();

    // watch for changes
    gulp.watch([
        config.app+'/*.html',
        '.tmp/styles/**/*.css',
        config.app+'/scripts/**/*.js',
        config.app+'/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch(config.app+'/styles/**/*.css', ['styles']);
    gulp.watch(config.app+'/scripts/**/*.js', ['scripts']);
    gulp.watch(config.app+'/images/**/*', ['images']);
    gulp.watch('bower.json', ['wiredep']);
});
