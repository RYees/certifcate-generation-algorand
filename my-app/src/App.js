// /*global AlgoSigner*/
import React, {useRef} from "react";
import ConnectAlgoSigner from "./components/ConnectAlgoSigner";
import logo from './img/10logo.jpg';
import pic from './img/10a.png';
//import SignPayTransaction from "./SignPayTransaction";
// import algoSignerlogo from '../../assets/images/algosigner.jpeg'
import './css/style.css';
import { AlgoSignerMain } from "./components/AlgoSigner.styles";
import CreateAsset from "./components/CreateAsset";
import AssetOptin from "./components/AssetOptin";
import TransferAsset from "./components/TransferAsset";

const App =  ()  =>{
    const userAccount = useRef()
    // const receipient = useRef()
    // const amount = useRef()


    return(
    <>
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
            <CreateAsset userAccount = {userAccount} />
            <AssetOptin className="optin" userAccount = {userAccount} />
            <TransferAsset className="optin" userAccount = {userAccount} />
        
        </AlgoSignerMain>
        </>
    )
}

export default App
