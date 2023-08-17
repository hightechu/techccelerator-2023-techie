import React from 'react';

const PageBookings = () => {

  return (
    <div className="container-fluid">   

       <h1 className="text-center">Bookings</h1>

  <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Taxi/Rideshare </h2>
         <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Blue Bird Cab" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Blue Bird Cab</h5>
                  <p   className="card-text">Phone number: 250-XXX-XXXX</p>
                  <p   className="card-text"><small   className="text-body-secondary">Call for availability</small></p>
                  <button type="button"   className="btn btn-secondary">Learn more.</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Yellow Cab" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Yellow Cab</h5>
                  <p   className="card-text">Phone Number: 250-XXX-XXXX</p>
                  <p   className="card-text"><small   className="text-body-secondary">Call for availability.</small></p>
                  <button type="button"   className="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Uber Rideshare" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Uber</h5>
                  <p   className="card-text">Rideshare App</p>
                  <p   className="card-text"><small   className="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button"   className="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>


        </div>

    
  </div>
  );

};

export default PageBookings;