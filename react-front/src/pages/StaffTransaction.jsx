import logo from '../10logo.jpg';
// import * as React from 'react';
import data from './StaffData';
import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai'
import '../modal.css'

const StaffTransaction = () => {
  const [time, setTime] = React.useState();
    
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);


  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

    
  return (
    <>
     <div className='mt-20'>
        <h1 className='text-center text-4xl text-white mb-10'>Transactions</h1>
      </div>

   
    <div className='bg-red-900 w-80 rounded-lg relative mb-20'>
        <div className='bg-red-500 ml-5 px-8 py-4 rounded'>           
          
                <div>
                    {/* <h2 className='no mb-2'>From: RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2>
                    <h2 className='mb-2'>To: RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2> */}
                    <button className='bg-white p-3 rounded-full mb-10' onClick={toggleModal}>Details</button>
                    <h2 className='mb-2'>Amount: 0.001Algo</h2>
                    <p className='mb-2'>Message: Sent to trainee J</p>
                    <div className='mt-4 mb-5'>
                        <img src={logo} alt="" height={20} width={190} />
                    </div>
                    <div>
                        <p>{time}</p>
                    </div>

                    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
          <h2 className='mb-2'>From:  RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2>
          <br />
          <h2 className='mb-2'>To:  RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY</h2>
            <button className="close-modal" onClick={toggleModal}>
              <AiFillCloseCircle size='28px'/>
            </button>
          </div>
        </div>
      )}
      </div>
            
        </div>
    </div>
    </>
  )
}

export default StaffTransaction