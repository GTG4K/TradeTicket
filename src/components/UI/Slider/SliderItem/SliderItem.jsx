import './SliderItem.css';
import { Link } from 'react-router-dom';

const SliderItem = (props) => {
  return (
    <Link to={`/concerts/${props.event.route}`}>
      <div className="event">
        <img src={props.event.img} alt="" />
        <div className="overlay-date">
          <h3>{props.event.day}</h3>
          <h3>{props.event.month}</h3>
        </div>
        <div className="overlay-price">
          <h4>From/</h4>
          <h3>${props.event.price}</h3>
        </div>
        <div className="event-details">
          <h3>{props.event.title}</h3>
          <h4 className="location">{props.event.location}</h4>
          <h4 className="date">{props.event.time}</h4>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
