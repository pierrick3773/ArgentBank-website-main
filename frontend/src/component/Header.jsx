import argentBankLogo from "../assets/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { userName } from "./username.jsx";
import { useSelector } from 'react-redux';

export function Header() {
  const userName = useSelector(state => state.user.userName); // Récupérer le nom d'utilisateur à partir de l'état Redux
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
          <p className="userName">{userName}</p>
          <NavLink className="main-nav-item" to="/SignIn">
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
