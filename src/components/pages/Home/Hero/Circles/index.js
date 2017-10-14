import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHeroCircles')

const HomeHeroCircles = ({className}) =>(
  <svg width="150%" className={className} viewBox="-625 -180 1250 360" xmlns="http://www.w3.org/2000/svg"
  >
    <defs >
      <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1" 
      >
        <stop stopColor="#e5e5e5" offset="0%"  />
        <stop stopColor="#000000" offset="100%"  />
      </linearGradient>
    </defs>
    <g stroke="url(#linearGradient-1)" strokeWidth="2" fill="none" fillRule="evenodd">
      <path d="M-94,0a94,24 0 1,0 188,0a94,24 0 1,0 -188,0" id="road-11" opacity="0.2"/>
      <path d="M-150,0a150,38 0 1,0 300,0a150,38 0 1,0 -300,0" id="road-12" opacity="0">
        <animate attributeName="opacity" attributeType="XML" begin="1s" dur="1s" from="0" to="0.2" fill="freeze"/>
      </path>
      <path d="M-231,0a231,59 0 1,0 462,0a231,59 0 1,0 -462,0" id="road-13" opacity="0">
        <animate attributeName="opacity" attributeType="XML" begin="2s" dur="1s" from="0" to="0.2" fill="freeze"/>
      </path>
      <path d="M-334,0a334,87 0 1,0 668,0a334,87 0 1,0 -668,0" id="road-14" opacity="0">
        <animate attributeName="opacity" attributeType="XML" begin="3s" dur="1s" from="0" to="0.2" fill="freeze"/>
      </path>
      <path d="M-455,0a455,122 0 1,0 910,0a455,122 0 1,0 -910,0" id="road-15" opacity="0">
        <animate attributeName="opacity" attributeType="XML" begin="4s" dur="1s" from="0" to="0.2" fill="freeze"/>
      </path>
      <path d="M-620,0a620,175 0 1,0 1240,0a620,175 0 1,0 -1240,0" id="road-16" opacity="0">
        <animate attributeName="opacity" attributeType="XML" begin="5s" dur="1s" from="0" to="0.2" fill="freeze"/>
      </path>
    </g>
    <circle r="4" id="circle-1" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="4.5s" dur="5s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="6s" repeatCount="indefinite" repeatDur="indefinite"> <mpath xlinkHref="#road-13"/></animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="6s" begin="4.5s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="6s" begin="4.5s" repeatCount="indefinite" />
    </circle>
    <circle r="4" fill="#000" id="circle-2" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="4s" dur="1s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="2s" repeatCount="indefinite" repeatDur="indefinite">
        <mpath xlinkHref="#road-14" />
      </animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="2s" begin="1.5s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="3s" begin="1.5s" repeatCount="indefinite" />
    </circle>
    <circle r="5" fill="#000" id="circle-3" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="4s" dur="1s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="3s" repeatCount="indefinite" repeatDur="indefinite">
        <mpath xlinkHref="#road-15" />
      </animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="3s" begin="2.25s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="3s" begin="2.25s" repeatCount="indefinite" />
    </circle>
    <circle r="5" fill="#000" id="circle-3" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="5s" dur="1s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="5.5s" repeatCount="indefinite" repeatDur="indefinite">
        <mpath xlinkHref="#road-15" />
      </animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="5.5s" begin="4.125s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="5.5s" begin="4.125s" repeatCount="indefinite" />
    </circle>
    <circle r="5" fill="#000" id="circle-4" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="5s" dur="1s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="5s" repeatCount="indefinite" repeatDur="indefinite">
        <mpath xlinkHref="#road-16"  />
      </animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="5s" begin="3.75s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="5s" begin="3.75s" repeatCount="indefinite" />
    </circle>
    <circle r="5" fill="#000" id="circle-4" opacity="0">
      <animate attributeName="opacity" attributeType="XML" begin="7.5s" dur="1s" from="0" to="1" fill="freeze"/>
      <animateMotion dur="10s" repeatCount="indefinite" repeatDur="indefinite">
        <mpath xlinkHref="#road-16"  />
      </animateMotion>
      <animate attributeName="fill" values="white;black;white" dur="10s" begin="7.5s" repeatCount="indefinite" />
      <animate attributeName="r" values="3;5;3" dur="10s" begin="7.5s" repeatCount="indefinite" />
    </circle>
  </svg>
)

HomeHeroCircles.propTypes = {
};

HomeHeroCircles.defaultProps = {
}
export default HomeHeroCircles