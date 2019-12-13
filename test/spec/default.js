import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import status, { STATUS_CODES, redirect, retry, empty } from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'STATUS_CODES contains codes'() {
    equal(STATUS_CODES[100], 'Continue')
  },
  redirect() {
    equal(redirect[200], undefined)
    ok(redirect[301])
  },
  retry() {
    equal(retry[501], undefined)
    ok(retry[503])
  },
  empty() {
    equal(empty[200], undefined)
    ok(empty[204])
    ok(empty[304])
  },
  'contains codes'() {
    equal(status[200], 'OK')
  },
}

export default T