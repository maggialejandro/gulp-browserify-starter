'use strict';

/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var gulp         = require('gulp');
var browserify   = require('browserify');
var watchify     = require('watchify');

var source       = require('vinyl-source-stream');

var bundleLogger = require('../util/bundleLogger');
var handleErrors = require('../util/handleErrors');

var config       = require('../config');

gulp.task('browserify', function() {
    var bundleMethod = global.isWatching ? watchify : browserify;

    var tplTransform = require('node-underscorify').transform({
        extensions: ['ejs', 'html']
    });

    var bundler = bundleMethod({
        // Specify the entry point of your app
        entries: config.scripts.src,
        // Add file extentions to make optional in your requires
        extensions: ['.js']
    })
    .transform(tplTransform)
    .transform('deamdify')
    .transform('debowerify');

    if (config.env !== 'dev') {
        bundler = bundler.transform('uglifyify');
    }

    var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();

    return bundler
      // Enable source maps!
      .bundle({debug: config.debug})
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      .pipe(source(config.scripts.filename))
      // Specify the output destination
      .pipe(gulp.dest(config.dist + "/" + config.scripts.dest))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
    };

    if(global.isWatching) {
    // Rebundle with watchify on changes.
    bundler.on('update', bundle);
    }

    return bundle();
});
