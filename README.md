## Modern web development workflow
##### Used by Digitoimisto Dude Oy.

This repository includes [Gulp](http://gulpjs.com/), Bower and npm related files for starting a new project. These files are specifically meant for development on [dudestack](https://github.com/digitoimistodude/wpstack-rolle) and [modern-html5-boilerplate](https://github.com/digitoimistodude/modern-html5-boilerplate).

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
    5. **[gulp-minify-css](https://github.com/jonathanepollack/gulp-minify-css)** - A Gulp plugin that minifies css with clean-css
    [gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)** - 6. PostCSS plugin to parse CSS and add vendor prefixes using values from [Can I Use](http://caniuse.com/).
    7. **[gulp-uglify](https://github.com/terinjokes/gulp-uglify)** - Minify JavaScript with UglifyJS
    8. **[gulp-cache](https://github.com/jgable/gulp-cache)** - A temp file based caching proxy task for Gulp.
    9. **[gulp-concat](https://github.com/wearefractal/gulp-concat)** - Streaming concat middleware for gulp (combines javascript files)
    10. **[gulp-header](https://github.com/godaddy/gulp-header)** - Gulp extension to add a header to file(s) in the pipeline
    11. **[gulp-pixrem](https://github.com/gummesson/gulp-pixrem)** - A CSS post-processor that generates pixel fallbacks for rem units.
    12. **[gulp-htmlmin](https://github.com/jonschlinkert/gulp-htmlmin)** - gulp plugin to minify HTML.
    13. **[require-dir](https://github.com/aseemk/requireDir)** - Node.js helper to require() directories.
    14. **[run-sequence](https://github.com/OverZealous/run-sequence)** - Run a series of dependent gulp tasks in order.
3. **[psi](https://github.com/addyosmani/psi)** - Google PageSpeed Insights with reporting
4. **[Bower](http://bower.io)** - A package manager for JS and CSS files and libraries, like jQuery and font-awesome etc.
    1. **[jQuery](https://jquery.com/)** - The Write Less, Do More, JavaScript Library.
    2. **[jQuery Easing](http://gsgd.co.uk/sandbox/jquery/easing/)** - A jQuery plugin from GSGD to give advanced easing options.
    3. **[jQuery equalHeights](https://github.com/mattbanks/jQuery.equalHeights)** - Simple equal heights jQuery plugin 
    4. **[Wow.js](http://mynameismatthieu.com/WOW/)** - Reveal Animations When You Scroll.
    5. **[isMobile](https://github.com/kaimallea/isMobile)** - A simple JS library that detects mobile devices.
    6. **[Font Awesome](http://fortawesome.github.io/Font-Awesome/)** - the iconic font and CSS toolkit
    7. **[Normalize-scss](https://github.com/JohnAlbin/normalize-scss)** - Sass version of Normalize.css, a collection of HTML element and attribute rulesets to normalize styles
    8. **[Flexnav-rolle](https://github.com/ronilaukkarinen/flexnav-rolle)** - A modified fork of a jQuery plugin for responsive menus
    9. **[Knife](https://github.com/Pushplaybang/knife)** - Nail vertical rhythm, modular scale, and REMs like a boss with this simple set of SASS/SCSS variables, functions and mixins.
    10. **[Jeet Grid](http://jeet.gs/)** - CSS preprocessor grid built with fractions and ratios to make columns flexible and your workflow fast.
    11. **[Animate.css](http://daneden.github.io/animate.css/)** - A cross-browser library of CSS animations.
    12. **[Sanitize.css](https://10up.github.io/sanitize.css/)** - sanitize.css makes browsers render elements consistently and allows you to style with today’s best practices out-of-the-box.
    13. **[Outline.css](http://outlinecss.co.uk)** - The clean & simple framework.
    14. **[Buttons](https://github.com/alexwolfe/Buttons)** - A CSS button library built using Sass and Compass
    15. **[Saffron](http://colindresj.github.io/saffron/)** - a simple Sass mixin library for animations and transitions
    16. **[Sassline](https://sassline.com/)** - Set text on the web to a baseline grid with Sass & rems using a responsive modular-scale.
    17. **[sass-burger](https://github.com/jorenvanhee/sass-burger)** - A Sass mixin for creating hamburger icons.

## Usage

1. Clone this repository to your project folder with `mkdir -p ~/Projects && git clone https://github.com/digitoimistodude/devpackages.git ~/Projects`
2. `npm-check-updates -u` (if you don't have `npm-check-updates` installed, run `sudo npm install -g npm-check-updates`)
3. `npm update`
4. `bower install`
5. `gulp watch` and have fun!