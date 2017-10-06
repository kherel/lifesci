import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import currencies from 'store/entities/currencies/reducer'


export default combineReducers({
  navigation, currencies
})
