import React, { Component } from 'react'
import ReadContainer from 'Read/container'
import history from 'history'

class HomeRoute extends Component {
  componentWillMount(){
    const arrayRefs = [111, 222, 333, 444, 555]
    const {ref} = this.props.location.query
    const accessAllowed = arrayRefs.some( el => +ref === el)
    console.log(accessAllowed, ref)
    if(!accessAllowed){
      history.push('/')
    }
  }
  render() {
    const {ref} = this.props.location.query
    console.log(ref)
    return <ReadContainer />
  }
}

export default HomeRoute
