import React from 'react';

const PageNearby = () => {

  return (
    <div className="container-fluid">   

       <h1 className="">Nearby</h1>

    <div className="vstack gap-2 col-md-5 mx-auto">
      <h2>1. Nearby Bus Routes</h2>
         <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="39 bus route" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">39. Interurban/ Westhills exchange</h5>
                  <p class="card-text">Nearby Stop: Uvic exchange</p>
                  <p class="card-text"><small class="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button" class="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="26 bus route" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">26. Uptown/Dockyard</h5>
                  <p class="card-text">Nearby Stop: Uvic exchange</p>
                  <p class="card-text"><small class="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button" class="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="4 bus route" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">4. Downtown Via Hillside</h5>
                  <p class="card-text">Nearby Stop: Uvic exchange</p>
                  <p class="card-text"><small class="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button" class="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="..." class="img-fluid rounded-start" alt="12 bus route" />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">12. University Heights Via Kenmore</h5>
                  <p class="card-text">Nearby Stop: Uvic exchange</p>
                  <p class="card-text"><small class="text-body-secondary">Check NextRide for Bus times</small></p>
                  <button type="button" class="btn btn-secondary" href="https://nextride.victoria.bctransit.com/">NextRide</button>
                </div>
              </div>
            </div>
          </div>

          

        </div>

    </div>
  );

};

export default PageNearby;