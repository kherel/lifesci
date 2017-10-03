import React, { Component } from 'react';
import './styles.scss';
import moment from 'moment'
import {cssClassName} from 'utils'
const cn = cssClassName('Timer')

class Timer extends Component {

  state = {
    days: [0, 'days'],
    hours: [0, 'hours'],
    minutes: [0, 'minutes'],
    seconds: [0, 'seconds']
  }

  getFlips(nextNumber, keyType){

    let nextDigitArr = ('' + nextNumber).split('')
    nextDigitArr.length === 1 && nextDigitArr.unshift('0')

    const digits = nextDigitArr.map((nextDigit, i) => (
      <span className={cn('digit')} key={`${keyType}-${i}`}>{nextDigit}</span>
    ))

    return(
      <div className={cn('digits')}>
        {digits}
        <span className={cn('label')}>{keyType}</span>
      </div>
    )
  }

  componentDidMount(){
    this.setTime()
    this.interval = setInterval(() => this.setTime(), 1000)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  setTime(){

    const
      dataFrom  = moment(),
      dataToString = "14/10/2017 14:00:00",
      dataTo = moment.utc(dataToString,"DD/MM/YYYY HH:mm:ss"),
      ms = dataTo.diff(dataFrom),
      d = moment.duration(ms),
      dSec = d.asMilliseconds(),
      days = [Math.floor(d.asDays()), 'days'],
      hours = [moment.utc(dSec).format("HH"), 'hours'],
      minutes = [moment.utc(dSec).format("mm"), 'minutes'],
      seconds = [moment.utc(dSec).format("ss"), 'seconds']

    this.setState({days, hours, minutes, seconds})
  }

  render() {
    const {days, hours, minutes, seconds} = this.state
    if(__SERVER__) return null
    return (
      <div className={cn()}>
        {this.getFlips(...days)}
        {this.getFlips(...hours)}
        {this.getFlips(...minutes)}
        {this.getFlips(...seconds)}
      </div>
    )
  }
}

Timer.propTypes = {
};

Timer.defaultProps = {
}

export default Timer
