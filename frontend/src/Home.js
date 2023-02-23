import React from 'react';
import { useNavigate } from "react-router-dom";
import './Home.css';

function Home(){
    const navigate = useNavigate();

    function handleCreateNewWallet(evt){
        evt.preventDefault();
        navigate("/create-password");
    }

    function handleImportMyWallet(evt){
        evt.preventDefault();
        navigate("/login");
    }

    return(
        <>
        <div className="home">
            <h1> Home Page</h1>
            <button className="home-button" id="create-wallet" onClick={handleCreateNewWallet}>Create a New Wallet</button>
            <button className="home-button" id="import-wallet" onClick={handleImportMyWallet}>Import My Wallet</button>
        </div>
        </>
    );
}

export default Home;