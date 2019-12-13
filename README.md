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
  * [`Config`](#type-config)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import statuses from '@goa/statuses'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code><ins>status</ins>(</code><sub><br/>&nbsp;&nbsp;`code: number|string,`<br/></sub><code>): <i>number</i></code>
Get the status code.

Given a number, this will throw if it is not a known status code, otherwise the code will be returned. Given a string, the string will be parsed for a number and return the code if valid, otherwise will lookup the code assuming this is the status message.

 - <kbd><strong>code*</strong></kbd> <em><code>(number \| string)</code></em>: The code or phrase.

__<a name="type-config">`Config`</a>__: Options for the program.


|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| text      | <em>string</em>  | A text to return. | -       |

```js
import status from '@goa/statuses'

status(403) // => 403
status('403') // => 403
status('forbidden') // => 403
status('Forbidden') // => 403
status(306) // throws, as it's not supported by node.js
```
```

```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="idiocc"></td>
    <td>© <a href="https://www.artd.eco">Art Deco™</a> 2019</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>