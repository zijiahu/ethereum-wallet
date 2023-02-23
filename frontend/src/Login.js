import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { Wallet } from 'alchemy-sdk';
import './Login.css';

function Login(){
    const [privateKey,setPrivateKey] = useState('');
    const navigate = useNavigate();

    function handleOnClick(evt){
        evt.preventDefault();
        let wallet = new Wallet(privateKey);
        localStorage.setItem("address", wallet.address);
        localStorage.setItem("privateKey", privateKey);
        navigate("/wallet");
    }

    return(
        <div>
            <h1>Import a Wallet</h1>
            <div className="form">
                <form className="import-wallet-form">
                    <p>Enter Private Key{' '}</p>
                    <p><input type="text" onChange={(e) => setPrivateKey(e.target.value)} /></p>
                    <button type="submit" disabled={privateKey === ''} onClick={handleOnClick}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;