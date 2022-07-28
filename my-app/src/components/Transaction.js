// import cert from '../img/cert.jpg';
import React, {useState, useEffect} from "react";
import '../css/style.css';
import { TOKEN, ALGOD_SERVER, PORT } from "./constants";
const algosdk = require("algosdk");

const Transaction = ({userAccount}) => {
  const [assets, setAsset] = useState('[]');
  console.log('bar', userAccount);
  // console.log('why', datas);
  console.log('now', assets);
  // const [time, setTime] = React.useState();

  // const todos = [
  //   { id: 1, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
  //   { id: 2, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
  //   { id: 3, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
  //   { id: 4, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY" , Message: "Sent to trainee J"},
  //   { id: 5, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee A" },
  //   { id: 6, From: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", To: "RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY", Message: "Sent to trainee K"},
  // ];

  // .map((item) => (   
  //   <div key={item.index} className=''>
  //       <div className='box'>        
  //           <div>
  //               <h2 className='mb-2'>Amount: 0.001Algo</h2>
  //               <p className='mb-2'>Message: {item.params}</p>
  //               <p className='mb-2'>Message: {item.params['creator']}</p>
  //               <p className='mb-2'>Message: {item.params.creator}</p>
  //               <div className='mt-4 mb-5'>
  //                   <img src={cert} alt="" height={120} width={150} />
  //               </div>
  //               <div>
  //                   <p>{time}</p>
  //               </div>
  //           </div>
  //       </div>
  //   </div>
  //   ))  
  let client =  new algosdk.Algodv2(TOKEN, ALGOD_SERVER, PORT)
  const printAssetHolding = async function (client, account) {
    let accountInfo = await client.accountInformation(account).do();
    console.log('mother', accountInfo['assets']);
    setAsset(accountInfo['assets']);
    return assets;
  }
  const father = function(){
    setAsset('any');
  }
  // componentDidMount() {
  //   // your source code to load initial data
  //   await printAssetHolding(client, userAccount.current[0].address);
  // }
//  useEffect(() => {
   //   printAssetHolding(client, userAccount.current[0].address);
   // father()
  // }); 
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date().toLocaleString());
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);


return (
    <>
     <div className='titlehead'>
        <h1 className=''>Transactions</h1>
      </div>

    <section className='section'>
       ${assets} 
    
</section>
</>
  )
}

export default Transaction