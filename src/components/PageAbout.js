import React from 'react';
import BackButtonWelcome from './BackButtonWelcome';

 const PageAbout = () => {

  return (
    <div className="container-fluid">
      <BackButtonWelcome />
      <h1 className="sticky-top text-center p-3 f-xxxl bg-body border-bottom">About</h1>
      <p className="text-center p-3">
        Techie is your all-in-one app with frequently-used local services at the touch of a button.
      </p>
      <a href="https://docs.google.com/presentation/d/e/2PACX-1vQQXQb9UAToikllz0B6Tp07sbRIECRAt3sKsunjim-kyNuM7xIpVL88O9Zt4n0BknA1qM6jGgGlrOpR/pub?start=false&loop=false&delayms=3000" className='btn btn-secondary'>Our pitch</a>
    </div>
  )

};
 
export default PageAbout;