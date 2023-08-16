import { onAuthStateChanged } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import PageWelcome from "./components/PageWelcome";

function App() {

  const navigate = useNavigate();
  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is logged in
            navigate("/home");
          }
        });    
  }, [navigate])
 
  // HTML rendered here
  return (
    <div className="container-fluid">
      <PageWelcome />
    </div>
  );
}
 
export default App;

/*

        <h1>Hello World</h1>
        <p>
          This is the frontpage of your app.
        </p>
        <p>
          New here? <a href="/signup">Click here to sign up!</a> Returning users can <a href="/login">login here!</a>
        </p>

*/