import React from 'react';

const PageWelcome = () => {

  return (
    <div className="container-fluid">   

      <img className="" alt="Logo" src="" />
      <h1 className="text-center f-xxxl mb-3">Welcome</h1>

      <div className="vstack gap-3 col-md-5 mx-auto">
        <a className="btn btn-lg btn-secondary welcome-button login" href="/login">Log In</a>
        <a className="btn btn-lg btn-outline-secondary welcome-button signup" href="/signup">Sign Up</a>
      </div>

      <p className="text-center mt-3">Want to learn more? <a href="/about">About Us</a></p>

    </div>
  );

};

export default PageWelcome;