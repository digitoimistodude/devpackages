/* 

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var minifycss   = require('gulp-minify-css');
var uglify      = require('gulp-uglify');
var cache       = require('gulp-cache');
var concat      = require('gulp-concat');
var util        = require('gulp-util');
var header      = require('gulp-header');
var pixrem      = require('gulp-pixrem');
var pagespeed   = require('psi');
var minifyhtml  = require('gulp-htmlmin');
var exec        = require('child_process').exec;

/* 

FILE PATHS
==========
*/

var projectName = 'THEMENAME'
var themeDir = 'content/themes/'+ projectName;
var imgSrc = themeDir + '/images/*.{png,jpg,jpeg,gif}';
var imgDest = themeDir + '/images/optimized';
var sassSrc = themeDir + '/sass/**/*.{sass,scss}';
var sassFile = themeDir + '/sass/layout.scss';
var cssDest = themeDir + '/css';
var customjs = themeDir + '/js/scripts.js';
var jsSrc = themeDir + '/js/src/**/*.js';
var jsDest = themeDir + '/js';

/* 

ERROR HANDLING
==============
*/

var beep = function() {
  var os = require('os');
  var file = '/Users/rolle/gulp_error.wav';
  if (os.platform() === 'linux') {
    // Linux
    exec("aplay " + file);
  } else {
    // Mac
    console.log("afplay -v 3 " + file);
    exec("afplay -v 3 " + file);
  }
};

var handleError = function(task) {
  return function(err) {
    beep();
    
      notify.onError({
        message: task + ' failed, check the logs..',
        sound: false
      })(err);
    
    util.log(util.colors.bgRed(task + ' error:'), util.colors.red(err));
  };
};

/* 

BROWSERSYNC
===========

Notes:
   - Add only file types you are working on - if watching the whole themeDir, 
     task trigger will be out of sync because of the sourcemap-files etc.
   - Adding only part of the files will also make the task faster

*/

gulp.task('browsersync', function() {

  var files = [
    imgDest + '/*.{png,jpg,jpeg,gif}',
    themeDir + '/**/*.php',
    jsSrc
  ];

  browserSync.init(files, {
    proxy: "PROJETNAME.dev",
    browser: "Google Chrome",
    notify: true
  });

});

gulp.task('styles', function() {

  gulp.src(sassFile)

    .pipe(sass({
        compass: false,
        bundleExec: true,
        sourcemap: false,
        style: 'compressed',
        debugInfo: true,
        lineNumbers: true,
        // includePaths: require('node-bourbon').includePaths,
        errLogToConsole: true
      })) 
  
    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
    .pipe(pixrem())
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());

});

/* 

IMAGES
======
*/

gulp.task('images', function() {
  var dest = imgDest;

  return gulp.src(imgSrc)

    .pipe(changed(dest)) // Ignore unchanged files
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true }))) //use cache to only target new/changed files, then optimize the images
    .pipe(gulp.dest(imgDest));

});

/* 

SCRIPTS
=======
*/

var currentDate   = util.date(new Date(), 'dd-mm-yyyy HH:ss');
var pkg       = require('./package.json');
var banner      = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

gulp.task('js', function() {

      gulp.src(
        [
          'bower_components/jquery/dist/jquery.js',
          'bower_components/flexnav-rolle/js/jquery.flexnav.js',
          'bower_components/jquery.easing/js/jquery.easing.js',
          'bower_components/jquery-equalheights/jquery.equalHeights.js',
          themeDir + '/js/src/trunk.js',
          themeDir + '/js/src/scripts.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify({preserveComments: false, compress: true, mangle: true}).on('error',function(e){console.log('\x07',e.message);return this.end();}))
        .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
        .pipe(gulp.dest(jsDest));
});

/*

PAGESPEED
=====

Notes:
   - This runs Google PageSpeed Insights just like here http://developers.google.com/speed/pagespeed/insights/
   - You can use Google Developer API key if you have one, see: http://goo.gl/RkN0vE

*/

gulp.task('pagespeed', pagespeed.bind(null, {
  url: 'http://' + projectName + '.fi',
  strategy: 'mobile'
}));

/*

WATCH
=====

*/

// Run the JS task followed by a reload
gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('watch', ['browsersync'], function() {

  gulp.watch(sassSrc, ['styles']);
  gulp.watch(imgSrc, ['images']);
  gulp.watch(jsSrc, ['js-watch']);

});