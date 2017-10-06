import {START, SUCCESS, FETCH, FAIL, CURRENCIES} from 'constants'
import mapper from './mapper.js'

const initCurrencies = {
  loading: false,
  loaded: true,
  source: '',
  currencies:{
    usd: 1,
    eur: 0,
    gbp: 0,
    chf: 0
  }
}

export default (currencies = initCurrencies, {type, data}) => {

  switch (type) {
    case FETCH + CURRENCIES + START:
      return {...currencies, loading: true}
    case FETCH + CURRENCIES + SUCCESS:
      return {...currencies, loading: false, loaded: true, ...mapper(data)}
    case FETCH + CURRENCIES + FAIL:
      return {...currencies, loading: false}
  }

  return currencies;
};