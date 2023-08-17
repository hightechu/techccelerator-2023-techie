import React, { useEffect } from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from 'firebase_setup/firebase';
import { useNavigate } from 'react-router-dom';
import Navigation from "./Navigation";
 
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
        <div className="container-fluid text-break">

            <Navigation topleft="logout" />   
            <h1>Welcome back, {currentUser.email}</h1>
            
            <div className="row row-cols-2">
                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/delivery" className="btn btn-outline-secondary">
                            Delivery
                        </a>
                        <h5 className="card-title">Delivery</h5>
                        <p className="card-text">Our Delivery Services include Groceries, Supplies, Takeout and Medication</p>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/nearby" className="btn btn-outline-secondary">
                            Nearby
                        </a>
                        <h5 className="card-title">Nearby</h5>
                        <p className="card-text">You can find Nearby Bus stops, medical, shopping, and rec centers </p>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/bookings" className="btn btn-outline-secondary">
                            Bookings
                        </a>
                        <h5 className="card-title">Bookings</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/contact" className="btn btn-outline-secondary">
                            Contacts
                        </a>
                        <h5 className="card-title">Contact</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>

            </div>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
 
export default PageHome;