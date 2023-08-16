import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
 
const PageHome = () => {

    // Use this code (lines 9-18) on other pages that you only want authenticated users to see
    const currentUser = auth.currentUser;
    const navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (!user) {
              // No user is logged in. Navigate them to the login page
              navigate("/login");
            }
          });    
    }, [navigate])

    const handleLogout = () => {               
        signOut(auth).then(() => {
            // Sign-out successful. Redirect to landing page
            navigate("/");
        }).catch((error) => {
            // An error happened.
        });
    }
 
    return (
        <div className="container-fluid">        
            <h1>Welcome back, {currentUser.email}</h1>
            
            <div className="cat-container vstack gap-2 col-md-5 mx-auto">
                <div className="card">
                    <img src="https://www.thesprucepets.com/thmb/IpbkgVRbcb1xVONujX_gzk4VV8s=/2121x0/filters:no_upscale():strip_icc()/GettyImages-481523341-acc726247c9e4f5abef6f4bd13559691.jpg" className="card-img-top" alt="Delivery" />
                    <div className="card-body">
                        <h5 className="card-title">Delivery</h5>
                        <p className="card-text">Our Delivery Services include Groceries, Supplies, Takeout and Medication</p>
                        <a href="/home" className="btn btn-secondary">Delivery</a> 
                    </div>
                </div>

                <div className="card">
                    <img src="https://images.theconversation.com/files/456350/original/file-20220405-6157-c2dbrq.jpeg?ixlib=rb-1.1.0&rect=20%2C287%2C2287%2C1142&q=45&auto=format&w=1356&h=668&fit=crop" className="card-img-top" alt="Nearby" />
                    <div className="card-body">
                        <h5 className="card-title">Nearby</h5>
                        <p className="card-text">You can find Nearby Bus stops, medical, shopping, and rec centers </p>
                        <a href="/home" className="btn btn-secondary">Nearby</a> 
                    </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Booking</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/home" className="btn btn-secondary">Booking</a> 
                    </div>
                </div>

                <div className="card">
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Contacts</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="/home" className="btn btn-secondary">Contacts</a> 
                    </div>
                </div>
            </div>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
 
export default PageHome