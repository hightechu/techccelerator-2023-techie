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
            <h1 className='mt-3 mb-3'>Welcome back, {currentUser.email}</h1>
            
            <div className="row row-cols-2">
                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/delivery" className="btn btn-outline-secondary">
                            <span className="material-symbols-outlined">local_shipping</span>
                            <h5 className="card-title" title="Get Groceries, Supplies, Takeout, and Medication">Delivery</h5>
                        </a>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/nearby" className="btn btn-outline-secondary">
                            <span className="material-symbols-outlined">explore</span>
                            <h5 className="card-title" title="Find Nearby Bus Stops, Medical, Shopping, and Recreation">Nearby</h5>
                        </a>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/bookings" className="btn btn-outline-secondary">
                            <span className="material-symbols-outlined">book_online</span>
                            <h5 className="card-title" title="">Bookings</h5>
                        </a>
                    </div>
                </div>

                <div className="col mt-5">
                    <div className="card-body">
                        <a href="/contact" className="btn btn-outline-secondary">
                            <span className="material-symbols-outlined">contacts</span>
                            <h5 className="card-title" title="">Contact</h5>
                        </a>
                    </div>
                </div>

            </div>

            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
 
export default PageHome;