# SubtitlesX
[![Node](https://img.shields.io/node/v/subtitlesx.svg?style=flat-square)](https://npmjs.org/package/subtitlesx)
[![Version](https://img.shields.io/npm/v/subtitlesx.svg?style=flat-square)](https://npmjs.org/package/subtitlesx)
[![Downloads](https://img.shields.io/npm/dt/subtitlesx.svg?style=flat-square)](https://npmjs.org/package/subtitlesx)
[![Travis](https://img.shields.io/travis/TiagoDanin/SubtitlesX.svg?branch=master&style=flat-square)](https://travis-ci.org/TiagoDanin/SubtitlesX)

CLI to download subtitles for movies and series.


## Installation
Module available through the
[npm registry](https://www.npmjs.com/). It can be installed using the
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
# NPM
npm install subtitlesx --save
# Or Using Yarn
yarn add subtitlesx
```

## Documentation
### CLI

Run `subtitlesx --help`

### API
- `getSubtitles(dir, name, langId, userAgent)`

e.g `getSubtitles('/root/movies/', 'Interstellar.mp4', 'en', 'TemporaryUserAgent')`

## Tests
To run the test suite, first install the dependencies, then run `test`:

```sh
# NPM
npm test
# Or Using Yarn
yarn test
```

## Dependencies
- [caporal](https://ghub.io/caporal): A full-featured framework for building command line applications (cli) with node.js
- [opensubtitles-api](https://ghub.io/opensubtitles-api): opensubtitles.org api wrapper
- [request](https://ghub.io/request): Simplified HTTP request client.
- [request-promise-native](https://ghub.io/request-promise-native): The simplified HTTP request client &#x27;request&#x27; with Promise support. Powered by native ES6 promises.
- [zlib](https://ghub.io/zlib): Simple, synchronous deflate/inflate for buffers
- [snyk](https://ghub.io/snyk): snyk library and cli utility



## Contributors
Pull requests and stars are always welcome. For bugs and feature requests, please [create an issue](https://github.com/TiagoDanin/SubtitlesX/issues). [List of all contributors](https://github.com/TiagoDanin/SubtitlesX/graphs/contributors).


## License
[GPL-3.0](LICENSE) 
