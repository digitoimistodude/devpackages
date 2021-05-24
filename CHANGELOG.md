### 2.1.8: 2021-05-24

* Fix devstyles task hanging after error
* Add @ronilaukkarinen/printer-for-errors-of-gulp-plugins

### 2.1.7: 2021-05-24

* Remove outdated @wulechuan/printer-for-errors-of-gulp-plugins
* Remove deprecated gulp-util package
* Add custom error handler

### 2.1.6: 2021-05-12

* Fix: Add missing autoprefixer for dev styles gulp task.

### 2.1.5: 2021-04-20

* Support for SCSS source maps.

### 2.1.4: 2021-04-20

* Fix error reporting on watch. Awaiting [Pull Request](https://github.com/wulechuan/wulechuan-js-printer-for-errors-of-gulp-plugins/pull/3).

### 2.1.3: 2021-04-20

* Fix: SCSS in sub directories not triggering via watch task
* Change: PHPCS option from src to watch because we only use it for watching

### 2.1.2: 2021-04-20

* Performance update
* Separate tasks: devstyles and prodstyles to increase performance
* Rename scsslint task to lintstyles to be more consistent with other style related tasks
* Change development compiler to dart-sass, retain node-sass in production in favor of dart-sass performing as fast as possible
* Increase BrowserSync CSS injection to mere milliseconds by optimization, remove unnecessary stream (inject is inherited automatically from injectChanges: true)

### 2.1.1: 2021-04-14

* Fix: Specify PHP watch directories separately in config.js as node_modules exclusion doesn't work and causes CPU to hog

### 2.1.0: 2021-04-07

* Add missing stylelint-config-recommended-scss package

### 2.0.9: 2021-04-06

* Add .hintrc for webhint
* Update .browserslistrc, deprecate Internet Explorer and Opera mobile browsers

### 2.0.8: 2021-04-05

* Remove deprecated package [stylelint-config-wordpress](https://www.npmjs.com/package/stylelint-config-wordpress)

### 2.0.7: 2021-04-01

* Fix stylelint task not showing report
* Remove unused browsersync watch

### 2.0.6: 2021-03-18

* Fix gulp watch task causing CPU hogging

### 2.0.5: 2021-03-18

* Remove mqpacker that is causing problems with media queries
* Update packages (webpack has to be locked to 4.2.6 and terser-webpack-plugin to 4.2.3)

### 2.0.4: 2021-02-26

* Move trailing slash to themeDir variable #6 ([related Air-light PR](https://github.com/digitoimistodude/air-light/pull/75))

### 2.0.3: 2021-02-25

* Fix js task signal async completion ([air-light 6.8.6](https://github.com/digitoimistodude/air-light/releases/tag/6.8.6))
### 2.0.2: 2021-02-25

* Fix CSS path for [air-light](https://github.com/digitoimistodude/air-light/) 6.8.4
* Fix default browsersync certificate
### 2.0.1: 2021-02-19

* Get new dev/prod build process from air-light #5

### 2.0.0: 2021-02-19

* Start versioning from 2.0.0
* Open changelog to be more consistent with the releases
