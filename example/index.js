import status from '../src'

status(403) // => 403
status('403') // => 403
status('forbidden') // => 403
status('Forbidden') // => 403
try {
  status(306) // throws, as it's not supported by Node.JS
} catch (err) {
  console.log(err.message)
}