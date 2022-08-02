import React from 'react'
import logo from '../img/10logo.jpg';
import pic from '../img/10a.png';
import '../css/style.css';
import MainNavigation from "../Layout/MainNavigation.js";
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const istranieePage = location.pathname.match('/asset-optin');
  return (
    <>
    <div>{!istranieePage &&<MainNavigation/>}</div>
    <div className="header">
     <div className="first_contain">
      <div className='head'>
        <h1>10academy</h1> 
      </div>     
      <div>
        <div className=''>
            <p>10 Academy identifies, trains and enables exceptionally talented young Africans to have an outsized impact on the world.</p>
        </div>

      <div><img src={pic} alt="" height={190} width={490} /></div>
     </div>
      
      </div>
        <div className="image">
            <img src={logo} alt="" height={180} width={280} />       
      </div>
    </div>
    </>   
  )
}

export default Header