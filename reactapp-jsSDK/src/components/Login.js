import { useNavigate }  from 'react-router-dom';
import { useRef, useState } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import "../css/style.css";

const Login = () => {
  const [modal, setModal] = useState(false);
  const [status, setStatus] = useState('');

  const toggleModal = () => {
    setModal(!modal);
  };

  const add = useRef();
  const sk = useRef();

  const nav = useNavigate();
  function handleLogin() {    
    // nav("/create-asset");
    if(add.current.value === '2YO6QKKDJJB77S3CACUC53Y3FMPDRMWWILIZGDKB3W6TTEDCXSV75GKWYE' && sk.current.value === 'desk year radar quote topple easily sad volcano slow bench flight hollow chronic horror attract hen bread make olive tank entire right word absent area') {
      nav("/create-asset");
      add.current.value = '';
      sk.current.value = '';
    }
    else if(add.current.value !== '2YO6QKKDJJB77S3CACUC53Y3FMPDRMWWILIZGDKB3W6TTEDCXSV75GKWYE'){
      nav("/asset-optin");
    }
    else {
      setStatus('Login unsuccessful!');
      toggleModal();
      add.current.value = '';
      sk.current.value = '';
    }
  }
  return (
    <>
    <div className='log_container'>
        <div className='sub_container'>

            <div className="head_title">
                <h1 className=''>Login</h1>
            </div>
            
            <div className='fields'>
                <div className='input_f'>
                    <input type="text" className="input_t" placeholder='Enter your public address' ref={add} />
                </div>
                <div className='input_f'>
                    <input type="text" className="input_t" placeholder='Enter your mnemonic address' ref={sk}/>
                </div>
            </div>
              <div className='btn'>
                <button onClick={handleLogin} className='btns'>Login</button>
              </div>
        </div>        
    </div>

    {modal && (
        <div className="container">
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
        </div>
    )}
    </>
  )
}

export default Login