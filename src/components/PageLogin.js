import { useState } from "react";
import { signIn } from "firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';

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
              {error ? <div>{error}</div> : null}
              <form onSubmit={handleSubmit}>
                <div className="vstack gap-2 col-md-5 mx-auto">
                <h1 className="loginTitle">Login</h1>
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
                    <input type="submit" value="submit" />
                </div>
              </form>
              <br>
              </br>
              <p className="loginTitle">
                New? <a href="/signup">Sign up here!</a>
              </p>
        
      </div>
      
    </>
  );
};

export default PageLogin;