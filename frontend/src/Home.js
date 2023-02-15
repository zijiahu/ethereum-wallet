import React from 'react';
import './Home.css';
import CreateNewWallet from './CreateNewWallet';

function Home(){
    return(
        <>
        <div className="home">
            <h1> Home Page</h1>
            <CreateNewWallet></CreateNewWallet>
        </div>
        </>
    );
}

export default Home;