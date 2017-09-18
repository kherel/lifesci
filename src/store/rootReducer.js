import { combineReducers } from 'redux'
import navigation from 'store/entities/navigation/reducer'
import chart from 'store/entities/chart/reducer'

export default combineReducers({
  navigation,
  chart
})
