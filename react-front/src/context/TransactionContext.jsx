import React, { useEffect, useState } from "react";
// export const TransactionContext = React.createContext();

export const TransactionsProvider = ({ children }) => {
 
  const [currentAccount, setCurrentAccount] = useState("");

  function connect() {
    AlgoSigner.connect()
    .then((d) => {
      alert(JSON.stringify("Connected Successfully!", null, 2));
    })
    .catch((e) => {
      console.error(e);
      alert(JSON.stringify(e, null, 2));
    })
    .finally(() => {
       console.log('summer');
    });
  }
  
  function accounts() {
   
    AlgoSigner.accounts({
      ledger: 'TestNet'
    })
    .then((d) => {
      const arr = JSON.stringify(d);
      // const account = arr.find(obj => {
      //   return obj.address;
      // });
      setCurrentAccount(arr);
    })
    .catch((e) => {
      console.error(e);
     })
    .finally(() => {
    });
  }

// export const TransactionsProvider = ({children}) =>{
  return (
    <TransactionContext.Provider
    value={{
      connect      
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
}
