import status from '../src'

console.log(status(403)) // => 403
console.log(status('403')) // => 403
console.log(status('forbidden')) // => 403
console.log(status('Forbidden')) // => 403
try {
  status(5000) // throws, as it's not supported by Node.JS
} catch (err) {
  console.log(err.message)
}