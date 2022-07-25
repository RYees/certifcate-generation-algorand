import logo from './10logo.jpg';
import pic from './10a.png';
import React, { useState, useRef, useEffect } from "react";
import { MdMoney } from 'react-icons/md'; 
import { AiFillCloseCircle } from 'react-icons/ai'
import StaffUpload from './pages/StaffUpload';
import Transaction from './pages/Transaction';
import axios from "axios";

// import Aos from 'aos';
// import "aos/dist/aos.css"

import "./modal.css";

// function connect() {
//   AlgoSigner.connect()
//   .then((d) => {
//     alert(JSON.stringify("Connected Successfully!", null, 2));
//   })
//   .catch((e) => {
//     console.error(e);
//     alert(JSON.stringify(e, null, 2));
//   })
//   .finally(() => {
//     hljs.highlightBlock(connectCodeElem);
//     console.log('summer');
//   });
// }

function Staff() {
  const [initialData, setInitialData] = useState([{}]);

  // function getData() {
  //   axios({
  //     method: "GET",
  //     url:"http://localhost:5000/api",
  //   })
  //   .then((response) => {
  //     const res =response.data
  //     console.log(res);
  //     // setProfileData(({
  //     //   profile_name: res.name,
  //     //   about_me: res.about}))
  //   }).catch((error) => {
  //     if (error.response) {
  //       console.log(error.response)
  //       console.log(error.response.status)
  //       console.log(error.response.headers)
  //       }
  //   })}
  // const userAccount = useRef();
const connectAlgoSigner = async () =>{
     await AlgoSigner.connect();
    // console.log(resp)
    // getUserAccount();
  }

  const getUserAccount = async () =>{
     let userAccount =  await AlgoSigner.accounts({
          ledger: 'TestNet'
        })
  // console.log(userAccount.current[0]['address'])
  let data = JSON.stringify(userAccount);
  alert(JSON.stringify(userAccount))

  }

    const home = useRef(null);
    const form = useRef(null);
    const transaction = useRef(null);
    

    const scrollToSection = (elementRef) => {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: 'smooth'
      })
    }

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
      <nav className='fixed top-0 right-0 z-10'>
            <ul className='flex justify-end my-4'>
                <li onClick={()=> scrollToSection(home)}  className="text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2">
                   Home
                </li>
                <li onClick={()=> scrollToSection(form)} className='text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2'>
                   Form
                </li>
                <li onClick={()=> scrollToSection(transaction)} className='text-white ml-8 hover:bg-red-500 hover:filter hover:brightness-110 hover:transition hover:ease-in-out cursor-pointer rounded px-5 py-2'>
                    Transaction
                </li>
            </ul>
        </nav>
       
      <div ref={home} className="flex flex-row flex-wrap gap-52 justify-center mt-32 text-white">
      <div>
      
      <div className='mr-96 mb-10 flex gap-5 flex-row-reverse'>
      <h1 className="text-3xl">
       <button>10academy</button> 
      </h1><span><img src={logo} alt="" height={20} width={70} /></span>
      </div>
     
      <div>
      <div className='mb-10'>
        <p>10 Academy identifies, trains and enables exceptionally talented young Africans <br></br> to have an outsized impact on the world.</p>
      </div>

      <div><img src={pic} alt="" height={30} width={490} /></div>
      <div className='mt-10'>
        <a href="" onClick={connectAlgoSigner} className='text-md bg-red-600 p-4 rounded-full text-white hover:filter hover:brightness-110'>Connect Wallet</a>
      </div>
      </div>
      
      </div>

      <div className="mt-14">
        <div className='bg-gradient-to-r from-red-600 via-blue-900 to-red-600 h-60 w-72 p-2 rounded-sm relative'>
          <div><MdMoney size="40px" /></div>
          <div className='flex flex-col justify-center text-center mt-8 text-xl'>
          <h1>Amount: 5 Algod</h1>
          <div><p>userAccount</p></div>
          </div>
          
          <div className='absolute mt-12'>
            <button className='bg-gradient-to-l from-blue-600 via-gray-900 to-blue-600 p-2 text-white rounded-full hover:filer hover:brightness-110' onClick={getUserAccount}>Get Public key</button>
          </div>
          {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-gray-900 text-center">
            RBAWCKKRQQSP5HVTSSSZSMWZZFKREGYMXIJ6PDERWGVTCSZCHAJZB76JKY
            </h2>
            <button className="close-modal" onClick={toggleModal}>
              <AiFillCloseCircle size='28px'className="text-gray-900"/>
            </button>
          </div>
        </div>
      )}
        </div>        
      </div>
      </div>
      
      <div className='flex flex-col flex-wrap mx-20 gap-20'>
      <div ref={form}>
      <StaffUpload />
      </div>

      <div ref={transaction}>
        <Transaction />
      </div>
      </div>
      </>
    )
  }
  
  export default Staff