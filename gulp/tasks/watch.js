'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['setWatch', 'browserSync'], function() {
    gulp.watch(config.app+'/styles/**/*.css', ['styles']);
    gulp.watch(config.app+'/scripts/**/*.js', ['scripts']);
    gulp.watch(config.app+'/images/**/*', ['images']);
    gulp.watch(config.app+'/*.html', ['copy']);
    gulp.watch('bower.json', ['wiredep']);
    // Note: The browserify task handles js recompiling with watchify
});