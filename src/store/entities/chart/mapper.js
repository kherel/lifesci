export default function ({initMin, initMax, entitiesOld}, {rates, entities}) {

  const initMinMax = {
    eth: 0,
    btc: 0,
    usd: 0
  }

  let
    min = initMinMax,
    max = initMinMax


  entities = entities.map(({eth, btc, usd}) => {
    eth = +eth.toFixed(6)
    btc = +btc.toFixed(7)
    usd = +usd.toFixed(3)

    min = {
      eth: min.eth >= eth ? min.eth : eth,
      btc: min.btc >= eth ? min.btc : btc,
      usd: min.usd >= eth ? min.usd : usd
    }

    max = {
      eth: max.eth >= eth ? max.eth : eth,
      btc: max.btc >= eth ? max.btc : btc,
      usd: max.usd >= eth ? max.usd : usd
    }
    return({eth, btc, usd})
  })

  return{
    entities,
    min,
    max,
    rates
  }
}
