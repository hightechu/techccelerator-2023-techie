import React from 'react';

const PageContact = () => {

  return (
    <div className="container-fluid">   

       <h1 className="text-center">Contacts</h1>

        <div className="vstack gap-2 col-md-5 mx-auto">

          <h2>1. Emergency Number</h2>
            <div   className="card mb-3">
                <div   className="row g-0">
                  <div   className="col-md-8">
                    <div   className="card-body">
                      <h5   className="card-title">911</h5>
                      <p   className="card-text">Fire, police, ambulance and Natural disasters</p>
                      <p   className="card-text"><small   className="text-body-secondary">Only for Emergencies. Some restrictions apply</small></p>
                    </div>
                  </div>
                </div>
              </div>

        </div>

    </div>
  );

};

export default PageContact;