import { equal } from '@zoroaster/assert'
import Context from '../context'
import { STATUS_CODES } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'STATUS_CODES contains codes'() {
    equal(STATUS_CODES[100], 'Continue')
  },
}

export default T