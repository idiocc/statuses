import makeTestSuite from '@zoroaster/mask'
import Context from '../context'
import status, { redirect } from '../../src'

export default makeTestSuite('test/result/default', {
  getResults() {
    const res = status(this.input)
    return `${res}`
  },
  context: Context,
})

export const Redirect = makeTestSuite('test/result/redirect', {
  getResults() {
    return `${redirect[this.input]}`
  },
  context: Context,
})