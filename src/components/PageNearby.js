import React from 'react';

const PageNearby = () => {

  return (
    <div className="container-fluid">   

       <h1 className="text-center">Nearby</h1>

    <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Nearby Bus Routes</h2>
         <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">39. Interurban/ Westhills exchange</h5>
                  <p   className="card-text">Nearby Stop: Uvic exchange</p>
                  <p   className="card-text"><small   className="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button"   className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">26. Uptown/Dockyard</h5>
                  <p   className="card-text">Nearby Stop: Uvic exchange</p>
                  <p   className="card-text"><small   className="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button"   className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">4. Downtown Via Hillside</h5>
                  <p   className="card-text">Nearby Stop: Uvic exchange</p>
                  <p   className="card-text"><small   className="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button"   className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">12. University Heights Via Kenmore</h5>
                  <p   className="card-text">Nearby Stop: Uvic exchange</p>
                  <p   className="card-text"><small   className="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button"   className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          

        </div>

    </div>
  );

};

export default PageNearby;