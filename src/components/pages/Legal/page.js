import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'
import A_Container from 'A_Container'
import A_H from 'A_H'
import A_P from 'A_P'
import A_Link from 'A_Link'
const cn = cssClassName('Legal')
import O_Fixed from 'O_Fixed'
import M_Select from 'M_Select'
import history from 'history'

const Legal = ({openRoute}) =>{

  openRoute = openRoute[openRoute.length - 1]

  const links = nav.map( ({name, url}, i) => {
    const isOpen = openRoute === url.substr(1)
    return(
      <li key={i}>
        <A_Link
          to={`/legal${url}`}
          type='nav'
          disabled={isOpen}
          mx={cn('nav-link', {'is-open': isOpen})}
          children={name}
        />
      </li>
    )
  })

  const options = nav.map(({name, url}) => ({label:name, value: url.substr(1)}))
  return(
    <div className={cn()}>
      <A_Container type='hero' mx={cn('hero')}>
        <A_H type="hero">Legal Agreements</A_H>
        <A_P type="hero">Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
        <M_Select
          options={options}
          mx={cn('dropdown')}
          onChange={opt => history.push(`/legal/${opt}`)}
          value = {openRoute}
        />
      </A_Container>
      <A_Container type='normal' mx={cn('main')}>
        <O_Fixed mx={cn('menu', {media: 'desktop'})}>
          <div className={cn('fixed')}>
            <A_H type='third'>Content</A_H>
            <ul className={cn('nav')} >
              {links}
            </ul>
          </div>
        </O_Fixed>
        <O_Fixed mx={cn('menu', {media: 'tablet'})} top={65}>
          <div className={cn('fixed')}>
            <A_H type='third'>Content</A_H>
            <ul className={cn('nav')} >
              {links}
            </ul>
          </div>
        </O_Fixed>
        <section className={cn('content')} dangerouslySetInnerHTML={{__html: content[openRoute]}} />
      </A_Container>
    </div>
  )
}

Legal.propTypes = {
};

Legal.defaultProps = {
}
export default Legal

const nav = [
  {name: 'Business Terms of Service',  url: '/business-terms-of-service'},
  {name: 'Supplements', url: '/supplements'},
  {name: 'Complaints Policy', url: '/complaints-policy'},
  {name: 'Cookies Policy', url: '/cookies-policy'}
]


const content = {
  'business-terms-of-service': '<h2 >Business Terms of Service</h2>\n' +

  '<strong>IMPORTANT: PLEASE CAREFULLY READ THE FOLLOWING TERMS OF SERVICE. YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND AGREE TO ALL OF THESE TERMS IF YOU HAVE CREATED OR USED A REVOLUT FOR BUSINESS ACCOUNT OR HAVE CLICKED AN "I ACCEPT" BUTTON WITH RESPECT TO THE USE OF REVOLUT FOR BUSINESS SERVICES.</strong>\n' +
  '<p>1.1 These Terms constitute a framework agreement which sets out the terms of (a) you and us entering into Revolut Transaction(s); and (b) the use of the Revolut Dashboard and other Revolut Services. Before you can enter into Revolut Transactions and benefit from the Revolut Services with us you are required to:</p>\n' +
  '<ol>\n' +
  '<li><p>read these Terms and tick the box online confirming the accuracy of the information provided online and your agreement with these Terms; and</p>\n' +
  '</li>\n' +
  '<li><p>provide us with such documentation, photographs and information as we may reasonably request to comply with our regulatory obligations.</p>\n' +
  '</li>\n' +
  '</ol>\n' +
  '<p>1.2 These Terms incorporate the Website Terms, the Cookie Policy, the Privacy Policy, the Website Acceptable Use Policy and any Supplements by this reference.</p>\n' +
  '<p>1.3 Once you have completed the above and you have passed our internal checks, we shall make the Revolut Dashboard available to the Revolut Dashboard Users you selected when agreeing to these terms.</p>\n' +
  '<p>1.4 You confirm that you have provided the correct Information during the process of creating a Revolut Account and that the person(s) you have selected as Revolut Dashboard Users and Revolut Cardholders have your full authority to act on your behalf in accordance with these Terms. You undertake that, if your details change, you will notify us immediately. You shall bear any losses that occur due to the submission of invalid, incorrect or inaccurate Information and the actions of Revolut Dashboard Users and Revolut Cardholders subject to any limits which have been imposed upon them on the Revolut Dashboard.</p>\n' +
  '<h4>Regulatory Information</h4>' +
  '<p>2.1 These Terms are between you (the “User”, “you” or “your”) and Revolut Ltd. (“Revolut”, “we”, “us” or “our”). Revolut is a company incorporated in England and Wales with company number 08804411 and whose registered office and head office is at Level 39 1 Canada Square E14 5AB London UK. Revolut is the issuer of Electronic Money in your Revolut Electronic Money Account and performs the payment services related to your Revolut Electronic Money Account. Revolut is authorised by the Financial Conduct Authority as an Electronic Money Institution under the Electronic Money Regulations 2011 for the issuing of electronic money. We are included in the FCA’s Register of Electronic Money Institution firms (Form Reference Number 900562) which can be found on the FCA website.</p>\n' +
  '<p>2.2 The Revolut Cards are issued by Wirecard Card Solutions Limited (the “Revolut Card Issuer”).  being a company incorporated in England &amp; Wales, with company number 07875693, whose registered office is at Third Floor, Grainger Chambers, 3-5 Hood Street, Newcastle-upon-Tyne, NE1 6JQ. Wirecard Card Solutions Limited is also authorised by the Financial Conduct Authority as an Electronic Money Institution under the Electronic Money Regulations 2011 for the issuing of electronic money. Wirecard Card Solutions Limited is included in the FCA’s Register of Electronic Money Institution firms (Form Reference Number 900051) which can be found on the FCA website. A Revolut Cardholder will have to agree to the prior to being able to use his/her Revolut Card.</p>\n' +
  '<p>2.3 We are also subject to the Payment Services Regulations 2009 (the “Regulations”) which regulate how payments must be transmitted and provide protection when you send money to an account within the European Economic Area (EEA) and the payment is in Euros, Sterling or another EEA-State currency.</p>',

  'supplements': '<h2>Information about our use of cookies</h2>\n' +
  '<p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p>\n' +
  '<p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer or mobile phone if you agree. Cookies contain information that is transferred to your computer\'s hard drive. We use session cookies which are cookies which expire once you close your web browser.</p>\n' +
  '<p>We use the following cookies:</p>\n' +
  '<ul>\n' +
  '<li><strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website and enter into transactions.</li>\n' +
  '<li><strong>Analytical/performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. We use Google Analytics cookies. Google Analytics collects information anonymously. It reports website trends without identifying individual visitors. You can opt out of Google Analytics without affecting how you visit this site. For more information on Google Analytics, please click <a href="https://support.google.com/analytics/answer/6004245">here</a>.</li>\n' +
  '<li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>\n' +
  '</ul>\n' +
  '<p>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies</p>\n' +
  '<p>You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.</p>',

  'complaints-policy': '<h2>Information about our use of cookies</h2>\n' +
  '<p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p>\n' +
  '<p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer or mobile phone if you agree. Cookies contain information that is transferred to your computer\'s hard drive. We use session cookies which are cookies which expire once you close your web browser.</p>\n' +
  '<p>We use the following cookies:</p>\n' +
  '<ul>\n' +
  '<li><strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website and enter into transactions.</li>\n' +
  '<li><strong>Analytical/performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. We use Google Analytics cookies. Google Analytics collects information anonymously. It reports website trends without identifying individual visitors. You can opt out of Google Analytics without affecting how you visit this site. </li>\n' +
  '<li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>\n' +
  '</ul>\n' +
  '<p>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies</p>\n' +
  '<p>You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.</p>',

  'cookies-policy': '<h2>Information about our use of cookies</h2>\n' +
  '<p>Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site. By continuing to browse the site, you are agreeing to our use of cookies.</p>\n' +
  '<p>A cookie is a small file of letters and numbers that we store on your browser or the hard drive of your computer or mobile phone if you agree. Cookies contain information that is transferred to your computer\'s hard drive. We use session cookies which are cookies which expire once you close your web browser.</p>\n' +
  '<p>We use the following cookies:</p>\n' +
  '<ul>\n' +
  '<li><strong>Strictly necessary cookies.</strong> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website and enter into transactions.</li>\n' +
  '<li><strong>Analytical/performance cookies.</strong> They allow us to recognise and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily. We use Google Analytics cookies. Google Analytics collects information anonymously. It reports website trends without identifying individual visitors. You can opt out of Google Analytics without affecting how you visit this site.</li>\n' +
  '<li><strong>Targeting cookies.</strong> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests. We may also share this information with third parties for this purpose.</li>\n' +
  '</ul>\n' +
  '<p>Please note that third parties (including, for example, advertising networks and providers of external services like web traffic analysis services) may also use cookies, over which we have no control. These cookies are likely to be analytical/performance cookies or targeting cookies</p>\n' +
  '<p>You block cookies by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.</p>'

}