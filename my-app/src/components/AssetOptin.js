/*global AlgoSigner*/
import React, { useRef, useState } from "react";
import { FormStyle } from "../css/Form.style";
import { TransactionButton } from "../css/Button.styles";
import { BodyText } from "../css/MyAlgoWallet.styles";
import { AiFillCloseCircle } from 'react-icons/ai';
import Header from "./Header";
import "../css/modal.css";
import "../css/style.css";
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";


const algosdk = require("algosdk");

const AssetOptin = ({userAccount}) => {
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');
    const [isLoading, setLoading] = useState(false);
    const [isOptin, setOptin] = useState(true);
    // let d = 'QmXbsyLZmwHtUTESz94wN7qFpuJFogG8o6nobX25Zbp97v';
    // const link = 'https://ipfs.io/ipfs/' + d;

    let inst = 'https://ipfs.io/ipfs/CID HASH KEY';

    const optsender = useRef()
    const assetIndex = useRef()
    const notes = useRef()
    
    const toggleModal = () => {
        setModal(!modal);
    };
    const changeOptin = () => {
        setOptin(!isOptin);
    };

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
            //    console.log('wow',id['txId']);
            // setStatus('Asset opt-in sent successfully!');
               if(id['txId'] !== null){
                    const enc = new TextEncoder();
                    const notes = enc.encode('An asset opt-in is requested by a 10academy traniee, approve request');
                    
                    try{
                        const txn = await new algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                            from: optsender.current,
                            to: userAccount.current[0].address,
                            amount : 0,
                            note: notes,
                            suggestedParams: {...txParamsJS}
                        });
                        
                        // Use the AlgoSigner encoding library to make the transactions base64
                        let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
                        
                        let signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}])
            
                        // Get the base64 encoded signed transaction and convert it to binary
                        let binarySignedTx = AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
            
                        // Send the transaction through the SDK client
                        await client.sendRawTransaction(binarySignedTx).do();
                        //let res = await client.sendRawTransaction(binarySignedTx).do();
                            // console.log('success',res)
                            setStatus('Asset opt-in sent successfully!');
                            toggleModal();
                            changeOptin();
                            setLoading(false)
                        }catch(err){
                            console.log('error', err);
                            setStatus('Asset opt-in not sent successfully');
                            toggleModal();
                            setLoading(false)
                        }  
              }
            setLoading(false)
       }catch(err){
           console.log(err);
           setStatus('Asset opt-in not sent successfully');
           toggleModal();
           setLoading(false)
       }
   }

    return(
        <>
        <Header/>
        {isOptin ?
            <div className="create">
                <BodyText className="title">Request Certficate</BodyText>
                <div>
                    <FormStyle onChange = {(e) => optsender.current = e.target.value} placeholder="Requester address" /><br/>
                    <FormStyle onChange = {(e) => assetIndex.current = e.target.value} placeholder="Asset index" /><br/>
                    <FormStyle onChange = {(e) => notes.current = e.target.value} placeholder="Note" /><br/>
                    <TransactionButton backgroundColor onClick ={optInToAnAsset}>{isLoading ? "loading...": "Send Request"}</TransactionButton>
                </div>
            </div>

             
            :
                <div className="data-optin">
                   <div className="optin-content">
                    <h2 className="">
                        Asset Request Sented!
                    </h2>
                    <div>
                        <p><strong> Congratulations!!!</strong> Follow the below format to see your certification once it is approved
                    </p>
                        {/* <a target="_blank"  rel="noreferrer" href={link} className="linkstyle">View 10academy Certficate</a> */}
                        <p>{inst}</p>
                    </div>
                   </div>
                </div>
            }
            
            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2 className="">
                    {status}
                    </h2>
                    <button className="close-modal" onClick={toggleModal}>
                    <AiFillCloseCircle size='10px' className=""/>
                    </button>
                </div>
                </div>
            )}
      </>

    )
}

export default AssetOptin