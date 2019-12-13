const { _statuses } = require('./statuses')

/**
 * @methodType {_statuses.statuses}
 */
function statuses(config) {
  return _statuses(config)
}

module.exports = statuses

/* typal types/index.xml namespace */
