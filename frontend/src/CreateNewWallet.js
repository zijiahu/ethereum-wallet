import React from 'react';
import { useNavigate } from "react-router-dom";

function CreateNewWallet(){
    const navigate = new useNavigate();
    function handleCreate(){
        navigate('/create-password');
    }

    return(
        <button type="submit" onClick={handleCreate}>Create a New Wallet</button>
    );
}

export default CreateNewWallet;