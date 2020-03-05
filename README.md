## Modern web development workflow
##### Used by Digitoimisto Dude Oy.

This repository includes [Gulp](http://gulpjs.com/) and npm related files for starting a new project. These files are specifically meant for development on [dudestack](https://github.com/digitoimistodude/dudestack), [modern-html5-boilerplate](https://github.com/digitoimistodude/modern-html5-boilerplate) and [air-light starter theme](https://github.com/digitoimistodude/air-light).

## Table of contents

1. [Features](#features)
2. [Usage](#usage)

## Features

1. **[BrowserSync](https://github.com/BrowserSync/browser-sync)** - Time-saving synchronised browser testing.
2. **[Gulp](https://github.com/gulpjs/gulp)** - Automate and enhance your workflow
3. **[Stylefmt](https://github.com/morishitter/stylefmt)** ([gulp-stylefmt](https://github.com/morishitter/gulp-stylefmt)) - Stylefmt is a tool that automatically formats stylesheets.
3. **[scss-lint](https://github.com/brigade/scss-lint)** ([gulp-scss-lint](https://github.com/juanfran/gulp-scss-lint)) - Configurable tool for writing clean and consistent SCSS
3. **[PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer)** ([gulp-phpcs](https://github.com/JustBlackBird/gulp-phpcs)) - Detects violations of a defined set of coding standards.

## Usage

Make sure [Stylefmt](https://github.com/morishitter/stylefmt), [scss-lint](https://github.com/brigade/scss-lint) and [PHP_CodeSniffer](https://github.com/squizlabs/PHP_CodeSniffer) with [WordPress-Coding-Standards](https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards) are installed.

**Please note:** Currently this repo is bundled with [WordPress starter theme air](https://github.com/digitoimistodude/air) and [dudestack](https://github.com/digitoimistodude/dudestack) with automated scripts, but you can use devpackages as stand-alone as well like this:

1. Clone this repo and add files to your project folder, edit them according to your project
2. Update packages: `npm-check-updates -u` (if you don't have `npm-check-updates` installed, run `sudo npm install -g npm-check-updates`)
3. Proceed with the updates: `npm update`
4. Run `gulp watch` and have fun!

## Known issues

### Error: Undefined rule font-family-no-missing-generic-family-keyword

Stylelint is currently deprecated depenency in [stylefmt](https://github.com/morishitter/stylefmt) (see [issue #334](https://github.com/morishitter/stylefmt/issues/334#issuecomment-436552167)), so as a workaround do these steps (replace "yourproject" with your actual project name:

1. `sudo npm install stylelint -g`
2. `sudo cp -Rv /usr/local/lib/node_modules/stylelint "~/Projects/yourproject/content/themes/yourproject/node_modules/gulp-stylefmt/node_modules/"`
3. `sudo cp -Rv /usr/local/lib/node_modules/stylelint "~/Projects/yourproject/node_modules/gulp-stylefmt/node_modules/"`

After this you can run `gulp watch` a-okay!

### Variables declared as Map are forcely inlined

See [this issue](https://github.com/morishitter/stylefmt/issues/331). Solve manually for each project:

1. Open *~/Projects/yourproject/content/themes/yourproject/node_modules/gulp-stylefmt/node_modules/stylefmt/lib/formatSassVariables.js* and uncomment [this line](https://github.com/morishitter/stylefmt/blob/875c9037590fa201bdd7698fbfa5c1943137cc86/lib/formatSassVariables.js#L46).
