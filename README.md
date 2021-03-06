# Shortlink-checker

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Node.js Version][node-version-image]][node-version-url]
[![Build Status][travis-image]][travis-url]

Check for Shortlink redirects.

## Install

```bash
$ npm install shortlink-checker
```

## Usage

```js
var checker = require('shortlink-checker');

checker(url).then((err, result) => {
  if (err) console.log(err); //err will return if there's an error
  else if (result) console.log(`Redirected link: ${result}`);
  else console.log('Provided link doesn\'t redirect');
})
```

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/shortlink-checker.svg
[npm-url]: https://npmjs.org/package/shortlink-checker
[node-version-image]: https://img.shields.io/node/v/shortlink-checker.svg
[node-version-url]: http://nodejs.org/download/
[travis-image]: https://img.shields.io/travis/aister/shortlink-checker/master.svg
[travis-url]: https://travis-ci.org/aister/shortlink-checker
[downloads-image]: https://img.shields.io/npm/dm/shortlink-checker.svg
[downloads-url]: https://npmjs.org/package/shortlink-checker
