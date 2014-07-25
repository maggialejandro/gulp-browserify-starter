var gulp = require('gulp');
var config = require('../config');

var browserify = require('browserify');
var deamdify = require('deamdify');
var debowerify = require('debowerify');
var uglifyify = require('uglifyify');

gulp.task('scripts', function() {
  var task;

  task = browserify({
    entries: config.scripts.src,
    extensions: ['.js']
  })
  .transform('deamdify')
  .transform('debowerify');

  if (config.env !== 'dev') {
    task = task.transform('uglifyify');
  }

  return task.bundle({
    debug: config.debug
  })
  .pipe(source(config.scripts.filename))
  .pipe(gulp.dest(config.dest + "/" + config.scripts.dest));
});
