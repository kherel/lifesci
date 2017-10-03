import React, { Component } from 'react';
// import * as T from "prop-types";
// import './styles.scss';
// import {cssClassName} from 'utils'
// const cn = cssClassName('Test')
import A_RadioBtn from 'A_RadioBtn'

class Test extends Component {

  state = {
    checked: 'STANDARD'
  }

  render() {

 //   const {} = this.props
 //   const {} = this.state
    const onChange = value => this.setState({checked: value})

    return (
      <div>
        <A_RadioBtn type='calc' checked={this.state.checked} onChange={onChange} >STANDARD</A_RadioBtn>
        <A_RadioBtn type='calc' checked={this.state.checked}  onChange={onChange} >text</A_RadioBtn>
      </div>
    )
  }
}

Test.propTypes = {
};

Test.defaultProps = {
}

export default Test