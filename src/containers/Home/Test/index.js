import React, { Component } from 'react';
import './styles.scss';
import {TransitionMotion} from 'react-motion';


class Test extends Component {
  state = {
    items: [{data: 'a', key: 0}, {data: 'b', key: 999}]
  }

  handleChange = () => {
    const newItems = { items: [{data: 'a', key: ++this.state.items[0].key}, {data: 'b', key: 999}]}
    this.setState(newItems)
  }
  render() {
    console.log(this.state.items[0].key)
    const arr = this.state.items
    return (
      <div>
        <button onClick={this.handleChange} >Click</button>

        <div key={arr[1].key} className={'test'} >{arr[1].data}</div>
        <div key={arr[0].data + arr[0].key} className={'test'} >{arr[0].data}</div>
        {/*<TransitionMotion*/}
          {/*styles={this.state.items}>*/}
          {/*{arr =>*/}
            {/*// first render: a, b, c. Second: still a, b, c! Only last one's a, b.*/}
            {/*<div>*/}
              {/*{console.log(arr[1])}*/}
              {/*<div key={arr[1].key} className={'test'} >{arr[1].data}</div>*/}
              {/*<div key={arr[0].data + arr[0].key} className={'test'} >{arr[0].data}</div>*/}
            {/*</div>*/}
          {/*}*/}
        {/*</TransitionMotion>*/}
      </div>
    )
  }
}

Test.propTypes = {
};

Test.defaultProps = {
}

export default Test
