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
