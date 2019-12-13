const { _statuses } = require('./statuses')

/**
 * HTTP status utility.
 * @param {!_statuses.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function statuses(config) {
  return _statuses(config)
}

module.exports = statuses

/* typal types/index.xml namespace */
/**
 * @typedef {_statuses.Config} Config `＠record` Options for the program.
 * @typedef {Object} _statuses.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
