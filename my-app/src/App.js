// /*global AlgoSigner*/
import React, {useRef} from "react";
import { Route, Routes } from 'react-router-dom';
import ConnectAlgoSigner from "./components/ConnectAlgoSigner";
//import SignPayTransaction from "./SignPayTransaction";
//import algoSignerlogo from '../../assets/images/algosigner.jpeg'
import { AlgoSignerMain } from "./components/AlgoSigner.styles";
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
      <AlgoSignerMain className="algo">
            <ConnectAlgoSigner userAccount = {userAccount}/>           
            {/* <SignPayTransaction userAccount = {userAccount} amount = {amount} receipient = {receipient} /> */}
            <Routes>
              <Route path='/' element={<Login userAccount = {userAccount} />} />
              <Route path='/create-asset' element={<CreateAsset userAccount = {userAccount} />} />
              <Route path='/asset-optin' element={<AssetOptin className="optin" userAccount = {userAccount} />} />
              <Route path='/transfer-asset' element={ <TransferAsset className="optin" userAccount = {userAccount} />} />
              <Route path='/delete-asset' element={ <DeleteAsset className="optin" userAccount = {userAccount} />} />
              <Route path='/logout' element={ <Logout className="optin" userAccount = {userAccount} />} />
              <Route path='/transaction' element={<Transaction className="optin" userAccount={userAccount}/>} />
            </Routes>
        </AlgoSignerMain>
        </>
    )
}

export default App
