import {connect} from 'react-redux';
import Page from './page'


function mapStateToProps(state) {
  const {currencies, loaded} = state.currencies
  return {currencies, loaded}
}

export default connect(mapStateToProps)(Page);