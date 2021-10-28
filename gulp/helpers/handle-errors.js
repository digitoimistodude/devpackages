// Better CSS error reporting
const notify = require('gulp-notify');

// General error handling
const handleError = function () {

  return function (err) {
    if (typeof err !== 'undefined') {
      var notifyMessage = '';

      if (err.plugin === 'gulp-dart-sass') {
        // Message in notification
        notifyMessage = err.relativePath + '\n' + err.line + ':' + err.column;
      }

      if (err.plugin == 'gulp-stylelint') {
        notifyMessage = 'CSS linter found errors.';
      }

      notify({
        title: 'Gulp task failed — see console',
        message: notifyMessage
      }).write(err);
    }
  };
};

module.exports = {
  handleError
};
