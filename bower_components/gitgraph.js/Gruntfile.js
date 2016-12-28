// This file defines grunt tasks used by [Grunt.js](http://gruntjs.com/sample-gruntfile)
module.exports = function ( grunt ) {

  // Project configuration
  grunt.initConfig( {

    // Metadata
    pkg: grunt.file.readJSON( "package.json" ),
    banner: "/* ==========================================================\n"
          + " *                  GitGraph v<%= pkg.version %>\n"
          + " *      <%= pkg.repository.url %>\n"
          + " * ==========================================================\n"
          + " * Copyright (c) <%= grunt.template.today('yyyy') %>"
          + " Nicolas CARLO (@nicoespeon) ٩(^‿^)۶\n"
          + " * Copyright (c) <%= grunt.template.today('yyyy') %>"
          + " Fabien BERNARD (@fabien0102) ✌(✰‿✰)✌\n"
          + " *\n"
          + " * GitGraph.js may be freely distributed under the"
          + " <%= pkg.license %> Licence\n"
          + " * ========================================================== */\n",

    // The `clean` task ensures all files are removed from the misc. directories
    // so that no files linger from previous builds.
    clean: {
      options: {force: true},
      dist: [ "dist/" ],
      jsdoc: [ "dist/jsdoc/" ],
      release: [ "build/", "docs/" ]
    },

    // The `concat` task copies the source file into the `build/` directory with
    // the compiled banner for release use.
    concat: {
      options: {
        banner: "<%= banner %>\n"
      },
      dist: {
        src: [ "src/gitgraph.js" ],
        dest: "dist/gitgraph.js"
      },
      release: {
        src: [ "src/gitgraph.js" ],
        dest: "build/gitgraph.js"
      }
    },

    // The `copy` task copies the CSS into the target directory.
    copy: {
      dist: {
        files: [ {
          src: [ "src/gitgraph.css" ],
          dest: "dist/gitgraph.css"
        } ]
      },
      release: {
        files: [ {
          src: [ "src/gitgraph.css" ],
          dest: "build/gitgraph.css"
        } ]
      },
      server: {
        files: [ {
          "dist/server/": "src/*",
          "dist/server/index.html": "examples/index.html",
          "dist/server/index.js": "examples/index.js",
          "dist/server/gitflowsupport.html": "examples/gitflowsupport.html",
          "dist/server/gitflowsupport.js": "examples/gitflowsupport.js"
        } ]
      }
    },

    // The `express` task will launch a server for livereload purposes.
    express: {
      server: {
        options: {
          port: 9000,
          hostname: "127.0.0.1",
          bases: [ "dist/server/" ],
          livereload: true
        }
      }
    },

    // The `jsdoc` task will produce the code documentation for the whole project,
    // from the temporary directory.
    jsdoc: {
      dist: {
        src: [ "dist/jsdoc/src/*.js", "README.md" ],
        options: {
          configure: ".jsdocrc",
          destination: "dist/docs"
        }
      },
      release: {
        src: [ "dist/jsdoc/src/*.js", "README.md" ],
        options: {
          configure: ".jsdocrc",
          destination: "docs"
        }
      }
    },

    // The `jasmine` task run unit tests over the source code
    jasmine: {
      gitgraph: {
        src: "src/*.js",
        options: {
          specs: "tests/*.js"
        }
      }
    },

    // The `jshint` task lint all the JavaScript code against best practices.
    // Warnings are here to help us improve code and follow best standards.
    jshint: {
      src: [ "src/*.js" ],
      options: {
        force: true,
        jshintrc: ".jshintrc"
      }
    },

    // The `uglify` task will minified the JavaScript source code for production.
    uglify: {
      options: {
        banner: "<%= banner %>"
      },
      dist: {
        src: [ "src/gitgraph.js" ],
        dest: "dist/gitgraph.min.js",
        options: {
          report: "min"
        }
      },
      release: {
        src: [ "src/gitgraph.js" ],
        dest: "build/gitgraph.min.js",
        options: {
          report: "min"
        }
      }
    },

    // The `open` task will open the livereload page in your favorite browser.
    open: {
      server: {
        path: "http://<%= express.server.options.hostname %>:<%= express.server.options.port %>"
      }
    },

    // The `string-replace` task will remove the closure around the source code
    // so we can properly generate the documentation.
    //
    // JSDoc currently doesn't handle properly IIFE for now: [Github issue](https://github.com/jsdoc3/jsdoc/issues/456)
    "string-replace": {
      jsdoc: {
        files: {
          "dist/jsdoc/": "src/*.js"
        },
        options: {
          replacements: [ {
            pattern: "(function () {",
            replacement: ""
          }, {
            pattern: "})();",
            replacement: ""
          } ]
        }
      }
    },

    // The `watch` task will monitor the projects files and launch tasks when
    // they are modified.
    watch: {
      server: {
        options: {
          livereload: true
        },
        files: [ "src/*", "examples/*" ],
        tasks: [ "copy:server" ]
      }
    }

  } );

  // Loads grunt tasks from `package.json`
  require( "load-grunt-tasks" )( grunt, [ "grunt-*" ] );

  // `grunt lint` will check code by running JSHint and unit tests over it.
  grunt.registerTask( "test", [ "jshint", "jasmine" ] );

  // `grunt docs` will create non-versioned documentation for development use.
  grunt.registerTask( "doc", [
    "string-replace:jsdoc",
    "jsdoc:dist",
    "clean:jsdoc"
  ] );

  // `grunt dist` will create a non-versioned new release for development use.
  grunt.registerTask( "dist", [
    "test",
    "clean:dist",
    "copy:dist",
    "concat:dist",
    "uglify:dist",
    "doc"
  ] );

  // `grunt release` will create a new release of the source code.
  grunt.registerTask( "release", [
    "test",
    "clean:release",
    "copy:release",
    "concat:release",
    "uglify:release",
    "string-replace:jsdoc",
    "jsdoc:release",
    "clean:jsdoc"
  ] );

  // `grunt server` will open a live reload server in your favorite browser.
  grunt.registerTask( "server", [
    "copy:server",
    "express:server",
    "open:server",
    "watch:server"
  ] );
};
