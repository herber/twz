# Twz [![Build Status](https://travis-ci.org/herber/twz.svg?branch=master)](https://travis-ci.org/herber/twz) [![codecov](https://codecov.io/gh/herber/twz/badge.svg?branch=master)](https://codecov.io/gh/herber/twz?branch=master)

> 🧙 Magic templates

## Features
 - Tiny at just 23 loc
 - Based on template strings

## Install

```
$ npm install twz
```

## Usage

```js
const twz = require('twz');

twz('<h1>${ emoji }</h1>')({ emoji: '🧙' });
```

## API

### twz(input)(data)

Returns the rendered template `string`.

#### input

Type: `string`

A twz string.

#### data

Type: `object`

An object representing the template's data.

### twz.file(path)(data)

Returns a `promise`

#### path

Type: `string`

The template's path.

#### data

Type: `object`

An object representing the template's data.

### twz.fileSync(path)(data)

Returns the rendered template `string`.

#### path

Type: `string`

The template's path.

#### data

Type: `object`

An object representing the template's data.

## Examples

### List

```js
const twz = require('twz');

const listTemplate = '<ul>${ list.map(n => `<li>${n}</li>`).join('')</ul>';

twz(listTemplate)({ list: [ '1', '2', '3' ] });
// => <ul><li>1</li><li>2</li><li>3</li></ul>
```

### Heading

```js
const twz = require('twz');

twz('<h1>${ name }</h1>')({ name: 'my name' });
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
