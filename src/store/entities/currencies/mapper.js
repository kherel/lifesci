export default ({quotes:{USDEUR, USDGBP, USDCHF}, source}) => ({
  source,
  currencies: {
    usd: 1,
    eur: USDEUR,
    gbp: USDGBP,
    chf: USDCHF
  }
})