import { Link } from "react-router-dom";
import classes from "../css/MainNavigation.module.css";
// classes in the above can be any name we want

const MainNavigation = () => {
  return (
    <>
    <div className={classes.menu}>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
    </div>

      <div className={classes.nav_contain}>
        <header className={classes.header}>
        <nav className={classes.container}>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/create-asset">Create Asset</Link>
            </li>
            <li>
              <Link to="/asset-optin">Optin Asset</Link>
            </li>
            <li>
              <Link to="/transfer-asset">Transfer Asset</Link>
            </li>
            <li>
              <Link to="/delete-asset">Delete Asset</Link>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </ul>
        </nav>
        </header>

       
      </div>
    </>
  );
};

export default MainNavigation