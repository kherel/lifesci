import {START, SUCCESS, REQUEST, FAIL, CHART_DATA} from 'constants'
import mapper from './mapper'

const initChart = {
  loading: false,
  loaded: false,
  entities: [],
  rates: {
    ethPerUsd: 0,
    btnPerUsd: 0
  },
  min:{
    eth: 0,
    btc: 0,
    usd: 0
  },
  max:{
    eth: 0,
    btc: 0,
    usd: 0
  }
}

export default (chart = initChart, {type, data}) => {

  switch (type) {
    case REQUEST + CHART_DATA + START:
      return {...chart, loading: true}
    case REQUEST + CHART_DATA + SUCCESS:
      return {...chart, loading: false, loaded: true, ...mapper(data)}
    case REQUEST + CHART_DATA + FAIL:
      return {...chart, loading: false}
  }
  return chart;
};