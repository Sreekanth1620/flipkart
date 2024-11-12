


import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

function Landingpage() {


  return (
    <div>
      <Navbar />
      <div className="bgimages"></div>
      
      <Products />
    </div>
  );
}

export default Landingpage;
