import React from 'react';

import SyntaxHighlighter, { registerLanguage } from "react-syntax-highlighter/dist/light"
import js from 'react-syntax-highlighter/dist/languages/javascript';
import docco from 'react-syntax-highlighter/dist/styles/docco';

registerLanguage('javascript', js);

const Test = () =>{

  return(
    <div style={{paddingTop: 20, display: 'flex'}}>
      <div style={{flex: 1, width: '100%', flexDirection: 'column'}}>
        <SyntaxHighlighter
          showLineNumbers
           wrapLines={true}
           style={docco}
        >{value}</SyntaxHighlighter>
      </div>
    </div>
  )

}

Test.propTypes = {
};

Test.defaultProps = {
}
export default Test

const value = `${'pragma solidity ^0.4.11;\n' +
'\n' +
'/*\n' +
'    Copyright 2017, Jarrad Hope (Status Research & Development GmbH)\n' +
'*/\n' +
'\n' +
'\n' +
'import "./MiniMeToken.sol";\n' +
'\n' +
'\n' +
'contract SNT is MiniMeToken {\n' +
'    // @dev SNT constructor just parametrizes the MiniMeIrrevocableVestedToken constructor\n' +
'    function SNT(address _tokenFactory)\n' +
'            MiniMeToken(\n' +
'                _tokenFactory,\n' +
'                0x0,                     // no parent token\n' +
'                0,                       // no snapshot block number from parent\n' +
'                "Status Network Token",  // Token name\n' +
'                18,                      // Decimals\n' +
'                "SNT",                   // Symbol\n' +
'                true                     // Enable transfers\n' +
'            ) {}\n' +
'}'
  }`