/*global AlgoSigner*/

import React, {useState} from "react";
import { Button } from "../css/Button.styles";
import { AiFillCloseCircle } from 'react-icons/ai';
import "../css/modal.css";

const ConnectAlgoSigner = ({userAccount}) => {
  const [modal, setModal] = useState(false);
  const [state, setState] = useState('');


  const toggleModal = () => {
    setModal(!modal);
  };

  const getUserAccount = async () => {
    userAccount.current =  await AlgoSigner.accounts({
         ledger: 'TestNet'
       })
    // setItems(userAccount.current[0]['address'])
    // console.log('darkk',userAccount.current[0]['address'])
    // console.log(userAccount.current)  
    // localStorage.setItem('items', JSON.stringify(items));
  }
  

  const connectAlgoSigner = async () =>{
    try {
        //let resp = await AlgoSigner.connect();
          await AlgoSigner.connect()
          // console.log(resp)
          setState('Connected Successfully!');
          toggleModal();
          getUserAccount()
    } catch(err){
      console.log(err);
      setState('Please, first connect with your Algosigner account');
      toggleModal();
    }
  }
  return(
    <>
        <div>
          <Button backgroundColor='blue' onClick={connectAlgoSigner}>
          Connect AlgoSigner
          </Button>
        </div>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-gray-900 text-center">
              {state}
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

export default ConnectAlgoSigner