import React from 'react'
// import * as T from "prop-types";
import './styles.scss'
import { cssClassName } from 'utils'
import A_Container from 'A_Container'
const cn = cssClassName('Platform')
import A_H from 'A_H'
import A_P from 'A_P'
import A_Image from 'A_Image'

const Platform = () => {
  return (
    <A_Container type="equal" mx={cn()}>
      <div className={cn('left')}>
        <A_H type="section" mx={cn('title')}>
          The Intelligence Platform
        </A_H>
        <A_P type="section" mx={cn('text')}>
          The platform includes the latest industry reports and specific data analytics in order to
          understand and apprehend the health sector.
        </A_P>

        <section className={cn('section', { icon: 'lines' })}>
          <A_H type="small-section">Intrepreneurs and Investors</A_H>
          <A_P type="second">
            Currently there is no accessible independent database for those that wish to monitor and
            potentially take advantage of investment opportunities in this fast growing sector.
            According to PwC the life science sector is worth over £30 Billion in the UK alone and
            as life expectancy continues to expand there will be increasing demand for new medical
            breakthroughs.
          </A_P>
          <div className={cn('docs')}>
            <A_P type="second" mx={cn('docs-item')}>
              Data is stored in a high secure manner on a blockchain
            </A_P>
            <A_P type="second" mx={cn('docs-item')}>
              Neural network analyses of the data on the platform
            </A_P>
            <A_P type="second" mx={cn('docs-item')}>
              Independent data on new medical breakthroughs
            </A_P>
            <A_P type="second" mx={cn('docs-item')}>
              Investment opportunities available via crowdfund or a pooled investment vehicle
            </A_P>
          </div>
        </section>
        <section className={cn('section', { icon: 'shield' })}>
          <A_H type="small-section">Doctors & Healthcare Professionals</A_H>
          <A_P type="second">
            A depository for studies and field tests, a location to promote what they are doing if
            they are looking for others to collaborate on trials and research. Easy to access data
            and research paper so helping professionals in the sector with their CPD as well as a
            reference point for those studying for their individual qualifications.{' '}
          </A_P>
        </section>
      </div>
      <div className={cn('right')}>
        <A_Image src={'/img/illustrations/tablet.svg'} mx={cn('illustration')} />
        <section className={cn('section', { icon: 'note' })}>
          <A_H type="small-section">Academics and Researchers</A_H>
          <A_P type="second">
            To monitor what other universities are doing and so decide whether to pursue similar
            areas of research, a central database that is secure when collaborating with other
            institutions. A quick and and cost effective way to share and hold research data where
            results and findings can be kept private or disseminated widely. Scalable so able to
            store data and results from small studies to those involving many different
            contributors.
          </A_P>
        </section>
      </div>
    </A_Container>
  )
}

Platform.propTypes = {}

Platform.defaultProps = {}
export default Platform
