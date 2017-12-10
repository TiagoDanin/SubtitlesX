#!/usr/bin/env node

var prog = require('caporal')
var path = require('path')
var app  = require('subtitlesx')

prog
	.version('1.0.0')
	.description('CLI Tool to download subtitles for movies and series.')
	.argument('<file>', 'Filename or Query Text of movie or serie', prog.REPEATABLE)
	.argument('<langId>', 'Language ID, e.g en', prog.REPEATABLE)
	.argument('<userAgert>', 'UserAgert, e.g TemporaryUserAgent', prog.REPEATABLE)
	.action(function(args, options, logger) {
		try {
			logger.info('[+] Start')
			var dir = path.resolve(process.cwd() +  '\\')
			app.getSubtitles(dir, args['file'], args['langId'], args['userAgert'])
		} catch (e) {
			logger.error('[-] Error', e)
		}
	});
prog.parse(process.argv)