import {CONTRACTS} from 'constants'
import { createFetchActions } from 'helpers'

import { GIST_API_URL } from 'constants/api'

import { BACKEND_CALL } from 'middleware/backendApi'

export function fetchContracts (type) {
  return ({
    [BACKEND_CALL]: {
      endpoint: GIST_API_URL[type],
      method: 'GET',
      text: true,
      types: createFetchActions(CONTRACTS),
      data: type
    }
  })
}