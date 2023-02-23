import React from 'react';
import { useNavigate } from "react-router-dom";

function DisplayAddress(){
    const navigate = useNavigate();
    const privateKey = localStorage.getItem("privateKey");
    const address = localStorage.getItem("address");

    function handleClicked(evt){
        evt.preventDefault();
        navigate('/wallet');
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