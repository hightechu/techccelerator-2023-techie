import React from 'react';

const PageDelivery = () => {

  return (
    <div className="container-fluid">   

       <h1>Delivery</h1>

        <div className="vstack gap-2 col-md-5 mx-auto">

         <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Groceries picture" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Thrifty Foods</h5>
                  <p class="card-text">Get your Groceries from Th</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Takeout picture" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Takeout</h5>
                  <p class="card-text">Get your next meal from your favourite restaurant without leaving your home.</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Supplies picture" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Supplies</h5>
                  <p class="card-text">Get your home items, hygiene products, stationary and more without leaving your home.</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="medication picture" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Medication</h5>
                  <p class="card-text">Get your prescriptions, on-the-counter medications and more without leaving your home.</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                </div>
              </div>
            </div>
          </div>

        </div>

    </div>
  );

};

export default PageDelivery;