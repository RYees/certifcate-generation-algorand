import { Link } from "react-router-dom";
import React, { useState } from "react";
import classes from "../css/MainNavigation.module.css";
// classes in the above can be any name we want

const MainNavigation = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
  return (
    <>
    <div className={classes.menu} onClick={toggleModal}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        {/* <a href="" className={classes.naving}>
            <div className={classes.one}></div>
            <div className={classes.two}></div>
            <div className={classes.three}></div>
        </a> */}
    </div>
  
    
    {modal && (
      <div className={classes.nav_contain}>
        <header className={classes.header}>
        <nav className={classes.container}>
          <ul className={classes.list}>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/">Login</Link>
            </li>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/create-asset">Create Asset</Link>
            </li>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/asset-optin">Optin Asset</Link>
            </li>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/transfer-asset">Transfer Asset</Link>
            </li>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/delete-asset">Delete Asset</Link>
            </li>
            <li className={classes.list2}>
              <Link className={classes.list3} to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
        </header>       
      </div>
    )}
    </>
  );
};

export default MainNavigation