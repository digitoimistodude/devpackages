gulpfile-rolle
=========================

Just keeping track of changes in my gulpfile.js. This gulpfile is specifically meant for WordPress development on [wpstack-rolle](https://github.com/ronilaukkarinen/wpstack-rolle).

##Usage

Fill up package.json:

        {
          "name": "projectname",
          "author": "Roni Laukkarinen"
        }

Add to your WordPress-theme functions.php:

    // LiveReload/gulp
    if ( getenv('WP_ENV') === 'development' ){
      add_action('wp_head', 'livereload');
    }
    function livereload() {
    echo "<script>document.write('<script src=\"http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1\"></' + 'script>')</script>";
    }