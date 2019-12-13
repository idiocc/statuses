import { c } from 'erte'

/**
 * HTTP status utility.
 * @param {!_statuses.Config} [config] Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 */
export default async function statuses(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return
  console.log('@goa/statuses called with %s', c(text, 'yellow'))
  return text
}

/**
 * @typedef {import('..').Config} _statuses.Config
 */
