import React from 'react';
import Card from 'Team/Card'
import A_Container from 'A_Container'

const Test = () =>{

  return(
    <div>
      <A_Container type='smart'>
        <Card {...team} type='team'/>
      </A_Container>
      <A_Container type='smart'>
        <Card {...advisor} type='advisor'/>
      </A_Container>
    </div>

  )
}

Test.propTypes = {
};

Test.defaultProps = {
}
export default Test



const team = {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', text:'CTO', avatar: 'anton_mozgovoy.jpg'}

const advisor = {name: 'Anton Mozgovoy', twitter: '@anton_mozgovoy', avatar: 'anton_mozgovoy.jpg', text:'In 1981 he isolated the first embryonic stem cells. Over his career Sir Martin has published more than 120 scientific papers and received numerous awards for his ground-breaking research. Alongside his 2007 Nobel Prize, Sir Martin has also been awarded the prestigious Albert'}
