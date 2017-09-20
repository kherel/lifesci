import React, { Component } from 'react';
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('O_FlipClock')
import moment from 'moment'

class O_FlipClock extends Component {

  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  getFlips(nextNumber, prevNumber, keyType){

    let nextDigitArr = ('' + nextNumber).split('')
    nextDigitArr.length === 1 && nextDigitArr.unshift('0')
    const prevDigitArr = ("0" + prevNumber).slice(-nextDigitArr.length).split('')

    return(
      nextDigitArr.map((nextDigit, i) => (
        this.getDigit(nextDigit, prevDigitArr[i], `${keyType}-${i}`)
      ))
    )
  }

  getDigit(nextDigit, prevDigit, keyType){
    return(
      <ul className={`flip play`} key={`key_${keyType}_${nextDigit}`}>
        {['before', 'active'].map( dial => (
          <li className={"flip-clock-" + dial} key={dial}>
            <a href="#">
              {['up','down'].map( className => (
                <div className={className} key={className}>
                  <div className="shadow" />
                  <div className="inn">{dial === 'before' ? prevDigit : nextDigit}</div>
                </div>
              ))}
            </a>
          </li>
        ))}
      </ul>
    )
  }

  componentDidMount(){
    this.setTime()
    this.interval = setInterval(() => this.setTime(), 1000)
  }

  componentUnmount(){
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
      days = [Math.floor(d.asDays()), Math.floor(d.asDays()) - 1, 'days'],
      hours = [moment.utc(dSec).format("HH"), moment.utc(dSec).add(1, "hours").format("HH"), 'hours'],
      minutes = [moment.utc(dSec).format("mm"), moment.utc(dSec).add(1, "minutes").format("mm"), 'minutes'],
      seconds = [moment.utc(dSec).format("ss"), moment.utc(dSec).add(1, "seconds").format("ss"), 'seconds']

    this.setState({days, hours, minutes, seconds})
  }

  render() {
    const {days, hours, minutes, seconds} = this.state

    return (
      <div className="clock flip-clock-wrapper" >
        <span className="flip-clock-divider days">
          <span className="flip-clock-label">days</span>
        </span>
        {this.getFlips(...days)}
        <span className="flip-clock-divider hours">
            <span className="flip-clock-label">hours</span>
            {/*<span className="flip-clock-dot top"/>*/}
            {/*<span className="flip-clock-dot bottom"/>*/}
        </span>
        {this.getFlips(...hours)}
        <span className="flip-clock-divider minutes">
          <span className="flip-clock-label">minutes</span>
          {/*<span className="flip-clock-dot top"/>*/}
          {/*<span className="flip-clock-dot bottom"/>*/}
        </span>
        {this.getFlips(...minutes)}
        <span className="flip-clock-divider seconds">
          <span className="flip-clock-label">seconds</span>
          {/*<span className="flip-clock-dot top"/>*/}
          {/*<span className="flip-clock-dot bottom"/>*/}
        </span>
        {this.getFlips(...seconds)}
      </div>
    )
  }
}

O_FlipClock.propTypes = {
};

O_FlipClock.defaultProps = {
}

export default O_FlipClock
