import React from 'react';
import Navigation from "./Navigation";

const PageNearby = () => {

  return (
    <div className="container-fluid">   

    <Navigation />

       <h1 className="text-center">Nearby</h1>

    <div className="vstack gap-2 col-md-5 mx-auto">
      
      <div className="card text-bg-dark">
        <img src="https://www.bpmcdn.com/f/files/saanich/import/2022-05/29024445_web1_220114-VNE-Transit-cancellations-bus_1.jpg" class="card-img" alt="bc transit" />
        <h2 className="text-center">1. Nearby Bus Routes</h2>
      </div>


         <div   className="card mb-3">
            <div   className="row g-0">
              <div   className="col-md-8">
                <div   className="card-body">
                  <h5   className="card-title">39. Interurban/ Westhills exchange</h5>
                  <p   className="card-text">Nearby Stop: Uvic exchange</p>
                  <p   className="card-text"><small   className="text-body-secondary">Check NextRide for Bus times</small></p>
                  <a  className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</a>
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
                  <a className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</a>
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
                  <a className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</a>
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
                  <a className="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</a>
                </div>
              </div>
            </div>
          </div>

          

        </div>

    </div>
  );

};

export default PageNearby;