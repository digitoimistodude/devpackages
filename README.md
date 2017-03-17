## Modern web development workflow
##### Used by Digitoimisto Dude Oy.

This repository includes [Gulp](http://gulpjs.com/) and npm related files for starting a new project. These files are specifically meant for development on [dudestack](https://github.com/digitoimistodude/wpstack-rolle), [modern-html5-boilerplate](https://github.com/digitoimistodude/modern-html5-boilerplate) and [air starter theme](https://github.com/digitoimistodude/air).

## Table of contents

1. [Features](#features)
2. [Usage](#usage)

## Features

1. **[BrowserSync](https://github.com/BrowserSync/browser-sync)** - Time-saving synchronised browser testing.
2. **[Gulp](https://github.com/gulpjs/gulp)** - Automate and enhance your workflow
    1. **[gulp-changed](https://github.com/sindresorhus/gulp-changed)** - Only pass through changed files
    2. **[gulp-notify](https://github.com/mikaelbr/gulp-notify)** - gulp plugin to send messages based on Vinyl Files or Errors to Mac OS X, Linux or Windows using the node-notifier module. Fallbacks to Growl or simply logging
    3. **[gulp-sass](https://github.com/dlmanning/gulp-sass)** - Libsass compiler for gulp
    4. **[gulp-util](https://github.com/gulpjs/gulp-util)** - Utilities for gulp plugins
    5. **[gulp-clean-css](https://github.com/scniro/gulp-clean-css)** - A Gulp plugin that minifies css with clean-css
    [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)** - 6. PostCSS plugin to parse CSS and add vendor prefixes using values from [Can I Use](http://caniuse.com/).
    7. **[gulp-uglify](https://github.com/terinjokes/gulp-uglify)** - Minify JavaScript with UglifyJS
    8. **[gulp-cache](https://github.com/jgable/gulp-cache)** - A temp file based caching proxy task for Gulp.
    9. **[gulp-concat](https://github.com/wearefractal/gulp-concat)** - Streaming concat middleware for gulp (combines javascript files)
    10. **[gulp-header](https://github.com/godaddy/gulp-header)** - Gulp extension to add a header to file(s) in the pipeline
    11. **[gulp-pixrem](https://github.com/gummesson/gulp-pixrem)** - A CSS post-processor that generates pixel fallbacks for rem units.
    12. **[gulp-uncss](https://github.com/ben-eb/gulp-uncss)** - Remove unused CSS selectors.

## Usage

**Please note:** Currently this repo is bundled with [WordPress starter theme air][https://github.com/digitoimistodude/air].

1. Clone this repository to your project folder with `mkdir -p ~/Projects && git clone https://github.com/digitoimistodude/devpackages.git ~/Projects`
2. `npm-check-updates -u` (if you don't have `npm-check-updates` installed, run `sudo npm install -g npm-check-updates`)
3. `npm update`
4. `bower install`
5. `gulp watch` and have fun!
