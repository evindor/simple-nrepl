#!/usr/bin/env node

var nrepl = require('../');

if (typeof process.argv[2] === 'undefined') {
	console.log('nREPL: Usage: nrepl <port>');
	process.exit();
} else {
	nrepl(process.argv[2]);
}
