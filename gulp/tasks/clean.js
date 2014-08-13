'use strict';

var gulp = require('gulp');
var config = require('../config');

// Clean
gulp.task('clean', require('del').bind(null, [
    config.dist+'/**/*',
    '!'+config.dist+'/.git'
]));

