import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageContact = () => {

  return (
    <div className="container-fluid">   

      <Navigation />

       <h1 className="text-center mt-3">Contacts</h1>

        <div className="vstack gap-2 col-md-5 mx-auto">

        <div className="card text-bg-dark mb-3">
          <img src="https://www.emergencyinfobc.gov.bc.ca/app/uploads/sites/5/2019/04/EmergencyInfoBC.png" class="card-img" alt="taxi" />
          <h2 className="text-center">1. Emergency Number</h2>
        </div>

            <div   className="card mb-3">
                <div   className="row g-0">
                  <div   className="col-md-8">
                    <div   className="card-body">
                      <h5   className="card-title">911</h5>
                      <p   className="card-text">Fire, police, ambulance and Natural disasters</p>
                      <p   className="card-text"><small   className="text-body-secondary">Only for Emergencies. Some restrictions apply</small></p>
                    </div>
                  </div>
                </div>
              </div>

        </div>

        <Footer page='contact' />
    </div>
  );

};

export default PageContact;