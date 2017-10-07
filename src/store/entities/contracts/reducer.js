import {START, SUCCESS, FETCH, FAIL, CONTRACTS} from 'constants'

const initContracts = {
  loading: false,
  loaded: true,
  contracts:{
    contract: '',
    placeholder: '',
    implementation: '',
    multisig: ''
  }
}

export default (contracts = initContracts, {type, data}) => {

  switch (type) {
    case FETCH +  CONTRACTS + START:
      return {...contracts, loading: true}
    case FETCH +  CONTRACTS + SUCCESS:
      const newContracts = {...contracts.contracts}
      newContracts[data.initdata] = data.text
      return {...contracts, loading: false, loaded: true, contracts:newContracts}
    case FETCH +  CONTRACTS + FAIL:
      return {...contracts, loading: false}
  }

  return  contracts;
};