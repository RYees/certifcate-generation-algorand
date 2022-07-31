/*global AlgoSigner*/
import React, {useRef, useState} from "react";
import { FormStyle } from "../css/Form.style";
import { TransactionButton } from "../css/Button.styles";
import { BodyText } from "../css/MyAlgoWallet.styles";
import '../css/style.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import "../css/modal.css";
import Header from './Header';

// import Transaction from "./Transaction";
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";

const algosdk = require("algosdk");

const CreateAsset = ({userAccount}) => {
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');
    const [isLoading, setLoading] = useState(false);

    const assetURL = useRef()
    const assetName = useRef()
    const unitName = useRef()
    const totalUnit = useRef()
    const note = useRef()
    const decimals = useRef()
    const traineeadd = useRef()
    
    
    const toggleModal = () => {
      setModal(!modal);
    };
 
    const createAsset = async () =>{
        // await AlgoSigner.connect();
        setLoading(true);
        let client =  new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
                
        //Query Algod to get testnet suggested params
        let txParamsJS = await client.getTransactionParams().do()

        try{
        
            const txn = await new algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
                from: userAccount.current[0].address,
                assetName: assetName.current,
                unitName: unitName.current,
                total: +totalUnit.current,
                decimals: +decimals.current,
                assetURL : assetURL.current,
                manager: userAccount.current[0].address,
                reserve: userAccount.current[0].address,   
                freeze: userAccount.current[0].address,
                clawback: userAccount.current[0].address,
                note: AlgoSigner.encoding.stringToByteArray(note.current),
                suggestedParams: {...txParamsJS}
              });
            
            const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());
            console.log('id1', txn_b64)
             let signedTxs  = await AlgoSigner.signTxn([{txn: txn_b64}])
              console.log('id2', signedTxs)

              // Get the base64 encoded signed transaction and convert it to binary
            let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(signedTxs[0].blob);
            console.log('id3', binarySignedTx)
             // Send the transaction through the SDK client
            let id = await client.sendRawTransaction(binarySignedTx).do();
                console.log('id4', id)
                // setLoading(false)
            let assetID = null;
            const ptx = await algosdk.waitForConfirmation(client, id.txId, 4);
            assetID = ptx["asset-index"];  
            // console.log("AssetID = " + assetID);
            // console.log('guysss',traineeadd.current);
            const enc = new TextEncoder();
            const notes = enc.encode(`${assetID}`);
            
            try{
                const txn = await new algosdk.makePaymentTxnWithSuggestedParamsFromObject({
                    from:  userAccount.current[0].address,
                    to: traineeadd.current,
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
                let id = await client.sendRawTransaction(binarySignedTx).do();
                    console.log('success', id)
                    setStatus('Transaction sent successfully!');
                    toggleModal();
                    setLoading(false)
                    // if(id['txId'] !== null){
                    //     await printCreatedAsset(client, userAccount.current[0].address, assetID);
                    //     await printAssetHolding(client, userAccount.current[0].address, assetID);
                    // }
            }catch(err){
                console.log('error', err)
                setStatus('Asset Id not send successfully');
                toggleModal();
                setLoading(false)
            }  
        }catch(err){
            console.log('error first',err)
            setStatus('Asset creation failed, check if your Algosigner account is connected');
            toggleModal();
            setLoading(false)
        }
    }

  
    return(
    <>
    <Header/>
    <div className="create">
     <BodyText className="title">Create Asset for Trainee Certfication</BodyText>
        <div>
            <FormStyle onChange = {(e) => assetName.current = e.target.value} placeholder="Asset name" /><br/>
            <FormStyle onChange = {(e) => unitName.current = e.target.value} placeholder="Unit name" /><br/>
            <FormStyle onChange = {(e) => totalUnit.current = e.target.value} placeholder="Total units" /><br/>
            <FormStyle onChange = {(e) => decimals.current = e.target.value} placeholder="Decimals" /><br/>
            <FormStyle onChange = {(e) => assetURL.current = e.target.value} placeholder="Enter certificate url" /><br/>
            <FormStyle onChange = {(e) => note.current = e.target.value} placeholder="Enter note" /><br/>
            <FormStyle onChange = {(e) => traineeadd.current = e.target.value} placeholder="Enter traniee address" /><br/>
            <TransactionButton backgroundColor onClick ={createAsset}>{isLoading ? "loading...": "Create Asset"}</TransactionButton>
        </div>

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

    </div>
    {/* <Transaction/> */}
    </>
    )
}

export default CreateAsset