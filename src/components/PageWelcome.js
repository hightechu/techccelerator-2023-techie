import React from 'react';

 const PageWelcome = () => {

  return (
    <div className="container-fluid">   

       <h1 className="welcome-header">Welcome</h1>

      <div className="welcome-button-container">
        <a className="welcome-button login" href="/login">Log In</a>
        <a className="welcome-button signup" href="/signup">Sign Up</a>
      </div>

        <p className="welcome-text">Want to learn more?<a href="/about">About Us</a></p>

    </div>
  )

}
 
export default PageWelcome