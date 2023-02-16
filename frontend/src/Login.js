import React, {useState, useEffect} from 'react';
import { Wallet } from 'alchemy-sdk';

function Login(){
    const [privateKey,setPrivateKey] = useState('');

    function handleOnClick(evt){
        evt.preventDefault();
        let wallet = new Wallet(privateKey);
        localStorage.setItem("address", wallet.address);
        localStorage.setItem("privateKey", privateKey);
    }

    return(
        <form>
            <p>Enter Private Key{' '}</p>
            <p><input type="text" onChange={(e) => setPrivateKey(e.target.value)} /></p>
            <button type="submit" disabled={privateKey === ''} onClick={handleOnClick}>Submit</button>
        </form>
    );
}

export default Login;