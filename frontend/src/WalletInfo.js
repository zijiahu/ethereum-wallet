import React, {useState, useEffect} from 'react';
import { Network, Alchemy, Wallet } from 'alchemy-sdk';
import { useNavigate } from "react-router-dom";
import Token from './Token';
import './WalletInfo.css';

function WalletInfo(){
    const [tokens, setTokens] = useState([]);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const PRIVATE_KEY = localStorage.getItem("privateKey");
    const PUBLIC_ADDRESS = localStorage.getItem("address");

    const navigate = useNavigate();

    const settings = {
        apiKey: API_KEY,
        network: Network.ETH_GOERLI,
    };

    const alchemy = new Alchemy(settings);
    let wallet = new Wallet(PRIVATE_KEY);

    async function getTokens(){
        let allTokens = await alchemy.core.getTokensForOwner(wallet.address);
        setTokens(allTokens.tokens);
    }

    useEffect(() => {
        getTokens();
    }, []);


    function hanldeSendTransaction(evt){
        evt.preventDefault();
        console.log("hanldeSendTransaction clicked");
        navigate('/send-transaction');
    }

    return(
        <div>
            <h1>Wallet Information:</h1>
            <h2>Your public address:</h2>
            <p>{PUBLIC_ADDRESS}</p>
            <p></p>
            <button onClick={hanldeSendTransaction}>Send Transaction</button>
            <h2>Your balances:</h2>
            <div className='token-balance'>
                {tokens.map(token => {
                    return (
                        <section key={token.name}>
                            <Token name={token.name}
                            symbol={token.symbol}
                            rawBalance={token.rawBalance}> </Token>
                        </section>
                    )
                })}
            </div>
        </div>
    );
}

export default WalletInfo;