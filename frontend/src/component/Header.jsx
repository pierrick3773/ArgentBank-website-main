import argentBankLogo from "../assets/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";

// import { User } from "../page/User.jsx";

export function Header() {
  
  return (
    <header>
      <nav className="main-nav">
        <NavLink className="main-nav-logo" to="/">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>
        <div className="userBlock">
          <p className="userName"></p>
          <NavLink className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
