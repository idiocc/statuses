const { _STATUS_CODES, _codes, _empty, _redirect,
  _retry, _status } = require('./statuses')

/**
 * @methodType {_statuses.status}
 */
function status(code) {
  return _status(code)
}

const STATUS_CODES = _STATUS_CODES
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
