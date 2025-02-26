## Modern web development workflow

[![Build Status](https://img.shields.io/travis/com/digitoimistodude/devpackages.svg?style=flat-square)](https://travis-ci.com/digitoimistodude/devpackages) [![GitHub release](https://img.shields.io/github/release/digitoimistodude/devpackages.svg?style=flat-square)](https://github.com/digitoimistodude/devpackages/releases)
##### Used by Digitoimisto Dude Oy.

This repository includes [Gulp](http://gulpjs.com/) and npm related files for starting a new project. These files are specifically meant for development on [dudestack](https://github.com/digitoimistodude/dudestack), [modern-html5-boilerplate](https://github.com/digitoimistodude/modern-html5-boilerplate) and [air-light starter theme](https://github.com/digitoimistodude/air-light).

These tools are compatible with [VSCode](https://github.com/ronilaukkarinen/vscode-settings) and [Sublime Text](https://github.com/digitoimistodude/sublime-settings).

## Table of contents

1. [Features](#features)
2. [Usage](#usage)
3. [Debuggers](#debuggers)
4. [Contributing](#contributing)

## Features

1. **[BrowserSync](https://github.com/BrowserSync/browser-sync)** - Time-saving synchronised browser testing.
2. **[gulp](https://github.com/gulpjs/gulp)** - Automate and enhance your workflow
3. **[stylefmt](https://github.com/morishitter/stylefmt)** ([gulp-stylefmt](https://github.com/morishitter/gulp-stylefmt)) - Stylefmt is a tool that automatically formats stylesheets, extending stylelint functionality.
4. **[stylelint](https://github.com/stylelint/stylelint)** ([gulp-stylelint](https://github.com/olegskl/gulp-stylelint)) - Configurable tool for writing clean and consistent SCSS
5. **[eslint](https://github.com/eslint/eslint)**  ([gulp-eslint](https://github.com/adametry/gulp-eslint)) - Find and fix problems in your JavaScript code.
6. **[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)** ([gulp-phpcs](https://github.com/JustBlackBird/gulp-phpcs)) - Detects violations of a defined set of coding standards.

## Usage

Make sure linters are installed for Gulp [tutorial below](#debuggers). Best way to install phpcs and phpcbf is to clone them to ~/Projects, link them to /usr/local/bin/ and set paths with phpcs/phpcbf  --config-set installed_paths path-to-wpcs,path-to-phpcompatibility.

**Please note:** Currently this repo is bundled with [WordPress starter theme air](https://github.com/digitoimistodude/air-light) and [dudestack](https://github.com/digitoimistodude/dudestack) with automated scripts, but you can use devpackages as stand-alone as well like this:

1. Clone this repo and add files to your project folder, edit them according to your project
2. Update packages: `npm-check-updates -u` (if you don't have `npm-check-updates` installed, run `sudo npm install -g npm-check-updates`)
3. Proceed with the updates: `npm update`
4. Run `gulp watch` and have fun!

## Debuggers

Devpackages comes with [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) for PHP files, [stylelint](https://github.com/stylelint/stylelint) for SCSS/CSS files and [eslint](https://github.com/eslint/eslint) for JS files built inside gulpfile.js. **Please note, you need to configure global versions of these separately!** Here's how:

#### For gulp

PHP_CodeSniffer needs to be installed under `/usr/local/bin/phpcs` with [WordPress-Coding-Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) for php-debuggers to work properly in gulp. If you don't want to use phpcs with gulp, you can disable it by commenting out or deleting line `gulp.watch(phpSrc, ['phpcs']);`.

The golden rule here is to make sure the commands `stylelint`, `eslint` and `phpcs` work from command line.

#### How to install for Gulp

1. `mkdir -p ~/Projects && cd ~/Projects && git clone -b master --depth 1 https://github.com/squizlabs/PHP_CodeSniffer.git phpcs`
2. `git clone -b master https://github.com/PHPCompatibility/PHPCompatibility`
3. `git clone -b master --depth 1 https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards.git wpcs`
4. **Please note: Replace _yourusername_ name with your actual user name!** `sudo ln -s /Users/yourusername/Projects/phpcs/bin/phpcs /usr/local/bin/phpcs`
5. `sudo chmod +x /usr/local/bin/phpcs`
6. **Please note: Replace _yourusername_ name with your actual user name!** `phpcs --config-set installed_paths "/Users/yourusername/Projects/wpcs","/Users/yourusername/Projects/PHPCompatibility"`
7. Test your standards with `phpcs -i`, it should display something like this:

```bash $ phpcs -i
The installed coding standards are PEAR, Zend, PSR2, MySource, Squiz, PSR1, PSR12, PHPCompatibility, WordPress, WordPress-Extra, WordPress-Docs and WordPress-Core
```

8. `npm i stylelint eslint -g`
9. Check that other linters work: `stylelint -v`, `eslint -v`

#### For your editor

It's also best to have all `stylelint`, `eslint`, `phpcs`, `jscs`, `jshint` living inside your editor. We think [Visual Studio Code](https://github.com/ronilaukkarinen/vscode-settings) is best for this, check out the [plugins inside vscode-settings repository](https://github.com/ronilaukkarinen/vscode-settings) to make sure everything is installed.

After this you can run `gulp` a-okay!

### Variables declared as Map are forcely inlined

See [this issue](https://github.com/morishitter/stylefmt/issues/331). Solve by using up to date fork of [vscode-stylefmt](https://github.com/ronilaukkarinen/vscode-stylefmt).

## Contributing

If you'd like to contribute to this repository or test out the packages, please follow these steps:

1. Fork this repository
2. Clone your fork
3. Get the [test data](https://files.servepics.com/content-1649685325.zip) and unpack it to your devpackages folder
4. Run `npm install` and `gulp`

## Unit tests for stylelint packages

```bash
cd path/to/repo
mkdir -p content
mkdir -p content/themes
content/themes/THEMENAME
content/themes/THEMENAME/sass
echo "@charset 'utf-8';

body {
  background: #f00;
  color: red !important;
  font-size: 2rem;

  @media (max-width: 600px) {
    border: 2px solid red;
  }
}
" > content/themes/THEMENAME/sass/global.scss
npm i
gulp stylelint
```
