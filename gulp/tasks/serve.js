'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('serve', ['connect'], function () {
    require('opn')('http://localhost:'+config.port);
});
