### 2.3.8: 2021-11-17

* Update to stylelint-config-standard@24.0.0 and fix "unknown rule custom-property-no-missing-var-function" error in vscode-stylelint 1.2.0

### 2.3.7: 2021-11-09

* Change back from @ronilaukkarinen/stylelint-declaration-strict-value@1.7.13 to official stylelint-declaration-strict-value@1.8.0
* Fix rule for declaration-strict-value
* Upgade to webpack 5
* Update packages

### 2.3.6: 2021-11-04

* Update .browserslistrc, ignore samsung browser and older Edge

### 2.3.5: 2021-11-04

* Update .stylelintrc rules

### 2.3.4: 2021-11-04

* Revert mistakenly upgraded terser-webpack-plugin, webpack and webpack-stream. These will be upgraded later.

### 2.3.3: 2021-11-04

* Use @ronilaukkarinen/stylelint-a11y@1.2.4 with working peerDependencies
* Use @ronilaukkarinen/stylelint-declaration-strict-value@1.7.13 with working peerDependencies
* Use @ronilaukkarinen/stylelint-value-no-unknown-custom-properties@1.7.13 with working peerDependencies
* Downgrade to eslint@7.2.0, to be updated later with its peerDependencies

### 2.3.2: 2021-11-02

* Add @babel/core to devDependencies, sometimes required by project

### 2.3.1: 2021-11-01

* Switch gulp-stylelint to @ronilaukkarinen/stylelint with stylelint@14.0.1
* Fix watch task performance issues
* Improve config options for watch
* Remove fibers as the maintainer recommends to avoid it and no clear performance benefit detected

### 2.3.0: 2021-10-29

* Change gulp-stylelint to gulp-exec and stylelint command line version - because gulp-stylelint is currently outdated and uses old bundled stylelint version

### 2.2.9: 2021-10-28

* Update sass to 1.43.4
* Sass speed improvements with dart-sass, Fiber and sass.sync()

### 2.2.8: 2021-10-28

* Upgrade stylelint to v14
* Drop nodejs 12 support
* Drop node-sass and fibers support
* Add new stylelint rules
* Improve watch task, speed it up, inject CSS first in dev environment
* Update .browserslistrc
* Upgrade to gulp 4.0.2
* Remove outdated printer-for-errors-of-gulp-plugins, trade-off with performance and watch task crash on SCSS errors

### 2.2.7: 2021-08-26

* Stylelint/order: Add order rule for @import

### 2.2.6: 2021-06-24

* Stylelint/order: @extend at-rule should be always first

### 2.2.5: 2021-06-24

* Set `mergeMedia: false` because true causes problems in production

### 2.2.4: 2021-06-23

* Speed up styles tasks by adding a separate watch for prodstyles 

### 2.2.3: 2021-06-23

* Confirmed fix for rule-empty-line-before from Air-light 7.7.3

### 2.2.2: 2021-06-22

* Ignore no-invalid-position-at-import-rule

### 2.2.1: 2021-06-22

* Update stylelint and eslint packages
* Update .stylelintrc
* Add order rules for @-rules: include, media
* Add rules for rule-empty-line-before and at-rule-empty-line-before

### 2.2.0: 2021-05-31

* Fix cleanCSS settings that mistakenly strip fonts from productions

### 2.1.9: 2021-05-31

* Update cleanCSS settings
* Remove ie11 support

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
