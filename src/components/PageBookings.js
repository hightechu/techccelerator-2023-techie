import React from 'react';

const PageBookings = () => {

  return (
    <div className="container-fluid">   

       <h1>Bookings</h1>

  <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Taxi/Rideshare </h2>
         <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Blue Bird Cab" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Blue Bird Cab</h5>
                  <p class="card-text">Phone number: 250-XXX-XXXX</p>
                  <p class="card-text"><small class="text-body-secondary">Call for availability</small></p>
                  <button type="button" class="btn btn-secondary">Learn more.</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Yellow Cab" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Yellow Cab</h5>
                  <p class="card-text">Phone Number: 250-XXX-XXXX</p>
                  <p class="card-text"><small class="text-body-secondary">Call for availability.</small></p>
                  <button type="button" class="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Uber Rideshare" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Uber</h5>
                  <p class="card-text">Rideshare App</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button" class="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>


        </div>

    
  </div>
  );

};

export default PageBookings;