/*

REQUIRED STUFF
==============
*/

var gulp        = require('gulp');
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var notify      = require('gulp-notify');
var prefix      = require('gulp-autoprefixer');
var cleancss    = require('gulp-clean-css');
var uglify      = require('gulp-uglify-es').default;
var concat      = require('gulp-concat');
var util        = require('gulp-util');
var header      = require('gulp-header');
var pixrem      = require('gulp-pixrem');
var exec        = require('child_process').exec;
var rename      = require('gulp-rename');
var stylefmt    = require('gulp-stylefmt');
var debug       = require('gulp-debug');
var scsslint    = require('gulp-scss-lint');
var cache       = require('gulp-cached');
var phpcs       = require('gulp-phpcs');

/*

FILE PATHS
==========
*/

var themeDir = 'content/themes/THEMENAME';
var sassSrc = themeDir + '/sass/**/*.{sass,scss}';
var sassFile = themeDir + '/sass/base/global.scss';
var phpSrc = themeDir + '/**/*.php';
var cssDest = themeDir + '/css';
var customjs = themeDir + '/js/scripts.js';
var jsSrc = themeDir + '/js/src/**/*.js';
var jsDest = themeDir + '/js';

/*

ERROR HANDLING
==============
*/

var handleError = function(task) {
  return function(err) {

      notify.onError({
        message: task + ' failed, check the logs..'
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
    themeDir + '/**/*.php',
    jsSrc
  ];

  browserSync.init(files, {
    proxy: "PROJECTNAME.test",
    browser: "Google Chrome",
    open: "external",
    notify: true,
    reloadDelay: 1000
  });

});

/*

STYLES
======
*/

var helpers = function( file ) {
    var currentdirectory = process.cwd() + '/';
    var modifiedfile = file.path.replace( currentdirectory, '' );
    var filename = modifiedfile.replace(/^.*[\\\/]/, '')
    var correctdir = modifiedfile.replace( filename, '' );

    gulp.src(modifiedfile)
        // Run current file through stylefmt
        .pipe(stylefmt({ configFile: themeDir + '/.stylelintrc' }))

        // Overwrite
        .pipe(gulp.dest(correctdir))
};

gulp.task('scss-lint', function() {
  gulp.src([sassSrc, '!' + themeDir + '/sass/navigation/_burger.scss', '!' + themeDir + '/sass/base/_normalize.scss'])
    .pipe(cache('scsslint'))
    .pipe(scsslint());
});

gulp.task('styles', function() {

    // Save compressed version
    gulp.src(sassFile)

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'compressed',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        themeDir + '/node_modules/',
        'node_modules/',
        // require('node-bourbon').includePaths
      ],
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(pixrem())
    .pipe(cleancss({
      compatibility: 'ie11',
      level: {
        1: {
          tidyAtRules: true,
          cleanupCharsets: true,
          specialComments: 0
        }
      }
    }, function(details) {
        //console.log('[clean-css] Original size: ' + details.stats.originalSize + ' bytes');
        //console.log('[clean-css] Minified size: ' + details.stats.minifiedSize + ' bytes');
        console.log('[clean-css] Time spent on minification: ' + details.stats.timeSpent + ' ms');
        console.log('[clean-css] Compression efficiency: ' + details.stats.efficiency * 100 + ' %');
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(cssDest))
    .pipe(browserSync.stream());

    // Save expanded version
    gulp.src(sassFile)

    .pipe(sass({
      compass: false,
      bundleExec: true,
      sourcemap: false,
      style: 'expanded',
      debugInfo: true,
      lineNumbers: true,
      errLogToConsole: true,
      includePaths: [
        themeDir + '/node_modules/',
        'node_modules/',
        // require('node-bourbon').includePaths
      ],
    }))

    .on('error', handleError('styles'))
    .pipe(prefix('last 3 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4')) // Adds browser prefixes (eg. -webkit, -moz, etc.)
    .pipe(pixrem())

    // Process the expanded output with Stylefmt
    gulp.src('css/global.css')
    .pipe(stylefmt({ configFile: themeDir + '/.stylelintrc' }))
    .pipe(gulp.dest(cssDest))

});

// Run only manually: gulp uncss, because takes some time
gulp.task('uncss', function() {

  gulp.src(cssDest + '/global.css')
    .pipe(uncss({
      html:
        // Activate gulp-sitemap-generator and go to http://PROJECTNAME.test?show_sitemap, and paste it here:
        ["http:\/\/PROJECTNAME.test\/"]
          }))
          .pipe(gulp.dest(cssDest));
});

/*

PHPCS
=====
*/

gulp.task('phpcs', function() {

  gulp.src(phpSrc)

    // Validate files using PHP Code Sniffer
    .pipe(phpcs({
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + '/phpcs.xml',
      warningSeverity: 0
    }))

    // Log all problems that was found
    .pipe(phpcs.reporter('log'));
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
          themeDir + '/js/src/skip-link-focus-fix.js',
          themeDir + '/node_modules/moveto/dist/moveTo.js',
          // themeDir + '/js/src/sticky-nav.js',
          // themeDir + '/node_modules/slick-carousel/slick/slick.js',
          themeDir + '/node_modules/what-input/dist/what-input.js',
          themeDir + '/js/src/navigation.js',
          themeDir + '/js/src/scripts.js'
        ])
        .pipe(concat('all.js'))
        .pipe(uglify({
          compress: true,
          mangle: true}).on('error', function(err) {
            util.log(util.colors.red('[Error]'), err.toString());
            this.emit('end');
          }))
        .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
        .pipe(gulp.dest(jsDest));
});

/*

WATCH
=====

*/

// Run the JS task followed by a reload
gulp.task('js-watch', ['js'], browserSync.reload);
gulp.task('watch', ['browsersync', 'phpcs'], function() {

  gulp.watch(sassSrc, ['styles', 'scss-lint']).on( 'change', helpers );
  gulp.watch(jsSrc, ['js-watch']);

});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch']);
