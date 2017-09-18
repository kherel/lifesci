import {SUCCESS, REQUEST, CHART_DATA} from 'constants'

export function fetchChartData(){
  return({
    type: REQUEST + CHART_DATA + SUCCESS,
    data: genData.apply( this, arguments )
  })
}


function genData(n = 100, usd = 0.17, rate = {ethPerUsd: 0.0042, btnPerUsd: 0.000278}) {
  function randomSmallChange(init, percent){
    const k = 1 + (percent / 100 * ( Math.random()  - 0.5))
    return (init * k)
  }

  const entities = []

  let {ethPerUsd, btnPerUsd} = rate

  for(let i = 0; i< n ; i++){
    usd = randomSmallChange(usd, 30)
    btnPerUsd = randomSmallChange(btnPerUsd, 2)
    ethPerUsd = randomSmallChange(ethPerUsd, 2)

    entities.push({
      eth: usd * ethPerUsd,
      btc: usd * btnPerUsd,
      usd,
    })
  }

  return ({
    rates: {
      ethPerUsd,
      btnPerUsd
    },
    entities
  })
}