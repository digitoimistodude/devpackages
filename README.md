Gulp + npm + bower
=========================

## Modern web development packages and tasks
##### ...used by Roni "Rolle" Laukkarinen

Just keeping track of changes in my gulpfile.js. This gulpfile is specifically meant for development on [dudestack](https://github.com/ronilaukkarinen/wpstack-rolle) and [modern-html5-boilerplate](https://github.com/ronilaukkarinen/modern-html5-boilerplate).

Mostly personal preference, but it's all open sourced anyway, so here we go.

## Features

- [browser-sync](https://github.com/BrowserSync/browser-sync) - Time-saving synchronised browser testing.
- [gulp](https://github.com/gulpjs/gulp) - Automate and enhance your workflow
- [gulp-changed](https://github.com/sindresorhus/gulp-changed) - Only pass through changed files
- [gulp-notify](https://github.com/mikaelbr/gulp-notify) - gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging
- [gulp-sass](https://github.com/dlmanning/gulp-sass) - Libsass compiler for gulp
- [gulp-util](https://github.com/gulpjs/gulp-util) - Utilities for gulp plugins
- [gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css) - A Gulp plugin that minifies css with clean-css
- [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes using values from [Can I Use](http://caniuse.com/).
- [gulp-uglify](https://github.com/terinjokes/gulp-uglify) - Minify JavaScript with UglifyJS
- [gulp-cache](https://github.com/jgable/gulp-cache) - A temp file based caching proxy task for Gulp.
- [gulp-concat](https://github.com/wearefractal/gulp-concat) - Streaming concat middleware for gulp (combines javascript files)
- [gulp-header](https://github.com/godaddy/gulp-header) - Gulp extension to add a header to file(s) in the pipeline
- [gulp-pixrem](https://github.com/gummesson/gulp-pixrem) - A CSS post-processor that generates pixel fallbacks for rem units.
- [require-dir](https://github.com/aseemk/requireDir) - Node.js helper to require() directories.
- [gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin) - gulp plugin to minify HTML.
- [run-sequence](https://github.com/OverZealous/run-sequence) - Run a series of dependent gulp tasks in order.
- [psi](https://github.com/addyosmani/psi) - Google PageSpeed Insights with reporting
- [Bower](http://bower.io) - A package manager for JS and CSS files and libraries, like jQuery and font-awesome etc.

## Usage

1. Clone this repository to your project folder by `mkdir -p ~/Projects && git clone https://github.com/digitoimistodude/devpackages.git ~/Projects`
2. `npm-check-updates -u` (if you don't have `npm-check-updates` installed, run `sudo npm install -g npm-check-updates`)
3. `npm update`
4. `bower install`
5. `gulp watch` and have fun!