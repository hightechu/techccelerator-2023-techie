import { useState } from "react";
import { signUp } from "firebase_setup/firebase";
import { signIn } from "firebase_setup/firebase";
import { useNavigate } from 'react-router-dom';
import BackButtonWelcome from "./BackButtonWelcome";

const PageSignup = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    
      setEmail("");
      setPassword("");
      const res = await signUp(email, password);
      if (res.error) return seterror(res.error)
      const res2 = await signIn(email, password);
      if (res2.error) return seterror(res2.error)
      navigate("/Account");

  };

  return (
    <> 

      <div className="container-fluid">
        <BackButtonWelcome />
        <h2 className="text-center mb-3 f-xxl">Sign Up</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={handleSubmit}>
          <div className="vstack gap-3 col-md-5 mx-auto">
            <input
              className="form-control form-control-lg"
              type="email"
              name="email"
              value={email}
              placeholder="Your Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="password"
              name="password"
              value={password}
              placeholder="Your Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
            </div>
        </form>
        
          <p className="text-center mt-3">
            Already have an account? <a href="/login">Login!</a>
          </p>
          
      </div>

    </>
  );
};

export default PageSignup;