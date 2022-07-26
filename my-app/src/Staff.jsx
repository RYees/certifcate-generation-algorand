/*global AlgoSigner*/
import React, {useRef} from "react";
import ConnectAlgoSigner from "./ConnectAlgoSigner";
// import SignPayTransaction from "./SignPayTransaction";
// import algoSignerlogo from '../../assets/images/algosigner.jpeg'
import { AlgoSignerMain } from "./AlgoSIgner.styles";
import CreateAsset from "./CreateAsset";
import AssetOptin from "./AssetOptin"

const Staff =  ()  =>{
    const userAccount = useRef()
    const receipient = useRef()
    const amount = useRef()


    return(
      
        <AlgoSignerMain>
            <ConnectAlgoSigner userAccount = {userAccount}/>           
            {/* <SignPayTransaction userAccount = {userAccount} amount = {amount} receipient = {receipient} /> */}
            <CreateAsset userAccount = {userAccount} />
            <AssetOptin userAccount = {userAccount} />
        </AlgoSignerMain>
    )
}

export default Staff