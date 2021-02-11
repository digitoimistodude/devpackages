const themeDir = 'content/themes/THEMENAME';

module.exports = {
  cleancss: {
    opts: {
      compatibility: 'ie11,-properties.merging',
      level: {
        1: {
          specialComments: false,
          removeQuotes: true,
          removeWhitespace: true,
          tidyAtRules: true,
          cleanupCharsets: true,
          selectorsSortingMethod: 'natural'
        },
        2: {
          mergeSemantically: false,
          overrideProperties: true,
          removeEmpty: true,
          removeDuplicateRules: true,
          reduceNonAdjacentRules: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeUnusedAtRules: true,
          restructureRules: true
        }
      }
    }
  },
  rename: {
    min: {
      suffix: '.min'
    }
  },
  browsersync: {
    src: [themeDir + '/css/*'],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: 'https://PROJECTNAME.test',
      browser: 'Google Chrome',
      open: false,
      notify: true,
      // Generate with: mkdir -p /var/www/certs && cd /var/www/certs && mkcert localhost 192.168.x.xxx ::1
      https: {
        key: "/var/www/certs/localhost+2-key.pem",
        cert: "/var/www/certs/localhost+2.pem",
      }
    },
    watch: [
      themeDir + '/**/*.php',
      themeDir + '/js/src/**/*.js'
    ]
  },
  styles: {
    gutenberg: themeDir + '/sass/base/gutenberg.scss',
    main: themeDir + '/sass/base/global.scss',
    src: themeDir + '/sass/**/*.{sass,scss}',
    dest: themeDir + '/css',
    exclude: ['!' + themeDir + '/sass/navigation/_burger.scss', '!' + themeDir + '/sass/base/_normalize.scss'],
    stylelint: {
      opts: {
        fix: false,
        ignoreFiles: ['!*.scss'],
        reporters: [{
          formatter: 'string',
          console: true,
          failAfterError: false,
          debug: false
        }]
      }
    },
    opts: {
      development: {
        bundleExec: true,
        style: 'expanded',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: [themeDir + '/node_modules/']
      },
      production: {
        bundleExec: true,
        style: 'compressed',
        debugInfo: true,
        lineNumbers: true,
        errLogToConsole: true,
        includePaths: [themeDir + '/node_modules/']
      }
    }
  },
  js: {
    main: themeDir + '/js/src/*.js',
    src: themeDir + '/js/src/**/*.js',
    dest: themeDir + '/js/dist/'
  },
  php: {
    src: themeDir + '/**/*.php'
  },
  phpcs: {
    src: [themeDir + '/**/*.php', '!' + themeDir + '/node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: themeDir + '/phpcs.xml',
      warningSeverity: 0
    }
  }
};
