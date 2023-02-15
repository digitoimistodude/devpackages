// Dependencies
const {
  src
} = require('gulp');
const stylelint = require('@ronilaukkarinen/gulp-stylelint');
const config = require('../config.js');

// Task
function lintstyles() {

  return src([config.stylelint.src])

    // Print linter report
    .pipe(stylelint(config.stylelint.opts));
}

exports.lintstyles = lintstyles;
