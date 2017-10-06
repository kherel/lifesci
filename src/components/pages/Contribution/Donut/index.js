import React, { Component } from 'react';
import {arc} from 'd3-shape'
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Donut')
import {Motion, spring, presets} from 'react-motion'

const color = ['#cacdff', '#888ee8', '#3f46ad']

class Donut extends Component {

  state = {
    hover: null
  }

  getArc(start, end, outerRadius, innerRadius = 0){
    const pct = Math.PI / 50
    return(
      arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(start * pct)
        .endAngle(end * pct)
    )();
  }

  getLines(dataArr, colors, hover){
    return dataArr.map( ({start, end}, i) => {
      return(
        <Motion defaultStyle={{x: 100, y: 160}} style={{
          x: spring(i === hover ? 117 : 100, presets.stiff),
          y: spring(i === hover ? 180 : 160, presets.stiff)

        }} key={i}>
          {({x, y}) =>
            <path
              d={this.getArc(start, end, x, y)}
              fill={colors[i]}
            />
          }
        </Motion>
      )
    })
  }


  renderHoverLine = (dataArr) => {
    return dataArr.map(({start, end}, i) => {
      const path = this.getArc(start, end, 180)
      return(
        <path
          d={path}
          key={`hover ${i}`}
          fill='rgba(0,0,0,0)'
          onMouseEnter={() => this.setState({hover:i})}
          onMouseLeave={() => this.setState({hover: null})}
        />
      )
    })
  }

  dataMapper(data){
    let end = 0;
    return data.map(pct =>{
      const start = end
      end = end + pct
      return({ start, end })
    })
  }

  render(){
    const {data, mx, colors} = this.props
    const dataArr = this.dataMapper(data)
    const {hover} = this.state
    const labels = [
      'All',
      'Allocated to public',
      'Allocated to Lifesci team',
      'Reserve fund'
    ]

    const hoverPaths = this.renderHoverLine(dataArr, colors)
    const paths = this.getLines(dataArr, colors, hover)
    const labelPct = `${hover === null ?100 : data[hover]}%`
    const labelTxt = `${hover === null ? labels[0] : labels[hover + 1]}`

    return(
      <div className={cn([mx])}>
        <div className={cn('label')}>
          <p className={cn('pct')}>{labelPct}</p>
          <p className={cn('text')}>{labelTxt}</p>
        </div>
        <svg  viewBox='-180 -180 360 360'>
          {paths}
          {hoverPaths}
        </svg>
      </div>

    )
  }
}

Donut.propTypes = {
  mx: T.string,
  data: T.array.isRequired,
  colors: T.array.isRequired

};

Donut.defaultProps = {
  data: [],
  colors: ['#cacdff', '#888ee8', '#3f46ad']
}

export default Donut