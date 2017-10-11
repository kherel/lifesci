import React from 'react';

const Test = () =>{

  return(
    <div>
      <img src={__CLIENT__  ? require('/static/img/screen.png') : '/static/img/screen.png'} alt=""/>
    </div>
  )

}

Test.propTypes = {
};

Test.defaultProps = {
}
export default Test
