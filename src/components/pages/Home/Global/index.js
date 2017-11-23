import React from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
const cn = cssClassName('Global')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Container from 'A_Container'
import A_Image from 'A_Image'

const Global = () => {
  return (
    <A_Container type="section" mx={cn()}>
      <div className={cn('left')}>
        <A_H type="section" mx={cn('title')}>
          Lifesci Global Platform
        </A_H>
        <A_P type="section" mx={cn('text')}>
          An independent, secure scalable platform, that reduces expensive IT set up costs and
          offering a quick ready solution.
        </A_P>

        <section className={cn('small-section')}>
          <A_H type="small-section">Master patient index</A_H>
          <A_P type="second">
            A master patient index is a database that is used across a healthcare organisation to
            maintain consistent, accurate and current demographic and essential medical data on the
            patients seen and managed within its various departments, aggregated, stored and
            analysed at Lifesci
          </A_P>
        </section>
        <section className={cn('small-section')}>
          <A_H type="small-section">Lifesci Fund</A_H>
          <A_P type="second">
            A non regulated vehicle that will potentially invest in the equity of a range of
            companies in the Biotech, healthcare and life science sector. It will look to provide
            capital to assist in the financing of products and devices that are at different stages
            of evaluation and pharmacological assessment.
          </A_P>
        </section>
      </div>
      <div className={cn('right')}>
        <A_Image
          src={'/img/photo/sir-martin-evans.jpg'}
          alt="Sir Martin Evans"
          objectFit="contain"
          mx={cn('photo')}
        />
        <div className={cn('label')}>
          <A_P type="name">Sir Martin Evans</A_P>
          <A_P type="title">Lifesci's chief scientific advisor</A_P>
        </div>
      </div>
    </A_Container>
  )
}

Global.propTypes = {}

Global.defaultProps = {}
export default Global
