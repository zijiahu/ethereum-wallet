import React from 'react';
import './Token.css'
import { Utils } from 'alchemy-sdk';

function Token(props){
    return(
        <div className="token">
            <p>Token Name: {props.name} ({props.symbol})</p>
            {/* <p>Token Balance: {props.rawBalance}</p> */}
            <p>Token Balance: {Utils.formatEther(props.rawBalance)}</p>
        </div>
    );
}

export default Token;