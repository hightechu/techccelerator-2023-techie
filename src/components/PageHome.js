import React, { useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
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
 
    return (
        <div className="container-fluid text-break">

            <Navigation topleft="logout" className="mb-3"/>   
            <h1 className='mt-3 mb-3'>Welcome back, {currentUser.email}</h1>
            
            <div className='d-flex flex-column vh-60 justify-content-center'>
                <div className="d-flex flex-row justify-content-center">
                    
                    <a href="/delivery" className="btn btn-outline-secondary m-2 vh-15 nice-green">
                        <span className="material-symbols-outlined">local_shipping</span>
                        <h5 className="card-title">Delivery</h5>
                        <p>Get Groceries, Supplies, Takeout, or Medication</p>
                    </a>
                    <a href="/nearby" className="btn btn-outline-secondary m-2 vh-15 nice-pink">
                        <span className="material-symbols-outlined">explore</span>
                        <h5 className="card-title">Nearby</h5>
                        <p>Find Buses, Medical, Shopping, or Recreation</p>
                    </a>
                    
                </div>
                <div className='d-flex flex-row justify-content-center'>
                    
                    <a href="/bookings" className="btn btn-outline-secondary m-2 vh-15 nice-cyan">
                        <span className="material-symbols-outlined">book_online</span>
                        <h5 className="card-title" title="">Bookings</h5>
                        <p>Book Taxis, </p>
                    </a>
                    <a href="/contact" className="btn btn-outline-secondary m-2 vh-15 nice-orange">
                        <span className="material-symbols-outlined">contacts</span>
                        <h5 className="card-title" title="">Contact</h5>
                        <p></p>
                    </a>

                </div>
            </div>

        </div>
    )
}

// row row-cols-2 mt-5

export default PageHome;