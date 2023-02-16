import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import CreateNewWallet from './CreateNewWallet';
import CreatePassword from './CreatePassword';
import DisplayAddress from './DisplayAddress';
import WalletInfo from './WalletInfo';
import SendTransaction from './SendTransaction';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/create-new-wallet' element={<CreateNewWallet/>} />
            <Route path='/create-password' element={<CreatePassword/>} />
            <Route path='/display-address' element={<DisplayAddress/>} />
            <Route path='/wallet' element={<WalletInfo/>} />
            <Route path='/send-transaction' element={<SendTransaction/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
