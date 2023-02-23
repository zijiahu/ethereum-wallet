import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from "react-router-dom";
import './CreatePassword.css';
import Web3 from 'web3';

function CreatePassword(){
    const [password, setPassword] = useState();
    const [passwordConfirm,setPasswordConfirm] = useState();
    const [error,setError] = useState('');
    const [disabled,setDisabled] = useState(true);

    const navigate = useNavigate();

    function createAddress(){
        const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

        let account = web3.eth.accounts.create();
        console.log("account: ", account);
        let wallet = web3.eth.accounts.wallet.add(account);
        console.log("wallet: ", wallet);
        let keystore = wallet.encrypt(password);
        console.log("keystore: ", keystore);

        return {account: account, wallet: wallet, keystore: keystore};
    }

    function handleCreatePassword(evt){
        evt.preventDefault();
        console.log("submit clicked");

        let result = createAddress();
        console.log(result);
        localStorage.setItem("address", result.account.address);
        localStorage.setItem("privateKey", result.account.privateKey);
        console.log("localStorage: ", localStorage);

        navigate('/display-address', {state: {address: result.account.address, privateKey: result.account.privateKey}});
    }

    useEffect(() => {
        if(passwordConfirm !== '' && passwordConfirm !== password){
            setError('Passwords Do Not Match');
        }else{
            setError('');
        }
    },[password, passwordConfirm]);

    useEffect(() => {
        if(password !== '' && passwordConfirm !== '' && password === passwordConfirm){
            setDisabled(false);
        }
        else{
            setDisabled(true);
        }
    },[password, passwordConfirm]);

    return(
        <React.Fragment>
            <h1>Create Password</h1>
            <div className="create-password">
                <br />
                <div className="form" onSubmit={handleCreatePassword}>
                    <form className="create-password-form">
                        <p>Enter Password{' '}</p>
                        <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        <p>Confirm Your Password{' '}</p>
                        <p><input type="password" name="passwordconfirm" placeholder="Confirm Password" onChange={(e) => setPasswordConfirm(e.target.value)} /></p>
                        <p style={{color: 'red'}}>{error}</p>
                        <button type="submit" disabled={disabled} onClick={handleCreatePassword}>Submit</button>
                        <p className="message">Already have a Wallet? <Link to="/login">Import</Link></p>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CreatePassword;