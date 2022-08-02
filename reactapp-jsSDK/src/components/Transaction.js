/*global AlgoSigner*/
import React, {useState, useEffect, useContext} from "react";
import '../css/style.css';
import MainNavigation from "../Layout/MainNavigation.js";
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";
import {urlContext} from "./TransferAsset";
const algosdk = require("algosdk");

const Transaction = ({userAccount}) => {
    // const {fetchName} = useContext(urlContext);
    const [items, setItems] = useState([]);
    const [ds, setDs] = useState();
    let dataTrans = [];
    // console.log('hhhhh',fetchName);
    const todos = [
      { id: 1, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
      { id: 2, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
      { id: 3, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
      { id: 4, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
      { id: 5, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
      { id: 6, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
    ];
    let client =  new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)

    // Function used to print created asset for account and assetid
    const printCreatedAsset = async function (client, account) {
      let accountInfo = await client.accountInformation(account).do();
      // console.log('foo', accountInfo['created-assets']);
      // console.log('foosingle', accountInfo['created-assets'][33].params);
      let data = [];
     data.push(accountInfo['assets'][4]['asset-id']['url']);
    console.log('dfd',data);
     // return data'
      // setDs(data);
      localStorage.setItem('Na', data);
      // return datas;
      //return accountInfo['created-assets'];
      // console.log('heypo')
      // console.log('heypo', ds)
    };
    
    
    // console.log('lotpo', ds[0])
    const printAssetHolding = async function (client, account) {
      let accountInfo = await client.accountInformation(account).do();
     // console.log('mother', accountInfo['assets']);
      //setTrans(accountInfo['assets']);
      //return assets;
    }

    const getUserAccount = async () => {
      userAccount.current =  await AlgoSigner.accounts({
          ledger: 'TestNet'
        })
        setItems(userAccount.current[0]['address']);
       
    }
    

    useEffect(() => {
     // getUserAccount();
    printCreatedAsset(client, 'AJTDJM5HIBOZGCKJ3Z4JKJZS3DAPT3IDC3CX3RPCESI3LFKE4ZRAAE7KIM')
      // printAssetHolding(client, items)
    });
    // { ds?.map((item) => {  
    //   <div key={item.index} className=''>
    //       <div className=''>  
    //           <div>    
    //             <button  className=''>Details</button>
    //             <h2 className=''>Amount: 0.001Algo</h2>
    //             <p className=''>Message: {item.params}</p>
    //           </div>      
    //       </div>
    //   </div>
    // })} 

return (
    <>
    <MainNavigation/>
     <div className='titlehead'>
        <h1 className=''>Transactions</h1>
      </div>

  <section className='section'>
    {/* { ds }  */}
 
  </section>
</>
  )
}

export default Transaction