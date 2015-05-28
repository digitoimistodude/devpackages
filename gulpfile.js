/* 

REQUIRED STUFF
==============
*/

var changed     = require('gulp-changed');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
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
var runSequence = require('run-sequence');
var exec        = require('child_process').exec;

/* 

ERROR HANDLING
==============
*/

var beep = function() {
  var os = require('os');
  var file = '/Users/rolle/gulp_error.wav';
  if (os.platform() === 'linux') {
    // linux
    exec("aplay " + file);
  } else {
    // mac
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
var jsSrc = themeDir + '/js/src';
var jsDest = themeDir + '/js';
var markupSrc = [themeDir + '/**/*.php', !'vendor/**/*.php'];
var markupDest = themeDir + '/';

/* 

BROWSERSYNC
===========
*/

var devEnvironment = 'PROJECTNAME.dev'
var hostname = '192.168.1.242' // Your IP address here
var localURL = 'http://' + devEnvironment;

gulp.task('browserSync', function () {
    
    //declare files to watch + look for files in assets directory (from watch task)
    var files = [
    cssDest + '/**/*.{css}',
    jsSrc + '/**/*.js',
    imgDest + '/*.{png,jpg,jpeg,gif}',
    themeDir + '/**/*.php'
    ];

    browserSync.init(files, {
      proxy: localURL,
      host: hostname,
      agent: false,
      browser: "Google Chrome Canary"
    });

});


/* 

SASS
====
*/

gulp.task('sass', function() {
  gulp.src(sassFile)

  .pipe(sass({
    compass: false,
    bundleExec: true,
    sourcemap: false,
    style: 'compressed',
    debugInfo: true,
    lineNumbers: true,
    errLogToConsole: true
  })) 

  .on('error', handleError('sass'))
  .pipe(prefix('last 3 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) //adds browser prefixes (eg. -webkit, -moz, etc.)
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(pixrem())
  .pipe(gulp.dest(themeDir + '/css'))
  .pipe(reload({stream:true}));
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

MARKUP
=======
*/

// gulp.task('minify-html', function() {
//   gulp.src(markupSrc)
//     .pipe(minifyhtml({
//       collapseWhitespace: true,
//       removeComments: false,
//       removeScriptTypeAttributes: true,
//       removeStyleLinkTypeAttributes: true,
//       minifyJS: true,
//       minifyCSS: true
//     }))
//     .pipe(gulp.dest(markupDest))
//     .pipe(reload);
// });

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

Notes:
   - browserSync automatically reloads any files
     that change within the directory it's serving from
*/

gulp.task('setWatch', function() {
  global.isWatching = true;
});

gulp.task('watch', ['setWatch', 'browserSync'], function() {
  gulp.watch(sassSrc, ['sass']);
  gulp.watch(imgSrc, ['images']);
  // gulp.watch(markupSrc, ['minify-html', browserSync.reload]);
  gulp.watch(jsSrc + '/**/*.js', ['js', browserSync.reload]);
});


/* 
BUILD
=====
*/

gulp.task('build', function(cb) {
  runSequence('sass', 'js', 'images', cb);
});

/* 
DEFAULT
=======
*/

gulp.task('default', function(cb) {
    runSequence(
    'images',
    'sass',
    'js',
    'minify-html',
    'browserSync',
    'watch',
    'refresh',
    cb
    );
});