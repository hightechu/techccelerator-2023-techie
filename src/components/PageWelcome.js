import React from 'react';

const PageWelcome = () => {

  return (
    <div className="container-fluid">   

       <h1 className="text-center welcome-header">Welcome</h1>

      <div className="vstack gap-2 col-md-5 mx-auto welcome-button-container">
        <a className="btn btn-secondary welcome-button login" href="/login">Log In</a>
        <a className="btn btn-outline-secondary welcome-button signup" href="/signup">Sign Up</a>
      </div>

        <p className="text-center welcome-text">Want to learn more? <a href="/about">About Us</a></p>

    </div>
  );

};

export default PageWelcome;