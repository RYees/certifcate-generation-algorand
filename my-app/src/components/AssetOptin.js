/*global AlgoSigner*/
import React, { useRef, useState } from "react";
import { FormStyle } from "../css/Form.style";
import { TransactionButton } from "../css/Button.styles";
import { BodyText } from "../css/MyAlgoWallet.styles";
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";


const algosdk = require("algosdk");

const AssetOptin = ({userAccount}) => {
    const optsender = useRef()
    const assetIndex = useRef()
    const notes = useRef()
    const [isLoading, setLoading] = useState(false)


    const optInToAnAsset = async () =>{
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
               
        //Query Algod to get testnet suggested params
        let txParamsJS = await client.getTransactionParams().do();
       try{
           const txn = await new algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
               from: optsender.current,
               to: optsender.current,
               assetIndex: +assetIndex.current,
               note: AlgoSigner.encoding.stringToByteArray(notes.current),
               amount: 0,
               suggestedParams: {...txParamsJS}
             });
  
             const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
             
           const signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}]) 
            console.log(signedTxs)
   
            // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
   
            // Send the transaction through the SDK client
           let id = await client.sendRawTransaction(binarySignedTx).do();
               console.log(id);
               console.log("Account 3 optin asset = " + optsender);
               setLoading(false)
       }catch(err){
           console.log(err)
           setLoading(false)
       }
   }

    return(
    <div className="create">
        <BodyText className="title">Request Certficate</BodyText>
        <div>
            <FormStyle onChange = {(e) => optsender.current = e.target.value} placeholder="Requester address" /><br/>
            <FormStyle onChange = {(e) => assetIndex.current = e.target.value} placeholder="Asset index" /><br/>
            <FormStyle onChange = {(e) => notes.current = e.target.value} placeholder="Note" /><br/>
            <TransactionButton backgroundColor onClick ={optInToAnAsset}>{isLoading ? "loading...": "Send Request"}</TransactionButton>
        </div>
    </div>
    )
}

export default AssetOptin