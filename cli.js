#!/usr/bin/env node

var prog = require('caporal')
var app  = require('./index.js')

prog
	.version('1.0.0')
	.description('CLI Tool to download subtitles for movies and series.')
	.argument('<file>', 'Filename of movie or serie', prog.REPEATABLE)
	.argument('<langId>', 'Language ID, e.g en', prog.REPEATABLE)
	.argument('<userAgert>', 'UserAgert, e.g TemporaryUserAgent', prog.REPEATABLE)
	.action(function(args, options, logger) {
		console.log(args)
		try {
			logger.info('[+] Start')
			app.getSubtitles(args['file'], args['langId'], args['userAgert'])
			logger.info('[+] Finish')
		} catch (e) {
			logger.error('[-] Error', e)
		}
	});
prog.parse(process.argv)