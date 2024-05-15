import argentBankLogo from "../assets/img/argentBankLogo.webp";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../services/reducer";

export function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(logout());
  };

  const userName = useSelector(state => state.auth.userDetails?.userName || '');
  console.log("Nom d'utilisateur récupéré dans Header :", userName);
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
          {isLoggedIn && (
            <>
              <p className="userName">{userName}</p>
              <NavLink className="main-nav-item-sign-out" to="/" onClick={signOut}>
                <i className="fa fa-user-circle"></i>
                Sign Out
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink className="main-nav-item" to="/SignIn">
              <i className="fa fa-user-circle"></i>
              Sign In
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
}




