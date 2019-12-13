import '../types/externs'
import statuses, { STATUS_CODES, codes, empty, redirect, retry } from './'

module.exports = {
  '_status': statuses,
  '_STATUS_CODES': STATUS_CODES,
  '_codes': codes,
  '_empty': empty,
  '_redirect': redirect,
  '_retry': retry,
}