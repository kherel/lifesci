import React, { Component } from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('Faq')
import A_Container from 'A_Container'
import Search from './Search'
import Catalog from './Catalog'
import Results from './Results'

class Faq extends Component {

  state = {
    search: '',
    // scrollTo: data.catalog[0].name,
    // scrollValue: data.catalog[0].name
  }

  render() {
    const {search, scrollTo, scrollValue} = this.state
    return (
      <div>
        <A_Container type='normal' mx={cn('hero')}>
          <Search
            handleChange={search => this.setState({search})}
            handleReset={() => this.setState({search: ''})}
            value = {this.state.search}
            placeholder={'Have a question? Enter a search term here… '}
          />
        </A_Container>
        {
          search === '' ?
            <Catalog catalog={data} scrollTo={scrollTo} setScrollValue={value => this.setState({value})}/>
            : <Results entities={data.entities} search={search}/>
        }
      </div>
    )
  }
}

Faq.propTypes = {
};

Faq.defaultProps = {
}

const data = {
  catalog: [
    {
      name: "Common FAQ’s",
      slugs: [
        'What is Lifesci made for?',
        'Who is behind Lifesci team?',
        'What is Lifesci\'s ultimate goal?'
      ]
    },
    {
      name: "Pre-contribution period",
      slugs: [
        'title1',
        'title2',
        'title3',
      ]
    },
    {
      name: "Contribution period",
      slugs: [
        'title4',
        'title5',
      ]
    },
    {
      name: "Investments",
      slugs: [
        'title6',
        'title7',
      ]
    }
  ],
  entities:{
    'Who is behind Lifesci team?': '<p>1.2 These Terms incorporate the Website Terms, the Cookie Policy, the Privacy Policy, the Website Acceptable Use Policy and any Supplements by this reference.</p>\n' +
      '<p>1.3 Once you have completed the above and you have passed our internal checks, we shall make the Revolut Dashboard available to the Revolut Dashboard Users you selected when agreeing to these terms.</p>\n' +
      '<p>1.4 You confirm that you have provided the correct Information during the process of creating a Revolut Account and that the person(s) you have selected as Revolut Dashboard Users and Revolut Cardholders have your full authority to act on your behalf in accordance with these Terms. You undertake that, if your details change, you will notify us immediately. You shall bear any losses that occur due to the submission of invalid, incorrect or inaccurate Information and the actions of Revolut Dashboard Users and Revolut Cardholders subject to any limits which have been imposed upon them on the Revolut Dashboard.</p>\n' +
      '<h4>Regulatory Information</h4>' +
      '<p>2.1 These Terms are between you (the “User”, “you” or “your”) and Revolut Ltd. (“Revolut”, “we”, “us” or “our”). Revolut is a company incorporated in England and Wales with company number 08804411 and whose registered office and head office is at Level 39 1 Canada Square E14 5AB London UK. Revolut is the issuer of Electronic Money in your Revolut Electronic Money Account and performs the payment services related to your Revolut Electronic Money Account. Revolut is authorised by the Financial Conduct Authority as an Electronic Money Institution under the Electronic Money Regulations 2011 for the issuing of electronic money. We are included in the FCA’s Register of Electronic Money Institution firms (Form Reference Number 900562) which can be found on the FCA website.</p>\n' +
      '<p>2.2 The Revolut Cards are issued by Wirecard Card Solutions Limited (the “Revolut Card Issuer”).  being a company incorporated in England &amp; Wales, with company number 07875693, whose registered office is at Third Floor, Grainger Chambers, 3-5 Hood Street, Newcastle-upon-Tyne, NE1 6JQ. Wirecard Card Solutions Limited is also authorised by the Financial Conduct Authority as an Electronic Money Institution under the Electronic Money Regulations 2011 for the issuing of electronic money. Wirecard Card Solutions Limited is included in the FCA’s Register of Electronic Money Institution firms (Form Reference Number 900051) which can be found on the FCA website. A Revolut Cardholder will have to agree to the prior to being able to use his/her Revolut Card.</p>\n' +
      '<p>2.3 We are also subject to the Payment Services Regulations 2009 (the “Regulations”) which regulate how payments must be transmitted and provide protection when you send money to an account within the European Economic Area (EEA) and the payment is in Euros, Sterling or another EEA-State currency.</p>',
    'title1': 'text1',
    'title2': 'text2',
    'title3': 'text3',
    'title4': 'text4',
    'title5': 'text5',
    'title6': 'text6',
    'title7': 'text7',
    'What is Lifesci made for?': 'text8',
    'What is Lifesci\'s ultimate goal?': 'text9',

  }
}
export default Faq