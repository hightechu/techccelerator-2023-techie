import React from 'react';

const PageDelivery = () => {

  return (
    <div className="container-fluid">   

     
      
      <h1 className="text-center">Delivery</h1>

    <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Groceries </h2>

      <div class="card text-bg-dark">
        <img src="https://ecocart.io/wp-content/uploads/resized/2023/01/iStock-1371318211-1120x455-c-default.jpg" class="card-img" alt="stock grocery" />
        <div class="card-img-overlay">
          <h2 class="text-center card-title">1. Groceries</h2>
        </div>
      </div>



         <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Thrifty foods" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Thrifty Foods</h5>
                  <p   className="card-text">A not-so-local grocery store</p>
                  <p   className="card-text"><small   className="text-body-secondary">Some restrictions Apply</small></p>
                  <button type="button"   className="btn btn-secondary" href="https://www.thriftyfoods.com/">Learn more.</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="fairway grocery store" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Fairway</h5>
                  <p   className="card-text">Your local grocery store chain.</p>
                  <p   className="card-text"><small   className="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button"   className="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Walmart Superstore" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Walmart</h5>
                  <p   className="card-text">International superstore chain</p>
                  <p   className="card-text"><small   className="text-body-secondary">Some restrictions Apply.</small></p>
                  <button type="button"   className="btn btn-secondary">Learn more</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-4">
                <img src="..."   className="img-fluid rounded-start" alt="Save on Foods grocery" />
              </div>
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">Save on Foods</h5>
                  <p   className="card-text">Save on your next grocery bill</p>
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

export default PageDelivery;