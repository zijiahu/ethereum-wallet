import React from 'react';
import { useLocation } from "react-router-dom";
// import Web3 from "web3";
const Web3 = require('web3');

function DisplayAddress(){
    const location = useLocation();
    console.log(location);

    return(
        <div>
            <h1>Create Address</h1>
            <h2>Public Address:</h2>
            <div>{location.state.address}</div>
            <h2>Private Key:</h2>
            <div>{location.state.privateKey}</div>
        </div>
    )
}

export default DisplayAddress;