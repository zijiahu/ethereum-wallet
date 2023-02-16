import React, {useState} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
// import Web3 from "web3";
const Web3 = require('web3');

function DisplayAddress(){
    const location = useLocation();
    const navigate = useNavigate();

    const [address, setAddress] = useState('');
    const [privateKey, setPrivateKey] = useState('');

    function handleClicked(evt){
        evt.preventDefault();
        navigate('/wallet');
    }

    if(location.state !== null && location.state.address !== null){
        setAddress(location.state.address);
    }

    if(location.state !== null && location.state.privateKey !== null){
        setPrivateKey(location.state.privateKey);
    }

    return(
        <div>
            <h1>Create Address</h1>
            <h2>Public Address:</h2>
            <div>{address}</div>
            <h2>Private Key:</h2>
            <div>{privateKey}</div>
            <button onClick={handleClicked}>Go to My Wallet</button>
        </div>
    )
}

export default DisplayAddress;