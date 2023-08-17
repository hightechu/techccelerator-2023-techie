import React from 'react';

const PageContact = () => {

  return (
    <div className="container-fluid">   

       <h1 className="">Contacts</h1>

        <div className="vstack gap-2 col-md-5 mx-auto">

          <h2>1. Emergency Number</h2>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="Blue Bird Cab picture" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">911</h5>
                      <p class="card-text">Fire, police, ambulance and Natural disasters</p>
                      <p class="card-text"><small class="text-body-secondary">Only for Emergencies. Some restrictions apply</small></p>
                    </div>
                  </div>
                </div>
              </div>

        </div>

    </div>
  );

};

export default PageContact;