import React, { useState } from 'react';
import Navigation from "./Navigation";
import BottomNav from './BottomNav';
import PageNearbyBuses from './PageNearbyBuses';

const PageNearby = () => {

    const [currentPage, setCurrentPage] = useState(<PageNearbyBuses/>);

    const updateSubpageContent = (content) => {
        setCurrentPage(content);
    }

  return (
    <div className="container-fluid">   

      <Navigation />

      <h1 className="text-center mt-3">Nearby</h1>

      <div className="vstack gap-2 col-md-5 mx-auto">

        {currentPage}

      </div>

      <BottomNav page='nearby' updateSubpageContent={updateSubpageContent} />
    </div>
  );

};

export default PageNearby;