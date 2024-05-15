import { useDispatch} from "react-redux";
import { logCall } from "../CAllAPI/LogCall";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUserInfo } from "../CAllAPI/UserInfoCall";
import { setUserDetails } from "../services/reducer";

export function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      dispatch(logCall({ email: username, password }))
        .unwrap()
        .then((token) => {
          navigate("/Profile");
          dispatch(fetchUserInfo(token)).then((data) => {
            console.log("Données récupérées dans SignIn :", data);
            const userDetails = {
              userName: data.payload[0].userName,
              firstName: data.payload[0].firstName,
              lastName: data.payload[0].lastName,
            };
            dispatch(setUserDetails(userDetails));
            
          });
        });
    } catch (error) {
      setError(error.message);
    }
  };
  
  
  return (
    <section className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <p className="sign-in-title">Sign In</p>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
            
          </div>
          <span className="fail">Invalid Username or Password </span>
          <input className="sign-in-button" type="submit" value="Sign In"></input>
        </form>
      </section>
    </section>
  );
}
