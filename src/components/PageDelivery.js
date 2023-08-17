import React from 'react';

const PageDelivery = () => {

  return (
    <div className="container-fluid">   

       <h1>Delivery</h1>

    <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Groceries </h2>
         <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Thrifty foods" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Thrifty Foods</h5>
                  <p class="card-text">A not-so-local grocery store</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply</small></p>
                  <button type="button" class="btn btn-secondary" href="https://www.thriftyfoods.com/">Learn more.</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="fairway grocery store" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Fairway</h5>
                  <p class="card-text">Your local grocery store chain.</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button" class="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Walmart Superstore" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Walmart</h5>
                  <p class="card-text">International superstore chain</p>
                  <p class="card-text"><small class="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button" class="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="Save on Foods grocery" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Save on Foods</h5>
                  <p class="card-text">Save on your next grocery bill</p>
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

export default PageDelivery;