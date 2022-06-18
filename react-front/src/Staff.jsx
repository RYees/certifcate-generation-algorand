import logo from './10logo.jpg';
import pic from './10a.png';
import React, { useState } from "react";
import { MdMoney } from 'react-icons/md'; 
import { AiFillCloseCircle } from 'react-icons/ai'
import StaffUpload from './pages/StaffUpload';
import StaffTransaction from './pages/StaffTransaction';

import "./modal.css";

function Staff() {
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
      <div className="flex flex-row flex-wrap gap-52 justify-center my-24">
      <div>
      
      <div className='mr-96 mb-10 flex gap-5 flex-row-reverse'>
      <h1 className="text-3xl">
        10academy
      </h1><span><img src={logo} alt="" height={20} width={70} /></span>
      </div>
     
      <div>
      <div>
        <p>10 Academy identifies, trains and enables exceptionally talented young Africans <br></br> to have an outsized impact on the world.</p>
      </div>

      <div><img src={pic} alt="" height={30} width={490} /></div>
      <div className='mt-10'>
        <a href="" className='text-md bg-red-500 p-4 rounded-full text-white hover:filter hover:brightness-110'>Connect Wallet</a>
      </div>
      </div>
      
      </div>

      <div>
        <div className='bg-gradient-to-r from-yellow-600 via-gray-300 to-yellow-600 h-60 w-72 p-2 rounded-sm relative'>
          <div><MdMoney size="40px" /></div>
          <div className='flex flex-col justify-center text-center mt-8 text-xl'>
          <h1>Amount: 5 Algod</h1>
          <div><p>Algorand</p></div>
          </div>
          
          <div className='absolute mt-12'>
            <button className='bg-green-600 p-2 text-white rounded-full hover:filer hover:brightness-110' onClick={toggleModal}>Get Public key</button>
          </div>
          {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <p>
            RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY
            </p>
            <button className="close-modal" onClick={toggleModal}>
              <AiFillCloseCircle size='28px'/>
            </button>
          </div>
        </div>
      )}
        </div>        
      </div>
      </div>
      
      <div className='flex flex-col flex-wrap mx-20 gap-20 my-40'>
      <div>
      <StaffUpload />
      </div>

      <div>
        <StaffTransaction />
      </div>
      </div>
      </>
    )
  }
  
  export default Staff