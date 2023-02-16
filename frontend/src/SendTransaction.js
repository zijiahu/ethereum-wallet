import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Alchemy, Utils, Wallet } from 'alchemy-sdk';

function SendTransaction(){

    const [token, setToken] = useState('');
    const [amount, setAmount] = useState();
    const [receivingAddress, setReceivingAddress] = useState();
    const [gasLimit, setGasLimit] = useState();
    const [maxFeePerGas, setMaxFeePerGas] = useState();
    const [disabled, setDisabled] = useState(true);
    const [error, setError] = useState('');

    const location = useLocation();

    const alchemy = new Alchemy(location.state.settings);
    const wallet = new Wallet(localStorage.getItem("privateKey"));
    const allTokens = location.state.allTokens;

    async function send(evt) {
        evt.preventDefault();

        const nonce = await alchemy.core.getTransactionCount(
          wallet.address,
          "latest"
        );
        
        let transaction = {
          to: receivingAddress,
          value: Utils.parseEther(amount),
          gasLimit: gasLimit,
          maxPriorityFeePerGas: Utils.parseUnits("5", "gwei"),
          maxFeePerGas: Utils.parseUnits(maxFeePerGas, "gwei"),
          nonce: nonce,
          type: 2,
          chainId: 5,
        };
      
        let rawTransaction = await wallet.signTransaction(transaction);
        let tx = await alchemy.core.sendTransaction(rawTransaction)
        .catch((err) => {
            console.error(err);
            setError("Error occurred when sending transaction.")
        });
        console.log("Sent transaction", tx);
      }
    
    useEffect(()=>{
        if(amount !== null && amount !== 0){
            setDisabled(false);
        }
    });
      
    return(
        <div>
            <h1>Send Transaction</h1>
            <div className="send-transaction">
                <br />
                <div className="form" onSubmit={send}>
                    <form className="send-transaction">
                        <p>Choose Token</p>
                        <select onChange={(e) => setToken(e.target.value)}>
                            {allTokens.map(t => {
                                return (
                                    <option key={t.name}>{t.name}</option>
                                )
                            })}
                        </select>
                        <p>Enter Receiving Account Address{' '}</p>
                        <p><input type="text" name="recv-address" placeholder="Address" onChange={(e) => setReceivingAddress(e.target.value)} /></p>
                        <p>Enter Amount{' '}</p>
                        <p><input type="text" name="amount" placeholder="Amount" onChange={(e) => setAmount(e.target.value)} /></p>
                        <p>Enter Gas Limit{' '}</p>
                        <p><input type="text" name="gas-limit" placeholder="" onChange={(e) => setGasLimit(e.target.value)} /></p>
                        <p>Enter Max Fee Per Gas{' '}</p>
                        <p className="note" style={{color: 'grey'}}>This is the total amount you are willing to pay per gas for the transaction to execute (Specify in wei, 10^18 wei = 1 ETH)</p>
                        <p><input type="text" name="max-fee-per-gas" placeholder="" onChange={(e) => setMaxFeePerGas(e.target.value)} /></p>
                        <p style={{color: 'red'}}>{error}</p>
                        <button type="submit" disabled={disabled} onClick={send}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SendTransaction;