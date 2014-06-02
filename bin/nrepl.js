#!/usr/bin/env node

var nrepl = require('../index');

if (typeof process.argv[1] === 'undefined') {
	console.log('nREPL: Usage: nrepl <port>');
	process.exit();
} else {
	nrepl(process.argv[1]);
}
