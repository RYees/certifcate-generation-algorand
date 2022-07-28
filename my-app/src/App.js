// /*global AlgoSigner*/
import React, {useRef} from "react";
import { Route, Routes } from 'react-router-dom';
import ConnectAlgoSigner from "./components/ConnectAlgoSigner";
import logo from './img/10logo.jpg';
import pic from './img/10a.png';
//import SignPayTransaction from "./SignPayTransaction";
// import algoSignerlogo from '../../assets/images/algosigner.jpeg'
import './css/style.css';
import { AlgoSignerMain } from "./components/AlgoSigner.styles";

import MainNavigation from "./Layout/MainNavigation";
import Login from "./components/Login";
import CreateAsset from "./components/CreateAsset";
import AssetOptin from "./components/AssetOptin";
import TransferAsset from "./components/TransferAsset";
import DeleteAsset from "./components/DeleteAsset";
import Logout from "./components/Logout";
import Transaction from "./components/Transaction";

const App =  ()  =>{
    const userAccount = useRef()
    // const receipient = useRef()
    // const amount = useRef()


    return(
    <>
    <div><MainNavigation/></div>
    <div className="header">
     <div className="first_contain">
      <div className='head'>
        <h1>10academy</h1> 
      </div>     
      <div>
        <div className=''>
            <p>10 Academy identifies, trains and enables exceptionally talented young Africans to have an outsized impact on the world.</p>
        </div>

      <div><img src={pic} alt="" height={190} width={490} /></div>
     </div>
      
      </div>
        <div className="image">
            <img src={logo} alt="" height={180} width={280} />       
      </div>
    </div>
      
        <AlgoSignerMain className="algo">
            <ConnectAlgoSigner userAccount = {userAccount}/>           
            {/* <SignPayTransaction userAccount = {userAccount} amount = {amount} receipient = {receipient} /> */}
            {/* <CreateAsset userAccount = {userAccount} />
            <AssetOptin className="optin" userAccount = {userAccount} />
            <TransferAsset className="optin" userAccount = {userAccount} />
            <DeleteAsset className="optin" userAccount = {userAccount} /> */}
            <Routes>
              <Route path='/' element={<Login userAccount = {userAccount} />} />
              <Route path='/create-asset' element={<CreateAsset userAccount = {userAccount} />} />
              <Route path='/asset-optin' element={<AssetOptin className="optin" userAccount = {userAccount} />} />
              <Route path='/transfer-asset' element={ <TransferAsset className="optin" userAccount = {userAccount} />} />
              <Route path='/delete~-asset' element={ <DeleteAsset className="optin" userAccount = {userAccount} />} />
              <Route path='/logout' element={ <Logout className="optin" userAccount = {userAccount} />} />
              <Route path='/transaction' element={<Transaction className="optin" userAccount={userAccount}/>} />
            </Routes>
        </AlgoSignerMain>
        </>
    )
}

export default App
