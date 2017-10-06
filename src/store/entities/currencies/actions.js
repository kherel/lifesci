import {CURRENCIES} from 'constants'
import { createFetchActions } from 'helpers'

import { CURRENCIES_API_URL } from 'constants/api'

import { BACKEND_CALL } from 'middleware/backendApi'

export function fetchExchangeRates () {
  return ({
    [BACKEND_CALL]: {
      endpoint: CURRENCIES_API_URL,
      method: 'GET',
      query: {currencies:'EUR,GBP,CHF'},
      types: createFetchActions(CURRENCIES),
    }
  })
}