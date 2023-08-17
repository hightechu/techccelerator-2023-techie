import React from 'react';
import Navigation from "./Navigation";
import Footer from "./Footer";

const PageBookings = () => {

  return (
    <div className="container-fluid">
      <Navigation />

       <h1 className="text-center mt-3">Bookings</h1>

  <div className="vstack gap-2 col-md-5 mx-auto">

      <div className="card text-bg-dark mb-3">
        <img src="https://www.bpmcdn.com/f/files/oakbay/import/2023-01/31511288_web1_220107-VNE-YellowCabTaxiSaver-taxi_1.jpg" class="card-img" alt="taxi" />
        <h2 className="text-center">1. Taxi/Rideshare </h2>
      </div>

         <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Blue Bird Cab</h5>
                  <p   className="card-text">Phone number: 250-XXX-XXXX</p>
                  <p   className="card-text"><small   className="text-body-secondary">Call for availability</small></p>
                  <button type="button"   className="btn btn-secondary">Book</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Yellow Cab</h5>
                  <p   className="card-text">Phone Number: 250-XXX-XXXX</p>
                  <p   className="card-text"><small   className="text-body-secondary">Call for availability.</small></p>
                  <button type="button"   className="btn btn-secondary">Book</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Uber</h5>
                  <p   className="card-text">Rideshare App</p>
                  <p   className="card-text"><small   className="text-body-secondary">Some restrictions apply.</small></p>
                  <button type="button"   className="btn btn-secondary">Book</button>
                </div>
              </div>
            </div>
          </div>


        </div>

    <Footer page='bookings' />
  </div>
  );

};

export default PageBookings;