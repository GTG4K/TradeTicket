import './Slider.css';
import { useState } from 'react';

import SliderItem from './SliderItem/SliderItem';

import iconRight from '../../../assets/icons/icon-arrow-right.svg';
import iconLeft from '../../../assets/icons/icon-arrow-left.svg';

const Slider = (props) => {
  const [page, setPage] = useState(0);

  const previousPage = () => {
    page > 0 && setPage(page - 1);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="slider-container">
      <div className="slider-actions">
        <h2>{props.title}</h2>
        <div className="slider-nav">
          <h2>All</h2>
          <img onClick={previousPage} src={iconLeft} alt="left" />
          <img onClick={nextPage} src={iconRight} alt="right" />
        </div>
      </div>
      <div className="events" style={{ left: -page * 360 }}>
        {props.events.map((event) => (
          <SliderItem event={event} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
