import React, { useState } from 'react';
import Navigation from "./Navigation";
import BottomNav from "./BottomNav";
import PageDeliveryGroceries from './PageDeliveryGroceries';

const PageDelivery = () => {

  const [currentPage, setCurrentPage] = useState(<PageDeliveryGroceries />);

  const updateSubpageContent = (content) => {
    setCurrentPage(content);
  }

  return (
    <div className="container-fluid">   

      <Navigation />

      <h1 className="text-center mt-3">Delivery</h1>
      <div className="vstack gap-2 col-md-5 mx-auto" id="subpage-holder">
        {currentPage}
      </div>

      <BottomNav page='delivery' updateSubpageContent={updateSubpageContent} />
    </div>
  );

};

export default PageDelivery;