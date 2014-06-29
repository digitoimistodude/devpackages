var gulp = require('gulp'),
    compass = require('gulp-compass'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    header = require('gulp-header');
    util = require('gulp-util');
    livereload = require('gulp-livereload'),
    currentDate = util.date(new Date(), 'dd-mm-yyyy');
    pkg = require('./package.json');
    banner = '/*! <%= pkg.name %> <%= currentDate %> - <%= pkg.author %> */\n';

// Compass without config.rb:

gulp.task('compass', function() {
  gulp.src('content/themes/themename/sass/layout.scss')
  .pipe(compass({
    css: 'content/themes/themename/css',
    sass: 'content/themes/themename/sass',
    image: 'content/themes/themename/images'
     // ,require: ['sassline']
      }))
  .on('error', function(err) {
    // Would like to catch the error here
      })
  .pipe(minifycss({keepBreaks:false,keepSpecialComments:0,}))
  .pipe(gulp.dest('content/themes/themename/css'))
  .pipe(livereload())
  .pipe(notify({ message: 'Compass complete' }));
    });

// If not using compass:

// gulp.task('styles', function() {
//   return gulp.src('content/themes/jentafon/sass/layout.scss')
//     .pipe(sass({ style: 'expanded', }))
//     .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
//     .pipe(gulp.dest('content/themes/jentafon/css'))
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest('content/themes/jentafon/css'))
//     .pipe(notify({ message: 'Styles task complete' }));
    // });

gulp.task('validatejs', function() {
  gulp.src(
    [
    'content/themes/themename/js/scripts.js'
    ])

    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'scripts.js validated' }));
});

gulp.task('scripts', function() {
  //gulp.src('content/themes/themename/js/*.js')
  gulp.src(
    [
    'content/themes/themename/js/jquery-1.7.1.min.js',
    'content/themes/themename/inc/fancybox/source/jquery.fancybox.pack.js',
    'content/themes/themename/js/highlight.js',
    'content/themes/themename/js/jquery.simpleLastFM.js',
    'content/themes/themename/inc/twitter/jquery.tweet.js',
    'content/themes/themename/js/bootstrap.js',
    'content/themes/themename/js/pongstagr.am.js',
    'content/themes/themename/js/placeholders.js',
    'content/themes/themename/js/skip-link-focus-fix.js',
    'content/themes/themename/js/jquery.smooth-scroll.js',
    'content/plugins/bj-lazy-load/js/combined.js',
    'content/themes/themename/js/scripts.js' 
    ])
    .pipe(concat('all.js'))
    .pipe(uglify({preserveComments: false, compress: true, mangle: true}).on('error', function(e) { console.log('\x07',e.message); return this.end(); }))
    .pipe(header(banner, {pkg: pkg, currentDate: currentDate}))
    .pipe(gulp.dest('content/themes/themename/js/'))
    .pipe(livereload())
    .pipe(notify({ message: 'scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('content/themes/themename/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(livereload())
    .pipe(gulp.dest('content/themes/themename/images/optimized'));
    });

gulp.task('php', function(){  
    gulp.src('*.php')
    .pipe(livereload())
    .pipe(notify({ message: 'php-file was reloaded' }));
})

gulp.task('html', function(){  
    gulp.src('*.html')
    .pipe(livereload())
    .pipe(notify({ message: 'html-file was reloaded' }));
})

gulp.task('watch', function() {

  livereload.listen();

  gulp.watch('content/themes/themename/*.php', ['php']);
  gulp.watch('content/themes/themename/*.html', ['html']);
  gulp.watch('content/themes/themename/sass/*.scss', ['compass']);
  gulp.watch('content/themes/themename/js/scripts.js', ['scripts', 'validatejs']);
  gulp.watch('content/themes/themename/images/*', ['images']);

});

gulp.task('default', function() { gulp.start('compass', 'scripts', 'validatejs', 'images'); });  