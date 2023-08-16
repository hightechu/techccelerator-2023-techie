import { useState } from "react";
import { signIn } from "firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';
import BackButtonWelcome from "./BackButtonWelcome";

// Login a user and redirect them to the user homepage
const PageLogin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    const res = await signIn(email, password);
    if (res.error) seterror(res.error);
    navigate("/Home");
  };
  return (
    <>
      <div className="container-fluid">
        <BackButtonWelcome />
        <h2 className="loginTitle">Login</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <div className="vstack gap-2 col-md-5 mx-auto">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
          </div>
        </form>
        <p className="loginTitle welcome-text">
          New? <a href="/signup">Sign up here!</a>
        </p>
        
      </div>
      
    </>
  );
};

export default PageLogin;