/*global AlgoSigner*/
import React, { useRef, useState } from "react";
import { FormStyle } from "../css/Form.style";
import { TransactionButton } from "../css/Button.styles";
import { BodyText } from "../css/MyAlgoWallet.styles";
import { AiFillCloseCircle } from 'react-icons/ai';
import Header from './Header';
import "../css/modal.css";
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";

//export const urlContext = React.createContext();


const algosdk = require("algosdk");


const TransferAsset = ({userAccount}) => {
    let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');
    const [isLoading, setLoading] = useState(false);

    const receiver = useRef()
    const assetIndex = useRef()
    const note = useRef()
    let newData = 'hello';
    const [fetchName, setfetchName] = useState();
    

    const toggleModal = () => {
        setModal(!modal);
    };


    // Function used to print created asset for account and assetid
    const printCreatedAsset = async function (client, account, assetid) {
       //client, account, assetid);
        let accountInfo = await client.accountInformation(account).do();
       console.log('mark',accountInfo['created-assets'][3]);
       let index = accountInfo['created-assets'].length - 1;
       newData = accountInfo['created-assets'][index];
       console.log('new', newData);
       console.log('new', newData.params['name']);
       setfetchName(newData.params['url']);
       console.log('name', fetchName);
        // for (let idx = 0; idx < accountInfo['created-assets'].length; idx++) {
        //     let scrutinizedAsset = accountInfo['created-assets'][idx];
        //     if (scrutinizedAsset['index'] === assetid) {
        //         console.log("AssetID = " + scrutinizedAsset['index']);
        //         let myparms = JSON.stringify(scrutinizedAsset['params'], undefined, 2);
        //         console.log("parms transfer asset = " + myparms);
        //         // break;
        //     }
        }

    //printCreatedAsset(client,userAccount.current[0].address, assetIndex.current);

    const transferAnAsset = async () =>{
      //  console.log('weird');
        setLoading(true)
        let client =   new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
        
        //Query Algod to get testnet suggested params
        let txParamsJS = await client.getTransactionParams().do()
       try{
           const txn = await new algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
               from: userAccount.current[0].address,
               to: receiver.current,
               assetIndex: +assetIndex.current,
               note: AlgoSigner.encoding.stringToByteArray(note.current),
               amount: 0,
               suggestedParams: {...txParamsJS}
             });
             
             // Use the AlgoSigner encoding library to make the transactions base64
             const txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
             
           const signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}]) 
            // console.log(signedTxs)
   
            // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
   
            // Send the transaction through the SDK client
           let id = await client.sendRawTransaction(binarySignedTx).do();
            // console.log('fr',id)
            if(id['txId'] !== null){                 
                printCreatedAsset(client,userAccount.current[0].address, assetIndex.current);

            }
           
       }catch(err){
           console.log(err);
           setStatus('Asset transfer not successful');
           toggleModal();
           setLoading(false)
       }

                       // console.log('hipps');
                    //    try{
                    //     const txn = await new algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                    //         from: userAccount.current[0].address,
                    //         to: userAccount.current[1].address,
                    //         amount : 0,
                    //         note: fetchName,
                    //         suggestedParams: {...txParamsJS}
                    //     });
                        
                    //     // Use the AlgoSigner encoding library to make the transactions base64
                    //     let txn_b64 = AlgoSigner.encoding.msgpackToBase64(txn.toByte());
                        
                    //     let signedTxs = await AlgoSigner.signTxn([{txn: txn_b64}])
            
                    //     // Get the base64 encoded signed transaction and convert it to binary
                    //     let binarySignedTx = AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
            
                    //     // Send the transaction through the SDK client
                    //     await client.sendRawTransaction(binarySignedTx).do();
                    //     //let res = await client.sendRawTransaction(binarySignedTx).do();
                    //         // console.log('success',res)
                    //         console.log('namehha', {fetchName});
                    //         setStatus('reciever url sent successfully!');
                    //         toggleModal();
                    //         setLoading(false)
                    //     }catch(err){
                    //         console.log('error', err);
                    //         setStatus('receiver url not sent successfully');
                    //         toggleModal();
                    //         setLoading(false)
                    //     }  
                
   }

   

    return(
        <>
        <Header/>
            <div className="create">
                <BodyText className="title">Transfer Asset Certficate</BodyText>
                <div>
                    <FormStyle onChange = {(e) => receiver.current = e.target.value} placeholder="Receiver address" /><br/>
                    <FormStyle onChange = {(e) => assetIndex.current = e.target.value} placeholder="Asset index" /><br/>
                    <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Note" /><br/>
                    <TransactionButton backgroundColor onClick ={transferAnAsset}>{isLoading ? "loading...": "Send Request"}</TransactionButton>
                </div>
            </div>
       
          <div>worked: {fetchName}</div>
            {modal && (
                <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                    <h2 className="text-gray-900 text-center">
                    {status}
                    </h2>
                    <button className="close-modal" onClick={toggleModal}>
                    <AiFillCloseCircle size='28px'className="text-gray-900"/>
                    </button>
                </div>
                </div>
            )}
    </>
    )
}

export default TransferAsset