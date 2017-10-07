import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import currencies from 'store/entities/currencies/reducer'
import contracts from 'store/entities/contracts/reducer'

export default combineReducers({
  navigation, currencies, contracts
})
