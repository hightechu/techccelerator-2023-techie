import React from 'react';

const PageDeliverySupplies = () => {

  return (

    <>

        <div className="card text-bg-dark mb-3">
            <img src="https://ecocart.io/wp-content/uploads/resized/2023/01/iStock-1371318211-1120x455-c-default.jpg" className="card-img" alt="stock grocery" />
            <h2 className="text-center">3. Supplies </h2>
        </div>

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Thrifty Foods</h5>
                        <p className="card-text">A not-so-local grocery store</p>
                        <p className="card-text"><small className="text-body-secondary">Some restrictions apply</small></p>
                        <button type="button" className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Fairway</h5>
                        <p className="card-text">Your local grocery store chain.</p>
                        <p className="card-text"><small className="text-body-secondary">Some restrictions apply.</small></p>
                        <button type="button" className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Walmart</h5>
                        <p className="card-text">International superstore chain</p>
                        <p className="card-text"><small className="text-body-secondary">Some restrictions apply.</small></p>
                        <button type="button" className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Save on Foods</h5>
                        <p className="card-text">Save on your next grocery bill</p>
                        <p className="card-text"><small className="text-body-secondary">Some restrictions apply.</small></p>
                        <button type="button" className="btn btn-secondary">Order</button>
                    </div>
                </div>
            </div>
        </div>

    </>
  );

};

export default PageDeliverySupplies;