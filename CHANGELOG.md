### 2.5.5: 2024-04-18

* Add phpcs.xml to root as a part of devpackages
* Remove files that are no longer in use
* Add missing PROJECTNAME variable to phpcs.xml

### 2.5.4: 2023-06-01

* Add rule `"number-leading-zero": "never",`
* Disallow using of percents
* Make default nesting depth 2
* Add ignoreAtRules to nesting rules

### 2.5.3: 2023-02-15

* Update root font size for rem-over-px
* Ignore -1px in rem-over-px
* Add missing postcss-scss
* Remove deprecated rules
* Update .editorconfig
* Update stylelint-config-standard-scss
* Unit tests for stylelint packages

### 2.5.2: 2023-02-15

* More consistent sass and stylelint config for gulp
* Add declaration-property-value-no-unknown
* Add stylelint-file-max-lines
* Add stylelint-rem-over-px
* Remove the obvious null rules from .stylelintrc
* Remove .travis.yml
* Update @ronilaukkarinen/gulp-stylelint to 14.1.1
* Update @ronilaukkarinen/stylelint-a11y to 1.2.7

### 2.5.1: 2023-02-13

* Update @babel/core to 7.20.12
* Update @ronilaukkarinen/gulp-stylelint to 14.1.0
* Update @ronilaukkarinen/stylelint-a11y to 1.2.6
* Update @ronilaukkarinen/stylelint-declaration-strict-value to 1.9.2
* Update @ronilaukkarinen/stylelint-value-no-unknown-custom-properties to 4.0.1
* Update babel-loader to 9.1.2
* Update browser-sync to 2.27.11
* Update caniuse-lite to 1.0.30001451
* Update eslint to 8.34.0
* Update eslint-plugin-import to 2.27.5
* Update eslint-plugin-jsx-a11y to 6.7.1
* Update eslint-plugin-react to 7.32.2
* Update gulp-eslint-new to 1.7.2
* Update npm-check-updates to 16.7.4
* Update postcss to 8.4.21
* Update sass to 1.58.0
* Update stylelint to 15.1.0
* Update stylelint-config-recommended to 10.0.1
* Update stylelint-config-recommended-scss to 9.0.0
* Update stylelint-config-standard to 30.0.1
* Update stylelint-config-standard-scss to 7.0.0
* Update stylelint-order to 6.0.2
* Update stylelint-scss to 4.4.0

### 2.5.0: 2022-12-10

* Disable max-line-length and no-descending-specificity rules

### 2.4.9: 2022-11-28

* Upgrade packages: @babel/core, @babel/eslint-parser, @hint/hint-axe, @hint/hint-button-type, @hint/hint-compat-api, @ronilaukkarinen/gulp-stylelint, autoprefixer, babel-loader, caniuse-lite, cssnano, cssnano-preset-advanced, eslint, eslint-plugin-jsx-a11y, eslint-plugin-react, gulp-eslint-new, hint, npm-check-updates, postcss, postcss-merge-longhand, postcss-merge-rules, sass, stylelint, stylelint-config-recommended, stylelint-config-recommended-scss, stylelint-config-standard, stylelint-config-standard-scss, stylelint-declaration-strict-value, stylelint-scss, terser-webpack-plugin, webpack

### 2.4.8: 2022-08-22

* Add .nvmrc to keep up with Node.js versions
* Fix php files not updating in browserSync

### 2.4.7: 2022-06-30

* Upgrade packages to latest versions (most notably caniuse, cssnano, hint, stylelint and webpack)
* Update stylelintrc rules block-closing-brace-newline-after and at-rule-empty-line-before
* Remove gulp-rename that is not used anymore

### 2.4.6: 2022-04-21

* Remove leftover config value
* Fix config.styles.src that causes gutenberg styles not to compile

### 2.4.5: 2022-04-19

* Fix proxy url, add proxyUrl as variable

### 2.4.4: 2022-04-11

* Add cssnano and related postcss-plugins, deprecate gulp-clean-css that is in maintenance-mode
* Improve watch task to be more performant
* Add gulp-size and verbose information to console
* Add instructions on how to contribute
* Update stylelint-config-standard, stylelint-config-recommended-css, caniuse-lite and js related packages

### 2.4.3: 2022-03-31

* Update browser-sync to 2.27.9
* Add more watch locations for php files

### 2.4.2: 2022-03-08

* Upgrade stylelint to 14.5.3
* Update .stylelintrc rules as per the [official recommendations](https://github.com/stylelint/stylelint-config-recommended/issues/157#issuecomment-1056967465)
* Upgrade eslint to 8.10.0
* Upgrade eslint-config-airbnb to 19.0.4
* Remove deprecated babel-eslint and use @babel/eslint-parser instead
* Revove outdated and unmaintained gulp-eslint and use gulp-eslint-new instead
* Allow js/src/front-end.js to be linted, fix file for JS warnings

### 2.4.1: 2021-11-23

* Fix JS not reloading browser on save

### 2.4.0: 2021-11-22

* Update CleanCSS optimization options for production styles

### 2.3.9: 2021-11-19

* Downgrade terser-webpack-plugin as it should always be at version 5.2.4 before other upgrades to not to cause a dependency conflict with new projects

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
