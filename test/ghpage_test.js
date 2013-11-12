'use strict';

var grunt = require('grunt');
var fs = require('fs');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ghpage = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  basic: function(test) {
    test.expect(4);

    test.ok(fs.existsSync('tmp/index.html'), 'index.html generated');
    test.ok(fs.existsSync('tmp/public'), 'public folder generated');
    test.ok(fs.existsSync('tmp/public/common.css'), 'common.css generated');
    test.ok(fs.existsSync('tmp/public/common.js'), 'common.js generated');

    test.done();
  },
};
