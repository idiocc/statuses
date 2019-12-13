const { _STATUS_CODES, _codes, _empty, _redirect,
  _retry, _status } = require('./statuses')

/**
 * @methodType {_statuses.status}
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
