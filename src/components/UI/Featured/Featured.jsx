import './Featured.css';
import { useState } from 'react';
import featured from '../../../assets/images/featured/img1.png';

import iconRight from '../../../assets/icons/icon-arrow-right.svg';
import iconLeft from '../../../assets/icons/icon-arrow-left.svg';

const Featured = (props) => {
  return (
    <div className="featured-container">
      <img src={featured} alt="" />
      <div className="featured-slideshow-controller">
        <img src={iconLeft} alt="" />
        <div className="dot"></div>
        <img src={iconRight} alt="" />
      </div>
    </div>
  );
};

export default Featured;
