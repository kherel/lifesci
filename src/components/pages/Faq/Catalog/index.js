import React, {Component} from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('FaqCatalog')
import O_Fixed from 'O_Fixed'
import A_H from 'A_H'
import A_Link from 'A_Link'
import { Motion, spring } from 'react-motion'
import ScrollSync from './ScrollSync'
import M_Select from 'M_Select'

// const initOffset = 222
const initOffset = 180

class FaqCatalog extends Component {

  state = {
    currentScrollPosition: 0,
    scrollMotionTo: 0,
    scrollMotionActive: false,
    selected: this.props.catalog.catalog[0].name,
    opened:[],
    stickyDisabled: false
  }

  sections = {}

  getSections(catalog){
    return(
      catalog.catalog.map(({name, slugs}) => (
        <div id={name} key={name} ref={node => this.sections[name] = node}>
          <A_H type='section' mx={cn('section')}>{name}</A_H>
          { slugs.map(this.getQuestion) }
        </div>
      ))
    )
  }

  getQuestion = (slug) => {
    const {catalog} = this.props
    const isOpened = this.state.opened.includes(slug)
    let opened;
    if(isOpened) {
      opened = this.state.opened.filter(e => e !== slug);
    } else {
      opened = this.state.opened.concat(slug);
    }
    return (
      <div className={cn('item')} key={slug} >
        <div className={cn('item-header', {'is-opened': isOpened})} onClick={() => this.setState({opened})}>
          <A_H type='faq' key={slug}>{slug}</A_H>
        </div>
        <article dangerouslySetInnerHTML={{__html: catalog.entities[slug]}} className={cn('item-article', {'is-opened': isOpened})}/>
      </div>
    )
  }

  mobScroll = (name) =>{
    const names = this.props.catalog.catalog.map(({name}) => name)
    const i = names.indexOf(name)
    this.startScrollMotion(name, i)
  }
  getNavigation(catalog, selected){
    return(
      catalog.catalog.map(({name}, i) => {
        return(
          <A_Link
            key = {name}
            onClick={() => this.startScrollMotion(name, i)}
            type='faq'
            mx={cn('nav-link', {selected: selected === name})}
          >
            {name}
          </A_Link>
        )
      }
    ))
  }

  componentDidMount() {
    document.addEventListener('scroll', this._handleUserScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this._handleUserScroll);
  }

  _handleUserScroll = () => {
    const keys = Object.keys(this.sections)
    const top = 150
    const selectedIndex = keys.findIndex((key, i, arr) => {
      if(i === 0){
        return(
          this.sections[key].getBoundingClientRect().top > top || this.sections[keys[i+1]].getBoundingClientRect().top > top
        )
      } else {
        return(
          this.sections[key].getBoundingClientRect().top <= top && (!arr[i+1] || this.sections[keys[i+1]].getBoundingClientRect().top > top )
        )
      }
    })
    const selected = this.props.catalog.catalog[selectedIndex].name
    const stickyDisabled = this.sections[keys[keys.length-1]].getBoundingClientRect().top < 50
    this.setState({selected, stickyDisabled})
    this.props.setScrollValue(selected)
  }

  setCurrentScrollPosition = (position) => {
    this.setState({
      currentScrollPosition: position
    })
  }

  startScrollMotion = (name, i) => {
    const offset = i === 0 ? 0 : this.sections[name].offsetTop + initOffset
    window.onscroll = window.onwheel = (e) => { e.preventDefault(); }
    this.setState({
      scrollMotionTo: offset,
      scrollMotionActive: true
    })
  }

  finishScrollMotion = () => {
    window.onscroll = window.onwheel = () => true

    this.setState({
      scrollMotionActive: false
    })
  }

  render() {

    const {catalog} = this.props
    const { scrollMotionTo, scrollMotionActive, selected, stickyDisabled } = this.state;
    const sections = this.getSections(catalog)
    const navigation = this.getNavigation(catalog, selected)
    const hide = selected !== this.props.catalog.catalog[0].name
    const options = catalog.catalog.map(({name}) => ({value:name, label: name}))

    return (
      <div ref={ node => this.scrollContainer = node}>
        <M_Select
          options={options}
          mx={cn('dropdown')}
          onChange={this.mobScroll}
          value = {selected}
        />
        <A_Container
          type='normal'
          mx={cn('container')}
        >
          <O_Fixed mx={cn('aside', {media: 'desktop'})} disabled={stickyDisabled}>
            <div className={cn('aside-menu')}>
              <A_H type='small-section'>Contents</A_H>
              {navigation}
            </div>
          </O_Fixed>
          <O_Fixed mx={cn('aside', {media: 'tablet'})} top={65} disabled={stickyDisabled}>
            <div className={cn('aside-menu')}>
              <A_H type='small-section'>Contents</A_H>
              {navigation}
            </div>
          </O_Fixed>
          <div className={cn('main', {hide})}>
            {sections}
          </div>
          {scrollMotionActive &&
          <Motion
            defaultStyle={{
              scrollMotion: (this.sections[Object.keys(this.sections)[0]].getBoundingClientRect().top - 350) * -1
              // scrollMotion: currentScrollPosition //from
            }}
            style={{
              scrollMotion: spring(scrollMotionTo, {stiffness: 100, damping: 20, precision: 10}) //to
            }}
          >
            {currentStyles => {
              return (
                <ScrollSync
                  scrollContainer = {window}
                  scrollMotionTo = {scrollMotionTo}
                  scrollMotion = {currentStyles.scrollMotion}
                  scrollMotionActive = {scrollMotionActive}
                  setCurrentScrollPosition = {this.setCurrentScrollPosition}
                  finishScrollMotion = {this.finishScrollMotion}
                />
              )
            }}
          </Motion>
          }
        </A_Container>
      </div>
    )
  }
}

FaqCatalog.propTypes = {};

FaqCatalog.defaultProps = {

}

export default FaqCatalog