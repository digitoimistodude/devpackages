const themeDir = 'content/themes/THEMENAME';

module.exports = {
  cleancss: {
    opts: {
      compatibility: 'ie11',
      level: {
        1: {
          tidyAtRules: true,
          cleanupCharsets: true,
          specialComments: 0,
        },
      },
    }
  },
  rename: {
    min: { suffix: '.min' }
  },
  browsersync: {
    src: [themeDir + '/css/*'],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: 'PROJECTNAME.test',
      browser: 'Google Chrome',
      open: false,
      notify: true,
    },
    watch: [
      themeDir + '/**/*.php',
      themeDir + '/js/src/**/*.js',
    ]
  },
  styles: {
    main: themeDir + '/sass/base/global.scss',
    src: themeDir + '/sass/**/*.{sass,scss}',
    dest: themeDir + '/css',
    scsslintexcludes: ['!' + themeDir + '/sass/navigation/_burger.scss', '!' + themeDir + '/sass/base/_normalize.scss'],
    opts: {
      development: {
        bundleExec: true,
        style: 'expanded',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: [themeDir + '/node_modules/'],
      },
      production: {
        bundleExec: true,
        style: 'compressed',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: [themeDir + '/node_modules/'],
      }
    }
  },
  js: {
    main: themeDir + '/js/src/scripts.js',
    src: themeDir + '/js/src/**/*.js',
    dest: themeDir + '/js',
    uglify: {
      opts: {
        compress: true,
        mangle: true,
      }
    }
  },
  php: {
    src: themeDir + '/**/*.php'
  },
  phpcs: {
    src: [themeDir + '/**/*.php', '!' + themeDir + '/node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + '/phpcs.xml',
      warningSeverity: 0,
    }
  }
}
