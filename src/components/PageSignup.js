import { useState } from "react";
import { signUp } from "firebase_setup/firebase";
import BackButtonWelcome from "./BackButtonWelcome";

const PageSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      setEmail("");
      setPassword("");
      const res = await signUp(email, password);
      if (res.error) seterror(res.error)

  };

  return (
    <> 

      <div className="container-fluid">
        <BackButtonWelcome />
        <h2 className="signupTitle">Sign Up</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <div className="vstack gap-2 col-md-5 mx-auto">
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Sign Up</button>
            </div>
        </form>
        
          <p className="signupTitle">
            Already have an account? <a href="/login">Login</a>
          </p>
          
      </div>

    </>
  );
};

export default PageSignup;