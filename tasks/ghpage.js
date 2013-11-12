/*
 * grunt-ghpage
 * https://github.com/jgallen23/grunt-ghpage
 *
 * Copyright (c) 2013 Greg Allen
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  var ghpage = require('ghpage');

  grunt.registerMultiTask('ghpage', 'Your task description goes here.', function() {
    var options = this.options({
      design: 'simple'
    });
    var done = this.async();
    var total = this.files.length;
    var current = 0;

    this.files.forEach(function(f) {
      // Concat specified files.
      var src = f.src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function(filepath) {
        // Read file source.
        return grunt.file.read(filepath);
      }).join('\n');

      options.input = src;
      options.output = f.dest;

      ghpage(options, function(err) {
        if (err) {
          grunt.log.error(err);
        }

        grunt.log.writeln('ghpage "' + options.design + '" generated here: "' + f.dest + '".');

        current++;
        if (total === current) {
          done();
        }
      });

    });


  });

};
