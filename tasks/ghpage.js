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
    var done = this.async();

    if (!this.data.input) {
      return grunt.log.error('input is required');
    }

    this.data.output = this.data.output || '.';
    this.data.design = this.data.design || 'simple';

    ghpage(this.data, function(err) {
      if (err) {
        grunt.log.error(err);
      }
      done();
    });
  });

};
