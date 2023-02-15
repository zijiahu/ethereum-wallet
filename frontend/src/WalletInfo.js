import React, {useState, useEffect} from 'react';
import { Network, Alchemy, Wallet } from 'alchemy-sdk';
import { useNavigate } from "react-router-dom";
import Token from './Token';
import './WalletInfo.css';

function WalletInfo(){
    const [tokens, setTokens] = useState([]);
    console.log(process.env);
    const API_KEY = process.env.REACT_APP_API_KEY;
    const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
    const address = process.env.REACT_APP_PRIVATE_KEY;
    const navigate = useNavigate();

    const settings = {
        apiKey: API_KEY,
        network: Network.ETH_GOERLI,
    };

    const alchemy = new Alchemy(settings);
    let wallet = new Wallet(PRIVATE_KEY);

    async function getTokens(){
        let allTokens = await alchemy.core.getTokensForOwner(wallet.address);
        console.log("allTokens: ", allTokens);
        setTokens(allTokens.tokens);
    }

    useEffect(() => {
        getTokens();
    }, []);


    function hanldeSendTransaction(evt){
        evt.preventDefault();
        console.log("hanldeSendTransaction clicked");
        
        console.log(alchemy, wallet);
        navigate('/send-transaction', {state: {alchemy: alchemy, address: address}});
    }

    return(
        <div>
            <h1>Wallet Info:</h1>
            <button onClick={hanldeSendTransaction}>Send Transaction</button>
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