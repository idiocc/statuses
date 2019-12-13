const { _STATUS_CODES, _codes, _empty, _redirect,
  _retry, _status } = require('./statuses')

/**
 * Get the status code.

Given a number, this will throw if it is not a known status code, otherwise the code will be returned. Given a string, the string will be parsed for a number and return the code if valid, otherwise will lookup the code assuming this is the status message.
 * @type {(code: number|string) => number}
 */
const status = _status

/**
 * Returns an object which maps status codes to status messages, in the same format as the [Node.JS](https://nodejs.org/dist/latest/docs/api/http.html#http_http_status_codes) `http` module.
 */
const STATUS_CODES = _STATUS_CODES

/**
 * Returns an array of all the status codes as numbers.
 * @type {!Array<number>}
 */
const codes = _codes
const empty = _empty
const redirect = _redirect
const retry = _retry

module.exports = status
module.exports.STATUS_CODES = STATUS_CODES
module.exports.codes = codes
module.exports.empty = empty
module.exports.redirect = redirect
module.exports.retry = retry
module.exports.status = status

/* typal types/index.xml namespace */
/**
 * @typedef {_statuses.Config} Config `＠record` Options for the program.
 * @typedef {Object} _statuses.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
