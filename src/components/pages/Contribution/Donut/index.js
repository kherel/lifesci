import React, { Component } from 'react';
import {arc} from 'd3-shape'
import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Donut')

const color = ['#cacdff', '#888ee8', '#3f46ad']

class Donut extends Component {

  getLine(start, end){
    const pct = Math.PI / 50
    const
      line = arc()
        .innerRadius(160)
        .outerRadius(100)
        .startAngle(start * pct)
        .endAngle(end * pct);
    return(
      line()
    )
  }

  render(){
    const {data, mx, colors} = this.props
    let end = 0;
    const _paths = data.map( (pct, i) => {
      const start = end
      end = end + pct
      const path = this.getLine(start, end)

      return(
        <path d={path} key={pct} fill={colors[i]}/>
      )
    })

    return(
      <svg className={cn([mx])} viewBox='-160 -160 320 320'>

        {_paths}
      </svg>
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