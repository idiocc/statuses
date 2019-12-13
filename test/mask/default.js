import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import status from '../../src'

export default makeTestSuite('test/result/default', {
  getResults() {
    const res = status(this.input)
    return `${res}`
  },
  context: Context,
})