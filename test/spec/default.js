import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import statuses from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof statuses, 'function')
  },
  async 'calls package without error'() {
    await statuses()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await statuses({
      text,
    })
    ok(res, text)
  },
}

export default T