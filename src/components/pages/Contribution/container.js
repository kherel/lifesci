import {connect} from 'react-redux';
import Page from './page'


function mapStateToProps(state) {
  const {currencies:{currencies, loaded}, contracts} = state
  return {currencies, loaded, contracts}
}

export default connect(mapStateToProps)(Page);