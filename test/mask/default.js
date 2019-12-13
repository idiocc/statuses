import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import statuses from '../../src'

export default makeTestSuite('test/result/default', {
  async getResults() {
    const res = await statuses({
      text: this.input,
    })
    return res
  },
  context: Context,
})