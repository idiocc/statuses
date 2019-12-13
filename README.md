# @goa/statuses

[![npm version](https://badge.fury.io/js/%40goa%2Fstatuses.svg)](https://www.npmjs.com/package/@goa/statuses)

`@goa/statuses` is HTTP status utility.

```sh
yarn add @goa/statuses
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`status(code: number|string): number`](#statuscode-numberstring-number)
- [Codes Objects](#codes-objects)
  * [`STATUS_CODES`](#type-status_codes)
  * [`codes`](#type-codes)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function and additional objects populated with status codes:

```js
import status, { STATUS_CODES } from '@goa/statuses'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>status</ins>(</code><sub><br/>&nbsp;&nbsp;`code: number|string,`<br/></sub><code>): <i>number</i></code>
Get the status code.

Given a number, this will throw if it is not a known status code, otherwise the code will be returned. Given a string, the string will be parsed for a number and return the code if valid, otherwise will lookup the code assuming this is the status message.

 - <kbd><strong>code*</strong></kbd> <em><code>(number \| string)</code></em>: The code or phrase.

```js
import status from '@goa/statuses'

console.log(status(403)) // => 403
console.log(status('403')) // => 403
console.log(status('forbidden')) // => 403
console.log(status('Forbidden')) // => 403
try {
  status(5000) // throws, as it's not supported by Node.JS
} catch (err) {
  console.log(err.message)
}
```
```
403
403
403
403
invalid status code: 5000
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Codes Objects

Additional exports are populated with codes directly.


<code>!Object&lt;string, string&gt;</code> <strong><a name="type-status_codes">`STATUS_CODES`</a></strong>

Returns an object which maps status codes to status messages, in the same format as the [Node.JS](https://nodejs.org/dist/latest/docs/api/http.html#http_http_status_codes) `http` module.

```js
import { STATUS_CODES } from '@goa/statuses'

console.log(STATUS_CODES)
```
```js
{ '100': 'Continue',
  '101': 'Switching Protocols',
  '102': 'Processing',
  '103': 'Early Hints',
  '200': 'OK',
  '201': 'Created',
  '202': 'Accepted',
  '203': 'Non-Authoritative Information',
  '204': 'No Content',
  '205': 'Reset Content',
  '206': 'Partial Content',
  '207': 'Multi-Status',
  '208': 'Already Reported',
  '226': 'IM Used',
  '300': 'Multiple Choices',
  '301': 'Moved Permanently',
  '302': 'Found',
  '303': 'See Other',
  '304': 'Not Modified',
  '305': 'Use Proxy',
  '306': '(Unused)',
  '307': 'Temporary Redirect',
  '308': 'Permanent Redirect',
  '400': 'Bad Request',
  '401': 'Unauthorized',
  '402': 'Payment Required',
  '403': 'Forbidden',
  '404': 'Not Found',
  '405': 'Method Not Allowed',
  '406': 'Not Acceptable',
  '407': 'Proxy Authentication Required',
  '408': 'Request Timeout',
  '409': 'Conflict',
  '410': 'Gone',
  '411': 'Length Required',
  '412': 'Precondition Failed',
  '413': 'Payload Too Large',
  '414': 'URI Too Long',
  '415': 'Unsupported Media Type',
  '416': 'Range Not Satisfiable',
  '417': 'Expectation Failed',
  '418': 'I\'m a teapot',
  '421': 'Misdirected Request',
  '422': 'Unprocessable Entity',
  '423': 'Locked',
  '424': 'Failed Dependency',
  '425': 'Unordered Collection',
  '426': 'Upgrade Required',
  '428': 'Precondition Required',
  '429': 'Too Many Requests',
  '431': 'Request Header Fields Too Large',
  '451': 'Unavailable For Legal Reasons',
  '500': 'Internal Server Error',
  '501': 'Not Implemented',
  '502': 'Bad Gateway',
  '503': 'Service Unavailable',
  '504': 'Gateway Timeout',
  '505': 'HTTP Version Not Supported',
  '506': 'Variant Also Negotiates',
  '507': 'Insufficient Storage',
  '508': 'Loop Detected',
  '509': 'Bandwidth Limit Exceeded',
  '510': 'Not Extended',
  '511': 'Network Authentication Required' }
```


<code>!Array&lt;number&gt;</code> __<a name="type-codes">`codes`</a>__

Returns an array of all the status codes as numbers.

```js
import { codes } from '@goa/statuses'

console.log(codes)
```
```js
[ 100,
  101,
  102,
  103,
  200,
  201,
  202,
  203,
  204,
  205,
  206,
  207,
  208,
  226,
  300,
  301,
  302,
  303,
  304,
  305,
  306,
  307,
  308,
  400,
  401,
  402,
  403,
  404,
  405,
  406,
  407,
  408,
  409,
  410,
  411,
  412,
  413,
  414,
  415,
  416,
  417,
  418,
  421,
  422,
  423,
  424,
  425,
  426,
  428,
  429,
  431,
  451,
  500,
  501,
  502,
  503,
  504,
  505,
  506,
  507,
  508,
  509,
  510,
  511 ]
```

## Copyright & License

GNU Affero General Public License v3.0

[Original work](https://github.com/jshttp/statuses#readme) by Jonathan Ong and Douglas Christopher Wilson under MIT license found in [COPYING](COPYING).

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="idiocc"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2019</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>