import React from 'react';
import { useNavigate } from "react-router-dom";
import CreateNewWallet from './CreateNewWallet';

function Home(){
    const navigate = useNavigate();

    function handleOnClick(evt){
        evt.preventDefault();
        navigate("/login");
    }

    return(
        <>
        <div className="home">
            <h1> Home Page</h1>
            <CreateNewWallet></CreateNewWallet>
            <button onClick={handleOnClick}>Import My Wallet</button>
        </div>
        </>
    );
}

export default Home;