'use strict'

var fs            = require('fs')
var os_api        = require('opensubtitles-api')
var zlib          = require('zlib')
var request       = require("request-promise-native")

async function getSubtitles(name, langId, userAgent) {
	var OpenSubtitles = new os_api(userAgent)
	var parse = {
		path: name,
		filename: name,
		extensions: ['srt', 'vtt'],
		limit: 'all',
		gzip: true
	}

	var regex = /[Ss](\d*)[Ee](\d*)/g;
	var m = regex.exec(name)
	if (m != null && m[1] && m[2]) {
		parse['season'] = m[1]
		parse['episode'] = m[2]
	}

	var subtitles =  await OpenSubtitles.search(parse)
	if (subtitles[langId]) {
		var localSubtitles = subtitles[langId]
		for (var i = 0; i < localSubtitles.length; i++) {
			var id = (localSubtitles[i].id).toString()
			var url = localSubtitles[i].url
			var encoding = localSubtitles[i].encoding
			var filename = localSubtitles[i].filename
			var data = await request({
				url: url,
				encoding: null
			})
			var buffer_zip = await zlib.unzipSync(data)
			var subtitle_content = Buffer.from(buffer_zip, 'base64').toString()
			if (fs.existsSync(name)) {
				filename = id + filename
			}
			console.log('[+] Donwload:', filename)
			fs.writeFileSync(filename, subtitle_content)
		}
	}
}

module.exports = {
	getSubtitles
}