var test = require('tape')
var es2015 = require('babel-preset-es2015')
var es2015Loose = require('babel-preset-es2015-loose')
var es2015LooseNoStrict = require('../index')

var NOT_STRICT = {strict: false}

var PREFIX = 'transform-es2015-'

var SHOULD_NOT_BE_STRICT = [
	PREFIX + 'modules-commonjs'
]

function getPluginEntry(name) {
	var plugin = require('babel-plugin-' + name)
	for (var loosePlugin of es2015LooseNoStrict.plugins) {
		if (loosePlugin === plugin || loosePlugin[0] === plugin) {
			return loosePlugin
		}
	}
	return false
}

SHOULD_NOT_BE_STRICT.forEach(function(name) {
	test(name, function(t) {
		t.plan(3)
		var entry = getPluginEntry(name)

		t.ok(entry, 'Entry for ' + name + ' should exist')
		t.ok(Array.isArray(entry), 'Entry for ' + name + ' should be an Array')
		t.deepEqual(entry[1], NOT_STRICT, 'Entry for ' + name + ' should specify {strict:false}')
	})
});
